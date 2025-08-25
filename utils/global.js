import { LATAM_COUNTRIES } from '@/constants/global';

export const isLATAMUser = () => {
    if (typeof window === 'undefined') return false;
    const countryCode = localStorage.getItem('country-from-ip');
    return countryCode ? LATAM_COUNTRIES.includes(countryCode) : false;
};

// Extract main language from locale
export const getMainLanguage = (locale) => {
    return locale.split('-')[0] || 'en';
};