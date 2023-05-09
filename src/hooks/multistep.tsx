import React from "react";
import { useState } from "react";


    export function Multistep(stepLenght: number) {


    const [currentStep, setCurrentStep] = useState(0);
    // if (currentStep === stepLenght - 1) return;
    // if (currentStep === 0) return;

    console.log(currentStep);

    const handleStepClick = (step: number) => {
            setCurrentStep(step);
    };

    return {
        currentStep,
        handleStepClick,
        

    };
};