'use client';

import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import { RecoilRoot } from 'recoil';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </RecoilRoot>
  );
};

export default Providers;
