// import { IGetGreetingResponse } from './home';
import { deleteGreeting, getGreeting, postGreeting, updateGreeting } from '@/apis/home';
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
  tags?: string[];
}
export interface IGreetingResponse extends IGreeting {
  _id: string;
}

export interface IGetGreetingResponse {
  message: string;
  data: IGreetingResponse[];
}

export function useQueryGetGreeting(): UseQueryResult<IGetGreetingResponse, AxiosError> {
  return useQuery({
    queryKey: HomeQueryKey.greeting(),
    queryFn: getGreeting,
  });
}

export interface IPostGreetingRequest extends IGreeting {}
export interface IPostGreetingResponse {}

export function useMutationPostGreeting(): UseMutationResult<IPostGreetingResponse, AxiosError, IPostGreetingRequest> {
  return useMutation({
    mutationFn: postGreeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HomeQueryKey.greeting() });
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
      queryClient.invalidateQueries({ queryKey: HomeQueryKey.greeting() });
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
      queryClient.invalidateQueries({ queryKey: HomeQueryKey.greeting() });
    },
  });
}
