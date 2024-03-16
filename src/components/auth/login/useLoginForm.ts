import { findErrorMessage } from '@/constants/error.constant';
import { useMutationPostLogin } from '@/queries/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ILoginProps {
  email: string;
  password: string;
}

export default function useLoginForm() {
  const { handleSubmit, register } = useForm<ILoginProps>();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: postLogin } = useMutationPostLogin();

  const emailRegister = register('email', { required: true });
  const passwordRegister = register('password', { required: true });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      postLogin(data, {
        onSuccess: async (response) => {
          alert('로그인 성공');
        },
        onError: (error) => {
          const errorMsg = findErrorMessage(error);
          alert(errorMsg);
          console.error(error);
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return { emailRegister, passwordRegister, onSubmit, isLoading };
}
