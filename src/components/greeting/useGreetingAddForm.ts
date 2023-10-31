import { IGreeting, useMutationPostGreeting } from '@/queries/home';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function useGreetingAddForm() {
  const { mutate: postGreeting } = useMutationPostGreeting();
  const { register, handleSubmit, reset } = useForm<IGreeting>();

  const titleRegister = register('title', { required: true });
  const descriptionRegister = register('description', { required: true });
  const tagRegister = register('tags');

  useEffect(() => {
    reset();
  }, []);

  const onSubmit = handleSubmit((data) => postGreeting(data));

  return {
    onSubmit,
    titleRegister,
    descriptionRegister,
    tagRegister,
  };
}

export default useGreetingAddForm;
