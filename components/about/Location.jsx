import locationBgImage from "./assets/location_bg.png";
import Carousel from "./Carousel"
import { ENVIRONMENT_URL } from "@/constants/global";

const bgImageStyle = {
  // use the src property of the image object
  backgroundImage: `url(${locationBgImage.src})`,
  // other styles
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "auto",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Location({ translations, locale }) {

  return (
    // Apply inline styling to set the background image
    <div style={bgImageStyle} className="flex flex-col">
      <section className="flex flex-col max-w-[1100px] mb:flex-row justify-around items-center mb:py-28 pt-16 pb-10 mb:pt-16 mb:pb-8 px-8 mb:px-0">
        {/* Our Location */}
        <div className="w-full mb:py-0 mb:px-0 mb:w-2/5">
          <h3 className="text-left text-3xl  mb:text-4xl font-light text-textPrimary">
            {translations.title}
          </h3>
          <p className="mt-8 text-left font-light text-base mb:px-0  text-slate-300">
            {translations.pOne} <br />
            <br />
            {translations.pTwo}
          </p>
        </div>

        {/* Contact us Cards */}
        <div className="bg-gradient-to-br border border-[#717892] from-white/5 to-[#0B111D] w-full mb:w-fit flex flex-col items-start mb:items-center px-6 mb:mb-16 mt-16 mb-6 py-5 mb:mx-0 mx-8  rounded-xl">
          <p className="mb:mt-8 text-center text-lg mb:px-0 mb:text-left mb:text-xl text-textPrimary font-medium">
            TopTier Trader
          </p>
          <p className="mt-2 text-center text-base mb:px-0 mb:text-left mb:text-xl text-slate-300">
            {translations.chat}
          </p>

          <p className="mt-8 text-left text-base mb:px-0 mb:text-left text-slate-300 underline">
            <span>{translations.phone}  </span> (+1) 888-396-8550 <br /> Email: support@toptiertrader.com
          </p>

          <a href={`${ENVIRONMENT_URL}/${locale}/contact`}>
            <button className="mt-10 border border-slate-300 px-3 py-2 rounded-lg text-textPrimary font-medium " >
              {translations.getInTouch}
            </button>
          </a>

        </div>
      </section>
      <Carousel />
    </div>
  );
};

export default Location;
