import { ReactNode } from 'react';

interface ProtectedPagesLayoutProps {
  children: ReactNode;
}

const ProtectedPagesLayout = (props: ProtectedPagesLayoutProps) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedPagesLayout;
