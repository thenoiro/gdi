import { ReactNode } from 'react';

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders = (props: ClientProvidersProps) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
};

export default ClientProviders;
