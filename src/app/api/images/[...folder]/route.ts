import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// You can also use CLOUDINARY_URL instead of explicit config
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
    const result = await cloudinary.api.resources_by_tag(tag, { max_results: 100 });
    const resources = (result.resources ?? []).map((r: any) => ({
      public_id: r.public_id,
      secure_url: r.secure_url,
      width: r.width,
      height: r.height,
      format: r.format,
    }));
    return NextResponse.json({ resources });
  } catch (err: any) {
    console.error("[by-tag] error:", err);
    return NextResponse.json({ error: err?.message ?? "Cloudinary error" }, { status: 500 });
  }
}