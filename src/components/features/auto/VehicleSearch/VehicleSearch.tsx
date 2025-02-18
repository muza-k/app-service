"use client";

import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, CircularProgress } from "@mui/material";

interface VehicleSearchProps {
  onSelect: (vehicle: { year: string; make: string; model: string }) => void;
}

const VEHICLE_SEARCH_API = 'http://localhost:8094/api/vehicle/search';

export default function VehicleSearch({ onSelect }: VehicleSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  useEffect(() => {
    if (searchTerm.length > 1) {
      fetchVehicleSuggestions(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const fetchVehicleSuggestions = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${VEHICLE_SEARCH_API}/${query}`
      );
      const data = await response.json();
      if (data.result) {
        setSuggestions(data.result);
      }
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
    }
    setLoading(false);
  };

  const handleSelection = (event, newValue) => {
    if (newValue) {
      const selectedVehicle = {
        year: newValue.year,
        make: newValue.make,
        model: newValue.model,
      };
      setYear(selectedVehicle.year);
      setMake(selectedVehicle.make);
      setModel(selectedVehicle.model);
      setSearchTerm(newValue.autoComplete);

      // Pass data to parent component (VehicleInfoPage.jsx)
      onSelect(selectedVehicle);
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={suggestions}
      getOptionLabel={(option) => option.autoComplete}
      loading={loading}
      onInputChange={(event, value) => setSearchTerm(value)}
      onChange={handleSelection}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter Year, Make, Model"
          variant="outlined"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
