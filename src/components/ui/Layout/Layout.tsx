'use client';

import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import Footer from '../Footer';
import Header from '../Header';


export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'white' }}>
      <CssBaseline />
      
      <Header />
      
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

    </Box>
  );
}
