'use client';

import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import { RecoilRoot } from 'recoil';
import React from 'react';
import AuthProvider from '@/components/providers/AuthProvider';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute={'class'}>
      <AuthProvider>
        <RecoilRoot>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </RecoilRoot>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
