// app/api/gallery/route.js
import { NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  keyFilename: "./service-account-key.json",
});
const bucket = storage.bucket("uddharini");

export async function GET(req) {
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
          url: `https://storage.googleapis.com/uddharini/${file.name}`,
        };
      });

    // Pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedItems = items.slice(start, end);

    return NextResponse.json({
      items: paginatedItems,
      totalItems: items?.length,
      totalPages: Math.ceil(items?.length / limit),
    });
  } catch (err) {
    console.error("Error fetching GCP files:", err);
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}
