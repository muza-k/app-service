'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function ListPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box>
        <Typography variant="h2" gutterBottom>
          List of Drivers and Vehicles
        </Typography>
        {/* Add list or table to show added drivers and vehicles here */}
      </Box>
    </Container>
  );
} 