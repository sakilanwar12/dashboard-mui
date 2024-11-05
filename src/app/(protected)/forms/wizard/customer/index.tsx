"use client";

import { Button, Card, CardContent, Typography } from "@mui/material";
import Step1 from "./step1";
import Step2 from "./step2";
import { useStepper } from "@/hooks/use-stepper";
import { FormProvider, useForm } from "react-hook-form";
import { defaultValues, IFormInputs } from "./values";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
const CustomerWizard = () => {
  const { currentStep, nextStep, prevStep } = useStepper({
    initialStep: 1,
    totalSteps: 2,
  });
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const { handleSubmit, getValues } = methods;
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };
  const handleNext = () => {
    console.log(`Current Step: ${currentStep}, values:`, getValues());
    nextStep();
  };
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" component="h2">
          Form Stepper {currentStep}
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 0 && <Step1 />}
            {currentStep === 1 && <Step2 />}
            <div>
              <Button onClick={prevStep}>Prev</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default CustomerWizard;
