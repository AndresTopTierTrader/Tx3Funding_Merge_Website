'use client'

import { useState } from 'react';

export default function Main() {
  const [theme, setTheme] = useState('dark');

  const brandColors = {
    dark: {
      primary: {
        name: 'Primary Brand Colors',
        colors: [
          { name: 'Brand Primary', value: '#45D1FF', var: '--content-brand-primary' },
          { name: 'Brand Secondary', value: '#0052B4', var: '--content-brand-secondary' },
          { name: 'Content Primary', value: '#ffffff', var: '--content-primary' },
          { name: 'Content Primary Inverse', value: '#0B111D', var: '--content-primary-inverse' }
        ]
      },
      surfaces: {
        name: 'Surface Colors',
        colors: [
          { name: 'Surface Primary', value: '#0B111D', var: '--surface-primary' },
          { name: 'Surface Secondary', value: '#0A1930', var: '--surface-secondary' },
          { name: 'Surface Tertiary', value: '#717892', var: '--surface-tertiary' },
          { name: 'Surface Hover', value: '#22272f', var: '--surface-hover' }
        ]
      },
      accents: {
        name: 'Accent Colors',
        colors: [
          { name: 'CTA - Orange Primary', value: '#FF532D', var: '--content-red-primary' },
          { name: 'Success - Green Primary', value: '#3fd1c2', var: '--content-green-primary' },
          { name: 'Warning Primary', value: '#fda522', var: '--content-warning-primary' },
          { name: 'Info Primary', value: '#6573f8', var: '--content-info-primary' }
        ]
      },
      borders: {
        name: 'Border Colors',
        colors: [
          { name: 'Border Primary', value: '#717892', var: '--border-primary' },
          { name: 'Border Brand Primary', value: '#45D1FF', var: '--border-brand-primary' },
          { name: 'Border Brand Secondary', value: '#0052B4', var: '--border-brand-secondary' },
          { name: 'Border Content Secondary', value: '#717892', var: '--border-content-secondary' }
        ]
      },
      text: {
        name: 'Text Colors',
        colors: [
          { name: 'Content Secondary', value: '#717892', var: '--content-secondary' },
          { name: 'Content Tertiary', value: '#95a4bb', var: '--content-tertiary' },
          { name: 'Content Caption', value: '#9FA6B2', var: '--content-caption' },
          { name: 'Content White', value: '#ffffff', var: '--content-white' }
        ]
      }
    },
    light: {
      primary: {
        name: 'Primary Brand Colors',
        colors: [
          { name: 'Brand Primary', value: '#0052B4', var: '--content-brand-primary' },
          { name: 'Brand Secondary', value: '#45D1FF', var: '--content-brand-secondary' },
          { name: 'Content Primary', value: '#0B111D', var: '--content-primary' },
          { name: 'Content Primary Inverse', value: '#ffffff', var: '--content-primary-inverse' }
        ]
      },
      surfaces: {
        name: 'Surface Colors',
        colors: [
          { name: 'Surface Primary', value: '#ffffff', var: '--surface-primary' },
          { name: 'Surface Secondary', value: '#f9fafb', var: '--surface-secondary' },
          { name: 'Surface Tertiary', value: '#eaeef4', var: '--surface-tertiary' },
          { name: 'Surface Hover', value: '#f3f5f7', var: '--surface-hover' }
        ]
      },
      accents: {
        name: 'Accent Colors',
        colors: [
          { name: 'CTA - Orange Primary', value: '#FF532D', var: '--content-red-primary' },
          { name: 'Success - Green Primary', value: '#16a9a0', var: '--content-green-primary' },
          { name: 'Warning Primary', value: '#fda522', var: '--content-warning-primary' },
          { name: 'Info Primary', value: '#6573f8', var: '--content-info-primary' }
        ]
      },
      borders: {
        name: 'Border Colors',
        colors: [
          { name: 'Border Primary', value: '#e4e9f1', var: '--border-primary' },
          { name: 'Border Brand Primary', value: '#0052B4', var: '--border-brand-primary' },
          { name: 'Border Brand Secondary', value: '#45D1FF', var: '--border-brand-secondary' },
          { name: 'Border Content Secondary', value: '#717892', var: '--border-content-secondary' }
        ]
      },
      text: {
        name: 'Text Colors',
        colors: [
          { name: 'Content Secondary', value: '#717892', var: '--content-secondary' },
          { name: 'Content Tertiary', value: '#95a4bb', var: '--content-tertiary' },
          { name: 'Content Caption', value: '#9FA6B2', var: '--content-caption' },
          { name: 'Content White', value: '#ffffff', var: '--content-white' }
        ]
      }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const ColorCard = ({ color }) => (
    <div
      className="group relative bg-white dark:bg-gray-800  rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={() => copyToClipboard(color.value)}
    >
      <div
        className="w-full h-20 rounded-md mb-3 border border-gray-200 dark:border-gray-600"
        style={{ backgroundColor: color.value }}
      ></div>
      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{color.name}</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">{color.value}</p>
      <p className="text-xs text-gray-500 dark:text-gray-500 font-mono mt-1">{color.var}</p>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300 flex items-center justify-center">
        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 px-3 py-1 rounded text-sm">
          Click to copy
        </span>
      </div>
    </div>
  );

  const currentColors = brandColors[theme];

  return (
    <div className={`min-h-screen py-36 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Brand Color Reference
            </h1>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Complete color palette for your trading platform brand
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Theme:
            </span>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
                }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
          </div>
        </div>

        {Object.entries(currentColors).map(([key, section]) => (
          <div key={key} className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {section.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.colors.map((color, index) => (
                <ColorCard key={index} color={color} />
              ))}
            </div>
          </div>
        ))}

        <div className={`mt-12 p-6 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Usage Instructions
          </h3>
          <ul className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>• Click any color card to copy the hex value to your clipboard</li>
            <li>• Use CSS variables in your styles: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var(--content-brand-primary)</code></li>
            <li>• Toggle between light and dark themes to see color variations</li>
            <li>• Brand primary colors are the main colors for your trading platform identity</li>
            <li>• Surface colors are for backgrounds and containers</li>
            <li>• Accent colors are for status indicators and highlights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}