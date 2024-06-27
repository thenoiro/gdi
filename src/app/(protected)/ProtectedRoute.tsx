'use client';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useAuth from '@/hooks/useAuth.hook';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  }, [router, user]);

  return children;
};

export default ProtectedRoute;
