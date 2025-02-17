'use client';

import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import ProgressLayout from '../ProgressLayout';

export default function DriversPage() {
  return (
    <ProgressLayout activeStep={1}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Drivers Information
        </Typography>
        {/* Add form or content for drivers information here */}
      </Box>
    </ProgressLayout>
  );
} 