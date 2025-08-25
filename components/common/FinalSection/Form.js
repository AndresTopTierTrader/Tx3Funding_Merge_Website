'use client'
import { track } from '@vercel/analytics';
import React, { useState } from 'react';

function Form({locale, formTranslations }) {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const mainLang = locale.split('-')[0]

  const validatePhone = (phone) => {
    // Allow only digits, up to 12
    return /^\d{1,12}$/.test(phone);
  };

  const validateEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCountryCodeChange = (event) => {
    let value = event.target.value;
    
    // Si está vacío, reseteamos
    if (value === '') {
      setCountryCode('');
      return;
    }
    
    // Asegurar que siempre empiece con +
    if (!value.startsWith('+')) {
      value = '+' + value;
    }
    
    // Filtrar para permitir solo el + y hasta 4 dígitos
    if (/^\+\d{0,4}$/.test(value)) {
      setCountryCode(value);
    }
    
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handlePhoneNumberChange = (event) => {
    // Obtener solo los dígitos
    const digits = event.target.value.replace(/\D/g, '');
    
    if (digits.length <= 12) {
      // Formatear como (zzz) zzz zzz
      let formattedNumber = '';
      
      if (digits.length > 0) {
        if (digits.length <= 3) {
          formattedNumber = `(${digits}`;
        } else if (digits.length <= 6) {
          formattedNumber = `(${digits.substring(0, 3)}) ${digits.substring(3)}`;
        } else {
          formattedNumber = `(${digits.substring(0, 3)}) ${digits.substring(3, 6)} ${digits.substring(6)}`;
        }
      }
      
      setPhoneNumber(formattedNumber);
    }
    
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date().getTime();
    
    // Validar email
    if (!email || !validateEmail(email)) {
      setError(formTranslations.emailError || 'Please enter a valid email address.');
      return;
    }
    
    // Validar número de teléfono (extraer solo dígitos para validación)
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (!digitsOnly || !validatePhone(digitsOnly)) {
      setError(formTranslations.phoneError || 'Please enter a valid phone number.');
      return;
    }
    
    if (!countryCode || countryCode === '+') {
      setError(formTranslations.countryCodeError || 'Please enter a country code.');
      return;
    }
    
    if (currentTime - lastSubmitTime < 60000) {
      setError(formTranslations.waitError || 'Please wait a minute before submitting again.');
      return;
    }

    const formData = {
      email: email,
      phone: `${countryCode}${phoneNumber}`,
      language: mainLang
    };

    // Submit to Formspree
    fetch('https://formspree.io/f/xblgagek', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        setCountryCode('');
        setPhoneNumber('');
        setEmail('');
        setError('');
        setLastSubmitTime(currentTime);
        track('Common - Submit Form'); // Actualizado para reflejar envío de formulario completo
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .catch((error) => {
      console.error('Error:', error);
      setError(formTranslations.submitError || 'Failed to submit. Please try again later.');
    });
  };

  return (
    <div className=''>
      <p className="text-white font-normal text-xl py-3">
        {formTranslations.formTitle1} <br /> {formTranslations.formTitle2}
      </p>
      <p className='text-[#FF532D] text-base font-bold'>
        {formTranslations.formLoop}
      </p>
      <p className='text-[#717892] text-sm max-w-[450px] py-3'>
        {formTranslations.formContent1} {" "}
        {formTranslations.formContent2}
      </p>
      <form onSubmit={handleSubmit} className='mb-3'>
        {/* Email input */}
        <div className="flex items-center mb-3">
          <input
            type="email"
            className="h-10 bg-[#252832] text-white w-full px-3 text-sm rounded-lg"
            placeholder={formTranslations.emailHere || "email@example.com"}
            value={email}
            onChange={handleEmailChange}
            suppressHydrationWarning={true}
          />
        </div>
        
        {/* Phone input */}
        <div className="flex items-center">
          <input
            type="text"
            className="h-10 bg-[#252832] text-white w-12 pl-3 text-sm rounded-l-lg"
            placeholder="+00"
            value={countryCode}
            onChange={handleCountryCodeChange}
            suppressHydrationWarning={true}
          />
          <input
            type="tel"
            className="h-10 bg-[#252832] text-white w-36 mb:w-44 px-3 text-sm rounded-r-lg"
            placeholder={formTranslations.phoneHere || "(123) 456 789"}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            suppressHydrationWarning={true}
          />
          <button type="submit" className='bg-[#1769E5] text-sm text-white text-md px-6 py-2.5 ml-3 rounded-lg'>
            {formTranslations.formSubmit}
          </button>
        </div>
        {error && <p className="bg-red-400 text-white py-4 px-10 mt-10 rounded-xl">{error}</p>}
      </form>
      {isSubmitted && <p className="bg-green-300 text-gray-800 py-4 px-10 mt-10 rounded-xl">{formTranslations.successMessage || "Your information has been successfully submitted!"}</p>}
    </div>
  );
}

export default Form;