import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'

export const alt = 'Inbox Transaction Viewer Blog - Tips and Insights'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          color: '#111',
          fontFamily: 'Inter, system-ui, sans-serif',
          backgroundImage: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)',
          padding: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 24 }}
          >
            <path
              d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.07989 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8V7.2Z"
              stroke="#0C8AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 9H21"
              stroke="#0C8AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15"
              stroke="#0C8AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 16L15 15M10 16L9 15"
              stroke="#0C8AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            Inbox Transaction Viewer
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 900,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Blog: Tips & Insights
          </h1>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#4B5563',
            }}
          >
            Learn how to maximize your Stripe customer management
          </h2>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0C8AFF',
              color: 'white',
              padding: '10px 20px',
              borderRadius: 8,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Read the Blog &rarr;
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 