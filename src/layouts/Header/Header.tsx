'use client';
import Link from 'next/link';

import useAuth from '@/hooks/useAuth.hook';

const Header = () => {
  const { signOut, user } = useAuth();

  return (
    <div
      style={{
        gap: '24px',
        display: 'flex',
        padding: '8px 16px',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid silver',
      }}
    >
      <div
        style={{
          gap: '24px',
          display: 'flex',
        }}
      >
        <Link href="/">Home Page</Link>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>

      <div
        style={{
          gap: '24px',
          display: 'flex',
        }}
      >
        {user && (
          <>
            <div>{user.displayName}</div>
            <button onClick={signOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
