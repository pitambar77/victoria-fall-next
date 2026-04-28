import { useState } from "react";

export default function useFormErrors() {
  const [errors, setErrors] = useState({});

  const setError = (field, message) => {
    setErrors((prev) => ({
      ...prev,
      [field]: message,
    }));
  };

  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    setError,
    clearError,
    clearAllErrors,
    setErrors,
  };
}