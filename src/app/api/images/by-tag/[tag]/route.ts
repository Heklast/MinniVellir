import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET(
  _req: Request,
  { params }: { params: { tag: string } }
) {
  try {
    const tag = decodeURIComponent(params.tag);
    console.log("[Cloudinary] Fetching images by tag:", tag);

    const result = await cloudinary.api.resources_by_tag(tag, {
      max_results: 100,
    });

    const resources = (result.resources ?? []).map((r: any) => ({
      public_id: r.public_id,
      secure_url: r.secure_url,
      width: r.width,
      height: r.height,
      format: r.format,
      tags: r.tags,
    }));

    console.log(`[Cloudinary] Found ${resources.length} images for tag ${tag}`);

    return NextResponse.json({ resources });
  } catch (err: any) {
    console.error("[Cloudinary error]", err);
    return NextResponse.json(
      { error: err?.message ?? "Cloudinary error" },
      { status: 500 }
    );
  }
}