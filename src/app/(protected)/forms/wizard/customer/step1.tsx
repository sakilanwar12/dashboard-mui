import { Input } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInputs } from "./values";

const Step1 = () => {
  const { register } = useFormContext<IFormInputs>();

  return (
    <div>
      <Input placeholder="Name" {...register("username")} />
      <Input placeholder="Email" {...register("email")} />
    </div>
  );
};

export default Step1;
