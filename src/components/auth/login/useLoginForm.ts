import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

interface ILoginProps {
  email: string;
  password: string;
}

export default function useLoginForm() {
  const { handleSubmit, register } = useForm<ILoginProps>();

  const emailRegister = register('email', { required: true });
  const passwordRegister = register('password', { required: true });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: '/',
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });

  return { emailRegister, passwordRegister, onSubmit };
}
