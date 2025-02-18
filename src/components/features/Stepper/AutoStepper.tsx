'use client';

import React from 'react';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const steps = [
  { label: 'Vehicle Details', path: '/vehicle-info' },
  { label: 'Driver Details', path: '/driver-info' },
  { label: 'Additional Info', path: '/additional-info' },
  { label: 'Quote Details', path: '/quote-details' },
];

export default function AutoStepper({ activeStep }: { activeStep: number }) {
  const router = useRouter();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      router.push(steps[activeStep + 1].path);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      router.push(steps[activeStep - 1].path);
    }
  };

  return (
    <Box sx={{ width: '100%', my: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
