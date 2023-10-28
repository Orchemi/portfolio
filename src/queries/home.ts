import { getGreeting } from '@/apis/home';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const HomeQueryKey = {
  all: ['home'] as const,
  greeting: () => [...HomeQueryKey.all, 'greeting'],
};

export interface IGetGreetingResponse {
  hello: string;
}

export function useQueryGetGreeting(): UseQueryResult<IGetGreetingResponse, AxiosError> {
  return useQuery({
    queryKey: HomeQueryKey.greeting(),
    queryFn: getGreeting,
  });
}
