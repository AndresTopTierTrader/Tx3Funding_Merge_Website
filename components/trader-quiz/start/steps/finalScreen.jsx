import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CreateLink from '../utils/createLink'

// Avatar descriptions 
import { useZenAvatarDescription, useDaredevilAvatarDescription, useThinkerAvatarDescription, useMasterTraderAvatarDescription, useGeniusTraderAvatarDescription, useTrailblazerTraderAvatarDescription } from '../utils/avatarDescriptions'

// Avatar imgs
import zenAvatar from '../assets/avatars/zenTrader.svg'
import daredevilAvatar from '../assets/avatars/dareDevil.svg'
import masterTraderAvatar from '../assets/avatars/masterTrader.svg'
import theThinkerAvatar from '../assets/avatars/theThinker.svg'
import geniusTraderAvatar from '../assets/avatars/geniusTrader.svg'
import trailblazerTraderAvatar from '../assets/avatars/theTrailblazer.svg'

function FinalScreen({ userData, locale, translations }) {

    const {
        result,
        avatar,
        accountSize,
        addOns,
        attributes
    } = translations

    const [avatarDescription, setAvatarDescription] = useState()
    const [avatarImg, setAvatarImg] = useState()
    const currentLanguage = locale.split('-')[0]

    const zenAvatarDescription = useZenAvatarDescription()
    const daredevilAvatarDescription = useDaredevilAvatarDescription()
    const masterTraderAvatarDescription = useMasterTraderAvatarDescription()
    const thinkerAvatarDescription = useThinkerAvatarDescription()
    const geniusTraderAvatarDescription = useGeniusTraderAvatarDescription()
    const trailblazerTraderAvatarDescription = useTrailblazerTraderAvatarDescription()

    useEffect(() => {
        switch (userData.avatar) {
            case 'Zen Trader':
                setAvatarDescription(zenAvatarDescription)
                setAvatarImg(zenAvatar)
                break;
            case 'The Daredevil':
                setAvatarDescription(daredevilAvatarDescription)
                setAvatarImg(daredevilAvatar)
                break;
            case 'Master Trader':
                setAvatarDescription(masterTraderAvatarDescription)
                setAvatarImg(masterTraderAvatar)
                break;
            case 'The Thinker':
                setAvatarDescription(thinkerAvatarDescription)
                setAvatarImg(theThinkerAvatar)
                break;
            case 'Genius Trader':
                setAvatarDescription(geniusTraderAvatarDescription)
                setAvatarImg(geniusTraderAvatar)
                break;
            case 'The Trailblazer':
                setAvatarDescription(trailblazerTraderAvatarDescription)
                setAvatarImg(trailblazerTraderAvatar)
                break;
            default:
                break;
        }
    }, [])

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    const scaleIn = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6 }
    }

    return (
        <div className='flex flex-col mb:flex-row items-center w-full justify-around'>
            <motion.div
                className='flex flex-col items-center mb:items-start'
                {...fadeInUp}
            >
                <p className='font-bold text-secondary mb:mb-5 text-lg mb:text-2xl'>{result}</p>
                <motion.div {...scaleIn}>
                    <Image src={avatarImg} alt='avatar-img' className='w-96 h-96' />
                </motion.div>
            </motion.div>
            <motion.div
                className='flex flex-col items-center mb:items-start mt-5 mb:mt-0'
                {...fadeInUp}
            >
                <p className='text-xl text-secondary  font-semibold'>{avatar}</p>
                <p className='font-light text-2xl mb:text-3xl text-textPrimary'>{userData.avatar}</p>

                <div className='flex flex-col mb:flex-row mt-5'>
                    <div className='flex flex-col'>
                        <p className='text-base text-secondary font-semibold text-center mb:text-start'>{accountSize}</p>
                        <p className='font-light text-2xl mb:text-3xl text-textPrimary text-center mb:text-start'>{userData.accountSize}</p>
                    </div>
                    <div className='flex flex-col mb:ml-10 mt-5 mb:mt-0'>
                        <p className='text-base font-semibold text-secondary  text-center mb:text-start'>{addOns}</p>
                        <p className='font-light mb:text-lg text-textPrimary max-w-[300px] text-center mb:text-start'>{userData.addOns}</p>
                    </div>
                </div>

                <motion.div {...fadeInUp}>
                    <p className='font-semibold text-xl text-secondary text-center mb:text-start mt-10 mb:mt-5'>{attributes}</p>
                    <ul className='list-disc list-inside px-8 mb:px-0 text-slate-300'>
                        {avatarDescription && avatarDescription.map((desc, index) => (
                            <motion.div
                                key={index}
                                className='text-base my-2 max-w-[600px] text-secondary'
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                            <p className='text-slate-400'>  <span className='font-medium text-textPrimary' >  0{index+1} &nbsp; {desc.attribute}: </span> {desc.text}  </p>
                            </motion.div>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className='flex flex-col mt-5 mb:mt-5'
                    {...fadeInUp}
                >
                    <CreateLink userData={userData} currentLanguage={currentLanguage} avatarDescription={avatarDescription} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default FinalScreen