import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'de-learn-de - Learn German with love';
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2a2a2a',
          fontFamily: 'system-ui',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%)',
          }}
        />
        
        {/* German flag accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #000 0%, #d94e4e 33%, #f2c94c 66%, #000 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            padding: '40px',
          }}
        >
          {/* Flag icon */}
          <div
            style={{
              fontSize: '80px',
              marginBottom: '20px',
            }}
          >
            🇩🇪
          </div>

          {/* App name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-2px',
              textAlign: 'center',
            }}
          >
            de-learn-de
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '28px',
              color: '#f2c94c',
              margin: '16px 0 0 0',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Learn German with love 💕
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '18px',
              color: '#888888',
              margin: '24px 0 0 0',
              textAlign: 'center',
            }}
          >
            14-day A1 German Course • Interactive Quiz • Mobile First
          </p>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#d94e4e',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
