"use client";

import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

interface AddressOptionType {
  description: string;
}

interface AddressAutocompleteProps {
  address: AddressOptionType | null;
  onAddressChange: (newAddress: AddressOptionType | null) => void;
}

const ADDRESS_AUTOCOMPLETE_API = 'http://localhost:8094/api/address/autocomplete/json';

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  address,
  onAddressChange,
}) => {
  const [addressOptions, setAddressOptions] = useState<AddressOptionType[]>([]);
  
  const handleAddressInputChange = async (
    event: React.SyntheticEvent,
    inputValue: string
  ) => {
    if (inputValue.length > 2) {
      try {
        const response = await fetch(
          `${ADDRESS_AUTOCOMPLETE_API}?input=${inputValue}&types=address&components=country:ca`
        );
        const data = await response.json();
        setAddressOptions(
          data.predictions.map((prediction: any) => ({
            description: prediction.description,
          }))
        );
      } catch (error) {
        console.error("Error fetching address options:", error);
      }
    }
  };

  return (
    <Autocomplete
      freeSolo
      value={address}
      onChange={(event, newValue) => onAddressChange(newValue)}
      onInputChange={handleAddressInputChange}
      options={addressOptions}
      getOptionLabel={(option) => option.description}
      renderOption={(props, option) => <li {...props}>{option.description}</li>}
      renderInput={(params) => (
        <TextField {...params} label="Your Address" fullWidth />
      )}
    />
  );
};

export default AddressAutocomplete;
