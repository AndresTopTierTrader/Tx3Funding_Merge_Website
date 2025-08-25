'use client'

import Image from "next/image"
import tier1 from '../assets/tier1.svg'
import tier2 from '../assets/tier2.svg'
import tier3 from '../assets/tier3.svg'
import { motion } from "framer-motion"
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbPlant } from "react-icons/tb";
import { IoMdGift } from "react-icons/io";



export function TierCards({ texts }) {

    const {
        tierCard1_title,
        tierCard1_p,
        tierCard2_title,
        tierCard2_p,
        tierCard3_title,
        tierCard3_p,
        revenue,
        link,
        secondarySales,
        commissions,
        tier,
        need,
        sales,
        tierGiftOne,
        tierGiftTwo
    } = texts

    const affiliateLinkOnly = link.split(" and ")[0];

    return (
        <div className="flex flex-wrap justify-center gap-8">
            <TierCard icon={tier1} title={tierCard1_title} comission={`${commissions} 10% `} link={`10%  ${affiliateLinkOnly} `} sales={`5%  ${secondarySales} `} tier={tier}  >
                <li>{tierCard1_p}</li>
            </TierCard>

            <TierCard icon={tier2} title={tierCard2_title} comission={`${commissions} 12.5% `} link={`10%  ${link} `} sales={`5%  ${secondarySales} `} need={` ${need} 50  ${sales}`} gift={tierGiftOne} >
                <li>{tierCard2_p}</li>
                <li><strong>{revenue}</strong> $12,500</li>
            </TierCard>

            <TierCard icon={tier3} title={tierCard3_title} comission={`${commissions} 15% `} link={`15%  ${link} `} sales={`5%  ${secondarySales} `} need={` ${need} 150  ${sales} `} gift={tierGiftTwo}>
                <li>{tierCard3_p}</li>
                <li><strong>{revenue}</strong> $50,000</li>
            </TierCard>
        </div>
    )
}

function TierCard({ title, comission, icon, sales, need, link, tier, gift }) {
    return (
        <motion.article transition={{ duration: 0.5, delay: 0.2 }} initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1, }} className="bg-gradient-to-br border border-secondary from-white/5 to-[#0B111D]  w-full mb:w-[300px] relative p-6 rounded-lg shadow-md flex flex-col items-center gap-8 max-w-sm">
            <div className="flex flex-col items-center gap-8 pb-4 border-b border-secondary w-full">
                <strong className="font-semibold text-3xl bg-gradient-to-r from-[#45D1FF] py-2 to-[#167BCC] inline-block text-transparent bg-clip-text">{title}</strong>
                <picture>
                    <Image width={200} height={100} className="w-[70%] mx-auto" src={icon} alt="" />
                </picture>
                <p className="font-semibold text-slate-300 text-xl">{comission}</p>
            </div>


            <div className="flex flex-col  mb:items-start w-full">

                <div className="flex flex-row items-center" >
                    <FaRegCircleCheck className="text-[#45D1FF] w-4 h-4" />
                    <p className="ml-2 text-white font-light" > {sales}</p>
                </div>
                <div className="flex flex-row items-start my-2 mb:my-4 " >
                    <FaRegCircleCheck className="text-[#45D1FF] mt-1 w-4 h-4" />
                    <p className="ml-2  max-w-[230px] mb:max-w-[200px] text-white font-light" >{link}</p>
                </div>

                {gift &&
                    <div className="flex flex-row items-start mb-10 " >
                        <IoMdGift className="text-[#45D1FF] -ml-0.5 mb:mt-1 mb:ml-0 w-5 h-5" />
                        <p className="ml-2 max-w-[250px] mb:max-w-[200px] text-white font-light" > {gift}</p>
                    </div>
                }


                {tier &&
                    <div className="flex flex-row items-center mb-3 " >
                        <FaRegCircleCheck className="text-[#45D1FF] w-4 h-4" />
                        <p className="ml-2 text-white font-light" > {tier}</p>
                    </div>
                }


                {need != undefined &&
                    <div className="absolute bottom-2 flex-row italic text-secondary items-center mb:my-2 " >
                        <p className="ml-2" > {need}</p>
                    </div>
                }


            </div>
        </motion.article>
    )
}