'use client';
import Link from 'next/link';
import { Box, Button } from '@mui/material';

import useAuth from '@/hooks/useAuth.hook';

const Header = () => {
  const { signOut, user } = useAuth();

  return (
    <Box
      sx={(theme) => ({
        gap: 3,
        display: 'flex',
        padding: theme.spacing(1, 3),
        minHeight: theme.spacing(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: theme.shadows[9],
        bgcolor: 'grey.50',
      })}
    >
      <Box display="flex" gap={3}>
        <Link href="/">Home Page</Link>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/dashboard">Dashboard</Link>
      </Box>

      <Box display="flex" alignItems="center" gap={3}>
        {user && (
          <>
            <div>{user.displayName}</div>

            <Button variant="outlined" size="small" onClick={signOut}>
              Log Out
            </Button>
          </>
        )}

        {!user && (
          <div>Guest</div>
        )}
      </Box>
    </Box>
  );
};

export default Header;
