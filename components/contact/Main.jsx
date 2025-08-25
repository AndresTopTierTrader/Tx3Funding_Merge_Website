'use client'

import React, { useState } from "react";

//Functions & Hooks
import { BiLogoDiscordAlt } from "react-icons/bi";
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
  backgroundColor: '#0B111D',
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


  return (
    <main style={bgImageStyle} className="flex flex-col mb:mt-0 mb:pb-20 mb:pt-40 -mt-[100px] -mb-10 pt-48 mb:py-56 pb-14 ">
      <div className='mb:max-w-[1100px] flex flex-col items-center w-full mb:px-10'>
        {/* Title & Paragraph*/}
        <div className='flex flex-col px-6 mb:px-0 items-center max-w-[600px] '>
          <h1 className="text-center text-4xl mb:text-6xl font-light text-white">
            {translations.titleOne}
            <span className="bg-gradient-to-r py-1 font-medium from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> {translations.titleTwo} </span> <br />
          </h1>
          <h2 className="mt-8 text-center text-lg px-12 mb:px-0 mb:text-xl text-secondary "> {translations.content} </h2>
        </div>

        {/* Contact Methods*/}
        <section className='bg-gradient-to-br border border-[#717892] from-white/5 to-[#0B111D] py-5 mb:py-2 my-10 px-10 mb:px-5 rounded-xl flex flex-col  mb:flex-row mx-10 mb:mx-0 mb:items-center mb:w-[700px] mb:justify-around '>

          {/* 24/7 Chat support */}
          <div className='flex flex-col items-center'>
            <p className='font-medium text-center text-slate-300'> 24/7</p>
            <p className='text-white font-light underline cursor-pointer'> {translations.chatSupport} </p>
          </div>



          {/* Line */}
          <div className='my-5 h-0.5 w-full mb:h-16 mb:w-0.5 mb:mx-2 bg-secondary' />

          {/* Email Us */}
          <div className='flex flex-col'>
            <p className='font-medium text-center text-slate-300'> {translations.emailUs} </p>
            <p className='text-white font-light underline cursor-pointer'>support@toptiertrader.com</p>
          </div>


          {/* Line */}
          <div className='my-5 h-0.5 w-full mb:h-16 mb:w-0.5 mb:mx-2 bg-secondary' />

          <div className='flex flex-col items-center'>
            <p className='font-medium text-center text-slate-300'> {translations.callUs} </p>
            <p className='text-white font-light underline cursor-pointer'> +1 (786) 957-8539 </p>
          </div>


        </section>

        {/* Discord and Whatsapp*/}
        <div className='flex mb:flex-row flex-col items-center justify-center'>

          <a href='https://discord.com/invite/WrC2xdZZng'
            onClick={() => track("Contact Section  - Clicked Discord")}
          >
            <button className='flex flex-row w-fit bg-[#5865F2] text-white py-2 rounded-lg px-3 items-center text-base transition-all hover:bg-[#424cb9]'>
              <p className='text-base'>{translations.joinOurDiscord} </p>
              <BiLogoDiscordAlt className='text-white w-8 h-8 ml-3' />
            </button>
          </a>


        </div>


        <p className="text-center text-base mt-10 px-12 mb:px-0 mb:text-xl text-secondary mb:w-2/4">{translations.contentTwo} </p>

        {/* Buttons */}
        <div className='flex mb:flex-row flex-col items-end mx-8 mt-8 mb-16 mb:mb-0 mb:mx-0'>
          <a href="https://help.toptiertrader.com">
            <button className='flex flex-row items-center py-2 px-4 border border-secondary rounded-lg text-white'>
              {translations.viewFAQs}
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