import { NextRequest, NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";

// Initialize Google Cloud Storage
const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_CLOUD_KEY_FILE, // Path to service account key
  // Or use credentials directly:
  // credentials: {
  //   client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
  //   private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  // },
});

const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME;
const bucket = storage.bucket(bucketName);

// Supported file types
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
const videoExtensions = [".mp4", ".mov", ".avi", ".webm"];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const category = searchParams.get("category"); // Optional filter

    // Calculate pagination
    const offset = (page - 1) * limit;

    // List files from GCP bucket
    const [files] = await bucket.getFiles({
      prefix: "gallery/", // Assuming files are in a 'gallery' folder
      maxResults: 1000, // Get more files to handle pagination locally
    });

    // Filter and process files
    const processedFiles = files
      .filter((file) => {
        const fileName = file.name.toLowerCase();
        const isMedia = [...imageExtensions, ...videoExtensions].some((ext) =>
          fileName.endsWith(ext)
        );

        // Filter by category if provided
        if (category && !fileName.includes(category.toLowerCase())) {
          return false;
        }

        return isMedia;
      })
      .map((file) => {
        const fileName = file.name.toLowerCase();
        const isVideo = videoExtensions.some((ext) => fileName.endsWith(ext));

        // Extract metadata from filename or use defaults
        // Expected format: gallery/category_title_author_age_width_height.ext
        const parts = file.name.split("/").pop().split("_");

        return {
          id: file.name,
          type: isVideo ? "video" : "image",
          url: `https://storage.googleapis.com/${bucketName}/${file.name}`,
          publicUrl: file.publicUrl(),
          title: parts[1] || "Untitled",
          author: parts[2] || "Anonymous",
          age: parts[3] || "12",
          width: parseInt(parts[4]) || 300,
          height: parseInt(parts[5]?.split(".")[0]) || 400,
          challenge: parts[0] || "General",
          likes: Math.floor(Math.random() * 50) + 10, // Random for demo
          comments: Math.floor(Math.random() * 20) + 1, // Random for demo
          createdAt: file.metadata.timeCreated,
          size: file.metadata.size,
        };
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by newest first

    // Apply pagination
    const totalItems = processedFiles.length;
    const totalPages = Math.ceil(totalItems / limit);
    const paginatedFiles = processedFiles.slice(offset, offset + limit);

    // Return response
    return NextResponse.json({
      success: true,
      items: paginatedFiles,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Gallery API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch gallery items",
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// POST endpoint for uploading new files
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const title = formData.get("title");
    const author = formData.get("author");
    const age = formData.get("age");
    const challenge = formData.get("challenge");
    const width = formData.get("width") || "300";
    const height = formData.get("height") || "400";

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400 }
      );
    }

    // Generate filename with metadata
    const timestamp = Date.now();
    const fileExtension = file.name.split(".").pop();
    const fileName = `gallery/${challenge}_${title}_${author}_${age}_${width}_${height}_${timestamp}.${fileExtension}`;

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to GCP bucket
    const gcpFile = bucket.file(fileName);
    await gcpFile.save(buffer, {
      metadata: {
        contentType: file.type,
        metadata: {
          title,
          author,
          age,
          challenge,
          uploadedAt: new Date().toISOString(),
        },
      },
    });

    // Make file publicly accessible (optional)
    await gcpFile.makePublic();

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      file: {
        name: fileName,
        url: `https://storage.googleapis.com/${bucketName}/${fileName}`,
        publicUrl: gcpFile.publicUrl(),
      },
    });
  } catch (error) {
    console.error("Upload Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to upload file",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
