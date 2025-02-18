"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    selectedVehicle: { year: "", make: "", model: "" },
    vin: "",
    inputMode: "manual",
    address: null,
    addressOptions: [],
    coverageStartDate: null,
    progress: 0,
  });

  // Update Functions (Optional)
  const setSelectedVehicle = (vehicle) =>
    setAppState((prev) => ({ ...prev, selectedVehicle: vehicle }));

  const setVin = (vin) =>
    setAppState((prev) => ({ ...prev, vin }));

  const setInputMode = (mode) =>
    setAppState((prev) => ({ ...prev, inputMode: mode }));

  const setAddress = (address) =>
    setAppState((prev) => ({ ...prev, address }));

  const setAddressOptions = (options) =>
    setAppState((prev) => ({ ...prev, addressOptions: options }));

  const setCoverageStartDate = (date) =>
    setAppState((prev) => ({ ...prev, coverageStartDate: date }));

  const setProgress = (progress) =>
    setAppState((prev) => ({ ...prev, progress }));

  return (
    <AppContext.Provider
      value={{
        appState,
        setSelectedVehicle,
        setVin,
        setInputMode,
        setAddress,
        setAddressOptions,
        setCoverageStartDate,
        setProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
