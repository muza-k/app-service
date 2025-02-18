'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const insuranceOptions = [
  {
    title: 'Auto Insurance',
    width: '33.3%',
    link: '/auto/vehicle-info',
  },
  {
    title: 'Home Insurance',
    width: '33.3%',
    link: '/home/property-info',
  },
  {
    title: 'Small Business Insurance',
    width: '33.3%',
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

      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {insuranceOptions.map((option) => (
          <StyledButton
            key={option.title}
            focusRipple
            onClick={() => router.push(option.link)}
            style={{ width: option.width }}
          >
            <Typography variant="h5" color="text.primary">
              {option.title}
            </Typography>
          </StyledButton>
        ))}
      </Box>
    </Box>
  );
}
