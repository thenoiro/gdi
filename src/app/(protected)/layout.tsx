import { ReactNode } from 'react';

import ProtectedRoute from './ProtectedRoute';

interface ProtectedPagesLayoutProps {
  children: ReactNode;
}

const ProtectedPagesLayout = (props: ProtectedPagesLayoutProps) => {
  const { children } = props;

  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
};

export default ProtectedPagesLayout;
