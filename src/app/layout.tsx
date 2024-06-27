import type { Metadata } from 'next';
import Link from 'next/link';

import Providers from '@/providers';
import Header from '@/layouts/Header';

export const metadata: Metadata = {
  title: 'GDI',
  description: 'Google Drive Integration',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>
        <Providers>
          <Header />

          <div style={{ padding: '24px' }}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
