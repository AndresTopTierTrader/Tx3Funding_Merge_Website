import { COUNTRY_CODES } from '../../data/constants';
import { ORDER_DEFAULTS } from '../../data/constants';

// Convert country name to 2-letter country code
export const getCountryCode = (countryName) => {
  if (!countryName) {
    console.warn('⚠️ No country name provided, defaulting to US');
    return ORDER_DEFAULTS.COUNTRY_CODE;
  }

  // Find matching country in COUNTRY_CODES
  const countryMatch = COUNTRY_CODES.find(country => 
    country.name.toLowerCase() === countryName.toLowerCase()
  );

  if (countryMatch) {
    return countryMatch.country;
  } else {
    return ORDER_DEFAULTS.COUNTRY_CODE;
  }
};