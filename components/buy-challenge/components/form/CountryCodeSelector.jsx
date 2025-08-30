import React, { useState, useRef, useEffect } from 'react';
import { COUNTRY_CODES } from '../../data/constants.js';

// Custom searchable country code selector component
function CountryCodeSelector({ value, onChange, error }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(COUNTRY_CODES);
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);

    // Find selected country object, default to United States
    const defaultCountry = COUNTRY_CODES.find(country => country.country === 'US');
    const selectedCountry = value 
        ? COUNTRY_CODES.find(country => `${country.code}-${country.country}` === value) || defaultCountry
        : defaultCountry;

    // Filter countries based on search term
    useEffect(() => {
        if (!searchTerm) {
            setFilteredCountries(COUNTRY_CODES);
        } else {
            const filtered = COUNTRY_CODES.filter(country =>
                country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                country.code.includes(searchTerm)
            );
            setFilteredCountries(filtered);
        }
    }, [searchTerm]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Focus search input when dropdown opens
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    // Handle country selection
    const handleCountrySelect = (country) => {
        onChange(`${country.code}-${country.country}`);
        setIsOpen(false);
        setSearchTerm('');
    };

    // Handle dropdown toggle
    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSearchTerm('');
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Selected Country Display */}
            <button
                type="button"
                onClick={handleToggle}
                className={`bg-[#0B111D] border ${error ? 'border-red-400' : 'border-[#717892]'} rounded-l-lg px-3 py-3 text-textPrimary focus:border-ttorange focus:outline-none flex items-center space-x-2 min-w-[100px] md:min-w-[120px] hover:border-[#45D1FF] transition-colors`}
            >
                <span className="text-lg">{selectedCountry.flag}</span>
                <span className="text-sm font-medium">{selectedCountry.code}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-[#0B111D] border border-[#717892] rounded-lg shadow-xl z-50 max-h-60 overflow-hidden">
                    {/* Search Input */}
                    <div className="p-3 border-b border-[#717892]">
                        <input
                            ref={searchInputRef}
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search country..."
                            className="w-full bg-[#1a1a1a] border border-[#717892] rounded px-3 py-2 text-textPrimary text-sm focus:border-[#45D1FF] focus:outline-none"
                        />
                    </div>

                    {/* Countries List */}
                    <div className="max-h-40 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((country, index) => (
                                <button
                                    key={`${country.country}-${index}`}
                                    type="button"
                                    onClick={() => handleCountrySelect(country)}
                                    className={`w-full px-3 py-2 text-left hover:bg-[#1a1a1a] transition-colors flex items-center space-x-3 ${
                                        selectedCountry && `${selectedCountry.code}-${selectedCountry.country}` === `${country.code}-${country.country}` ? 'bg-[#1a1a1a]' : ''
                                    }`}
                                >
                                    <span className="text-lg">{country.flag}</span>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-textPrimary text-sm font-medium truncate">
                                            {country.name}
                                        </div>
                                        <div className="text-slate-400 text-xs">
                                            {country.country} • {country.code}
                                        </div>
                                    </div>
                                </button>
                            ))
                        ) : (
                            <div className="px-3 py-4 text-slate-400 text-sm text-center">
                                No countries found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CountryCodeSelector;