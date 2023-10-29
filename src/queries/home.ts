import { getGreeting } from '@/apis/home';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const HomeQueryKey = {
  all: ['home'] as const,
  greeting: () => [...HomeQueryKey.all, 'greeting'],
};

export interface IGreeting {
  title: string;
  description: string;
  tags: string[];
}
export interface IGetGreetingResponse {
  message: string;
  data: IGreeting[];
}

export function useQueryGetGreeting(): UseQueryResult<IGetGreetingResponse, AxiosError> {
  return useQuery({
    queryKey: HomeQueryKey.greeting(),
    queryFn: getGreeting,
  });
}
