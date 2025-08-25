import { IPAPI_URL } from "@/constants/global";

const IPAPI_API_KEY = process.env.NEXT_PUBLIC_IPAPI_API_KEY;

// Service for IP location API calls
export const countryService = {
    
    // Fetch country data from IP API
    async fetchCountryFromIP() {
        const response = await fetch(`${IPAPI_URL}/check?access_key=${IPAPI_API_KEY}`);
        const data = await response.json();

        return data;
    }
};