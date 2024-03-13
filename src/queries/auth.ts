// import { postSignUp } from '@/apis/auth';
import { postSignUp } from '@/apis/auth';
import { IPostSignUpRequest, IPostSignUpResponse } from '@/interfaces/auth/IPostSignUp';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
export const AuthQueryKey = {
  all: ['auth'] as const,
  signUp: () => [...AuthQueryKey.all, 'signUp'] as const,
};

export function useMutationPostSignUp(): UseMutationResult<IPostSignUpResponse, AxiosError, IPostSignUpRequest> {
  return useMutation({
    mutationFn: postSignUp,
    onError: (error) => {
      console.error(error);
      return;
    },
  });
}
