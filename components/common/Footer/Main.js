import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import logoImg from '@/public/img/logo.svg'
import { BsInstagram, BsDiscord, BsYoutube, BsTwitterX, BsFacebook, BsTiktok, BsTelegram } from 'react-icons/bs';
import bigLogo from './assets/bigLogo.svg'
import { ENVIRONMENT_URL } from "@/constants/global";

const bgImageStyle = {
    backgroundColor: '#0B111D',
    backgroundImage: `
    radial-gradient(at 43% 100%, hsla(212,100%,35%,0.32) 0px, transparent 50%),
    radial-gradient(at 57% 100%, hsla(194,100%,63%,0.21) 0px, transparent 50%)
    `
}

const Footer = ({ locale, translations }) => {
    const {
        termsLink,
        privacyLink,
        refundLink,
        products,
        resources,
        company,
        about,
        contact,
        affiliates
    } = translations;

    const socialLinks = [
        { href: 'https://www.instagram.com/toptier.trader', Icon: BsInstagram, alt: 'Instagram', label: 'Follow us on Instagram' },
        { href: 'https://discord.com/invite/9vUYq5FZnq', Icon: BsDiscord, alt: 'Discord', label: 'Join our Discord server' },
        { href: 'https://www.youtube.com/@toptier.trader', Icon: BsYoutube, alt: 'Youtube', label: 'Subscribe to our YouTube channel' },
        { href: 'https://x.com/_toptier_trader', Icon: BsTwitterX, alt: 'Twitter', label: 'Follow us on Twitter' },
        { href: 'https://www.facebook.com/TopTier.Trader/', Icon: BsFacebook, alt: 'Facebook', label: 'Like us on Facebook' },
        { href: 'https://www.tiktok.com/@toptier.trader', Icon: BsTiktok, alt: 'TikTok', label: 'Follow us on TikTok' },
        { href: 'https://t.me/joinchat_TopTierTrader', Icon: BsTelegram, alt: 'Telegram', label: 'Join our Telegram channel' }
    ];

    return (
        <footer className="flex flex-col -mt-1 mb:mt-0 pt-20 md:pt-22 mb:pt-24 pb-36 md:pb-28 mb:pb-24 items-center w-full" style={bgImageStyle}>
            <div className="max-w-[1100px] md:max-w-[900px] mb:w-full flex flex-col items-center px-6 md:px-8 mb:px-0">
                <section className='flex flex-col md:flex-row mb:flex-row w-full justify-between mb-12 md:mb-14 mb:mb-16'>
                    {/* Logo and Social Media */}
                    <div className="flex flex-col items-start mb-8 md:mb-6 mb:mb-0">
                        <Image src={logoImg} className='-ml-3 h-8 md:h-7' alt="TopTier Trader" />
                        <div className="flex mt-8 md:mt-6 space-x-6 md:space-x-5">
                            {socialLinks.map(({ href, Icon, alt, label }) => (
                                <a
                                    key={alt}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-textPrimary hover:text-gray-300 transition-colors"
                                    aria-label={label}
                                >
                                    <span className="sr-only">{label}</span>
                                    <Icon className="h-6 w-6 md:h-5 md:w-5" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm md:text-xs mt-8 md:mt-6">
                            © {new Date().getFullYear()} TopTier Trader LLC.
                        </p>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex flex-col gap-y-10 md:gap-y-0 pb-8 md:pb-0 mb:pb-0 mb:gap-y-0 md:flex-row mb:flex-row gap-x-8 md:gap-x-6 mb:gap-x-10">
                        <div>
                            <h3 className="text-textPrimary font-semibold mb-4 md:mb-3 text-base md:text-sm">{products}</h3>
                            <ul className="space-y-2 md:space-y-1.5">
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/products/challenges`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">Challenges</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">Levels</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/trader-quiz`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">Trader Quiz</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-textPrimary font-semibold mb-4 md:mb-3 text-base md:text-sm">{resources}</h3>
                            <ul className="space-y-2 md:space-y-1.5">
                                <li><Link href={`https://www.youtube.com/@toptier.trader`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">Podcasts</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/blog`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">Blog</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/academy`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">TT Academy</Link></li>
                                <li><Link href={`https://help.toptiertrader.com`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">FAQ</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-textPrimary font-semibold mb-4 md:mb-3 text-base md:text-sm">{company}</h3>
                            <ul className="space-y-2 md:space-y-1.5">
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/about`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">{about}</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/contact`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">{contact}</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/affiliates-program`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">{affiliates}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-textPrimary font-semibold mb-4 md:mb-3 text-base md:text-sm">Disclosures</h3>
                            <ul className="space-y-2 md:space-y-1.5">
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/aml-policy`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">AML Policy</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/privacy`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">{privacyLink}</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/refunds`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">{refundLink}</Link></li>
                                <li><Link href={`${ENVIRONMENT_URL}/${locale}/terms`} className="text-gray-500 hover:text-textPrimary text-sm md:text-xs">{termsLink}</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="border-t border-gray-700 pt-8 md:pt-6 w-full">
                    <div className="text-gray-500 text-sm md:text-xs">
                        <h3 className="font-bold text-textPrimary mb-2 text-sm md:text-xs">DISCLAIMER:</h3>
                        All content published and distributed by TopTier Trader, LLC and its affiliates (collectively, the Company) is to be treated as general information only. None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund. Use of the information contained on the Company's websites is at your own risk and the Company and assumes no responsibility or liability for any use or misuse of such information. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex. Past performance is not necessarily indicative of future results.
                        <h3 className="font-bold text-textPrimary mb-2 mt-5 md:mt-4 text-sm md:text-xs">SIMULATED TRADING DISCLAIMER:</h3>

                        The company is not a broker and does not accept deposits. Hypothetical or simulated performance results have certain limitations. Unlike an actual performance record, simulated results do not represent actual trading. Also, because the trades have not actually been executed, the results may have under-or-over compensated for the impact, if any, of certain market factors, such as lack of liquidity. Simulated trading programs, in general, are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profit or losses similar to those shown.
                    </div>
                </div>

                <Image src={bigLogo} className="mt-8 md:mt-6 w-auto h-auto max-w-[200px] md:max-w-[160px]" alt="TopTier Trader" />
            </div>
        </footer>
    );
};

export default Footer;