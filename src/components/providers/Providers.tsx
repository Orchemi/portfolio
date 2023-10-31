'use client';

import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
