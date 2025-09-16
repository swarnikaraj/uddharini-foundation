// app/api/gallery/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";

const BUCKET_NAME = process.env.GCLOUD_BUCKET || "uddharini";

/**
 * Initialize the Storage client from either:
 * - GOOGLE_APPLICATION_CREDENTIALS_JSON (raw JSON string)
 * - GOOGLE_APPLICATION_CREDENTIALS_BASE64 (base64 encoded JSON)
 * - fallback to ADC (no args) if not provided (useful in some infra)
 */
function getStorageClient() {
  const jsonEnv = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  const b64Env = process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64;

  if (jsonEnv || b64Env) {
    try {
      const raw = jsonEnv
        ? jsonEnv
        : Buffer.from(b64Env, "base64").toString("utf8");
      const credentials = JSON.parse(raw);

      // credentials should be the service account JSON object
      return new Storage({
        projectId: credentials.project_id,
        credentials,
      });
    } catch (err) {
      console.error("Failed to parse GCP credentials from env var:", err);
      // throw so we can return an error from the route instead of silently failing
      throw new Error("Invalid GCP credentials environment variable");
    }
  }

  // No custom credentials provided: rely on Application Default Credentials
  // (e.g., if running in GCP with appropriate service account)
  return new Storage();
}

let storage;
try {
  storage = getStorageClient();
} catch (err) {
  // keep storage undefined so GET can return a helpful error
  storage = null;
}
const bucket = storage ? storage.bucket(BUCKET_NAME) : null;

export async function GET(req) {
  if (!bucket) {
    console.error("GCP Storage not configured: missing/invalid credentials.");
    return NextResponse.json(
      {
        error:
          "GCP Storage not configured. Check credentials environment variables.",
      },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 8;

  try {
    // Fetch all files from GCP bucket
    const [files] = await bucket.getFiles();

    // Filter images/videos (basic check by extension)
    const supportedExts = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".mp4",
      ".mov",
      ".webm",
    ];
    const items = files
      .filter((file) =>
        supportedExts.some((ext) => file.name.toLowerCase().endsWith(ext))
      )
      .map((file, index) => {
        const ext = file.name.split(".").pop().toLowerCase();
        const type = ["mp4", "mov", "webm"].includes(ext) ? "video" : "image";

        return {
          id: index + 1,
          type,
          title: file.name,
          // If your bucket is public, this URL works. If the bucket is private, you must generate signed URLs.
          url: `https://storage.googleapis.com/${BUCKET_NAME}/${encodeURIComponent(
            file.name
          )}`,
        };
      });

    // Pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedItems = items.slice(start, end);

    return NextResponse.json({
      items: paginatedItems,
      totalItems: items.length,
      totalPages: Math.ceil(items.length / limit),
    });
  } catch (err) {
    console.error("Error fetching GCP files:", err);
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}
