'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Container,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';
import OrderSummary from './components/OrderSummary';

const steps = ['Personal Information', 'Payment Details', 'Review Order'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} sx={{ py: 4 }}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Box sx={{ width: '100%', mb: 4 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {activeStep === steps.length ? (
            <Stack spacing={2} useFlexGap>
              <Typography variant="h4" gutterBottom>
                Thank you for your order!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your policy number is <strong>#140396</strong>. We have emailed your policy details
                and will contact you shortly with additional information.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 3, width: { xs: '100%', sm: 'auto' } }}
              >
                View My Policies
              </Button>
            </Stack>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    startIcon={<ChevronLeftRoundedIcon />}
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  endIcon={<ChevronRightRoundedIcon />}
                >
                  {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Container>
  );
} 