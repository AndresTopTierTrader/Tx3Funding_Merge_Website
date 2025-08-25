import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { countryService } from '@/services/country/getCountryService';
import { motion } from 'framer-motion';

function UserData({ onSubmit, translations }) {

    const {
        t1_1,
        t1_2,
        subtitle,
        nameLabel,
        namePlaceholder,
        lastLabel,
        lastPlaceholder,
        emailLabel,
        emailPlaceholder,
        phoneLabel = "Phone Number", // Default value if not provided in translations
        phoneCountryCodePlaceholder = "+XX", // Default value
        phonePlaceholder = "Phone Number", // Default value
        checkbox,
        cta
    } = translations

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        const getCountry = async () => {
            try {
                const countryData = await countryService.fetchCountryFromIP();
                
                // Extract country name from the API response
                const countryName = countryData.country_name || countryData.country || 'Unknown';
                setCountry(countryName);
                setLocation(countryName);
                
            } catch (error) {
                console.error('Error fetching country data:', error);
                setLocation('Unknown');
                setCountry('Unknown');
            }
        };
        getCountry();
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        // Allow only digits, up to 12
        return /^\d{1,12}$/.test(phone);
    };

    const validateCountryCode = (code) => {
        // Must start with + and have 1-4 digits
        return /^\+\d{1,4}$/.test(code);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (newEmail && !validateEmail(newEmail)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleCountryCodeChange = (e) => {
        const value = e.target.value;
        if (value === '' || value === '+' || /^\+\d{0,4}$/.test(value)) {
            setCountryCode(value);
        }
    };

    const handlePhoneNumberChange = (e) => {
        const newPhone = e.target.value.replace(/[^\d]/g, '');
        if (newPhone.length <= 12) {
            setPhoneNumber(newPhone);
            if (newPhone && !validatePhone(newPhone)) {
                setPhoneError('Please enter a valid phone number');
            } else {
                setPhoneError('');
            }
        }
    };

    // Enhanced validation with detailed logging
    const isFormValid = firstName && lastName && email && validateEmail(email) && 
                       countryCode && phoneNumber && validatePhone(phoneNumber) && 
                       location && isChecked;

    // Debug console logs - Add this useEffect to log validation status
    useEffect(() => {
        const validationStatus = {
            firstName: {
                value: firstName,
                isValid: !!firstName,
                length: firstName.length
            },
            lastName: {
                value: lastName,
                isValid: !!lastName,
                length: lastName.length
            },
            email: {
                value: email,
                isValid: !!email,
                isValidFormat: validateEmail(email),
                length: email.length
            },
            countryCode: {
                value: countryCode,
                isValid: !!countryCode,
                isValidFormat: validateCountryCode(countryCode),
                length: countryCode.length
            },
            phoneNumber: {
                value: phoneNumber,
                isValid: !!phoneNumber,
                isValidFormat: validatePhone(phoneNumber),
                length: phoneNumber.length
            },
            location: {
                value: location,
                isValid: !!location,
                length: location.length
            },
            isChecked: {
                value: isChecked,
                isValid: isChecked
            },
            overallFormValid: isFormValid
        };
        
        // Log which fields are failing
        const failingFields = [];
        if (!firstName) failingFields.push('firstName (empty)');
        if (!lastName) failingFields.push('lastName (empty)');
        if (!email) failingFields.push('email (empty)');
        if (email && !validateEmail(email)) failingFields.push('email (invalid format)');
        if (!countryCode) failingFields.push('countryCode (empty)');
        if (countryCode && !validateCountryCode(countryCode)) failingFields.push('countryCode (invalid format)');
        if (!phoneNumber) failingFields.push('phoneNumber (empty)');
        if (phoneNumber && !validatePhone(phoneNumber)) failingFields.push('phoneNumber (invalid format)');
        if (!location) failingFields.push('location (empty)');
        if (!isChecked) failingFields.push('checkbox (not checked)');

  
    }, [firstName, lastName, email, countryCode, phoneNumber, location, isChecked]);

    const getCurrentDate = () => {
        const months = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        const now = new Date();
        return `${months[now.getMonth()]} ${now.getDate()} ${now.getFullYear()}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isFormValid) {
            const currentDate = getCurrentDate();
            const formData = {
                firstName,
                lastName,
                email,
                phone: `${countryCode}${phoneNumber}`,
                location,
                date: currentDate
            };
                        
            // Send to Formspree
            fetch('https://formspree.io/f/xjkyeyda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    // Call the original onSubmit to handle any additional logic
                    onSubmit(formData);
                } else {
                    console.error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
            });
        } 
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }
        }
    };

    return (
        <motion.form 
            className='flex flex-col items-start w-full px-8'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
        >
            <motion.p variants={itemVariants} className='font-light text-white text-3xl mt-5 mb:mt-0 mb:text-5xl'>{t1_1}</motion.p>
            <motion.p variants={itemVariants} className='bg-gradient-to-r from-ttblue py-0 mb:py-1 to-ttelectricBlue font-medium inline-block text-transparent bg-clip-text text-3xl mb:text-5xl'>{t1_2}</motion.p>
            <motion.p variants={itemVariants} className='mt-3 text-secondary'>{subtitle}</motion.p>

            <motion.div variants={itemVariants} className='flex flex-col mb:flex-row mb:mt-10 w-full mb:'>
                <div className='flex flex-col mt-5 mb:mt-0'>
                    <label htmlFor="firstName" className='text-secondary text-sm'>{nameLabel}</label>
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        type="text"
                        id="firstName"
                        className='bg-[#D7E5F3] rounded-lg text-sm mt-2 px-4 py-2'
                        placeholder={namePlaceholder}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className='flex flex-col mt-5 mb:mt-0 mb:ml-5'>
                    <label htmlFor="lastName" className='text-secondary text-sm'>{lastLabel}</label>
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        type="text"
                        id="lastName"
                        className='bg-[#D7E5F3] rounded-lg text-sm mt-2 px-4 py-2'
                        placeholder={lastPlaceholder}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-col mt-5 w-full'>
                <label htmlFor="email" className='text-secondary text-sm'>{emailLabel}</label>
                <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    type="email"
                    id="email"
                    className='bg-[#D7E5F3] rounded-lg text-sm mt-2 px-4 py-2 mb:w-[370px]'
                    placeholder={emailPlaceholder}
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                {emailError && (
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className='text-red-500 text-xs mt-1'
                    >
                        {emailError}
                    </motion.p>
                )}
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-col mt-5 w-full'>
                <label htmlFor="phone" className='text-secondary text-sm'>{phoneLabel}</label>
                <div className='flex flex-row mt-2'>
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        type="text"
                        id="countryCode"
                        className='bg-[#D7E5F3] rounded-lg text-sm px-4 py-2 w-20 mr-2'
                        placeholder={phoneCountryCodePlaceholder}
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                        required
                    />
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        type="tel"
                        id="phoneNumber"
                        className='bg-[#D7E5F3] rounded-lg md:max-w-[300px] text-sm px-4 py-2 flex-1 mb:w-[290px]'
                        placeholder={phonePlaceholder}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        maxLength={12}
                        required
                    />
                </div>
                {phoneError && (
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className='text-red-500 text-xs mt-1'
                    >
                        {phoneError}
                    </motion.p>
                )}
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-row items-start mt-10'>
                <motion.input 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    type="checkbox" 
                    className='mr-2'
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    required
                />
                <p className='text-secondary text-sm mb:max-w-[350px] mb:-mt-1 '>
                    {checkbox}
                </p>
            </motion.div>

            <motion.button 
                variants={itemVariants}
                whileHover={isFormValid ? { scale: 1.03 } : {}}
                whileTap={isFormValid ? { scale: 0.97 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`bg-ttorange flex flex-row items-center text-white w-full mb:w-fit justify-center rounded-lg text-base px-8 py-2 mt-10 ${
                    isFormValid ? 'hover:scale-105 transition-all cursor-pointer' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
                type="submit"
            >
                <p>{cta}</p>
                <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <FaArrowRight className='w-3 h-3 ml-2' />
                </motion.div>
            </motion.button>
        </motion.form>
    );
}

export default UserData;