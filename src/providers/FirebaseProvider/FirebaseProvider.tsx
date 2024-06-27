import { ReactNode } from 'react';

interface FirebaseProviderProps {
  children: ReactNode;
}

const FirebaseProvider = (props: FirebaseProviderProps) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
};

export default FirebaseProvider;
