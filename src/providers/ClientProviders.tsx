import { ReactNode } from 'react';

import ThemeProvider from './ThemeProvider';
import FirebaseProvider from './FirebaseProvider';

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders = (props: ClientProvidersProps) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <FirebaseProvider>
        {children}
      </FirebaseProvider>
    </ThemeProvider>
  );
};

export default ClientProviders;
