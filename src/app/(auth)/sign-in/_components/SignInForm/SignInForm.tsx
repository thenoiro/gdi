'use client';
import { Box, Button, Card, TextField, Typography } from '@mui/material';

import useAuth from '@/hooks/useAuth.hook';

const SignInForm = () => {
  const { signIn } = useAuth();

  return (
    <Box width={1} display="flex" justifyContent="center" pt={10}>
      <Card
        elevation={2}
        sx={{
          p: 3,
          minWidth: 500,
          bgcolor: 'grey.50',
        }}
      >
        <Typography variant="subtitle2" textAlign="center">
          Sign In Form
        </Typography>

        <Typography
          variant="caption"
          color="grey.500"
          sx={{
            mt: 4,
            display: 'inline-flex',
          }}
        >
          Under development
        </Typography>

        <Box
          mt={1}
          display="flex"
          gap={2}
          sx={{ opacity: 0.5 }}
        >
          <TextField
            label="Email"
            disabled
            size="small"
            fullWidth
          />
          <TextField
            label="Password"
            disabled
            size="small"
            fullWidth
          />
        </Box>

        <Box mt={4}>
          <Button variant="contained" fullWidth onClick={signIn}>
            Sign In with Google
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default SignInForm;
