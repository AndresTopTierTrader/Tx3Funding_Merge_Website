import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

// Logos
import tx3forex from './assets/tx3_forex_white_logo.svg'
import tx3futures from './assets/tx3_futures_white_logo.svg'

// Images
import matchTraderImg from './assets/matchtrader.png'
import projectxImg from './assets/projectx.png'

// Decoration Image
import decorationBlueImg from './assets/product_decoration_blue.png'
import decorationGreenImg from './assets/product_decoration_green.png'

function ProductsSection() {
    return (
        <section className="bg-[#0B111D] py-16 md:py-28 flex flex-col items-center w-full">
            <div className="flex flex-col w-full items-center max-w-[1200px] tracking-tight px-4">
                <section className="flex flex-col md:flex-row pt-10 items-center">

                    {/* Forex Card */}
                    <div className="bg-[#101621] relative md:max-w-[500px] px-6 py-10 border border-[#5F6776] rounded-xl">

                        {/* Platform and Logo */}
                        <section className='flex flex-row w-full justify-between'>
                            <Image src={matchTraderImg} alt="Match Trader" className='w-12 object-contain' />
                            <Image src={tx3forex} alt="TX3 Forex Logo" className='w-32' />
                        </section>

                        <p className='mt-16 border border-[#018AF3] w-fit px-4 py-1 rounded-full text-xs text-textPrimary'>
                            F O R E X &nbsp;& &nbsp;C R Y P T O
                        </p>

                        <section className='mt-8'>
                            <p className='text-textPrimary text-4xl font-light'>
                                Master currency trading with Tx3 Forex.
                            </p>

                            <section className='flex flex-col mt-8 '>
                                <div className='flex flex-row'>
                                    <section className='border border-[#5F6776] w-fit px-4 py-3 rounded-lg'>
                                        <p className='text-xs md:text-sm text-textPrimary'> One and TwoPhase Challenges</p>
                                    </section>
                                    <section className='border border-[#5F6776] w-fit px-4 py-3 rounded-lg ml-2'>
                                        <p className='text-xs md:text-sm text-textPrimary'> Trade Crypto</p>
                                    </section>
                                </div>
                                <div className='flex flex-row mt-2'>
                                    <section className=' border border-[#5F6776] w-fit px-4 py-3 rounded-lg'>
                                        <p className='text-xs md:text-sm text-textPrimary'> Payouts on Demand</p>
                                    </section>
                                    <section className=' border border-[#5F6776] w-fit px-4 py-3 rounded-lg ml-2'>
                                        <p className='text-xs md:text-sm text-textPrimary'> Challenge Add-Ons</p>
                                    </section>
                                </div>
                            </section>

                            <a href="" className='z-40 relative '>
                                <button className="bg-forexBlue mt-8 hover:bg-forexBlue/80 transition-all hover py-2 px-3 rounded-md flex flex-row items-center">
                                    <p className="text-sm md:text-base tracking-tight text-textPrimary "> Start Trading Forex Now </p>
                                    <FaArrowRight className="text-textPrimary ml-2 w-2.5 h-2.5 md:w-3 md:h-3" />
                                </button>
                            </a>


                        </section>

                        <Image src={decorationBlueImg} alt="Decoration" className='absolute bottom-0 right-0 z-0 opacity-60' />

                    </div>


                    {/* Futures Card */}
                    <div className="bg-[#101621] mt-8 md:mt-0 md:ml-8 relative md:max-w-[500px] px-6 py-10 border border-[#5F6776] rounded-xl">


                        {/* Platform and Logo */}
                        <section className='flex flex-row w-full justify-between'>
                            <Image src={projectxImg} alt="Match Trader" className='w-12 object-contain' />
                            <Image src={tx3futures} alt="TX3 Forex Logo" className='w-32' />
                        </section>

                        <p className='mt-16 border border-futuresGreen w-fit px-4 py-1 rounded-full text-xs text-textPrimary'>
                            F U T U R E S
                        </p>

                        <section className='mt-8'>
                            <p className='text-textPrimary text-4xl font-light'>
                                Dominate futures and crypto with Tx3 Futures.
                            </p>

                            <section className='flex flex-col mt-8 '>
                                <div className='flex flex-row'>
                                    <section className='border border-[#5F6776] w-fit px-4 py-3 rounded-lg'>
                                        <p className='text-xs md:text-sm text-textPrimary'> Starter and Pro Accounts</p>
                                    </section>
                                    <section className='border border-[#5F6776] w-fit px-4 py-3 rounded-lg ml-2'>
                                        <p className='text-xs md:text-sm text-textPrimary'> No Min. Trading Days</p>
                                    </section>
                                </div>
                                <div className='flex flex-row mt-2'>
                                    <section className=' border border-[#5F6776] w-fit px-4 py-3 rounded-lg'>
                                        <p className='text-xs md:text-sm text-textPrimary'> 100% of Initial Profits</p>
                                    </section>
                                    <section className=' border border-[#5F6776] w-fit px-4 py-3 rounded-lg ml-2'>
                                        <p className='text-xs md:text-sm text-textPrimary'> No Activation Fee</p>
                                    </section>
                                </div>
                            </section>

                            <a href="" className='relative z-40'>
                                <button className="bg-futuresGreen hover:bg-futuresGreen/80 transition-all mt-8 py-2 px-3 rounded-md flex flex-row items-center">
                                    <p className="text-xs  md:text-base tracking-tight text-bgDark "> Start Trading Futures Now </p>
                                    <FaArrowRight className="text-bgDark ml-2 w-2.5 h-2.5 md:w-3 md:h-3" />
                                </button>
                            </a>
                        </section>

                        <Image src={decorationGreenImg} alt="Decoration" className='absolute bottom-0 right-0 z-0 opacity-60' />

                    </div>

                </section>
            </div>
        </section>
    )
}

export default ProductsSection