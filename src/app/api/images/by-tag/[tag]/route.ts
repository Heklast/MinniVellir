// app/api/images/by-tag/[tag]/route.ts
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ tag: string }> } // 👈 match RouteContext
) {
  try {
    const { tag } = await params; // 👈 works whether it's a Promise or a plain object
    const decoded = decodeURIComponent(tag);

    const result = await cloudinary.api.resources_by_tag(decoded, {
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

    return NextResponse.json({ resources });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Cloudinary error" },
      { status: 500 }
    );
  }
}