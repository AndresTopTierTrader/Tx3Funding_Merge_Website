import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LATAM_COUNTRIES } from "@/constants/global";
import { countryService } from '@/services/country/getCountryService';
import i18nConfig from '@/i18nConfig';

const STORED_COUNTRY_LOCAL_STORAGE_KEY = 'country-from-ip';
const STORED_CURRENCY_LOCAL_STORAGE_KEY = 'currency-from-ip';

// Custom hook to detect user's country and currency based on IP location
export const useCountryDetection = ({ mainLang }) => {
  const [countryData, setCountryData] = useState({
    isLatam: null,
    country: null,
    currency: null
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const currentPathname = usePathname();

  // Handle language redirect for LATAM users
  const handleLanguageRedirect = (isLatamCountry) => {
    if (isLatamCountry && mainLang !== 'es') {
      const newLocale = 'es';
      
      // Set cookie for next-i18n-router
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = '; expires=' + date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      // Redirect to Spanish version
      if (mainLang === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
        router.push('/' + newLocale + currentPathname);
      } else {
        router.push(currentPathname.replace(`/${mainLang}`, `/${newLocale}`));
      }
    }
  };

  useEffect(() => {
    const checkCountry = async () => {
      try {
        const countries = LATAM_COUNTRIES;
        
        const storedCountry = localStorage.getItem(STORED_COUNTRY_LOCAL_STORAGE_KEY);
        const storedCurrency = localStorage.getItem(STORED_CURRENCY_LOCAL_STORAGE_KEY);

        if (storedCountry && storedCurrency) {
          const isLatamCountry = countries.includes(storedCountry);
          
          setCountryData({
            isLatam: isLatamCountry,
            country: storedCountry,
            currency: storedCurrency
          });
          
          handleLanguageRedirect(isLatamCountry);
          setLoading(false);
          return;
        }

        const data = await countryService.fetchCountryFromIP();

        if (data.country_code && data.currency?.code) {
          localStorage.setItem(STORED_COUNTRY_LOCAL_STORAGE_KEY, data.country_code);
          localStorage.setItem(STORED_CURRENCY_LOCAL_STORAGE_KEY, data.currency.code);

          const isLatamCountry = countries.includes(data.country_code);
          
          setCountryData({
            isLatam: isLatamCountry,
            country: data.country_code,
            currency: data.currency.code
          });

          handleLanguageRedirect(isLatamCountry);
        } else {
          setCountryData({
            isLatam: false,
            country: null,
            currency: 'USD'
          });
        }
      } catch (error) {
        console.error('Error fetching IP location:', error);
        setCountryData({
          isLatam: false,
          country: null,
          currency: 'USD'
        });
      } finally {
        setLoading(false);
      }
    };

    checkCountry();
  }, [mainLang, router, currentPathname]);

  return {
    ...countryData,
    loading
  };
};