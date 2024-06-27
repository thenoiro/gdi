import { ReactNode } from 'react';

interface AuthPagesLayoutProps {
  children: ReactNode;
}

const AuthPagesLayout = (props: AuthPagesLayoutProps) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
};

export default AuthPagesLayout;
