import { ReactNode } from 'react';

interface ServerProvidersProps {
  children: ReactNode;
}

const ServerProviders = (props: ServerProvidersProps) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
};

export default ServerProviders;
