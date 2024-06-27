import type { Metadata } from 'next';
import Link from 'next/link';

import Providers from '@/providers';

export const metadata: Metadata = {
  title: 'GDI',
  description: 'Google Drive Integration',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>
        <Providers>
          <div
            style={{
              gap: '24px',
              display: 'flex',
              padding: '8px 16px',
              borderBottom: '1px solid silver',
            }}
          >
            <Link href="/">Home Page</Link>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>

          <div style={{ padding: '24px' }}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
