'use client';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useAuth from '@/hooks/useAuth.hook';

interface AuthRouteProps {
  children: ReactNode;
}

const AuthRoute = (props: AuthRouteProps) => {
  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [router, user]);

  return children;
};

export default AuthRoute;
