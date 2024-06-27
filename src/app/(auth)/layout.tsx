import { ReactNode } from 'react';

import AuthRoute from './AuthRoute';

interface AuthPagesLayoutProps {
  children: ReactNode;
}

const AuthPagesLayout = (props: AuthPagesLayoutProps) => {
  const { children } = props;

  return (
    <AuthRoute>
      {children}
    </AuthRoute>
  );
};

export default AuthPagesLayout;
