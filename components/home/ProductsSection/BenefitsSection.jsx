import {motion, AnimatePresence} from "framer-motion"
import { useEffect, useState } from "react"

export default function BenefitsSection() {
    const [currentStep, setCurrentStep] = useState(0)
    
    const benefits = [
        {
            title: "24/7 Support",
            description: "Get access to a transparent and efficient support, as well as a rock solid community.",
            id: "support"
        },
        {
            title: "No Hidden Rules", 
            description: "Our simple trading rules let traders focus on what matters most.",
            id: "rules"
        },
        {
            title: "Payout Fairness",
            description: "We never unfairly deny payouts. Every trader has the right to a fair review.",
            id: "payout"
        }
    ]

    // Auto-cycle through steps every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % benefits.length)
        }, 3000)
        
        return () => clearInterval(interval)
    }, [benefits.length])

    return (
        <section className="w-full py-16 md:py-20 bg-[#0B111D]">
            <div className="max-w-[1200px] mx-auto px-4 ">
                
                {/* Progress Line with Dots */}
                <div className="relative mb-16">
                    {/* Background Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#2A3441] transform -translate-y-1/2"></div>
                    
                    {/* Progress Line */}
                    <motion.div 
                        className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-forexBlue to-futuresGreen transform -translate-y-1/2"
                        initial={{ width: "0%" }}
                        animate={{ 
                            width: currentStep === 0 ? "0%" : currentStep === 1 ? "50%" : "100%" 
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ></motion.div>
                    
                    {/* Dots */}
                    <div className="relative flex justify-between">
                        {benefits.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`w-4 h-4 rounded-full border-2 cursor-pointer ${
                                    index <= currentStep 
                                        ? 'bg-[#4FB242]' 
                                        : 'bg-[#0B111D] border-[#2A3441]'
                                }`}
                                animate={{
                                    scale: index === currentStep ? 1.2 : 1,
                                    boxShadow: index === currentStep 
                                        ? '0 0 20px rgba(1, 138, 243, 0.5)' 
                                        : '0 0 0px rgba(1, 138, 243, 0)'
                                }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setCurrentStep(index)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            className={`relative py-5 px-4 rounded-xl border transition-all duration-500 ${
                                index === currentStep
                                    ? 'bg-[#101621] border-[#5F6776]'
                                    : 'bg-[#101621] border-[#2A3441]'
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0,
                                scale: index === currentStep ? 1.02 : 1
                            }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                scale: { duration: 0.3 }
                            }}
                        >
                            {/* Glow effect for active card */}
                            <AnimatePresence>
                                {index === currentStep && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-forexBlue/5 to-futuresGreen/5 rounded-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </AnimatePresence>

                            <div className="relative z-10">
                                {/* Title */}
                                <motion.h3 
                                    className={`text-xl  font- mb-4 transition-colors duration-300 ${
                                        index === currentStep ? 'text-textPrimary' : 'text-[#8A94A6]'
                                    }`}
                                    animate={{
                                        color: index === currentStep ? '#FFFFFF' : '#8A94A6'
                                    }}
                                >
                                    {benefit.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p 
                                    className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                                        index === currentStep ? 'text-textSecondary' : 'text-[#6B7280]'
                                    }`}
                                    animate={{
                                        color: index === currentStep ? '#C4CDD5' : '#6B7280'
                                    }}
                                >
                                    {benefit.description}
                                </motion.p>

                              
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
