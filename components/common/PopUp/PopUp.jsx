'use client'

import React, { useState, useEffect } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { useTranslation } from "next-i18next";
import { fetchCountry } from '@/utils/misc/fetchCountry';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ENVIRONMENT_URL } from '@/constants/global';
import { API_URL } from '@/constants/global';

function PopUp() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [lastEmailTime, setLastEmailTime] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language.split('-')[0])
    const [assignedUrl, setAssignedUrl] = useState("");

    useEffect(() => {
        setCurrentLanguage(i18n.language.split('-')[0]);
    }, [i18n.language]);

    useEffect(() => {
        if (currentLanguage == 'en') {
            setAssignedUrl(`${API_URL}/sendgrid/welcome-signup-en`);
        }
        if (currentLanguage == 'es') {
            setAssignedUrl(`${API_URL}/sendgrid/welcome-signup-es`);
        }
    }, [i18n.language]);

    useEffect(() => {
        const isPopUpClosed = localStorage.getItem('popUpClosed');
        if (!isPopUpClosed) {
            setTimeout(() => {
                setIsOpen(true);
            }, 7000);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('popUpClosed', 'true');
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setSuccess('');
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const formatDate = (date) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const currentTime = new Date().getTime();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (currentTime - lastEmailTime < 60000) {
            setError('Please wait a minute before sending another email.');
            return;
        }

        setIsLoading(true);

        try {
            // Fetch country
            const country = await fetchCountry();

            // Prepare data for API
            const apiData = {
                "email": email
            };

            // Send data to API
            const response = await fetch(assignedUrl, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            // Prepare data for Firestore
            const firestoreData = {
                email,
                country,
                date: formatDate(new Date())
            };

            // Send data to Firestore
            const db = getFirestore();
            await addDoc(collection(db, 'popUpAbTesting'), firestoreData);

            // Handle success
            setEmail('');
            setError('');
            setSuccess('Successfully subscribed!');
            setLastEmailTime(currentTime);
            setTimeout(() => {
                handleClose();
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
            setError('Sorry! We are having issues. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='fixed inset-0 flex justify-center items-center -mt-10 z-50 bg-black bg-opacity-50 backdrop-blur-sm'
                >
                    <motion.div 
                        initial={{ scale: 0.5, y: 100, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.5, y: 100, opacity: 0 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            duration: 0.3
                        }}
                        className='bg-white mx-8 px-8 mb:px-12 mb:py-16 mb:mx-24 -mt-10 rounded-2xl mb:max-w-[450px]'
                    >
                        <div className='flex flex-row justify-end'>
                            <MdOutlineCancel
                                className='text-slate-400 mb:-mt-10 mb:-mr-4 w-6 h-6 -ml-10 mb:ml-0 mt-5 cursor-pointer'
                                onClick={handleClose}
                            />
                        </div>
                        <div className='mb:mt-10'>
                            <p className='text-secondary font-medium text-xl mb:text-3xl'> {t('common:pop_up_title')} {' '} <span className='text-ttblue font-semibold'>{t('common:pop_up_span')}</span></p>
                            <p className='text-gray font-semibold mt-5' >{t('common:pop_up_cta')}  <span className='text-ttorange font-bold'> {t('common:ab_test_popup')} </span> </p>
                            <form onSubmit={handleSubmit} className='flex flex-col mb:flex-row items-center pb-2 mb:pb-0'>
                                <input
                                    type="text"
                                    className={`bg-slate-100 w-full mt-3 py-3 px-5 rounded-xl ${error && 'border border-red-500'}`}
                                    placeholder='Your Email Here'
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <button 
                                    type='submit' 
                                    className={`bg-ttorange w-full mb:w-1/4 px-5 text-textPrimary font-semibold rounded-2xl py-3 text-center mt-3 mb:ml-3 cursor-pointer ${!isChecked && 'opacity-50 cursor-not-allowed'} flex items-center justify-center`} 
                                    disabled={!isChecked || isLoading}
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin h-5 w-5 text-textPrimary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        t('common:pop_up_send')
                                    )}
                                </button>
                            </form>
                            <div className='flex flex-row items-start mt-5'>
                                <input
                                    type="checkbox"
                                    id="consentCheckbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className='mr-2 mt-1 cursor-pointer'
                                />
                                <label htmlFor="consentCheckbox" className='text-secondary text-xs pb-10'>
                                    {t('common:consent_1')} <a href={`${ENVIRONMENT_URL}/en/privacy`}><span className='underline'>  {t('common:consent_2')}</span></a> {t('common:consent_3')}
                                </label>
                            </div>
                            {error && <p className='bg-red-400 rounded-xl -mt-6 mb-10  py-4 px-3 text-textPrimary mb:mt-2'>{error}</p>}
                            {success && <p className='bg-green-500 text-textPrimary px-4 py-2 mb:py-4 mb-10 mb:mb-0 rounded-xl'>{success}</p>}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PopUp;