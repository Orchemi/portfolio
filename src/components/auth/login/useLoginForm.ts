import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ILoginProps {
  email: string;
  password: string;
}

export default function useLoginForm() {
  const { handleSubmit, register } = useForm<ILoginProps>();
  const [isLoading, setIsLoading] = useState(false);

  const emailRegister = register('email', { required: true });
  const passwordRegister = register('password', { required: true });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: '/',
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return { emailRegister, passwordRegister, onSubmit, isLoading };
}
