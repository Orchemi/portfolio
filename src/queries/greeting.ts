// import { IGetGreetingResponse } from './home';
import { deleteGreeting, getGreeting, postGreeting, updateGreeting } from '@/apis/greeting';
import { queryClient } from '@/queries/useQueryClient';
import { MongoDB } from '@/types/common';
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const GreetingQueryKey = {
  all: ['home'] as const,
  greeting: () => [...GreetingQueryKey.all, 'greeting'],
};

export interface IGreeting {
  title: string;
  description: string;
  tags?: string[];
}
export type IGreetingResponse = MongoDB<IGreeting>;

export interface IGetGreetingResponse {
  message: string;
  data: IGreetingResponse[];
}

export function useQueryGetGreeting(): UseQueryResult<IGetGreetingResponse, AxiosError> {
  return useQuery({
    queryKey: GreetingQueryKey.greeting(),
    queryFn: getGreeting,
  });
}

export interface IPostGreetingRequest extends IGreeting {}
export interface IPostGreetingResponse {}

export function useMutationPostGreeting(): UseMutationResult<IPostGreetingResponse, AxiosError, IPostGreetingRequest> {
  return useMutation({
    mutationFn: postGreeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GreetingQueryKey.greeting() });
    },
  });
}

export interface IUpdateGreetingRequest {
  greeting: IGreeting;
  id: string;
}
export interface IUpdateGreetingResponse {}

export function useMutationUpdateGreeting(): UseMutationResult<
  IUpdateGreetingResponse,
  AxiosError,
  IUpdateGreetingRequest
> {
  return useMutation({
    mutationFn: updateGreeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GreetingQueryKey.greeting() });
    },
  });
}

export interface IDeleteGreetingRequest {
  id: string;
}

export interface IDeleteGreetingResponse {}

export function useMutationDeleteGreeting(): UseMutationResult<
  IDeleteGreetingRequest,
  AxiosError,
  IDeleteGreetingRequest
> {
  return useMutation({
    mutationFn: deleteGreeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GreetingQueryKey.greeting() });
    },
  });
}
