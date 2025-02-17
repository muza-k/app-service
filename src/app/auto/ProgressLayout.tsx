'use client';

import React from 'react';
import { Box, Container, Step, StepLabel, Stepper, Typography } from '@mui/material';

const steps = ['Vehicle Information', 'Driver Information', 'Quote'];

interface ProgressLayoutProps {
  activeStep: number;
  children: React.ReactNode;
}

export default function ProgressLayout({ activeStep, children }: ProgressLayoutProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {children}
    </Container>
  );
} 