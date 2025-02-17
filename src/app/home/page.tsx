'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function HomeInsurancePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Home Insurance
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Discover our home insurance plans.
        </Typography>
        {/* Add more content or links as needed */}
      </Box>
    </Container>
  );
} 