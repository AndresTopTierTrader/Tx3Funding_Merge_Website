'use client'
import { motion } from "framer-motion"

import Image from "next/image"
import step1 from '../assets/step1.svg'
import step2 from '../assets/step2.svg'
import step3 from '../assets/step3.png'

export function Steps({ texts }) {
    const {
        step1_title,
        step1_p,
        step2_title,
        step2_p,
        step3_title,
        step3_p,
    } = texts

    const steps = [
        {
            img: step1,
            title: step1_title,
            desc: step1_p
        },
        {
            img: step2,
            title: step2_title,
            desc: step2_p
        },
        {
            img: step3,
            title: step3_title,
            desc: step3_p
        },
    ]

    return (
        <div className="flex flex-wrap mb:ml-16 gap-8 justify-around">
            {
                steps.map(({ img, title, desc }) => <Step key={title} img={img} title={title} desc={desc} />)
            }
        </div>
    )
}

function Step({ img, title, desc }) {
    return (
        <motion.article
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.7,
                    delay: 0.2
                }
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            className="max-w-[230px] flex flex-col gap-4 items-center text-center"
        >
            <motion.picture
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.4
                    }
                }}
            >
                <Image width={150} height={150} src={img} alt="" />
            </motion.picture>

            <motion.strong
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.6
                    }
                }}
                className='text-3xl bg-gradient-to-r from-[#45D1FF] py-2 to-[#167BCC] inline-block text-transparent bg-clip-text font-semibold'
            >
                {title}
            </motion.strong>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                className="text-base text-secondary"
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.7
                    }
                }}
            >
                {desc}
            </motion.p>
        </motion.article>
    )
}