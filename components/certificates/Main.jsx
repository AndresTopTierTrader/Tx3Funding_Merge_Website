'use client'

import React, { useState, useEffect } from "react";
import { ENVIRONMENT_URL } from "@/constants/global";

//Functions & Hooks
import { FaArrowRight } from 'react-icons/fa';
import { track } from '@vercel/analytics';

//Images
import Image from 'next/image';

// Images
import DiscordIcon from './assets/Discord.svg';
import TwitterIcon from './assets/Twitter.svg';
import Facebook from './assets/Facebook.svg';
import Instagram from './assets/Instagram.svg';
import Youtube from './assets/Youtube.svg';
import TikTok from './assets/TikTok.svg';

// Images with Color
import DiscordIconColor from './assets/DiscordColor.svg';
import TwitterIconColor from './assets/TwitterColor.svg';
import FacebookColor from './assets/FacebookColor.svg';
import InstagramColor from './assets/InstagramColor.svg';
import YoutubeColor from './assets/YoutubeColor.svg';
import TikTokColor from './assets/TikTokColor.svg';

const bgImageStyle = {
  backgroundColor: 'hsla(219,45%,7%,1)',
  backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `,
  width: "auto", // Adjust width as needed
  height: "auto", // Adjust height as needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

function Main({ translations }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [certificateId, setCertificateId] = useState('');
  const [isValidUUID, setIsValidUUID] = useState(false);

  // UUID validation regex pattern
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  // Validate certificate ID when it changes
  useEffect(() => {
    const isValid = uuidPattern.test(certificateId);
    setIsValidUUID(isValid);
  }, [certificateId]);

  const handleCheckCertificate = (e) => {
    e.preventDefault();
    
    if (isValidUUID) {
      // Use analytics if needed
      track("Certificate Verification - Checked Certificate");
      
      // Navigate to the certificate URL with the UUID
      window.location.href = `${ENVIRONMENT_URL}/certificates/${certificateId}`;
    }
  };

  const socialIcons = [
    { id: 'instagram', default: Instagram, color: InstagramColor, alt: 'Instagram Icon', link: "https://www.instagram.com/toptier.trader/" },
    { id: 'discord', default: DiscordIcon, color: DiscordIconColor, alt: 'Discord Icon', link: "https://discord.com/invite/WrC2xdZZng" },
    { id: 'youtube', default: Youtube, color: YoutubeColor, alt: 'Youtube Icon', link: "https://www.youtube.com/@toptier.trader" },
    { id: 'twitter', default: TwitterIcon, color: TwitterIconColor, alt: 'Twitter Icon', link: "https://x.com/_toptier_trader" },
    { id: 'facebook', default: Facebook, color: FacebookColor, alt: 'Facebook Icon', link: "https://www.facebook.com/TopTier.Trader/" },
    { id: 'tiktok', default: TikTok, color: TikTokColor, alt: 'Tiktok Icon', link: "https://www.tiktok.com/@toptier.trader" }
  ];

  const firstRow = socialIcons.slice(0, 3);
  const secondRow = socialIcons.slice(3);

  const {
    h1_title_1,
    h1_title_2,
    subtitle,
    p1,
    input_placeholder,
    CTA,
    p2,
    faqButton,
    error,
  } = translations

  return (
    <main style={bgImageStyle} className="flex flex-col mb:mt-0 mb:pb-20 mb:pt-40 -mt-[100px] -mb-10 pt-48 mb:py-56 pb-14 ">
      <div className='mb:max-w-[1100px] flex flex-col items-center w-full mb:px-10'>
        {/* Title & Paragraph*/}
        <div className='flex flex-col px-6 mb:px-0 items-center max-w-[600px] '>
          <h1 className="text-center text-4xl mb:text-6xl font-light text-white">
            {h1_title_1}
            <span className="bg-gradient-to-r py-1 font-medium from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> {h1_title_2}</span> <br />
          </h1>
          <h2 className="mt-8 text-center text-lg px-12 mb:px-0 mb:text-xl text-secondary ">{subtitle}</h2>
        </div>

        <p className="text-center text-base mt-10 px-12 mb:px-0 mb:text-xl text-secondary mb:w-2/4">{p1}</p>

        <div className="mt-4">
          <input 
            type="text" 
            className="py-2 px-5 mt-4 rounded-lg w-64"
            placeholder={input_placeholder}
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
        </div>

        {/* Certificate validation message */}
        {certificateId && !isValidUUID && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        {/* Search Certificate*/}
        <div className='flex mb:flex-row mt-10 flex-col items-center justify-center'>
          <button
            onClick={handleCheckCertificate}
            disabled={!isValidUUID}
            className={`flex flex-row w-fit ${
              isValidUUID ? 'bg-ttorange hover:bg-orange-800' : 'bg-gray-500 cursor-not-allowed'
            } text-white py-2 rounded-lg px-3 items-center text-base transition-all`}
          >
            <p className='text-base'>{CTA}</p>
            <FaArrowRight className="w-3 h-3 ml-2" />
          </button>
        </div>

        <p className="text-center text-base mt-10 px-12 mb:px-0 mb:text-xl text-secondary mb:w-2/4">{p2}</p>

        {/* Buttons */}
        <div className='flex mb:flex-row flex-col items-end mx-8 mt-8 mb-16 mb:mb-0 mb:mx-0'>
          <a href="https://help.toptiertrader.com">
            <button className='flex flex-row items-center py-2 px-4 border border-secondary rounded-lg text-white'>
              {faqButton}
              <FaArrowRight className='w-3 h-3 ml-2' />
            </button>
          </a>
        </div>

        <section className="flex flex-col mb:flex-row justify-center mb-10 mt-0 mb:mt-20">
          <div className="flex flex-row">
            {firstRow.map((icon) => (
              <a href={icon.link} key={icon.alt} target='_blank'>
                <div
                  key={icon.id}
                  className="relative mx-4 w-20 h-20"
                  onMouseEnter={() => setHoveredIcon(icon.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <Image
                    src={icon.default}
                    alt={icon.alt}
                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                  <Image
                    src={icon.color}
                    alt={icon.alt}
                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="flex flex-row mb:mt-0 mt-6">
            {secondRow.map((icon) => (
              <a href={icon.link} key={icon.alt} target='_blank'>
                <div
                  key={icon.id}
                  className="relative mx-4 w-20 h-20"
                  onMouseEnter={() => setHoveredIcon(icon.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <Image
                    src={icon.default}
                    alt={icon.alt}
                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                  <Image
                    src={icon.color}
                    alt={icon.alt}
                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Main