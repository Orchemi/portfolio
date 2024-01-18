import { useMutationPostSignUp } from '@/queries/auth';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface ISignUpProps {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
}

export default function useSignUpForm() {
  const { mutate: postSignUp } = useMutationPostSignUp();

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<ISignUpProps>();
  const [isLoading, setIsLoading] = useState(false);

  const nameRegister = register('name', { required: true });
  const emailRegister = register('email', { required: true });
  const passwordRegister = register('password', { required: true });
  const checkPasswordRegister = register('checkPassword', { required: true });

  const __fillTestInputValue = () => {
    setValue('name', '박승훈');
    setValue('email', 'tmdgns1126@naver.com');
    setValue('password', '1234');
    setValue('checkPassword', '1234');
  };

  useEffect(() => {
    clearErrors('email');
  }, [watch('email')]);

  useEffect(() => {
    clearErrors('checkPassword');
  }, [watch('checkPassword')]);

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

  const handleSignUp = async (data: ISignUpProps) => {
    postSignUp(data, {
      onSuccess: () => {
        // 회원가입 요청이 성공하면 로그인 요청
        signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl: '/',
        });
      },
      // onError: (error: any) => {
      //   const errorMsg = ERROR_MESSAGE[error.response.data.code as ErrorType].KR ?? ERROR_MESSAGE.UNKNOWN.KR;
      //   throw new Error(errorMsg);
      // },
    });
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      if (!validateSignUp(data)) return;
      handleSignUp(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    nameRegister,
    emailRegister,
    passwordRegister,
    checkPasswordRegister,
    onSubmit,
    errors,
    isLoading,
    __fillTestInputValue,
  };
}
