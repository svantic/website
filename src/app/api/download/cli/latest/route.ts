const BFF_INTERNAL_URL = process.env.BFF_INTERNAL_URL || 'http://bff.railway.internal:3000';

export async function GET() {
  try {
    const response = await fetch(`${BFF_INTERNAL_URL}/api/download/cli/latest`, {
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Failed to fetch latest version' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return Response.json(
      { error: 'Service unavailable' },
      { status: 503 }
    );
  }
}
