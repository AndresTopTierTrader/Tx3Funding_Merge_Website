import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

function SixthQuestion({ setCurrentStep, setAnswers, translations }) {

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

    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState('');

    function handleSubmit() {
        if (selectedOption) {
            setCurrentStep(8);
            setAnswers(prevAnswers => ({
                ...prevAnswers,
                six: selectedOption.value
            }));
        } else {
            setError('Please select an option before proceeding.');
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
        { id: 'oneToThreeMonths', label: q1, value: 'Modest' },
        { id: 'threeToTwelveMonths', label: q2, value: 'Modest' },
        { id: 'oneToThreeYears', label: q3, value: 'Modest' },
        { id: 'threeToFiveYears', label: q4, value: 'Big' },
        { id: 'moreThanFiveYears', label: q5, value: 'Big' }
    ];

    return (
        <motion.div
            className='flex flex-col items-start w-full px-8'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.p variants={itemVariants} className='font-light text-textPrimary text-3xl mt-5 mb:mt-0 mb:text-5xl'>{t1_1}</motion.p>
            <motion.p variants={itemVariants} className='bg-gradient-to-r from-ttblue py-0 mb:py-1 to-ttelectricBlue font-medium inline-block text-transparent bg-clip-text text-3xl mb:text-5xl'>{t1_2}</motion.p>
            <motion.p variants={itemVariants} className='mt-3 text-secondary'>
            {subtitle}
            </motion.p>

            <div className='flex flex-col items-start my-5 mb:my-10'>
                {options.map((option) => (
                    <motion.div key={option.id} className='flex flex-row mt-4' variants={itemVariants}>
                        <input
                            type="radio"
                            id={option.id}
                            name="tradingExperience"
                            value={option.id}
                            className='mr-2'
                            onChange={() => {
                                setSelectedOption(option);
                                setError('');
                            }}
                            checked={selectedOption.id === option.id}
                        />
                        <label htmlFor={option.id} className='text-textPrimary font-light text-base mb:text-xl'>
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
                className={`bg-ttorange flex flex-row w-full justify-center mb:w-fit items-center text-textPrimary rounded-lg text-base px-10 py-2 mt-5 mb:mt-6`}
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

export default SixthQuestion;