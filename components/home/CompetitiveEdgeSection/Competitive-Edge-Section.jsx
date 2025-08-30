'use client'
import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineShieldCheck } from "react-icons/hi";
import { TfiTarget } from "react-icons/tfi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import payoutImg from './assets/payout.svg'
import Image from 'next/image'
import maleImg from './assets/maleImg.png'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CtaButton from '@/components/common/Buttons/CtaButton';

function CompetitiveEdgeSection({ translations }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const cardVariants = (delay) => ({
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: delay * 0.15
            }
        }
    })

    const bgImageStyle = {
        backgroundColor: '#0B111D',
        backgroundImage: `
        radial-gradient(at 44% 100%, hsla(218,44%,7%,1) 0px, transparent 50%),
        radial-gradient(at 71% 100%, hsla(217,43%,7%,1) 0px, transparent 50%),
        radial-gradient(at 100% 100%, hsla(218,44%,7%,1) 0px, transparent 50%),
        radial-gradient(at 100% 41%, hsla(217,100%,43%,0.13) 0px, transparent 50%),
        radial-gradient(at 100% 72%, hsla(189,100%,56%,0.17) 0px, transparent 50%)
        `
    }

    return (
        <div
            ref={ref}
            className='px-8 mb:px-32 mb:pt-16 pb-32 mb:pb-20 z-20 -mt-1 mb:mt-0 flex flex-col items-center'
            style={bgImageStyle}
        >
            <section className="flex flex-col items-center max-w-[1200px]">
                <div className='flex flex-col mb:flex-row justify-between items-start w-full'>
                    <motion.section
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={titleVariants}
                        className='flex flex-col items-center mb:items-start'
                    >
                        <h3 className='text-textPrimary font-light text-3xl mb:text-4xl text-center mb:text-left max-w-[400px]'>
                            {translations.title}
                        </h3>
                        <p className="pt-5 mb:text-left text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892] max-w-[350px] mb:max-w-[800px]">
                            {translations.desc}
                        </p>
                        <div className='mt-2 mb:mt-5'>
                            <CtaButton
                                utm="https://app.toptiertrader.com/buy-challenge/?el=CompetitiveEdgeSectionCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                                page="Home"
                                section="Competitive Edge Section"
                                translation={translations.cta} />
                        </div>
                     
                    </motion.section>

                    <div className='mb:ml-14 mt-10 mb:mt-0'>
                        <section className='flex flex-col mb:flex-row w-full'>
                            <motion.div
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants(1)}
                                whileHover={{ scale: 1.02 }}
                                className='bg-gradient-to-br border rounded-xl min-w-full mb:min-w-[320px] border-[#717892] from-white/5 to-[#0B111D] p-4'
                            >
                                <HiOutlineShieldCheck className='text-textPrimary w-6 h-6' />
                                <p className="bg-gradient-to-r font-semibold mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text text-xl">{translations.fair}</p>
                                <p className='max-w-full mb:max-w-[260px] font-light mt-8 text-sm text-textPrimary'>{translations.fair_desc}</p>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants(2)}
                                whileHover={{ scale: 1.02 }}
                                className='bg-gradient-to-br ml-0 mt-8 mb:mt-0 mb:ml-4 border rounded-xl border-[#717892] from-white/5 to-[#0B111D] p-4'
                            >
                                <TfiTarget className='text-textPrimary w-6 h-6' />
                                <p className="bg-gradient-to-r font-semibold mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text text-xl">{translations.simple}</p>
                                <p className='max-w-full mb:max-w-[200px] font-light mt-8 text-sm text-textPrimary'>{translations.simple_desc}</p>
                            </motion.div>
                        </section>

                        <section className='flex flex-col mb:flex-row mt-8 mb:mt-4'>
                            <motion.div
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants(3)}
                                whileHover={{ scale: 1.02 }}
                                className='bg-gradient-to-br border rounded-xl w-full mb:w-[180px] border-[#717892] from-white/5 to-[#0B111D] p-4'
                            >
                                <MdOutlineRocketLaunch className='text-textPrimary w-6 h-6' />
                                <p className="bg-gradient-to-r max-w-full mb:max-w-[140px] font-semibold mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text text-xl">{translations.challenge}</p>
                                <p className='max-w-full mb:max-w-[140px] font-light mt-8 mb:mt-[70px] text-sm text-textPrimary'>{translations.challenge_desc}</p>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants(4)}
                                whileHover={{ scale: 1.02 }}
                                className='bg-gradient-to-br border rounded-xl w-full mb:w-[180px] border-[#717892] ml-0 mt-8 mb:mt-0 mb:ml-4 from-white/5 to-[#0B111D] p-4'
                            >
                                <IoChatboxEllipsesOutline className='text-textPrimary w-6 h-6' />
                                <p className="bg-gradient-to-r max-w-full mb:max-w-[140px] font-semibold mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text text-xl">{translations.professional}</p>
                                <p className='max-w-full mb:max-w-[140px] font-light mt-8 text-sm text-textPrimary'>{translations.professional_desc}</p>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants(5)}
                                whileHover={{ scale: 1.02 }}
                                className='bg-gradient-to-br border rounded-xl mt-8 mb:mt-0 w-full mb:w-[180px] border-[#717892] ml-0 mb:ml-4 from-white/5 to-[#0B111D] p-4'
                            >
                                <BiMoneyWithdraw className='text-textPrimary w-6 h-6' />
                                <p className="bg-gradient-to-r max-w-full mb:max-w-[120px] font-semibold mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text text-xl">{translations.payouts}</p>
                                <p className='max-w-full mb:max-w-[140px] font-light mt-8 mb:mt-[50px] text-sm text-textPrimary'>{translations.payouts_desc}</p>
                            </motion.div>
                        </section>
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants(6)}
                    whileHover={{ scale: 1.02 }}
                    className='flex flex-col mb:flex-row bg-gradient-to-br border rounded-xl mb:min-w-[320px] border-[#717892] from-white/5 to-[#0B111D] mt-8 mb:mt-16'
                >
                    <div className='bg-gradient-to-r rounded-t-xl mb:rounded-l-xl mb:rounded-tl-xl mb:rounded-t-none flex flex-row mb:flex-col justify-center items-center from-[#0052B4] to-[#167ACC] text-textPrimary text-center p-3 mb:p-5'>
                        <Image loading='lazy' width={50} height={50} className='w-10 mb:w-14' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={payoutImg} alt='payout-fairness' />
                        <p className='ml-4 mb:ml-0 block mb:hidden text-lg'>{translations.fairness}</p>
                    </div>
                    <div className='flex flex-col p-4 ml-1'>
                        <p className="bg-gradient-to-r font-semibold hidden mb:inline-block from-[#45D1FF] to-[#167BCC] text-transparent bg-clip-text text-xl">{translations.fairness}</p>
                        <p className='text-textPrimary text-sm mt-0 mb:mt-2 font-light max-w-[600px]'>{translations.fairness_desc}</p>
                    </div>
                    <Image loading='lazy' height={90} width={390} src={maleImg} alt='trade-img' className='hidden mb:block object-contain rounded-xl' />
                </motion.div>
            </section>
        </div>
    )
}

export default CompetitiveEdgeSection