'use client';

import React from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Container,
  Box,
  Button,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Paper 
        sx={{ 
          position: 'relative',
          backgroundColor: 'primary.main',
          color: 'white',
          mb: 4,
          py: 8
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                component="h1" 
                variant="h2" 
                color="inherit"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Protect What Matters Most
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Comprehensive insurance solutions tailored to your needs. Get started with a free quote today.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 2 }}
                >
                  Get a Quote
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <List>
                  {[
                    'Instant online quotes',
                    'Competitive rates',
                    '24/7 customer support',
                    'Fast claim processing'
                  ].map((item) => (
                    <ListItem key={item}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: 'secondary.light' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Insurance Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Our Insurance Solutions
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Choose from our range of comprehensive insurance plans
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              title: 'Life Insurance',
              description: 'Secure your family's future with comprehensive life coverage',
              icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
              features: ['Term Life', 'Whole Life', 'Universal Life']
            },
            {
              title: 'Health Insurance',
              description: 'Get the best medical care with our health insurance plans',
              icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
              features: ['Individual Plans', 'Family Coverage', 'Dental & Vision']
            },
            {
              title: 'Property Insurance',
              description: 'Protect your valuable assets with comprehensive coverage',
              icon: <HomeIcon sx={{ fontSize: 40 }} />,
              features: ['Home Insurance', 'Rental Coverage', 'Natural Disasters']
            }
          ].map((service) => (
            <Grid item key={service.title} xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    {service.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature) => (
                      <ListItem key={feature}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'secondary.light',
          mt: 8,
          py: 8
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Ready to Get Started?
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary">
                Speak with our insurance experts and find the perfect coverage for you.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Contact Us Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <SecurityIcon 
                  sx={{ 
                    fontSize: 180,
                    color: 'primary.main',
                    opacity: 0.8
                  }} 
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
