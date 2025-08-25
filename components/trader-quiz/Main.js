//Functions & Hooks
import Image from "next/image";
import { ENVIRONMENT_URL } from "@/constants/global";

//Components
import HeroSection from "./hero/Main.jsx";
import StatsSection from "./stats/Main.jsx";
import HowItWorks from "./howItWorks/Main.jsx";
import CTA from "@/components/common/Buttons/CtaButton";

//Images & Icons
import dareDevilImg from "./assets/dareDevil.svg";
import theGeniusImg from "./assets/theGenius.svg";
import zenTraderImg from "./assets/zenTrader.svg";
import theThinkerImg from "./assets/theThinker.svg";
import theTrailblazerImg from "./assets/theTrailblazer.svg";
import theMasterImg from "./assets/theMaster.svg";
import infoImg from "./assets/infoSection.svg";

const bgImageStyle = {
  backgroundColor: "hsla(219,45%,7%,1)",
  backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `,
};

const videoContainerStyle = {
  borderRadius: "31px",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.05) 100%)",
};

function Main({ translations, locale }) {
  const {
    // Hero section translations
    badge,
    heroTitle1,
    heroTitle2,
    heroTitle3,
    learnButton,

    // Stats section translations
    stat1Label,
    stat1Desc,
    stat2Label,
    stat2Desc,
    stat3Desc,

    // Informative section translations
    whatIs,
    traderQuizTitle,
    quizDescription,

    // How it works translations
    howItWorksTitle,
    step1,
    step2,
    step3,
    step4,

    // Avatar section translations
    t2_1,
    t2_2,
    zenTrader,
    zenTraderDesc,
    theDaredevil,
    theDaredevilDesc,
    theThinker,
    theThinkerDesc,
    masterTrader,
    masterTraderDesc,
    geniusTrader,
    geniusTraderDesc,
    theTrailblazer,
    theTrailblazerDesc,
    cta,
  } = translations;

  const avatars = [
    {
      id: "zen-trader",
      image: zenTraderImg,
      name: zenTrader,
      description: zenTraderDesc,
      alt: "Zen Trader Avatar",
    },
    {
      id: "dare-devil",
      image: dareDevilImg,
      name: theDaredevil,
      description: theDaredevilDesc,
      alt: "Dare Devil Avatar",
    },
    {
      id: "the-thinker",
      image: theThinkerImg,
      name: theThinker,
      description: theThinkerDesc,
      alt: "The Thinker Avatar",
    },
    {
      id: "master-trader",
      image: theMasterImg,
      name: masterTrader,
      description: masterTraderDesc,
      alt: "Master Trader Avatar",
    },
    {
      id: "genius-trader",
      image: theGeniusImg,
      name: geniusTrader,
      description: geniusTraderDesc,
      alt: "Genius Trader Avatar",
    },
    {
      id: "trailblazer",
      image: theTrailblazerImg,
      name: theTrailblazer,
      description: theTrailblazerDesc,
      alt: "The Trailblazer Avatar",
    },
  ];

  const heroTranslations = {
    badge,
    heroTitle1,
    heroTitle2,
    heroTitle3,
    learnButton,
    cta,
  };

  const statsTranslations = {
    stat1Label,
    stat1Desc,
    stat2Label,
    stat2Desc,
    stat3Desc,
    cta,
  };

  const howItWorksTranslations = {
    howItWorksTitle,
    step1,
    step2,
    step3,
    step4,
    cta,
  };

  return (
    <main
      style={bgImageStyle}
      className="flex flex-col items-center mb:mt-0 mb:pb-44 mb:pt-40 -mt-20 pb-14 pt-44"
    >
      {/* Hero Section */}
      <div className="flex flex-col-reverse mb:flex-row items-center justify-evenly w-full max-w-[1200px] mb-24">
        <HeroSection translations={heroTranslations} locale={locale} />
      </div>

      {/* Video Section */}
      <div className="flex justify-center w-full max-w-[1200px] mb-24 px-4">
        <div style={videoContainerStyle} className="p-4 w-full max-w-[800px]">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full rounded-[27px] object-cover"
              controls
              preload="metadata"
            >
              <source src="/videos/traderQuizVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col-reverse mb:flex-row items-center justify-evenly w-full max-w-[1200px] mb-24">
        <StatsSection translations={statsTranslations} locale={locale} />
      </div>

      {/* Informative Section */}
      <div
        id="learn-more"
        className="w-full flex justify-center items-center px-4 mb:px-6 pt-16 mb-24"
      >
        <div className="flex flex-col-reverse mb:flex-row items-center justify-between max-w-[900px] w-full gap-6 mb:gap-8 mx-auto">
          <div className="flex-1 max-w-[400px]">
            <h1 className="text-center text-3xl mb:text-left mb:text-4xl font-light text-white">
              {whatIs}
              <br />{" "}
              <span className="bg-gradient-to-r from-ttblue py-0 mb:py-1 to-ttelectricBlue font-medium inline-block text-transparent bg-clip-text">
                {traderQuizTitle}{" "}
              </span>{" "}
              <br />
            </h1>
            <h2 className="mt-6 text-center px-4 mb:px-0 mb:text-left text-sm mb:text-normal text-white">
              <span className="font-medium">
                {quizDescription}
                <br />{" "}
              </span>
            </h2>
            <div className="flex flex-col items-center mb:items-start w-full mt-6">
              <CTA
                utm={`${ENVIRONMENT_URL}/${locale}/trader-quiz/start`}
                page="Trader Quiz LP"
                section="Informative Section"
                translation={cta}
                color="orange"
              />
            </div>
          </div>

          {/* Main img */}
          <div className="flex-shrink-0">
            <Image
              src={infoImg}
              alt="main_img"
              className="w-full max-w-[420px] mb:max-w-[500px] h-auto -mt-4 mb-4 mb:mb-0 mb:-mt-16"
            />
          </div>
        </div>
      </div>

      {/*How it works section */}
      <HowItWorks translations={howItWorksTranslations} locale={locale} />

      {/* Avatar section*/}
      <div className="flex flex-col items-center justify-center w-full max-w-[1600px] mt-24 mb:mt-16 px-4">
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
            {t2_1}{" "}
            <span className="bg-gradient-to-r font-medium from-ttblue to-ttelectricBlue inline-block text-transparent bg-clip-text">
              {t2_2}
            </span>
          </h3>
        </div>

        {/* Avatars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1200px] justify-items-center items-stretch">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              className="relative w-full max-w-[280px] md:max-w-[320px] h-full transition-all duration-300"
            >
              <div className="flex justify-center relative z-10 mb-[-100px] md:mb-[-140px]">
                <Image
                  alt={avatar.alt}
                  src={avatar.image}
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
                  width={288}
                  height={288}
                />
              </div>

              <div
                className="h-full rounded-2xl pt-16 md:pt-20 pb-2 px-3 md:px-4 transition-all duration-300 flex flex-col min-h-[160px] max-h-[200px] md:min-h-[250px] md:max-h-[265px]"
                style={{
                  background: "transparent",
                  border: "0.5px solid #717892",
                }}
              >
                <div className="text-center flex-1 flex flex-col justify-start">
                  <h4 className="font-bold text-base md:text-lg lg:text-xl mb-1 bg-gradient-to-r from-[#0052B4] to-[#45D1FF] text-transparent bg-clip-text">
                    {avatar.name}
                  </h4>
                  <p className="font-normal text-xs md:text-sm lg:text-base text-white leading-tight">
                    {avatar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 md:mt-20">
          <CTA
            utm={`${ENVIRONMENT_URL}/${locale}/trader-quiz/start`}
            page="Trader Quiz LP"
            section="Avatars Section"
            translation={cta}
            color="orange"
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
