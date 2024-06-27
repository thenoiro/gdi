import { ReactNode } from 'react';

import ServerProviders from './ServerProviders';
import ClientProviders from './ClientProviders';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <ServerProviders>
      <ClientProviders>
        {children}
      </ClientProviders>
    </ServerProviders>
  );
};

export default Providers;
