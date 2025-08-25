'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { animationSteps } from "@/animations/animation";
import { SectionLayout } from "@/components/common/SectionLayout";
import bg from './assets/bg.webp'
import { FaArrowRight } from "react-icons/fa"

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

export function Hero({ translations }) {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);
    const email = "support@toptiertrader.com";

    const handleScroll = () => {
        const element = document.getElementById('sameSecrets');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

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
        <>
            <SectionLayout style={{ backgroundImage: `url(${bg.src})` }} padding className={'md:min-h-[700px]'} >
                <div className="max-w-3xl flex flex-col text-center items-center justify-center md:text-start md:items-start gap-6 pt-12">
                    <motion.h1 {...animationSteps} className="text-3xl md:text-6xl text-white text-balance flex flex-col gap-2 font-light">
                        Exclusive <span className="font-semibold">Military Discount</span> 
                        <span className="text-4xl"> for Active Duty & Veterans </span> 
                    </motion.h1>

                    <p className="md:max-w-[500px] text-slate-300">
                        We're proud to offer an exclusive discount for our active duty service members and veterans.
                    </p>

                    <button
                        onClick={() => setShowModal(true)}
                        className="px-8 py-3 bg-[#FF5533] hover:bg-[#FF6644] rounded-lg font-medium transition-colors flex items-center gap-2 text-white"
                    >
                        Get Military Discount
                        <FaArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </SectionLayout>

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
                                    <h3 className="text-2xl font-medium text-white">Contact Support</h3>
                                </div>

                                <p className="text-[#8B92A8] mb-6">
                                    To claim your military discount, please email our support team with your veteran information. 
                                    Our team will verify your status and provide you with your exclusive discount code.
                                </p>

                                <div className="bg-[#0B111D] border border-[#2A3444] rounded-lg p-4 mb-6">
                                    <p className="text-sm text-[#8B92A8] mb-2">Support Email:</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-white font-medium">{email}</p>
                                        <button
                                            onClick={handleCopyEmail}
                                            className="px-4 py-2 bg-gradient-to-r from-[#0153B4] to-[#45D0FE] rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
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
        </>
    )
}