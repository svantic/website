/**
 * Serves CLI binaries.
 * 
 * For now, redirects to a storage URL. You can either:
 * 1. Upload binaries to website/public/cli/v0.1.0/svantic-darwin-arm64 etc.
 * 2. Use S3/R2 and update STORAGE_BASE_URL
 * 
 * Expected paths:
 *   /cli/v0.1.0/svantic-darwin-arm64
 *   /cli/v0.1.0/svantic-darwin-x64
 *   /cli/v0.1.0/svantic-linux-x64
 *   /cli/v0.1.0/svantic-linux-arm64
 *   /cli/v0.1.0/svantic-win-x64.exe
 */

import { NextRequest } from 'next/server';

// Change this to your S3/R2 bucket URL when ready
// For local: binaries served from public/cli/
const STORAGE_BASE_URL = process.env.CLI_STORAGE_URL || null;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const file_path = path.join('/');
  
  // If using external storage, redirect there
  if (STORAGE_BASE_URL) {
    return Response.redirect(`${STORAGE_BASE_URL}/${file_path}`, 302);
  }
  
  // Otherwise, try to serve from public folder via rewrite
  // Files should be in: public/cli/v0.1.0/svantic-darwin-arm64
  const public_url = new URL(`/cli-binaries/${file_path}`, request.url);
  
  return Response.redirect(public_url.toString(), 302);
}
