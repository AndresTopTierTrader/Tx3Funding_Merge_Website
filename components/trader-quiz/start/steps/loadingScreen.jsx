import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import mainImg from '../../assets/main.svg';
import {paths} from '../utils/paths' 

const LoadingScreen = ({ setCurrentStep, setUserData, answers, translations }) => {

    const {
        loadingMessage,
        processingData,
        selectingAddOns,
        selectingAccountSize
    } = translations


    useEffect(() => {
        const matchUserData = () => {
            const matchedPath = paths.find(path => 
                path.one === answers.one &&
                path.two === answers.two &&
                path.three === answers.three &&
                path.four === answers.four &&
                path.five === answers.five &&
                path.six === answers.six
            );

            if (matchedPath) {
                setUserData(prevData => ({
                    ...prevData,
                    accountSize: matchedPath.account,
                    avatar: matchedPath.avatar,
                    addOns: Array.isArray(matchedPath.addOns) ? matchedPath.addOns.join(', ') : matchedPath.addOns
                }));
            }
        };

        matchUserData();
    }, [answers, setUserData]);

    //Animation
    const [loading, setLoading] = useState(true);
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const steps = [processingData, selectingAddOns, selectingAccountSize];



    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setCurrentStep(9); // Set currentStep to 9 after 6000ms
        }, 6000);

        return () => clearTimeout(timer);
    }, [setCurrentStep]);

    useEffect(() => {
        if (currentPhrase < steps.length - 1) {
            const timer = setTimeout(() => {
                setCurrentPhrase(prev => prev + 1);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [currentPhrase]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: { ease: "easeInOut" }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const circleVariants = {
        start: { scale: 0.2, rotate: 0 },
        end: {
            scale: 1,
            rotate: 360,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="flex flex-col items-center justify-center "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.div className="text-gray-800 text-center" variants={itemVariants}>
                    <motion.h2 className="text-3xl text-white font-bold mb-4" variants={itemVariants}>
                        {loadingMessage}
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-8 text-white font-light"
                        variants={itemVariants}
                        key={currentPhrase}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {steps[currentPhrase]}
                    </motion.p>

                    <motion.div
                        className="flex justify-center space-x-2 mt-4"
                        variants={itemVariants}
                    >
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-3 h-3 bg-slate-300 rounded-full"
                                initial="start"
                                animate="end"
                                variants={circleVariants}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: index * 0.15
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LoadingScreen;