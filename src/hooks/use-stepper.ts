import { useState } from "react";

export function useStepper({initialStep = 0, totalSteps = 6}: {initialStep?: number, totalSteps?: number}) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const setStep = (step: number) => {
    setCurrentStep(Math.max(0, Math.min(step, totalSteps - 1)));
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    setStep,
  };
}
