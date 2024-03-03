import React, { useState } from 'react'

function useMultiFormHook(steps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextBtn = () => {
    if(currentStep >= steps.length -1 ){
      setCurrentStep(currentStep)
    } else {
      setCurrentStep(currentStep+1)
    }
  }
  const handlePrevBtn = () => {
    if(currentStep <= 0){
      setCurrentStep(currentStep)
    } else {
      setCurrentStep(currentStep-1)
    }
  }

  const goTo = (i) => {
    setCurrentStep(i)
  }

  return {
    steps: steps[currentStep],
    stepsLength: steps.length,
    currentStep,
    handleNextBtn,
    handlePrevBtn,
    goTo
  }
}

export default useMultiFormHook