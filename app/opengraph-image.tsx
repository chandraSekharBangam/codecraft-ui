import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#05070d',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: 16, background: '#20c8f3' }} />
          <div style={{ width: 72, height: 72, borderRadius: 16, background: '#ffc946' }} />
          <div style={{ width: 72, height: 72, borderRadius: 16, background: '#ff6b4a' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#ffc946', fontSize: 30, fontWeight: 700 }}>CodeCraft UI</div>
          <div style={{ marginTop: 18, maxWidth: 880, fontSize: 76, lineHeight: 1.02, fontWeight: 800 }}>
            Premium Next.js interface systems
          </div>
          <div style={{ marginTop: 28, maxWidth: 860, color: '#c7cfda', fontSize: 30, lineHeight: 1.35 }}>
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
