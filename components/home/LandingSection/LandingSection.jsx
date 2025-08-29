
import Image from "next/image"
import CtaButton from "@/components/common/Buttons/CtaButton"

// Card Images
import btcCard from "./assets/btc_card.png"
import eurCard from "./assets/eur_card.png"
import spCard from "./assets/s&p_card.png"

// Images
import tx3img from "./assets/tx3_markets.png"
import decorationLeftImg from "./assets/decoration_left.svg"
import decorationRightImg from "./assets/decoration_right.svg"

// Icons
import { FaArrowRight, FaUserAlt } from "react-icons/fa"
import { MdAttachMoney } from "react-icons/md";



function LandingSection({ locale, translations }) {

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
    <main
      style={bgHero}
      className="flex flex-col overflow-y-hidden relative items-center max-[1450px]:overflow-x-hidden"
    >

      {/* Decorations */}
      <Image src={decorationLeftImg} width="auto" height="auto" alt="decoration_left" className="absolute w-36 md:w-56 object-contain left-0 md:left-96 md:ml-32 top-14 md:top-24 opacity-30 md:opacity-100" />
      <Image src={decorationRightImg} width="auto" height="auto" alt="decoration_right" className="absolute w-4/5 md:w-72 object-contain right-0 md:right-96 md:mr-32 top-20 md:top-36 opacity-30 md:opacity-100" />

      {/* Broker Announcement */}
      <section className="flex flex-col items-center w-full h-full relative">
        <div className="flex flex-row items-center justify-between w-full mt-24 md:max-w-[1400px] bg-gradient-to-r from-futuresGreen/5 via-white/10 to-[#FFBC30]/10 backdrop-blur-lg py-3 px-4 md:rounded-lg">
          <p className="hidden md:block text-textPrimary tracking-tight">
            Now you can access worldwide markets with a leading, regulated CFD broker you can trust.
          </p>
          <p className="block md:hidden text-textPrimary tracking-tight">
            A broker you can trust.
          </p>
          <section className="flex flex-row items-center justify-center">
            <Image src={tx3img} width="auto" height="auto" alt="tx3_markets" className="w-28 md:w-36 object-contain" />
            <div className="w-[1px] bg-white/20 h-6 mx-2" />
            <a href="" className="cursor-pointer ">
              <div className="bg-white/20 hover:bg-white/30 transition-all border border-textPrimary rounded-full px-2 py-2 text-sm flex items-center">
                <FaArrowRight className="text-textPrimary w-2.5 h-2.5 -rotate-45" />
              </div>
            </a>

          </section>
        </div>
      </section>

      {/* Main Container */}
      <section className="flex mt-36 md:mt-20 flex-col  items-center max-w-[1200px] h-full relative">
        <div className="flex flex-col py-8 md:mt-0 -mt-24 relative items-center px-6 md:px-0 ">
          <h1 className="text-center tracking-tight">
            <span className="bg-gradient-to-r text-xl md:text-3xl mx-2 md:mx-0 md:max-w-full text-center font-extralight md:font-light text-textPrimary block titleFirst">
              Forex
              <Image src={eurCard} width='auto' height='auto' alt="eur_card" className="inline-block object-contain w-28 mx-2 md:-mt-2" />
              Futures
              <Image src={spCard} width='auto' height='auto' alt="sp_card" className="inline-block object-contain w-24 mx-2 md:-mt-2" />
              or Crypto
              <Image src={btcCard} width='auto' height='auto' alt="btc_card" className="inline-block object-contain w-16 mx-2 md:-mt-2" />
            </span>
            <p className="block text-5xl mt-12 md:mt-0 md:text-7xl font-normal text-textPrimary titleSecond">
              We Will <span className="bg-gradient-to-r from-[#008BF5] to-futuresGreen inline-block text-transparent bg-clip-text"> Fund You Fast</span>
            </p>
          </h1>

          <h2 className="mt-3 text-center px-4 md:px-0 font-light text-textSecondary fadeInUp">
            Whatever you're into Forex, Indices, Crypto or Futures, we’ve got the challenge for you.
          </h2>

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

        </div>
      </section>

      {/* Mission Container */}
      <section className="flex flex-col items-center mt-16 md:mt-20">
        <p className="text-textPrimary text-center text-xl mx-6 md:text-2xl">We Are On a Mission To <span className="bg-gradient-to-r from-[#008BF5] to-futuresGreen inline-block text-transparent bg-clip-text" >Fund 1 Million Traders</span></p>

        <div className="flex flex-col md:flex-row items-center mt-4" >

          {/* Funded Traders */}
          <section className="flex flex-row items-center bg-white/10 tracking-tight py-1 px-3 rounded-md ">
            <FaUserAlt className="w-4 h-4 bg-forexBlue  p-1 rounded-2xl text-textPrimary" />
            <p className="text-textSecondary ml-2" > 12,019 Funded Traders </p>
            <div className="w-[1px] bg-white/20 h-6 mx-2" />
            <p className="text-futuresGreen" > +8 This week </p>
          </section>

          {/* Forex Traders */}
          <section className="flex md:ml-4 mt-4 md:mt-0 flex-row items-center bg-white/10 tracking-tight py-1 px-3 rounded-md ">
            <MdAttachMoney className="w-4 h-4 bg-forexBlue  p-0.5 rounded-2xl text-textPrimary" />
            <p className="text-textSecondary ml-2" > +$29,971,322 in Payouts</p>
            <div className="w-[1px] bg-white/20 h-6 mx-2" />
            <p className="text-futuresGreen" > +$43,211 This week </p>
          </section>

        </div>

      </section>
    </main>
  );
}

export default LandingSection;