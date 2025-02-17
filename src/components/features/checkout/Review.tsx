'use client';

import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Divider,
} from '@mui/material';

const products = [
  {
    name: 'Life Insurance Premium',
    desc: 'Annual Coverage',
    price: '$999.99',
  },
  {
    name: 'Health Add-on',
    desc: 'Dental & Vision Coverage',
    price: '$299.99',
  },
];

const addresses = {
  billing: '1 Material-UI Drive, Reactville, Visible, 99999',
};

const payments = {
  type: 'Visa',
  holder: 'Mr John Smith',
  number: 'xxxx-xxxx-xxxx-1234',
  expiry: '04/2024',
};

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $1,299.98
          </Typography>
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Billing Address
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.billing}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payments.type}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payments.holder}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payments.number}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payments.expiry}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
} 