'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './animation.css'

//Images

import imgOne from './assets/imgOne.png';
import imgTwo from './assets/imgTwo.png';
import imgThree from './assets/imgThree.png';
import imgFour from './assets/imgFour.png';
import imgFive from './assets/imgFive.png';
import imgSix from './assets/imgSix.png';
import imgSeven from './assets/imgSeven.png';


import imgOneEs from './assets/imgOneEs.png';
import imgTwoEs from './assets/imgTwoEs.png';
import imgThreeEs from './assets/imgThreeEs.png';
import imgFourEs from './assets/imgFourEs.png';
import imgFiveEs from './assets/imgFiveEs.png';
import imgSixEs from './assets/imgSixEs.png';
import imgSevenEs from './assets/imgSevenEs.png';


const Carousel = ({locale}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: imgOne, name: 'Overall Payouts Certificate' },
        { src: imgTwo, name: 'Payout Certificate' },
        { src: imgThree, name: 'Withdrawal Certificate' },
        { src: imgFour, name: 'Certified Funded Trader' },
        { src: imgFive, name: 'Profit Split Certificate' },
        { src: imgSix, name: 'Funded Trader Certificate' },
        { src: imgSeven, name: 'Funded Account Certificate' },

    ];

    const imagesEs = [
        { src: imgOneEs, name: 'Overall Payouts Certificate' },
        { src: imgTwoEs, name: 'Payout Certificate' },
        { src: imgThreeEs, name: 'Withdrawal Certificate' },
        { src: imgFourEs, name: 'Certified Funded Trader' },
        { src: imgFiveEs, name: 'Profit Split Certificate' },
        { src: imgSixEs, name: 'Funded Trader Certificate' },
        { src: imgSevenEs, name: 'Funded Account Certificate' },

    ];

    const currentImages = locale === 'es' ? imagesEs : images;

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <article className='slider overflow-x-hidden max-w-[800px] mb:max-w-[1900px] fadeIn'>
            <ul className='slide-track flex items-center gap-12 md:gap-24 py-8 bg-transparent '>
                {currentImages.map((image, index) => (
                    <li key={`track1 - ${image.name}-${index}`} className='slide grid -mx-20 md:-mx-10 place-items-center'>
                        <Image src={image.src} alt={image.name} className='object-contain w-28 mb:w-44 transition-all duration-300 ease-out rounded-sm hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:scale-110' />
                    </li>
                ))}
                {currentImages.map((image, index) => (
                    <li key={`track2 - ${image.name}-${index}`} className='slide grid -mx-20 md:-mx-10 place-items-center'>
                        <Image src={image.src} alt={image.name} className='object-contain w-28 mb:w-44 transition-all duration-300 ease-out rounded-sm hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:scale-110' />
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Carousel;