import type { Handler } from '@netlify/functions'

const PUBLIC_SITE_DOMAIN = process.env.PUBLIC_SITE_DOMAIN as string

if (!PUBLIC_SITE_DOMAIN) {
  throw new Error('PUBLIC_SITE_DOMAIN is required')
}
// Add allowed origins - modify these to match your domains
const ALLOWED_ORIGINS = [
  'http://localhost:4321', // Local development
  `${PUBLIC_SITE_DOMAIN}`, // Production
  `${PUBLIC_SITE_DOMAIN.replace('https://www', 'https://')}`, // Production without www
]

export const handler: Handler = async (event) => {
  console.log('Received request with headers:', JSON.stringify(event.headers))
  console.log('Origin:', event.headers.origin)
  console.log('Referer:', event.headers.referer)

  // Get the request origin
  const origin = event.headers.origin || event.headers.referer || ''

  // Check if the origin is allowed
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return {
      statusCode: 403,
      body: 'Origin not allowed',
    }
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    }
  }

  const url = event.queryStringParameters?.url

  if (!url) {
    return {
      statusCode: 400,
      body: 'URL parameter is required',
    }
  }

  try {
    const response = await fetch(decodeURIComponent(url))
    const body = await response.text()

    return {
      statusCode: 200,
      headers: {
        'Content-Type': response.headers.get('content-type') || 'text/plain',
        // Set the specific origin that made the request
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        // Add this if you need to include credentials
        'Access-Control-Allow-Credentials': 'true',
      },
      body,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Proxy Error: ' + (error as Error).message,
    }
  }
}
