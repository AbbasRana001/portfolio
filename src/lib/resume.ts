import { readFile } from "node:fs/promises";
import path from "node:path";
import { profile } from "@/content/profile";

/** Reads the one canonical, local resume asset configured in profile content. */
export async function readResumePdf() {
  const publicPath = profile.resumeUrl?.startsWith("/") ? profile.resumeUrl.slice(1) : null;
  if (!publicPath) return null;

  return readFile(path.join(process.cwd(), "public", publicPath));
}
