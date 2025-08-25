'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './textAnimation.css'

//Images English
import imgOne from './assets/imgOne.svg';
import imgTwo from './assets/imgTwo.png';

//Images Spanish
import imgOneEs from './assets/imgOneEs.svg';
import imgTwoEs from './assets/imgTwoEs.png';


const Carousel = ({ mainLang }) => {

    const imagesEn = [
        { src: imgOne, name: 'Overall Payouts Certificate' },
        { src: imgTwo, name: 'Payout Certificate' },
        { src: imgOne, name: 'Overall Payouts Certificate' },
        { src: imgTwo, name: 'Payout Certificate' },

    ];

    const imagesEs = [
        { src: imgOneEs, name: 'Certificado de pagos globales' },
        { src: imgTwoEs, name: 'Certificado de pago' },
        { src: imgOneEs, name: 'Certificado de pagos globales' },
        { src: imgTwoEs, name: 'Certificado de pago' },
    ];

    const [images, setImages] = useState(imagesEn)

    useEffect(() => {
        if (mainLang === 'es') {
            setImages(imagesEs)
        } else {
            setImages(imagesEn)
        }
    }, [mainLang]);


    return (
        <article className='slider overflow-x-hidden mb:max-w-[1900px] '>
            <ul className='slide-track flex items-center gap-12 md:gap-48 py-8 mb:py-16 bg-transparent '>
                {images.map((image, index) => (
                    <li key={`track1 - ${image.name}-${index}`} className='slide grid mx-48 mb:mx-80 place-items-center scale-[1.7] '>
                        <Image src={image.src} width={800} alt={image.name} loading='lazy' className='transition-all duration-300 ease-out scale-[1.7] mb:scale-[2.8] ' />

                    </li>
                ))}
                {images.map((image, index) => (
                    <li key={`track1 - ${image.name}-${index}`} className='slide grid mx-48 mb:mx-32 place-items-center scale-150'>
                        <Image src={image.src} width={800} alt={image.name} loading='lazy' className='transition-all duration-300 ease-out scale-[1.7] mb:scale-[2.8]' />

                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Carousel;