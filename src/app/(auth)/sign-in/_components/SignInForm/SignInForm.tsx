'use client';

import useAuth from '@/hooks/useAuth.hook';

const SignInForm = () => {
  const { signIn } = useAuth();

  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignInForm;
