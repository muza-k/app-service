'use client';

import React, { useState } from 'react';
import { Typography, Box, TextField, Grid, Button } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import ProgressLayout from '../ProgressLayout';

const filter = createFilterOptions<AddressOptionType>();

interface AddressOptionType {
  inputValue?: string;
  description: string;
}

export default function VehiclePage() {
  const [vin, setVin] = useState('');
  const [address, setAddress] = useState<AddressOptionType | null>(null);
  const [coverageDate, setCoverageDate] = useState<Dayjs | null>(null);
  const [addressOptions, setAddressOptions] = useState<AddressOptionType[]>([]);

  const handleVinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVin(event.target.value);
  };

  const handleAddressInputChange = async (event: React.SyntheticEvent, inputValue: string) => {
    if (inputValue.length > 2) {
      try {
        const response = await fetch(`http://localhost:8094/api/address/autocomplete/json?input=${inputValue}&types=address&components=country:ca`);
        const data = await response.json();
        const options = data.predictions.map((prediction: any) => ({
          description: prediction.description,
        }));
        setAddressOptions(options);
      } catch (error) {
        console.error('Error fetching address options:', error);
      }
    }
  };

  const handleAddressChange = (event: React.SyntheticEvent, newValue: AddressOptionType | null) => {
    setAddress(newValue);
  };

  const handleCoverageDateChange = (newValue: Dayjs | null) => {
    setCoverageDate(newValue);
  };

  const handleSubmit = () => {
    console.log('VIN:', vin);
    console.log('Address:', address?.description);
    console.log('Coverage Date:', coverageDate?.format('YYYY-MM-DD'));
  };

  return (
    <ProgressLayout activeStep={0}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Vehicle Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="VIN Number"
              fullWidth
              value={vin}
              onChange={handleVinChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              freeSolo
              value={address}
              onChange={handleAddressChange}
              onInputChange={handleAddressInputChange}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;
                const isExisting = options.some((option) => inputValue === option.description);
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue,
                    description: `Add "${inputValue}"`,
                  });
                }
                return filtered;
              }}
              options={addressOptions}
              getOptionLabel={(option) => {
                if (typeof option === 'string') {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.description;
              }}
              renderOption={(props, option) => (
                <li {...props}>
                  {option.description}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Your Address" fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Coverage Start Date"
                value={coverageDate}
                onChange={handleCoverageDateChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ProgressLayout>
  );
} 