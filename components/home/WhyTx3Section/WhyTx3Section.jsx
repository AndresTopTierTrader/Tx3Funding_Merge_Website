// Images 
import Image from 'next/image'
import imageOne from './assets/image_one.png'
import imageTwo from './assets/image_two.png'
import imageThree from './assets/image_three.png'

function WhyTx3Section() {

    const bgHero = {
        backgroundColor: '#0B111D',
        backgroundImage: `
         radial-gradient(at 92% 99%, hsla(219,45%,7%,1) 0px, transparent 50%),
         radial-gradient(at 18% 42%, hsla(219,45%,7%,1) 0px, transparent 50%),
         radial-gradient(at 91% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
         radial-gradient(at 100% 81%, hsla(218,44%,7%,1) 0px, transparent 50%),
         radial-gradient(at 81% 50%, hsla(108,97%,65%,0.23) 0px, transparent 50%),
         radial-gradient(at 65% 41%, hsla(212,100%,35%,0.41) 0px, transparent 50%)
        `
    }

    return (
        <section
            className="bg-[#0B111D] py-16 md:py-44 flex flex-col items-center w-full"
            style={bgHero}
        >
            <div className="flex flex-col w-full items-center max-w-[1250px] tracking-tight px-4">
                <h3 className="text-center text-3xl md:text-4xl  text-textPrimary px-7 tracking-tight">
                    Why Tx3Funding?
                </h3>

                <section className="flex flex-col items-center mt-8 md:mt-12  w-full" >

                    {/* First Row of Cards */}
                    <div className="flex flex-col md:flex-row  items-center w-full justify-between">
                        {/* Card One */}
                        <section className="bg-gradient-to-t from-[#3B8837] to-transparent px-[1px] py-[0.3px] rounded-lg">
                            <div className="bg-gradient-to-tr relative from-[#15292D] to-[#101621] rounded-lg p-12 min-h-[300px] min-w-[380px]" >
                                <p className="text-textPrimary text-4xl font-light text-center"> +$29,971,322 </p>
                                <p className="text-textSecondary text-xl text-center" >in Payouts</p>

                                <Image src={imageOne} alt="Payouts" className='absolute bottom-0 -left-0' />
                            </div>
                        </section>

                        {/* Card Two */}
                        <section className="bg-gradient-to-t from-[#3B8837] to-transparent px-[1px] py-[0.3px] mt-6 md:m-0 rounded-lg">
                            <div className="bg-gradient-to-tr relative from-[#15292D] to-[#101621] rounded-lg p-12 min-h-[300px] min-w-[380px]" >
                                <p className="text-textPrimary text-4xl font-light text-center"> +12,000 </p>
                                <p className="text-textSecondary text-xl text-center" >Active Funded Traders</p>

                                <Image src={imageTwo} alt="Payouts" className='absolute bottom-0 -left-0' />
                            </div>
                        </section>


                         {/* Card Three */}
                         <section className="bg-gradient-to-t from-[#3B8837] to-transparent px-[1px] py-[0.3px] mt-6 md:m-0 rounded-lg">
                            <div className="bg-gradient-to-tr relative from-[#15292D] to-[#101621] rounded-lg p-12 min-h-[300px] min-w-[380px]" >
                                <p className="text-textPrimary text-4xl font-light text-center"> +200,000 </p>
                                <p className="text-textSecondary text-xl text-center" >Global Community Members</p>

                                <Image src={imageThree} alt="Payouts" className='absolute bottom-0 right-0 w-72' />
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default WhyTx3Section