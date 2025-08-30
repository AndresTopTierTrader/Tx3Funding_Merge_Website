'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './trustAnimation.css'

const Carousel = ({mainLang}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagesEn = [
        { name: 'No Max Drawdown' },
        { name: 'Automated Risk' },
        { name: 'No Time Limit' },
        { name: 'Fast Execution' },
        { name: 'No Swaps' },
        { name: 'No Commissions' },
        { name: 'Low Spreads' }
    ];

    const imagesEs = [
        { name: 'No Max Drawdown' },
        { name: 'Automated Risk' },
        { name: 'No Time Limit' },
        { name: 'Fast Execution' },
        { name: 'No Swaps' },
        { name: 'No Commissions' },
        { name: 'Low Spreads' }
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
                          <p className="bg-[#181D28] py-2 px-4 rounded-lg text-textPrimary font-light text-xs">{image.name}</p>
                    </li>
                ))}
                {images.map((image, index) => (
                    <li key={`track2 - ${image.name}-${index}`} className='slide grid -mx-4 md:-mx-8 place-items-center'>
                       <p className="bg-[#181D28] py-2 px-4 rounded-lg text-textPrimary font-light text-xs">{image.name}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Carousel;