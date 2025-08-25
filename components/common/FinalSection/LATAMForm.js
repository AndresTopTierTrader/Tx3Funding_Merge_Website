'use client'

import { track } from '@vercel/analytics';
import React, { useState } from 'react';

function LATAMForm({locale, formTranslations }) {
  
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
      <p className="py-3 text-xl font-normal text-white">
        Empieza a Ganar Como los Pro <br /> Con TopTier Trader
      </p>
      <p className='text-[#FF532D] text-base font-bold'>
        Manténgase al día y obtenga un 20% de DESCUENTO
      </p>
      <p className='text-[#717892] text-sm max-w-[450px] py-3'>
        Con actualizaciones exclusivas, conocimientos exclusivos de la industria y ofertas imperdibles. Únete a más de 100.000 traders y mantén siempre actualizado.
      </p>
      <form onSubmit={handleSubmit} className='mb-3'>
        {/* Email input */}
        <div className="flex items-center mb-3">
          <input
            type="email"
            className="h-10 bg-[#252832] text-white w-full px-3 text-sm rounded-lg"
            placeholder="Tu email aqui"
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
            Enviar
          </button>
        </div>
        {error && <p className="px-10 py-4 mt-10 text-white bg-red-400 rounded-xl">{error}</p>}
      </form>
      {isSubmitted && <p className="px-10 py-4 mt-10 text-gray-800 bg-green-300 rounded-xl">Tu información se ha subido correctamente!</p>}
    </div>
  );
}

export default LATAMForm;