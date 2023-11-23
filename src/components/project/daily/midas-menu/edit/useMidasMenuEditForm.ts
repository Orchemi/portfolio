import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IMenu {
  date: string;
  time: 'BREAKFAST' | 'LUNCH' | 'DINNER';
  menu: string;
}

export default function useMidasMenuEditForm() {
  const { register, handleSubmit, watch, setValue } = useForm<IMenu>();

  const dateRegister = register('date');
  const timeRegister = register('time');
  const menuRegister = register('menu');

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const menuValue = watch('menu');
  useEffect(() => {
    if (!menuValue) return;
    if (menuValue.split('\n\n').length === 1) return;
    setValue('menu', menuValue.split('\n\n')[0]);
    onSubmit();
  }, [menuValue, onSubmit, setValue]);

  return { dateRegister, timeRegister, menuRegister, onSubmit };
}
