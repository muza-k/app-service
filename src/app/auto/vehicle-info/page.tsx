"use client";

import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  TextField,
  Grid,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import AutoStepper from "@/components/features/Stepper/AutoStepper";
import VehicleSearch from "@/components/features/auto/VehicleSearch/VehicleSearch";
import AddressAutocomplete from "@/components/features/common/AddressAutocomplete/AddresAutocomplete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAppContext } from "@/context/AppContext"; 
import { useRouter } from "next/navigation";


interface AddressOptionType {
  description: string;
}

interface CoverageStartDateFieldProps {
  coverageStartDate: Dayjs | null;
  handleCoverageStartDateChange: (date: Dayjs | null) => void;
}

const CoverageStartDateField = ({
  coverageStartDate,
  handleCoverageStartDateChange,
}: CoverageStartDateFieldProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Grid container sx={{ width: "100%" }}>
      <DatePicker
        label="Coverage Start Date"
        value={coverageStartDate}
        onChange={handleCoverageStartDateChange}
        slotProps={{ textField: { fullWidth: true } }} // Use new API for full width
      />
    </Grid>
  </LocalizationProvider>
);

export default function VehicleInfoPage() {
  const {
    appState: { selectedVehicle, vin, inputMode, address, coverageStartDate, progress },
    setSelectedVehicle,
    setVin,
    setInputMode,
    setAddress,
    setCoverageStartDate,
  } = useAppContext();
  const router = useRouter();

  // Callback function to update state when vehicle is selected
  const handleVehicleSelect = (vehicle: { year: string; make: string; model: string }) => {
    setSelectedVehicle(vehicle);
  };

  const handleVinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVin(event.target.value);
  };

  const handleCoverageStartDateChange = (newValue: Dayjs | null) => {
    setCoverageStartDate(newValue);
  };

  const handleInputModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string
  ) => {
    if (newMode !== null) {
      setInputMode(newMode);
    }
  };

  const handleAddressChange = (newAddress: AddressOptionType | null) => {
    setAddress(newAddress);
  };

  const handleSubmit = () => {
    console.log("VIN:", vin);
    console.log("Address:", address?.description);
    console.log(
      "Coverage Start Date:",
      coverageStartDate?.format("YYYY-MM-DD")
    );
    console.log("App State: ", {
      selectedVehicle,
      vin,
      inputMode,
      address,
      coverageStartDate,
    });
    router.push("/auto/driver-info");
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          height: "100vh", // Full screen height
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers horizontally
        }}
      >
        <AutoStepper activeStep={0} />

        {/* Added margin-top (mt: 4) to create spacing above the heading */}
        <Typography variant="h2" gutterBottom sx={{ mt: 4, mb: 8 }}>
          Please enter vehicle details
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ width: "100%", maxWidth: "800px", mx: "auto" }}
        >
          {/* Input Mode Toggle Button Group - Full Width */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <ToggleButtonGroup
              color="primary"
              value={inputMode || "manual"}
              exclusive
              onChange={handleInputModeChange}
              aria-label="Input Mode"
              sx={{ width: "100%" }}
            >
              <ToggleButton value="manual" sx={{ flex: 1 }}>
                Manual Input
              </ToggleButton>
              <ToggleButton value="vin" sx={{ flex: 1 }}>
                Prefill from VIN
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          {/* VIN Input Field (Only when VIN mode is selected) */}
          {inputMode === "vin" && (
            <Grid item xs={12}>
              <TextField
                label="Vehicle Identification Number (VIN)"
                fullWidth
                value={vin}
                onChange={handleVinChange}
              />
            </Grid>
          )}

          {inputMode === "manual" && (
            <Grid item xs={12}>
              <VehicleSearch onSelect={handleVehicleSelect} />
            </Grid>
          )}

          {/* Address Field - Now using AddressAutocomplete */}
          <Grid item xs={12}>
            <AddressAutocomplete
              address={address}
              onAddressChange={handleAddressChange}
            />
          </Grid>

          {/* Coverage Start Date Field */}
          <Grid item xs={12}>
            <CoverageStartDateField
              coverageStartDate={coverageStartDate}
              handleCoverageStartDateChange={handleCoverageStartDateChange}
            />
          </Grid>

          {/* Submit Button - Centered */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              size="large"
              sx={{ py: 2, fontSize: "1rem"}}
              endIcon={<ArrowForwardIcon />} // Adds the arrow icon at the end
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
