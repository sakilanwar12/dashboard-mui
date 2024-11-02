import { Input } from '@mui/material'
import { useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form'

const Step1 = ({ onSubmit,ref }: { onSubmit: (data: any) => void; ref: any }) => {
  const { register, handleSubmit } = useForm();

  useImperativeHandle(ref, () => ({
    submit: () => handleSubmit(onSubmit)(),
  }));


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Name" {...register('username')} />
      <Input placeholder="Email" {...register('email')} />
    </form>
  );
};

export default Step1;
