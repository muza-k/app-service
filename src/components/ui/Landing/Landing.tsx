'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';

const insuranceOptions = [
  {
    title: '',
    icon: <DirectionsCarIcon sx={{ fontSize: 80 }} />, // Auto icon
    link: '/auto/vehicle-info',
  },
  {
    title: '',
    icon: <HomeIcon sx={{ fontSize: 80 }} />, // Home icon
    link: '/home/property-info',
  },
  {
    title: '',
    icon: <BusinessIcon sx={{ fontSize: 80 }} />, // Business icon
    link: '/business/home',
  },
];

const StyledButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 250,
  width: '100%',
  backgroundColor: theme.palette.common.white,
  border: '1px solid #ddd',
  transition: 'transform 0.3s, box-shadow 0.3s',
  display: 'flex',
  flexDirection: 'column', // Stack icon and text vertically
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 150,
  },
}));

export default function Landing() {
  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: 'white', textAlign: 'center', py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Choose Your Insurance Plan
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Get the best coverage for your Auto, Home, and Business.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        {insuranceOptions.map((option) => (
          <StyledButton
            key={option.title}
            focusRipple
            onClick={() => router.push(option.link)}
            sx={{ width: { xs: '100%', sm: '33.3%' }, p: 3 }}
          >
            {option.icon} {/* Renders the appropriate icon */}
            <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
              {option.title}
            </Typography>
          </StyledButton>
        ))}
      </Box>
    </Box>
  );
}
