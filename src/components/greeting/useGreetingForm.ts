import { GreetingFormType } from '@/components/greeting/GreetingForm';
import { IGreeting, IGreetingResponse, useMutationPostGreeting, useMutationUpdateGreeting } from '@/queries/home';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IProps {
  type: GreetingFormType;
  editTarget?: IGreetingResponse;
}

function useGreetingForm({ type, editTarget }: IProps) {
  const { mutate: postGreeting } = useMutationPostGreeting();
  const { mutate: updateGreeting } = useMutationUpdateGreeting();
  const { register, handleSubmit, reset, setValue } = useForm<IGreeting>();

  const titleRegister = register('title', { required: true });
  const descriptionRegister = register('description', { required: true });
  const tagRegister = register('tags');

  useEffect(() => {
    reset();

    if (type === 'edit' && editTarget) {
      const { title, description, tags } = editTarget;
      setValue('title', title);
      setValue('description', description);
      setValue('tags', tags);
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    switch (type) {
      case 'add':
        return postGreeting(data);
      case 'edit':
        if (!editTarget) return;
        updateGreeting({ greeting: data, id: editTarget?._id });
        return;
    }
  });

  return {
    onSubmit,
    titleRegister,
    descriptionRegister,
    tagRegister,
  };
}

export default useGreetingForm;
