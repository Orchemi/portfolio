import { useMutationPostSignUp } from '@/queries/auth';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ISignUpProps {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
}

export default function useSignUpForm() {
  const { mutate: postSignUp } = useMutationPostSignUp();
  const { handleSubmit, register, setError } = useForm<ISignUpProps>();
  const [isLoading, setIsLoading] = useState(false);

  const nameRegister = register('name', { required: true });
  const emailRegister = register('email', { required: true });
  const passwordRegister = register('password', { required: true });
  const checkPasswordRegister = register('checkPassword', { required: true });

  const validateSignUp = (data: ISignUpProps) => {
    const { name, email, password, checkPassword } = data;

    if (!name || !email || !password || !checkPassword) {
      return false;
    }

    // check. 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== checkPassword) {
      setError('checkPassword', {
        type: 'pattern',
        message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
      });
      return false;
    }

    return true;
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      if (!validateSignUp(data)) {
        alert('회원가입에 실패했습니다.');
        return;
      }

      // 회원가입 요청
      await postSignUp(data);

      // 회원가입 요청이 성공하면 로그인 요청
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return { nameRegister, emailRegister, passwordRegister, checkPasswordRegister, onSubmit, isLoading };
}
