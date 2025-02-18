'use client';

import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'black' }}>
      <Toolbar>
        {/* Menu Icon (for Mobile/Sidebar in the future) */}
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* App Title / Brand */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
            DDI
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button color="inherit" component={Link} href="/contact">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
