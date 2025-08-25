'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './animation.css'

//Images English

//Images Spanish
import imgOneEs from './assets/LTimageOneES.png';
import imgTwoEs from './assets/LTimageTwoES.png';
import imgThreeEs from './assets/LTimageThreeES.png';
import imgFourEs from './assets/LTimageFourES.png';
import imgFiveEs from './assets/LTimageFiveES.png';

const CarouselLATAM = ({ mainLang }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);

    const imagesEn = [
        { src: imgOneEs, name: 'Overall Payouts Certificate' },
        { src: imgTwoEs, name: 'Payout Certificate' },
        { src: imgThreeEs, name: 'Withdrawal Certificate' },
        { src: imgFourEs, name: 'Certified Funded Trader' },
        { src: imgFiveEs, name: 'Profit Split Certificate' },
    ];

    const imagesEs = [
        { src: imgOneEs, name: 'Overall Payouts Certificate' },
        { src: imgTwoEs, name: 'Payout Certificate' },
        { src: imgThreeEs, name: 'Withdrawal Certificate' },
        { src: imgFourEs, name: 'Certified Funded Trader' },
        { src: imgFiveEs, name: 'Profit Split Certificate' },
    ];

    useEffect(() => {
        if (mainLang === 'es') {
            setImages(imagesEs)
        } else {
            setImages(imagesEn)
        }
    }, [mainLang])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <article className='slider overflow-x-hidden max-w-[800px] mb:max-w-[1900px] '>
            <ul className='flex items-center gap-12 py-8 bg-transparent slide-track md:gap-24 '>
                {images.map((image, index) => (
                    <li key={`track1 - ${image.name}-${index}`} className='grid -mx-2 slide place-items-center'>
                        <Image src={image.src} alt={image.name} className='object-contain transition-all duration-300 ease-out rounded-sm hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:scale-110' />

                    </li>
                ))}
                {images.map((image, index) => (
                    <li key={`track2 - ${image.name}-${index}`} className='grid -mx-2 slide place-items-center'>
                        <Image src={image.src} alt={image.name} className='object-contain' />
                    </li>
                ))}
                {images.map((image, index) => (
                    <li key={`track3 - ${image.name}-${index}`} className='grid -mx-2 slide place-items-center'>
                        <Image src={image.src} alt={image.name} className='object-contain' />
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default CarouselLATAM;