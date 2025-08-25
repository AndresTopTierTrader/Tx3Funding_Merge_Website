import { useState, useEffect } from 'react';
import { LATAM_COUNTRIES } from "@/constants/global";

// Custom hook to check cached country data from localStorage
export const useCountryLocalStorage = () => {
  const [countryData, setCountryData] = useState({
    isLatam: null,
    country: null,
    currency: null,
    hasCache: false
  });

  useEffect(() => {
    const storedCountry = localStorage.getItem('country-from-ip');
    const storedCurrency = localStorage.getItem('currency-from-ip');

    if (storedCountry && storedCurrency) {
      setCountryData({
        isLatam: LATAM_COUNTRIES.includes(storedCountry),
        country: storedCountry,
        currency: storedCurrency,
        hasCache: true
      });
    } else {
      setCountryData({
        isLatam: null,
        country: null,
        currency: null,
        hasCache: false
      });
    }
  }, []);

  return countryData;
};