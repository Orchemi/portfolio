'use client';

import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import { RecoilRoot } from 'recoil';
import React from 'react';
import AuthProvider from '@/components/providers/AuthProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <RecoilRoot>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </RecoilRoot>
    </AuthProvider>
  );
};

export default Providers;
