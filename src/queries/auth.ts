import { postSignUp } from '@/apis/auth';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
export const AuthQueryKey = {
  all: ['auth'] as const,
  signUp: () => [...AuthQueryKey.all, 'signUp'] as const,
};

export interface IPostSignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface IPostSignUpResponse {}

export function useMutationPostSignUp(): UseMutationResult<IPostSignUpResponse, AxiosError, IPostSignUpRequest> {
  return useMutation({
    mutationFn: postSignUp,
  });
}
