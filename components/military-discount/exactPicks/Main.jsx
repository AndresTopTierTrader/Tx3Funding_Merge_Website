'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TbDiscount } from "react-icons/tb";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import mainImg from './assets/man.png';

const ShieldCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="#6CA4FF" strokeWidth="1.5" />
        <path d="M6 10L8.5 12.5L14 7" stroke="#6CA4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#6CA4FF" strokeWidth="1.5"/>
        <path d="M3 7L12 13L21 7" stroke="#6CA4FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const CopyIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="10" height="10" rx="1" stroke="white" strokeWidth="1.5"/>
        <path d="M12 6V4C12 3.44772 11.5523 3 11 3H3C2.44772 3 2 3.44772 2 4V12C2 12.5523 2.44772 13 3 13H6" stroke="white" strokeWidth="1.5"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export default function ExactPicks() {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);
    const email = "support@toptiertrader.com";

    const animationSteps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const handleCopyEmail = async () => {
        try {
            // Try the modern clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else {
                // Fallback for older browsers or non-secure contexts
                const textArea = document.createElement("textarea");
                textArea.value = email;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                textArea.remove();
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            // Fallback method
            const textArea = document.createElement("textarea");
            textArea.value = email;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Fallback copy failed:', err);
            }
            textArea.remove();
        }
    };

    return (
        <div className="min-h-screen bg-[#0B111D] text-white">
            {/* What We Offer Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 {...animationSteps} className="text-3xl md:text-4xl font-light text-center mb-16">
                        What We Offer
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            {...animationSteps}
                            className="rounded-2xl border border-[#2A3444] bg-[#1A2332] p-8 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className='bg-gradient-to-br from-[#0153B4] to-[#45D0FE] text-white p-1 rounded-lg'>
                                    <TbDiscount className='w-5 h-5' />
                                </div>
                                <h3 className="text-lg font-medium">10% Off All Challenges</h3>
                            </div>
                            <p className="text-[#8B92A8] text-sm leading-relaxed">
                                Or the current best discount as our way of saying thank you for your service.
                            </p>
                        </motion.div>

                        <motion.div
                            {...animationSteps}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl border border-[#2A3444] bg-[#1A2332] p-8 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className='bg-gradient-to-br from-[#0153B4] to-[#45D0FE] text-white p-1.5 rounded-lg'>
                                    <BsLightningChargeFill className='w-4 h-4' />
                                </div>
                                <h3 className="text-lg font-medium">Lighting-Fast Payouts</h3>
                            </div>
                            <p className="text-[#8B92A8] text-sm leading-relaxed">
                                Get your payouts just as quickly, with no delays, every time.
                            </p>
                        </motion.div>

                        <motion.div
                            {...animationSteps}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl border border-[#2A3444] bg-[#1A2332] p-8 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className='bg-gradient-to-br from-[#0153B4] to-[#45D0FE] text-white p-1.5 rounded-lg'>
                                    <IoChatboxEllipsesOutline className='w-4 h-4' />
                                </div>
                                <h3 className="text-lg font-medium">24/7 Support</h3>
                            </div>
                            <p className="text-[#8B92A8] text-sm leading-relaxed">
                                We're here to help you anytime, with support available around the clock.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.h2 {...animationSteps} className="text-3xl md:text-4xl font-light text-center mb-16">
                        How it Works
                    </motion.h2>

                    <div className="space-y-6">
                        <motion.div
                            {...animationSteps}
                            className="rounded-2xl border border-[#2A3444] bg-[#1A2332] p-8 flex items-start gap-6"
                        >
                            <div className="px-6 py-2 bg-gradient-to-r from-[#0153B4] to-[#45D0FE] rounded-lg text-white font-medium text-lg whitespace-nowrap">
                                Step 1
                            </div>
                            <p className="text-white text-lg mt-1">
                                Verify your military status with a Support Team Member.
                            </p>
                        </motion.div>

                        <motion.div
                            {...animationSteps}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl border border-[#2A3444] bg-[#1A2332] p-8 flex items-start gap-6"
                        >
                            <div className="px-6 py-2 bg-gradient-to-r from-[#0153B4] to-[#45D0FE] rounded-lg text-white font-medium text-lg whitespace-nowrap">
                                Step 2
                            </div>
                            <p className="text-white text-lg mt-1">
                                Receive your custom 10% discount code.
                            </p>
                        </motion.div>

                        <motion.div
                            {...animationSteps}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl border border-[#2A3444] bg-[#1A2332] p-8 flex items-start gap-6"
                        >
                            <div className="px-6 py-2 bg-gradient-to-r from-[#0153B4] to-[#45D0FE] rounded-lg text-white font-medium text-lg whitespace-nowrap">
                                Step 3
                            </div>
                            <p className="text-white text-lg mt-1">
                                Select your challenge and start trading.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        {...animationSteps}
                        className="rounded-2xl border border-[#2A3444] bg-gradient-to-r from-[#1A2332] to-black px-4 pt-12 pb-96 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
                    >
                        {/* Background gradient effect */}
                        <div className="absolute right-0 top-0 w-96 h-96  bg-blue-600/20 blur-[150px] rounded-full"></div>

                        <div className="flex-1 z-10">
                            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                                Ready to Deploy<br />Your Skills?
                            </h2>
                            <p className="text-[#8B92A8] mb-8 text-lg">
                                Join thousands of traders earning real funding with<br />a firm that honors your service.
                            </p>

                            <div className="flex items-start gap-3 mb-8">
                                <ShieldCheckIcon />
                                <span className="text-[#8B92A8]">
                                    Click below to claim your military<br />discount now.
                                </span>
                            </div>

                            <button 
                                onClick={() => setShowModal(true)}
                                className="px-8 py-3 bg-[#FF5533] hover:bg-[#FF6644] rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                                Get Military Discount
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="absolute bottom-0 md: right-0 z-10">
                            <Image
                                src={mainImg}
                                alt="US Marine in uniform"
                                className="w-[580px]  object-contain object-top rounded-lg"
                                style={{
                                    objectPosition: '50% 20%'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-[100px] md:top-1/4 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg md:mx-4"
                        >
                            <div className="bg-[#1A2332] border border-[#2A3444] rounded-2xl p-8 relative">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <CloseIcon />
                                </button>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#0153B4] to-[#45D0FE] rounded-lg flex items-center justify-center">
                                        <EmailIcon />
                                    </div>
                                    <h3 className="text-2xl font-medium">Contact Support</h3>
                                </div>

                                <p className="text-[#8B92A8] mb-6">
                                    To claim your military discount, please email our support team with your veteran information. 
                                    Our team will verify your status and provide you with your exclusive discount code.
                                </p>

                                <div className="bg-[#0B111D] border border-[#2A3444] rounded-lg p-4 mb-6">
                                    <p className="text-sm text-[#8B92A8] mb-2">Support Email:</p>
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                                        <p className="text-white font-medium">{email}</p>
                                        <button
                                            onClick={handleCopyEmail}
                                            className="px-4 mt-4 md:mt-0 py-2 bg-gradient-to-r from-[#0153B4] to-[#45D0FE] rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                                        >
                                            <CopyIcon />
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm text-[#8B92A8]">
                                    <p className="font-medium text-white">Please include:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Your full name</li>
                                        <li>Branch of service</li>
                                        <li>Military ID or DD214 (with sensitive info redacted)</li>
                                        <li>Your TopTierTrader account email</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}