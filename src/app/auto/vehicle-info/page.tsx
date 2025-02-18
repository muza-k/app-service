'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Grid, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

interface AddressOptionType {
  description: string;
}

const ADDRESS_AUTOCOMPLETE_API = process.env.ADDRESS_AUTOCOMPLETE_API;

const AddressField = ({ address, addressOptions, handleAddressChange, handleAddressInputChange }) => (
  <Autocomplete
    freeSolo
    value={address}
    onChange={handleAddressChange}
    onInputChange={handleAddressInputChange}
    options={addressOptions}
    getOptionLabel={(option) => option.description}
    renderOption={(props, option) => <li {...props}>{option.description}</li>}
    renderInput={(params) => <TextField {...params} label="Your Address" fullWidth />}
  />
);

const CoverageStartDateField = ({ coverageStartDate, handleCoverageStartDateChange }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label="Coverage Start Date"
      value={coverageStartDate}
      onChange={handleCoverageStartDateChange}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  </LocalizationProvider>
);

export default function VehicleInfoPage() {
  const [vin, setVin] = useState('');
  const [address, setAddress] = useState<AddressOptionType | null>(null);
  const [coverageStartDate, setCoverageStartDate] = useState<Dayjs | null>(null);
  const [addressOptions, setAddressOptions] = useState<AddressOptionType[]>([]);
  const [inputMode, setInputMode] = useState('manual');
  const [isClient, setIsClient] = useState(false);

  const handleVinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVin(event.target.value);
  };

  const handleAddressInputChange = async (event: React.SyntheticEvent, inputValue: string) => {
    if (inputValue.length > 2) {
      try {
        const response = await fetch(`${ADDRESS_AUTOCOMPLETE_API}?input=${inputValue}&types=address&components=country:ca`);
        const data = await response.json();
        setAddressOptions(data.predictions.map((prediction: any) => ({ description: prediction.description })));
      } catch (error) {
        console.error('Error fetching address options:', error);
      }
    }
  };

  const handleAddressChange = (event: React.SyntheticEvent, newValue: AddressOptionType | null) => {
    setAddress(newValue);
  };

  const handleCoverageStartDateChange = (newValue: Dayjs | null) => {
    setCoverageStartDate(newValue);
  };

  const handleInputModeChange = (event: React.MouseEvent<HTMLElement>, newMode: string) => {
    if (newMode !== null) {
      setInputMode(newMode);
    }
  };

  const handleSubmit = () => {
    console.log('VIN:', vin);
    console.log('Address:', address?.description);
    console.log('Coverage Start Date:', coverageStartDate?.format('YYYY-MM-DD'));
  };

  return (
      <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Please enter vehicle details
        </Typography>
        <ToggleButtonGroup 
          color="primary"
          value={inputMode || 'manual'}
          exclusive
          onChange={handleInputModeChange}
          aria-label="Input Mode"
          sx={{ mb: 3 }}
        >
          <ToggleButton value="manual">Manual Input</ToggleButton>
          <ToggleButton value="vin">Prefill from VIN</ToggleButton>
        </ToggleButtonGroup>

        <Grid container spacing={3}>
          {inputMode === 'vin' && (
            <Grid item xs={12}>
              <TextField
                label="Vehicle Identification Number (VIN)"
                fullWidth
                value={vin}
                onChange={handleVinChange}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <AddressField
              address={address}
              addressOptions={addressOptions}
              handleAddressChange={handleAddressChange}
              handleAddressInputChange={handleAddressInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CoverageStartDateField coverageStartDate={coverageStartDate} handleCoverageStartDateChange={handleCoverageStartDateChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
  );
}
