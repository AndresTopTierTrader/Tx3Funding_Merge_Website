import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

function ThirdQuestion({ setCurrentStep, setAnswers, translations }) {

    const {
        t1_1,
        t1_2,
        subtitle,
        button,
        q1,
        q2,
        q3,
        q4,
        q5
    } = translations

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [error, setError] = useState('');

    function handleSubmit() {
        if (selectedOptions.length > 0) {
            setCurrentStep(5);
            setAnswers(prevAnswers => ({
                ...prevAnswers,
                three: selectedOptions.some(option => 
                    option.label === "Experts Advisor (EA)" || 
                    option.label === "No Minimun Trading Days"
                )
            }));
        } else {
            setError('Please select at least one option before proceeding.');
        }
    }

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

    const buttonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    const options = [
        { id: 'tradeJournal', label: q1, value: 'Short' },
        { id: 'noMinimumTradingDays', label: q2, value: 'Short' },
        { id: 'pipMarginCalculator', label: q3, value: 'Long' },
        { id: 'expertsAdvisor', label: q4, value: 'Weekends' },
        { id: 'economicCalendar', label: q5, value: 'Long' }
    ];

    const handleOptionChange = (option) => {
        setSelectedOptions(prevOptions => {
            const isSelected = prevOptions.some(item => item.id === option.id);
            if (isSelected) {
                return prevOptions.filter(item => item.id !== option.id);
            } else {
                return [...prevOptions, option];
            }
        });
        setError('');
    };

    return (
        <motion.div
            className='flex flex-col items-start w-full px-8'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.p variants={itemVariants} className='mb:text-5xl font-light text-white text-3xl mt-5 mb:mt-0'>{t1_1}</motion.p>
            <motion.p variants={itemVariants} className='bg-gradient-to-r from-ttblue py-0 mb:py-1 to-ttelectricBlue font-medium inline-block text-transparent bg-clip-text text-2xl mb:text-3xl'>{t1_2}</motion.p>
            <motion.p variants={itemVariants} className='mt-3 text-secondary'>
                {subtitle}
            </motion.p>

            <div className='flex flex-col items-start my-5 mb:my-10'>
                {options.map((option) => (
                    <motion.div key={option.id} className='flex flex-row mt-4' variants={itemVariants}>
                        <input
                            type="checkbox"
                            id={option.id}
                            name="tradingTools"
                            value={option.id}
                            className='mr-2'
                            onChange={() => handleOptionChange(option)}
                            checked={selectedOptions.some(item => item.id === option.id)}
                        />
                        <label htmlFor={option.id} className='text-white font-light  text-base mb:text-xl'>
                            {option.label}
                        </label>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className='text-red-500 mb-4'
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>

            <motion.button
                className={`bg-ttorange flex flex-row w-full justify-center mb:w-fit items-center text-white rounded-lg text-base px-10 py-2 mt-5 mb:mt-6`}
                onClick={handleSubmit}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                <p>{button}</p>
                <motion.div>
                    <FaArrowRight className='w-3 h-3 ml-2' />
                </motion.div>
            </motion.button>
        </motion.div>
    );
}

export default ThirdQuestion;