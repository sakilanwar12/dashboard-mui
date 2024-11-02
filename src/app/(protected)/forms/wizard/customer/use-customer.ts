import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type step1Props = {
  username: string;
  email: string;
};

export type step2Props = {
  title: string;
  desc: string;
};

export type stepForm = {
  step1: step1Props;
  step2: step2Props;
  currentStep: number;
};

const stepFormData = atomWithStorage<stepForm>("stepFormData", {
  step1: {
    username: "",
    email: "",
  },
  step2: {
    title: "",
    desc: "",
  },
  currentStep: 0,
});

export function useCustomer(totalSteps = 6) {
  const [formData, setFormData] = useAtom(stepFormData);

  const nextStep = () => {
    setFormData((prev) => {
      if (prev.currentStep <= totalSteps - 1 && prev.currentStep >= 0) {
        return {
          ...prev,
          currentStep: prev.currentStep + 1,
        };
      }
      return prev;
    });
  };

  const prevStep = () => {
    setFormData((prev) => {
      if (prev.currentStep > 1) {
        return {
          ...prev,
          currentStep: prev.currentStep - 1,
        };
      }
      return prev;
    });
  };

  return {
    formData,
    setFormData,
    nextStep,
    prevStep,
    currentStep: formData.currentStep,
  };
}
