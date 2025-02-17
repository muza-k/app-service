'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

export default function OrderSummary() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <List disablePadding>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Life Insurance Premium" secondary="Annual Coverage" />
            <Typography variant="body2">$999.99</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Health Add-on" secondary="Dental & Vision Coverage" />
            <Typography variant="body2">$299.99</Typography>
          </ListItem>
          <Divider sx={{ my: 2 }} />
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Subtotal" />
            <Typography variant="body2">$1,299.98</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Tax" />
            <Typography variant="body2">$0.00</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              $1,299.98
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
} 