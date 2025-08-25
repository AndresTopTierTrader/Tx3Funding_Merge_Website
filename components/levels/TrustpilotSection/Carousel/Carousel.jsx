'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './trustAnimation.css'

//Images English

import imgOne from './assets/imgOne.png';
import imgTwo from './assets/imgTwo.png';
import imgThree from './assets/imgThree.png';
import imgFour from './assets/imgFour.png';
import imgFive from './assets/imgFive.png';
import imgSix from './assets/imgSix.png';
import imgSeven from './assets/imgSeven.png';
import imgEight from './assets/imgEight.png';
import imgNine from './assets/imgNine.png';

//Images Spanish
import imgOneEs from './assets/imgOneEs.png';
import imgTwoEs from './assets/imgTwoEs.png';
import imgThreeEs from './assets/imgThreeEs.png';
import imgFourEs from './assets/imgFourEs.png';
import imgFiveEs from './assets/imgFiveEs.png';
import imgSixEs from './assets/imgSixEs.png';
import imgSevenEs from './assets/imgSevenEs.png';
import imgEightEs from './assets/imgEightEs.png';
import imgNineEs from './assets/imgNineEs.png';

const Carousel = ({mainLang}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagesEn = [
        { src: imgOne, name: 'Overall Payouts Certificate' },
        { src: imgTwo, name: 'Payout Certificate' },
        { src: imgThree, name: 'Withdrawal Certificate' },
        { src: imgFour, name: 'Certified Funded Trader' },
        { src: imgFive, name: 'Profit Split Certificate' },
        { src: imgSix, name: 'Funded Trader Certificate' },
        { src: imgSeven, name: 'Funded Account Certificate' },
        { src: imgEight, name: 'Funded Account Certificate' },
        { src: imgNine, name: 'Funded Account Certificate' }
    ];

    const imagesEs = [
        { src: imgOneEs, name: 'Certificado de pagos globales' },
        { src: imgTwoEs, name: 'Certificado de pago' },
        { src: imgThreeEs, name: 'Certificado de retiro' },
        { src: imgFourEs, name: 'Operador financiado certificado' },
        { src: imgFiveEs, name: 'Certificado de división de beneficios' },
        { src: imgSixEs, name: 'Certificado de operador financiado' },
        { src: imgSevenEs, name: 'Certificado de cuenta financiada' },
        { src: imgEightEs, name: 'Certificado de cuenta financiada' },
        { src: imgNineEs, name: 'Certificado de cuenta financiada' }
    ];

    const [images, setImages] = useState(imagesEn)

    useEffect(() => {
        if (mainLang === 'es') {
            setImages(imagesEs)
        } else {
            setImages(imagesEn)}
    }, [mainLang]);

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
            <ul className='slide-track flex items-center gap-12 md:gap-24 py-8 bg-transparent '>
                {images.map((image, index) => (
                    <li key={`track1 - ${image.name}-${index}`} className='slide grid -mx-4 md:-mx-8 place-items-center'>
                        <Image src={image.src} alt={image.name} className='object-contain transition-all duration-300 ease-out rounded-sm hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:scale-110' />

                    </li>
                ))}
                {images.map((image, index) => (
                    <li key={`track2 - ${image.name}-${index}`} className='slide grid -mx-4 md:-mx-8 place-items-center'>
                        <Image src={image.src} alt={image.name} className='object-contain' />
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Carousel;