import { SectionLayout } from "@/components/common/SectionLayout";
import Image from "next/image";
import imageEN from "./assets/imageEN.webp"
import imageES from "./assets/imageSPA.webp"
import CtaButton from "@/components/common/Buttons/CtaButton";

const X = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 14.0002L14.0002 2" stroke="#FF532D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.0002 14.0002L2 2" stroke="#FF532D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const Check = () => (
    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7L7 12L17 2" stroke="#45D1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export function LATAMFlexChallenge({ translations, locale }) {

    const others = [
        'Tiempo limitado para obtener el objetivo de profit.',
        'Precios más altos, menos beneficios',
        'Payouts y soporte lentos'
    ]

    const toptier = [
        'Sin Limites de Tiempo',
        'Entrada economica con features premium',
        'Soporte 24/7 y payouts ultra rápidos'
    ]

    const image = locale === "es" ? imageES : imageEN

    return (
        <SectionLayout bgColor='bg-[#0B111D] text-[#A2ACCF]' padding>
            <div className="text-center">
                <h2 className="text-3xl font-light text-center text-white md:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">Flex Challenge</span> de TopTier</h2>
                <p className="mt-4">El challenge más accesible de la industria</p>
            </div>

            <div className="grid max-w-5xl grid-cols-1 gap-4 mx-auto mt-12 text-white md:grid-cols-2 md:mt-16">
                <div className="p-6 rounded-lg border border-[#717892] bg-gradient-to-br from-[#2F3547]/60 via-[#2F3547]/0 to-black/0 flex flex-col gap-10">
                    <span className="flex flex-wrap items-start justify-between gap-2">
                        <p className="flex flex-col gap-2">Otros:<span className="text-xl font-medium md:text-4xl">$129</span></p>
                        <p className="px-4 py-2 rounded-md border border-[#717892] bg-gradient-to-br from-[#2F3547] via-[#2F3547]/0 to-black/0">5k Challenge</p>
                    </span>

                    <ul className="flex flex-col gap-2">
                        {
                            others.map(bullet => (
                                <li key={bullet} className="flex items-center gap-4">
                                    <span className="w-[16px] h-[16px]">
                                        <X />
                                    </span>
                                    {bullet}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-6 rounded-lg border border-[#717892] bg-gradient-to-br from-[#2F3547]/60 via-[#2F3547]/0 to-black/0 flex flex-col gap-10">
                    <span className="flex flex-wrap items-start justify-between gap-2">
                        <p className="flex flex-col gap-2">TopTier Trader<span className="text-xl font-medium md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#0052B4] via-[#45D1FF] to-[#45D1FF]">$30</span></p>
                        <p className="px-4 py-2 rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">2.5k Challenge</p>
                    </span>

                    <ul className="flex flex-col gap-2">
                        {
                            toptier.map(bullet => (
                                <li key={bullet} className="flex items-center gap-4">
                                    <span className="w-[19px] h-[14px]">
                                        <Check />
                                    </span>
                                    {bullet}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-span-full p-6 rounded-lg border border-[#FF532D] bg-gradient-to-br from-[#2F3547]/60 via-[#2F3547]/0 to-black/0 flex flex-col md:flex-row items-center md:justify-between gap-8 md:pr-24">
                    <span className="flex flex-col max-w-xs gap-4">
                        <h3 className="font-light text-xl md:text-2xl text-[#FF532D]">Payout on Demand</h3>
                        <p>Solicita tu payout en cualquier momento. Cuando quieras.</p>
                    </span>

                    <Image src={image} alt="request payout image" className="w-full max-w-[244px]" />
                </div>
            </div>

            <span className="grid mx-auto mt-12 place-items-center">
                <CtaButton
                    utm={'https://app.toptiertrader.com/buy-challenge/?el=LATAM_PAGE_MainTableCtaTwoPhaseFlexJuly2025&hcategory=July2025&id=abba0248-b97b-4e75-b1ac-0fb722c3ab46'}
                    translation={'Comienza tu Flex Challenge'}
                    page={'LATAM - Landing'}
                    section={'Flex Challenge'}
                />
            </span>

        </SectionLayout>
    )
}