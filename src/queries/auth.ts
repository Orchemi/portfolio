// import { postSignUp } from '@/apis/auth';
import { postLogin, postSignUp } from '@/apis/auth';
import { IPostLoginRequest, IPostLoginResponse } from '@/interfaces/auth/IPostLogin';
import { IPostSignUpRequest, IPostSignUpResponse } from '@/interfaces/auth/IPostSignUp';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
export const AuthQueryKey = {
  all: ['auth'] as const,
  signUp: () => [...AuthQueryKey.all, 'signUp'] as const,
  login: () => [...AuthQueryKey.all, 'login'] as const,
};

// 회원가입
export function useMutationPostSignUp(): UseMutationResult<IPostSignUpResponse, AxiosError, IPostSignUpRequest> {
  return useMutation({
    mutationFn: postSignUp,
  });
}

// 로그인
export function useMutationPostLogin(): UseMutationResult<IPostLoginResponse, AxiosError, IPostLoginRequest> {
  return useMutation({
    mutationFn: postLogin,
  });
}
