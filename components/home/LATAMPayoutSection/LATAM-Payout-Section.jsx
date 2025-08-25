import Image from 'next/image'

//Images
import imageDesktop from './assets/imgDesktop.webp'
import imageMobile from './assets/imgMobile.webp'
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";
import CtaButton from '@/components/common/Buttons/CtaButton';



function LATAMPayoutSection({ translations }) {

    return (
        <section className="bg-[#0B111D] py-16 -mt-1 mb:mt-0 mb:pt-20 mb:pb-32 flex flex-col items-center">
            <div className="flex flex-col items-center mb:max-w-[1200px] w-full">

                {/* Mobile */}
                <section className='flex flex-col w-full px-6 mb:hidden'>
                    {/* Box One */}
                    <div className='flex flex-col relative items-start justify-start h-[300px] w-full' >
                        <p className='text-3xl font-light text-white' >Nuestro Programa.</p>
                        <p className='text-3xl font-light text-white' >Simple.</p>


                        <CtaButton
                            utm="https://app.toptiertrader.com/buy-challenge/?el=OurProgramSimpleSectionCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                            page="Home"
                            section="Our Program Simple Section"
                            translation="Comienza tu Challenge" />



                        <Image src={imageMobile} className="absolute z-0 bottom-16 -right-10" loading="lazy" width={230} height={230} alt="Payout Section" />
                    </div>

                    {/* Box Two */}
                    <div className='bg-gradient-to-br border -mt-28 z-20 p-6 rounded-lg border-[#717892] from-white/5 to-[#0B111D]' >
                        <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> 1</p>
                        <div className="flex flex-row items-center justify-between w-full mt-4">
                            <p className="text-2xl font-light text-white">Inscríbete</p>
                            <FaArrowDown className="w-4 -mt-32 text-3xl text-gray-500" />
                        </div>
                        <p className="text-[#717892] mt-6" >Regístrate para recibir tu cuenta y empieza a tradear en tan sólo 5 minutos.</p>
                    </div>

                    {/* Box Three */}
                    <div className='bg-gradient-to-br border mt-10 z-20 p-6 rounded-lg border-[#717892] from-white/5 to-[#0B111D]' >
                        <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">2</p>
                        <div className="flex flex-row items-center justify-between w-full mt-4">
                            <p className="text-2xl font-light text-white">Tradea</p>
                            <FaArrowDown className="w-4 -mt-32 text-3xl text-gray-500 " />
                        </div>
                        <p className="text-[#717892] mt-6">Tradea tu cuenta utilizando tu estrategia y siguiendo nuestras reglas de trading</p>
                    </div>

                    {/* Box Four */}
                    <div className='bg-gradient-to-br border mt-10 z-20 p-6 rounded-lg border-[#717892] from-white/5 to-[#0B111D]' >
                        <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">3</p>
                        <div className="flex flex-row items-center justify-between w-full mt-4">
                            <p className="text-2xl font-light text-white">Fondeate</p>
                            <PiMedalFill className="w-8 -mt-32 text-3xl text-gray-500" />
                        </div>
                        <p className="text-[#717892] mt-6">Pasa el challenge y tradea con una cuenta fondeada simulada en tan sólo 2 días.</p>
                    </div>

                    {/* Box Five */}
                    <div className='bg-[#0A1930] border mt-10 z-20 p-6 rounded-lg border-[#717892]' >
                        <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">4</p>
                        <div className="flex flex-row items-center justify-between w-full mt-4">
                            <p className="text-2xl font-light text-white">Escala</p>
                            <PiMedalFill className="w-8 -mt-32 text-3xl text-gray-500" />
                        </div>
                        <p className="text-[#717892] mt-6">Amplia tu cuenta hasta una financiación de $2 Millones</p>
                    </div>

                    
                <div className='min-w-[300px] flex flex-col items-center mt-5 z-20'>
                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=OurProgramSimpleSectionCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="LATAM - Home"
                        section="Our Program Simple Section"
                        translation="Comienza tu Challenge"
                    />
                </div>

                </section>

                {/* Main Box - Desktop */}
                <section className="hidden mb:flex relative bg-gradient-to-br border rounded-xl border-[#717892] from-white/5 to-[#0B111D] flex-row items-center w-[1100px]" >
                    {/* Left Box */}
                    <div className="w-[705px] " >
                        {/* Row One */}
                        <section className="flex flex-row h-[305px] ">
                            {/* Step One */}
                            <div className="flex flex-col items-start w-[235px] px-6 pt-6">
                                <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> 1</p>
                                <div className="flex flex-row items-center justify-between w-full mt-4">
                                    <p className="text-2xl font-light text-white">Inscríbete</p>
                                    <FaArrowRight className="w-4 text-3xl text-gray-500" />
                                </div>
                                <p className="text-[#717892] mt-16" >Regístrate para recibir tu cuenta y empieza a tradear en tan sólo 5 minutos.</p>
                            </div>
                            {/* Line */}
                            <div className="bg-[#717892] w-[1px] h-full" />
                            {/* Step Two */}
                            <div className="flex flex-col items-start w-[235px] px-6 pt-6">
                                <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> 2</p>
                                <div className="flex flex-row items-center justify-between w-full mt-4">
                                    <p className="text-2xl font-light text-white">Tradea</p>
                                    <FaArrowRight className="w-4 text-3xl text-gray-500" />
                                </div>
                                <p className="text-[#717892] mt-16" >Tradea tu cuenta utilizando tu estrategia y siguiendo nuestras reglas de trading.</p>
                            </div>
                            {/* Line */}
                            <div className="bg-[#717892] w-[1px] h-full" />
                            {/* Step Three */}
                            <div className="flex flex-col items-start w-[235px] px-6 pt-6">
                                <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> 3</p>
                                <div className="flex flex-row items-center justify-between w-full mt-4">
                                    <p className="text-2xl font-light text-white">Fondeate</p>
                                    <PiMedalFill className="w-8 text-3xl text-gray-500" />
                                </div>
                                <p className="text-[#717892] mt-16">Pasa el challenge y tradea con una cuenta fondeada simulada en tan sólo 2 días.</p>
                            </div>
                        </section>
                        <div className="bg-[#717892] w-full mb-1 h-[1px] " />
                        {/* Row Two */}
                        <div className="flex flex-row justify-between items-end p-6 bg-[#0A1930] rounded-bl-xl ">
                            <div className="flex flex-col">
                                <p className="text-5xl font-light bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> 4</p>
                                <p className="mt-3 text-2xl font-light text-white" >Escala</p>
                            </div>
                            <p className="text-[#9FA6B2] text-lg">Amplia tu cuenta hasta una financiación de $2 Millones</p>
                        </div>
                    </div>
                    {/* Line */}
                    <div className="bg-[#717892] w-[1px] h-[446px]" />
                    {/* Right Box */}
                    <div className="flex flex-col w-[300px] p-6" >
                        <p className="absolute z-20 text-4xl font-light text-white top-10">Nuestro Programa.</p>
                        <p className="absolute z-20 text-4xl font-light text-white top-20">Simple.</p>
                        <div className='z-30'>
                            <CtaButton
                                utm="https://app.toptiertrader.com/buy-challenge/?el=LATAM_PAGE_OurProgramSimpleSectionCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                                page="LATAM - Home"
                                section="Our Program Simple Section"
                                translation='Comienza tu Challenge' />
                        </div>
                        <Image src={imageDesktop} className="absolute bottom-0 right-0" loading="lazy" width={270} height={270} alt="Payout Section" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default LATAMPayoutSection