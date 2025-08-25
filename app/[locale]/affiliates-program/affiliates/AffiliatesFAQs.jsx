'use client'
import { motion } from "framer-motion"
import { useState } from "react"

export function AffiliatesFAQs({ texts }) {

    const {
        f1_t,
        f1_p,
        f2_t,
        f2_p,
        f3_t,
        f3_p,
        f4_t,
        f4_p,
        f5_t,
        f5_p,
        f6_t,
        f6_p,
        f7_t,
        f7_p,
        f8_t,
        f8_p,
        f9_t,
        f9_p,
        f10_t,
        f10_p,
        f11_t,
        f11_p,
        f12_t,
        f12_p,
        f13_t,
        f13_p,
        f14_t,
        f14_p,
        f15_t,
        f15_p,
    } = texts

    const faqs = [
        {
            summary: f1_t,
            desc: f1_p
        },
        {
            summary: f2_t,
            desc: f2_p
        },
        {
            summary: f3_t,
            desc: f3_p
        },
        {
            summary: f7_t,
            desc: f7_p
        },
        {
            summary: f10_t,
            desc: f10_p
        },
        {
            summary: f11_t,
            desc: f11_p
        },
        {
            summary: f14_t,
            desc: f14_p
        },
        {
            summary: f15_t,
            desc: f15_p
        },
    ]

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-start">
            {
                faqs.map(({ summary, desc }) => <FAQitem key={summary} summary={summary} desc={desc} />)
            }
        </ul>
    )
}

function FAQitem({ summary, desc }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.li transition={{ duration: 0.5, delay:0.2 }} initial={{ y: -70, opacity: 0 }} whileInView={{ y: 0, opacity: 1, }} className="w-full rounded-xl bg-gradient-to-br border border-[#717892] from-white/5 to-[#0B111D]">
            <div>
                <div className="px-8 py-4  text-white  w-full font-medium text-base cursor-pointer" onClick={toggleOpen}>
                    {summary}
                </div>
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div className="px-8 pb-4">
                        <p className="text-secondary">{desc}</p>
                    </div>
                </motion.div>
            </div>
        </motion.li>
    )
}