const BFF_INTERNAL_URL = process.env.BFF_INTERNAL_URL || 'http://bff.railway.internal:3000';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ version: string; platform: string }> }
) {
  const { version, platform } = await params;

  try {
    const response = await fetch(
      `${BFF_INTERNAL_URL}/api/download/cli/${version}/${platform}`,
      { headers: { 'Accept': 'application/octet-stream' } }
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Binary not found' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const filename = platform.startsWith('win-') 
      ? `svantic-${platform}.exe` 
      : `svantic-${platform}`;

    return new Response(response.body, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error downloading binary:', error);
    return new Response(
      JSON.stringify({ error: 'Service unavailable' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
