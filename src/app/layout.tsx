import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, Container, Toolbar, Typography, Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insurance Portal",
  description: "Your trusted insurance solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Insurance Portal
              </Typography>
              {/* Add navigation items here */}
            </Toolbar>
          </AppBar>
          <Container component="main" sx={{ mt: 4 }}>
            {children}
          </Container>
          <Box component="footer" sx={{ py: 3, mt: 8, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
              <Typography variant="body2" color="text.secondary" align="center">
                © 2024 Insurance Portal. All rights reserved.
              </Typography>
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
