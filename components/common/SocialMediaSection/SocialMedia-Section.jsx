'use client'

import React, { useState } from 'react';
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

function SocialMediaSection({ translations }) {
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
        <div className="flex flex-col -mt-1 mb:mt-0 pt-20 mb:pt-24 mb:pb-24 pb-20 items-center w-full bg-gradient-to-b from-[#181d2a] to-[#161C29]">
            <div className="max-w-[1100px] mb:w-full flex flex-col items-center px-6 mb:px-0">
                <h3 className="text-white font-light text-4xl text-center mb:max-w-full">
                    {translations.title}
                </h3>
                <p className="pt-5 text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892] max-w-[350px] mb:max-w-[500px]">
                    {translations.desc}
                </p>
                <section className="flex flex-col mb:flex-row justify-center mt-10">
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
        </div>
    );
}

export default SocialMediaSection;