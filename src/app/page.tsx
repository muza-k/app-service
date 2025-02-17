'use client';

import React from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Container,
  Box
} from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function HomePage() {
  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Your Insurance Portal
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Protecting what matters most to you
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ py: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <FavoriteIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h2" component="h2" gutterBottom>
                Life Insurance
              </Typography>
              <Typography color="text.secondary">
                Secure your family's future with comprehensive life coverage
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <HealthAndSafetyIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h2" component="h2" gutterBottom>
                Health Insurance
              </Typography>
              <Typography color="text.secondary">
                Get the best medical care with our health insurance plans
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <HomeIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h2" component="h2" gutterBottom>
                Property Insurance
              </Typography>
              <Typography color="text.secondary">
                Protect your valuable assets with comprehensive coverage
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
