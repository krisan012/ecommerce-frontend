'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepOne from "@/app/components/Register/StepOne";
import StepTwo from "@/app/components/Register/StepTwo";
import StepThree from "@/app/components/Register/StepThree";
import StepFour from "@/app/components/Register/StepFour";
import StepFive from "@/app/components/Register/StepFive";
import Stepper from "@/app/components/Register/Stepper";


const steps = [
    { component: StepOne },
    { component: StepTwo },
    { component: StepThree },
    { component: StepFour },
    { component: StepFive },
];

export default function Register() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const StepComponent = steps[currentStep].component;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-lg">
                <Stepper currentStep={currentStep} steps={steps.length} />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <StepComponent nextStep={nextStep} prevStep={prevStep} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

