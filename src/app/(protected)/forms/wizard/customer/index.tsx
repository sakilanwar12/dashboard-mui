"use client";
import { Button, Card, CardContent, Typography } from "@mui/material";

import Step1 from "./step1";

import { useCustomer } from "./use-customer";
import { useRef } from "react";
import Step2 from "./step2";
const CustomerWizard = () => {
  const { formData, setFormData, nextStep, prevStep, currentStep } =useCustomer(4);
  const stepRef = useRef<HTMLDivElement>(null);
  const handleNextClick = () => {
    stepRef.current?.submit();
  };

  const handleStepSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      [`step${currentStep}`]: data,
    }));
    nextStep();
  };



  return (
    <Card>
      <CardContent>
        <Typography variant="h3" component="h2">
          Form Stepper {currentStep}
        </Typography>

        {currentStep === 1 && <Step1 ref={stepRef} onSubmit={handleStepSubmit} />}
        {currentStep === 2 && <Step2 ref={stepRef} onSubmit={handleStepSubmit} />}


        <Button onClick={handleNextClick}>Next </Button>
        <Button onClick={() => prevStep()}>Prev</Button>
      </CardContent>
    </Card>
  );
};

export default CustomerWizard;
