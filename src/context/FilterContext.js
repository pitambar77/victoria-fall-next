"use client"
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilters = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {

  const defaultFilters = {
    bedrooms: 0,
    bathrooms: 0,
    guest: 0,
    minPrice: 0,
    maxPrice: 1000,
    popular: [],
    sort: "recommended"
  };

  const [filters, setFilters] = useState(defaultFilters);

  // Clear all filters
  const clearAllFilters = () => {
    setFilters(defaultFilters);
  };

  // Count applied filters
  const appliedCount =
    (filters.bedrooms > 0 ? 1 : 0) +
    (filters.bathrooms > 0 ? 1 : 0) +
    (filters.guest > 0 ? 1 : 0) +
    (filters.minPrice > 0 || filters.maxPrice < 1000 ? 1 : 0) +
    (filters.popular.length > 0 ? 1 : 0) +
    (filters.sort !== "recommended" ? 1 : 0);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        clearAllFilters,
        appliedCount
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};