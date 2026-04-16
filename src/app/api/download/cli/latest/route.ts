const BFF_INTERNAL_URL = process.env.BFF_INTERNAL_URL || 'http://bff.railway.internal:7003';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const response = await fetch(`${BFF_INTERNAL_URL}/api/download/cli/latest`, {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Failed to fetch latest version' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return Response.json(
      { error: 'Service unavailable' },
      { status: 503 }
    );
  }
}
