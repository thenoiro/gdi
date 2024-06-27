'use client';
import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  CssBaseline,
} from '@mui/material';

import theme from '@/styles/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <AppRouterCacheProvider>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
