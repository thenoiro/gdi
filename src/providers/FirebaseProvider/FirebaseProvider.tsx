'use client';
import { ReactNode, createContext, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const apiKey = process.env.NEXT_PUBLIC_apiKey;
const authDomain = process.env.NEXT_PUBLIC_authDomain;
const projectId = process.env.NEXT_PUBLIC_projectId;
const storageBucket = process.env.NEXT_PUBLIC_storageBucket;
const messagingSenderId = process.env.NEXT_PUBLIC_messagingSenderId;
const appId = process.env.NEXT_PUBLIC_appId;

const firebaseConfig = {
  appId,
  apiKey,
  projectId,
  authDomain,
  storageBucket,
  messagingSenderId,
};

const scopes = [
  'openid',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/drive.appdata',
  'https://www.googleapis.com/auth/drive.file',
];

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

scopes.forEach((scope) => {
  provider.addScope(scope);
});

const handleSignIn = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (ex) {
    console.error(ex);
  }
};

const handleSignOut = async () => {
  await signOut(auth);
};

type AuthContext = {
  user: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

interface FirebaseProviderProps {
  children: ReactNode;
}

const initialAuthContext = {
  user: auth.currentUser,
  signIn: handleSignIn,
  signOut: handleSignOut,
};

export const FirebaseContext = createContext<AuthContext>(initialAuthContext);

const FirebaseProvider = (props: FirebaseProviderProps) => {
  const { children } = props;

  const authContext = useMemo(() => {
    return {
      ...initialAuthContext,
    };
  }, []);

  return (
    <FirebaseContext.Provider value={authContext}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
