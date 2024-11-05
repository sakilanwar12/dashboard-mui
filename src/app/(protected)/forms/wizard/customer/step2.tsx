import { Input } from '@mui/material'
import { useFormContext } from 'react-hook-form';
import { IFormInputs } from './values';

const Step2 = () => {
  const { register } = useFormContext<IFormInputs>();
  return (
    <div>
      <Input placeholder="Title" {...register('title')} />
      <Input placeholder="desc" {...register('desc')} />
    </div>
  );
};

export default Step2;
