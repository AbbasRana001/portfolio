import { NextResponse } from "next/server";
import { readResumePdf } from "@/lib/resume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Supplies the canonical resume as JSON so the in-site viewer never requests a .pdf URL. */
export async function GET() {
  try {
    const source = await readResumePdf();
    if (!source) return NextResponse.json({ error: "Resume unavailable" }, { status: 404 });
    return NextResponse.json(
      { data: source.toString("base64") },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ error: "Resume unavailable" }, { status: 404 });
  }
}
