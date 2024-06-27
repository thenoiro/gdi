import type { Metadata } from 'next';
import { Box } from '@mui/material';

import Providers from '@/providers';
import Header from '@/layouts/Header';

export const metadata: Metadata = {
  title: 'GDI',
  description: 'Google Drive Integration',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            height="100dvh"
            minHeight="100dvh"
            overflow="hidden"
          >
            <Header />

            <Box height={1} p={3}>
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
