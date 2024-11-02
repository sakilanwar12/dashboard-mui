import { Input } from '@mui/material'
import { useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form'

const Step2 = ({ onSubmit,ref }: { onSubmit: (data: any) => void }) => {
  const { register, handleSubmit } = useForm();

  useImperativeHandle(ref, () => ({
    submit: () => handleSubmit(onSubmit)(),
  }));


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Title" {...register('title')} />
      <Input placeholder="desc" {...register('desc')} />
    </form>
  );
};

export default Step2;
