/**
 * Returns the latest CLI version.
 * Update this when releasing a new version.
 */

const LATEST_VERSION = '0.1.0';

export async function GET() {
  return new Response(LATEST_VERSION, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=60',
    },
  });
}
