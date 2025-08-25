import cardOneImg from "./assets/card1.svg";
import cardTwoImg from "./assets/card2.svg";
import CtaButton from '@/components/common/Buttons/CtaButton';


const bgImageStyle = {
  backgroundColor: '#0B111D',
  backgroundImage: `
    radial-gradient(at 36% 48%, hsla(194,100%,63%,0.05) 0px, transparent 50%),
    radial-gradient(at 62% 48%, hsla(212,100%,35%,0.18) 0px, transparent 50%)
  `
}


const Evaluation = ({ translations }) => {
  const Card = ({ children, className }) => (
    <div className={`rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );

  const CheckIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-secondary" fill="none" stroke="currentColor">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M22 4 12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );

  const EvaluationCard = ({ tier, title, description, features, color, image }) => (
    <Card className={`w-full relative mb:w-[400px] h-[390px] mb:h-[400px] p-6 bg-gradient-to-br border rounded-lg border-[#717892] from-white/5 to-[#0B111D]  transition-transform hover:scale-105`}>
      <section>
        <div className="flex justify-between items-center mb-4">
          <span className={`px-5 py-3 rounded-lg ${color} text-white text-sm font-medium`}>{tier}</span>
          <h4 className="text-base font-light text-white">{title}</h4>
        </div>
        <p className="text-white/90 mt-12 font-light mb-6">{description}</p>
        <div className="space-y-4 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-secondary gap-3">
              <CheckIcon className='text-secondary' />
              <p className="text-secondary text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );

  const ProcessStep = ({ number, text }) => (
    <div className="flex items-center gap-4 py-4 px-4 mb:px-12 bg-gradient-to-b  border rounded-lg border-[#717892] from-white/5 to-[#0B111D] transition-colors">
      <span className="text-2xl bg-gradient-to-r font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">
        {number.toString().padStart(2, '')}
      </span>
      <p className="text-[#C0C8E7] font-light mb:max-w-[600px] text-sm mb:ml-4">{text}</p>
    </div>
  );


  return (
    <div className="min-h-screen flex flex-col items-center py-16 -mt-1 mb:mt-0 mb:py-24 px-4 md:px-8"
      style={bgImageStyle}
    >
      <div className="flex flex-col max-w-[1100px] ">

        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl mb:max-w-[700px] md:text-4xl font-light text-white mb-4">
            {translations.titleOne}{' '} <br className='hidden mb:block' />
            {translations.titleTwo}
          </h2>

          <p className="text-secondary max-w-2xl mx-auto">
            {translations.content}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col mb:flex-row w-full justify-evenly mb:ml-2 items-center">
          <EvaluationCard
            tier={translations.oneCardTier}
            title={translations.oneCardTitle}
            description={`${translations.oneCardDescOne} ${translations.oneCardDescTwo}`}
            features={[
              translations.oneCardItemOne,
              `${translations.oneCardItemTwoOne} ${translations.oneCardItemTwoTwo}`,
              translations.oneCardItemThree
            ]}
            color="bg-[#0052B4]"
            image={cardTwoImg}
          />
          <div className='mt-6 mb:ml-12 ml-0 mb:mt-0'>
            <EvaluationCard
              tier={translations.twoCardTier}
              title={translations.twoCardTitle}
              description={`${translations.twoCardDescOne} ${translations.twoCardDescTwo} ${translations.twoCardDescThree}`}
              features={[
                translations.twoCardItemOne,
                translations.twoCardItemTwo,
                translations.twoCardItemThree
              ]}
              color="bg-[#FF532D] "
              image={cardOneImg}
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col mt-32 mb:mt-36 items-center">
          <h2 className="text-3xl text-center md:text-4xl font-light text-white mb-4">
            {translations.simTitleOne}{' '}{translations.simTitleTwo}
          </h2>
          <div className="space-y-4 mt-10">
            <ProcessStep number={1} text={translations.simItemOne} />
            <ProcessStep number={2} text={translations.simItemTwo} />
            <ProcessStep number={3} text={translations.simItemThree} />
            <ProcessStep number={4} text={translations.simItemFour} />
          </div>
          <div className="mt-5 mb:mt-10">
          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=ProductsPageCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Products Page"
            section="Evaluation Section"
            translation={translations.ctaButton} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Evaluation;