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
  ListItemText,
  CardActionArea,
  CardMedia
} from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const insuranceOptions = [
  { title: 'Auto Insurance', image: '/images/auto.jpg', link: '/auto' },
  { title: 'Home Insurance', image: '/images/home.jpg', link: '/home' },
  { title: 'Recreational Insurance', image: '/images/recreational.jpg', link: '/recreational' },
  { title: 'Small Business Insurance', image: '/images/business.jpg', link: '/business' },
];

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to the Insurance Portal
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          What type of insurance do you need?
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {insuranceOptions.map((option) => (
          <Grid item xs={12} sm={6} md={3} key={option.title}>
            <Link href={option.link} passHref>
              <CardActionArea component="a">
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={option.image}
                    alt={option.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {option.title}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
