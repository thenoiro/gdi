import { ReactNode } from 'react';

import FirebaseProvider from './FirebaseProvider';

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders = (props: ClientProvidersProps) => {
  const { children } = props;

  return (
    <FirebaseProvider>
      {children}
    </FirebaseProvider>
  );
};

export default ClientProviders;
