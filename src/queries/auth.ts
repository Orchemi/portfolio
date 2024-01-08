// import { postSignUp } from '@/apis/auth';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
export const AuthQueryKey = {
  all: ['auth'] as const,
  signUp: () => [...AuthQueryKey.all, 'signUp'] as const,
};

export interface IPostSignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface IPostSignUpResponse {
  user: {
    name: string;
    email: string;
    hashedPassword: string;
  };
}

export function useMutationPostSignUp(): UseMutationResult<IPostSignUpResponse, AxiosError, IPostSignUpRequest> {
  return useMutation({
    mutationFn: (data) => axios.post('/auth/register', data),
    onError: (error) => {
      console.log('에러다~');
      console.error(error);
      return;
    },
    onSuccess: async (data) => {
      // console.log(data);
      // await signIn('credentials', {
      //   email: data.email,
      //   password: data.password,
      //   redirect: true,
      //   callbackUrl: '/',
      // });
    },
  });
}
