import { QueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const queryClient = new QueryClient();

/** react query 의 공통 설정을 할 수 있습니다. */
export const useQueryClient = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queryClient.setDefaultOptions({
      queries: {
        refetchOnWindowFocus: false, // default: true
        suspense: true,
        retry: false,
      },
      mutations: {
        onError: (e) => {
          console.error(e);
        },
      },
    });
    setMounted(true);
  }, []);

  return { queryClient, mounted };
};
