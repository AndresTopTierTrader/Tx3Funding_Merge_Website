import Image from "next/image";

//Icons
import { MdAccessTime } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbZoomMoney } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineGppGood } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { LuFileClock } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

import { useRef, useEffect } from "react";

//Images
import Tx3FuturesImg from "./assets/tx3_futures.svg"
import Tx3ForexImg from "./assets/tx3_forex.svg"
import bg_decoration_img from "./assets/bg_decoration.png"

const CARDS = [
    {
        id: 1,
        icon: <MdAccessTime className="text-textSecondary w-6 h-6" />,
        title: "24 Hour Payouts",
        description: "Receive your payment within 24 hours or we give you $1,000 extra",
        badge: Tx3FuturesImg
    },
    {
        id: 2,
        icon: <FaRegCalendarCheck className="text-textSecondary w-6 h-6" />,
        title: "No Min. Trading Days",
        description: "Trade at your own pace, no minimum trading days required",
        badge: Tx3ForexImg
    },
    {
        id: 3,
        icon: <TbZoomMoney className="text-textSecondary w-6 h-6" />,
        title: "100% of Initial Profits",
        description: "First $10,000 in profits is 100% yours. After that, a 90/10 profit split applies.",
        badge: Tx3FuturesImg
    },
    {
        id: 4,
        icon: <MdOutlineSupportAgent className="text-textSecondary w-6 h-6" />,
        title: "24/7 Support",
        description: "We're here when you need us, and ready when you don't.",
        badge: Tx3ForexImg
    },
    {
        id: 5,
        icon: <LuFileClock className="text-textSecondary w-6 h-6" />,
        title: "No Set Time Limit",
        description: "We don't rush you, take your time.",
        badge: Tx3FuturesImg
    },
    {
        id: 6,
        icon: <IoDocumentTextOutline className="text-textSecondary w-6 h-6" />,
        title: "Simple Rules",
        description: "Our simple trading rules let traders focus on what matters most.",
        badge: Tx3ForexImg
    },
    {
        id: 7,
        icon: <MdOutlineGppGood className="text-textSecondary w-6 h-6" />,
        title: "Low-Cost Fees",
        description: "We offer competitive fees to maximize your trading profits.",
        badge: Tx3FuturesImg
    },
    {
        id: 8,
        icon: <MdOutlineRocketLaunch className="text-textSecondary w-6 h-6" />,
        title: "Challenge Add-Ons",
        description: "Build it your way. Simple.",
        badge: Tx3ForexImg
    }
]

function WhatTradersWant() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollAmount = 0;
        const cardWidth = 320 + 24; // Card width + gap
        const totalWidth = CARDS.length * cardWidth;

        const autoScroll = () => {
            scrollAmount += 0.4;

            // Reset scroll position when we've scrolled through all original cards
            if (scrollAmount >= totalWidth) {
                scrollAmount = 0;
            }

            carousel.scrollLeft = scrollAmount;
            requestAnimationFrame(autoScroll);
        };

        const animation = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <section className="bg-[#0B111D] py-28 flex flex-col items-center w-full">
            <div className="flex flex-col w-full items-center max-w-[1200px] px-4">
                {/* What Traders Want Container */}
                <section className="bg-[#101621] relative rounded-xl py-10 w-full flex flex-col items-center">
                    <Image
                        src={bg_decoration_img}
                        width={700}
                        height={400}
                        alt="bg_decoration"
                        className="absolute bottom-0 w-[400px] md:w-[700px] opacity-50 pointer-events-none"
                    />

                    <div className="text-center z-10 relative">
                        <h2 className="text-textPrimary tracking-tight text-3xl md:text-4xl px-8 md:px-0 ">
                            We Know What Traders Want.
                        </h2>
                        <p className="mt-3 text-center px-4 md:px-0 font-light text-textSecondary">
                            Whatever you're into Forex & Indices or Futures, we've got the challenge for you.
                        </p>
                    </div>

                    {/* Automatic Carousel Container */}
                    <div className="mt-6 md:mt-12 w-full relative z-10 overflow-hidden">
                        {/* Infinite Carousel */}
                        <div
                            ref={carouselRef}
                            className="flex gap-6 overflow-x-hidden scrollbar-hide px-4 md:px-8 py-4"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitScrollbar: { display: 'none' }
                            }}
                        >
                            {/* Duplicate cards for seamless loop */}
                            {[...CARDS, ...CARDS, ...CARDS].map((card, index) => (
                                <div
                                    key={`${card.id}-${index}`}
                                    className="bg-white/5 backdrop-blur-lg relative min-w-[280px] md:min-w-[320px] p-6 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/10 flex-shrink-0"
                                >
                                    <Image
                                        src={card.badge}
                                        width={32}
                                        height={32}
                                        alt="badge"
                                        className="absolute w-8 h-8 right-4 top-4"
                                    />

                                    <div className="flex flex-col h-full">
                                        <div className="mb-4">
                                            {card.icon}
                                        </div>

                                        <h3 className="text-textPrimary text-lg  mb-3 pr-10">
                                            {card.title}
                                        </h3>

                                        <p className="text-textSecondary text-sm max-w-[250px] md:max-w-[300px] leading-relaxed flex-grow">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center md:flex-row mt-12">

                <a href="">
                    <button className="bg-forexBlue hover:bg-forexBlue/80 transition-all hover py-2 px-3 rounded-md flex flex-row items-center">
                        <p className="text-sm md:text-base tracking-tight text-textPrimary "> Start Trading Forex Now </p>
                        <FaArrowRight className="text-textPrimary ml-2 w-2.5 h-2.5 md:w-3 md:h-3" />
                    </button>
                </a>

                <a href="">
                    <button className="bg-futuresGreen hover:bg-futuresGreen/80 transition-all mt-4 md:mt-0 ml-0 md:ml-4 py-2 px-3 rounded-md flex flex-row items-center">
                        <p className="text-sm md:text-base tracking-tight text-bgDark "> Start Trading Futures Now </p>
                        <FaArrowRight className="text-bgDark ml-2 w-2.5 h-2.5 md:w-3 md:h-3" />
                    </button>
                </a>

            </div>


            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}

export default WhatTradersWant