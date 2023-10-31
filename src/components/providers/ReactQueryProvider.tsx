import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { useQueryClient } from '@queries/useQueryClient';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const { mounted, queryClient } = useQueryClient();
  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
