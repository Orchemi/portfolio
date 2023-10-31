import { getGreeting, postGreeting } from '@/apis/home';
import { queryClient } from '@/queries/useQueryClient';
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
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

export interface IPostGreetingRequest extends IGreeting {}
export interface IPostGreetingResponse extends IGreeting {}

export function useMutationPostGreeting(): UseMutationResult<IPostGreetingRequest, AxiosError, IPostGreetingResponse> {
  return useMutation({
    mutationFn: postGreeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HomeQueryKey.greeting() });
    },
  });
}
