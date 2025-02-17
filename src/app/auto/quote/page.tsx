'use client';

import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import ProgressLayout from '../ProgressLayout';

export default function QuotePage() {
  return (
    <ProgressLayout activeStep={2}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Insurance Quote
        </Typography>
        {/* Add content to display insurance coverages and quotes here */}
      </Box>
    </ProgressLayout>
  );
} 