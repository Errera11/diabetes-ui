interface IProps {
  totalSteps: number
}

export function useSteps({ totalSteps }: IProps) {
  const currentStep = ref(1)
  const nextStep = () => {
    if (currentStep.value < totalSteps) {
      currentStep.value++
    }
  }
  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }

  return { currentStep, nextStep, prevStep }
}
