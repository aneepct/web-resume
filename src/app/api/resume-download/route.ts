const RESUME_URL = 'https://object.aneep.tech/public/Aneep_Tandel_Resume.pdf'
const DOWNLOAD_NAME = 'Aneep_Tandel_Resume.pdf'

export async function GET() {
  try {
    const upstreamResponse = await fetch(RESUME_URL, { cache: 'no-store' })

    if (!upstreamResponse.ok || !upstreamResponse.body) {
      return new Response('Resume is temporarily unavailable.', { status: 502 })
    }

    return new Response(upstreamResponse.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${DOWNLOAD_NAME}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return new Response('Resume is temporarily unavailable.', { status: 502 })
  }
}
