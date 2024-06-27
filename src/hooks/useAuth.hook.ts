import { useContext } from 'react'

import { FirebaseContext } from '@/providers/FirebaseProvider'

const useAuth = () => {
  return useContext(FirebaseContext);
};

export default useAuth;
