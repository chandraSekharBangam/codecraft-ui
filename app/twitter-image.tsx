import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 76,
          background: '#ffffff',
          color: '#05070d',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ color: '#2567e6', fontSize: 32, fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 20, maxWidth: 880, fontSize: 74, lineHeight: 1.03, fontWeight: 800 }}>
          Design systems for production frontends.
        </div>
        <div style={{ marginTop: 30, display: 'flex', gap: 16, color: '#05070d', fontSize: 26, fontWeight: 700 }}>
          <span>Next.js</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    ),
    size,
  );
}
