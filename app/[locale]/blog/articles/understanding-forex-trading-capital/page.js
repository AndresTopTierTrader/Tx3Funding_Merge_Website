//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { bgImageStyleBlog } from "@/constants/styles"
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
import Content from "../../../../../components/blog/Content";

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-white ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
  </div>
})

const i18nNameSpaces = ["common", "blog_landing", "article_understanding_forex_trading_capital"];

//Params to bring the info from the db
const blogParam = "understanding-forex-trading-capital"

const metadata_en = {
  title: "Understanding Forex Trading Capital: From Personal Accounts to Prop Firms",
  description: "Explore the various aspects of Forex trading capital, from starting amounts and leveraging, to risk management and alternative sources like prop firms.",
  keywords: "Forex trading capital, trading capital, Forex market, leverage, risk management, prop firms, TopTier Trader",
  language: "en",
  subject: "Forex Trading Capital",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Understanding Forex Trading Capital: From Personal Accounts to Prop Firms",
    description: "Explore the various aspects of Forex trading capital, from starting amounts and leveraging, to risk management and alternative sources like prop firms.",
    image: "",
    site_name: "Toptier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`
  }
};

const metadata_es = {
  title: "Entendiendo el Capital de Trading en Forex: Desde Cuentas Personales hasta Prop Firms",
  description: "Explora los diversos aspectos del capital de trading en Forex, desde las cantidades iniciales y el apalancamiento, hasta la gestión de riesgo y fuentes alternativas como las Prop Firms.",
  keywords: "capital de trading en Forex, capital de trading, mercado de divisas, apalancamiento, gestión de riesgo, Prop Firms, TopTier Trader",
  language: "es",
  subject: "Capital de Trading en Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Entendiendo el Capital de Trading en Forex: Desde Cuentas Personales hasta Prop Firms",
    description: "Explora los diversos aspectos del capital de trading en Forex, desde las cantidades iniciales y el apalancamiento, hasta la gestión de riesgo y fuentes alternativas como las Prop Firms.",
    image: "",
    site_name: "Toptier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`
  }
};

const metadata_fr = {
  title: "Comprendre le Capital de Trading Forex : Des Comptes Personnels aux Prop Firms",
  description: "Explorez les différents aspects du capital de trading Forex, des montants de départ et du levier, à la gestion des risques et aux sources alternatives comme les prop firms.",
  keywords: "capital de trading Forex, capital de trading, marché Forex, levier, gestion des risques, prop firms, TopTier Trader",
  language: "fr",
  subject: "Capital de Trading Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Comprendre le Capital de Trading Forex : Des Comptes Personnels aux Prop Firms",
    description: "Explorez les différents aspects du capital de trading Forex, des montants de départ et du levier, à la gestion des risques et aux sources alternatives comme les prop firms.",
    image: "",
    site_name: "Toptier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`
  }
};


//Exports the metadata depending on the language
export async function generateMetadata({ params: { locale } }) {

  let returnedMetadata = ''
  const mainLang = locale.split('-')[0]

  if (mainLang === "en") {
    returnedMetadata = metadata_en
  }
  if (mainLang === "es") {
    returnedMetadata = metadata_es
  }
  if (mainLang === "fr") {
    returnedMetadata = metadata_fr
  }
  return returnedMetadata
}

export default async function Page({ params: { locale } }) {
  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

  const mainLang = locale.split('-')[0]

  const headContentTranslations = {
    home: t('blog_landing:breadcrumbs_home'),
    blog: t('blog_landing:breadcrumbs_blog'),
  }

  const finalSectionTranslations = {
    form: {
      formTitle1: t('common:form_title_1'),
      formTitle2: t('common:form_title_2'),
      formLoop: t('common:form_loop'),
      formContent1: t('common:form_content_1'),
      formContent2: t('common:form_content_2'),
      formSubmit: t('common:form_submit'),
      emailHere: t('common:email_here')
    },
    wise: {
      wiseTitle1: t('common:wise_title_1'),
      wiseTitle2: t('common:wise_title_2'),
      wiseContent: t('common:wise_content')
    },
    resources: {
      resourcesTradingTitle: t('common:resources_trading_title'),
      resourcesResourcesTitle: t('common:resources_resources_title')
    }
  }

  
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >


      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />

      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className='mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5'> {t('article_understanding_forex_trading_capital:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Aug 1 2024'} userImg={userImg} /> */}

          {t('article_understanding_forex_trading_capital:p-1')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_understanding_forex_trading_capital:t-1')}</h3><br />
          {t('article_understanding_forex_trading_capital:p-2')} <br /><br />
          {t('article_understanding_forex_trading_capital:p-3')} <br /><br />
          {t('article_understanding_forex_trading_capital:p-4')} <br /><br />
          {t('article_understanding_forex_trading_capital:p-5')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_understanding_forex_trading_capital:t-2')}</h3><br />

          {t('article_understanding_forex_trading_capital:p-6')} <br /><br />
          {t('article_understanding_forex_trading_capital:p-7')} <br /><br />
          {t('article_understanding_forex_trading_capital:p-8')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_understanding_forex_trading_capital:t-3')}</h3><br />

          {t('article_understanding_forex_trading_capital:p-9')} <br /><br />

          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-10-t-1')} </span>
            {t('article_understanding_forex_trading_capital:p-10-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-10-t-2')} </span>
            {t('article_understanding_forex_trading_capital:p-10-p-2')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-10-t-3')} </span>
            {t('article_understanding_forex_trading_capital:p-10-p-3')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-10-t-4')} </span>
            {t('article_understanding_forex_trading_capital:p-10-p-4')}
          </p> <br /><br />

          {t('article_understanding_forex_trading_capital:p-11')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_understanding_forex_trading_capital:t-4')}</h3><br />

          {t('article_understanding_forex_trading_capital:p-12')} <br /><br />

          <p className="font-semibold"> {t('article_understanding_forex_trading_capital:p-13')} </p> <br />

          {t('article_understanding_forex_trading_capital:p-14')} <br /><br />

          <a href='https://app.toptiertrader.com/buy-challenge/?el=WebBlogCTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=EAsAllowed&addons=maxLoss'>
            <div className="bg-ttorange hover:bg-orange-600 transition-all hover:scale-110 hover:cursor-pointer w-fit px-10 py-3 rounded-xl">
              <p className="font-bold text-white"> Try TopTier Trader Now</p>
            </div>
          </a><br /><br />

          {t('article_understanding_forex_trading_capital:p-15')} <br /><br />

          {t('article_understanding_forex_trading_capital:p-16')} <br /><br />

          {t('article_understanding_forex_trading_capital:p-17')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_understanding_forex_trading_capital:t-5')}</h3><br />


          <p className="font-semibold underline text-ttblue">{t('article_understanding_forex_trading_capital:p-18')} <br /><br /> </p>

          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-18-t-1')} </span>
            {t('article_understanding_forex_trading_capital:p-18-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-18-t-2')} </span>
            {t('article_understanding_forex_trading_capital:p-18-p-2')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-18-t-3')} </span>
            {t('article_understanding_forex_trading_capital:p-18-p-3')}
          </p> <br />
          <br />
          <p className="font-semibold underline text-ttblue">{t('article_understanding_forex_trading_capital:p-19')} <br /><br /> </p>

          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-19-t-1')} </span>
            {t('article_understanding_forex_trading_capital:p-19-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-19-t-2')} </span>
            Evaluation periods and funding phases may have time limits.
          </p> <br />
          <p>
            <span className="font-semibold"> Rule Compliance: </span>
            {t('article_understanding_forex_trading_capital:p-19-p-3')}
          </p> <br />
          <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_understanding_forex_trading_capital:t-6')}</h3><br />

          {t('article_understanding_forex_trading_capital:p-20')}<br /><br />

          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-21-t-1')} </span>
            {t('article_understanding_forex_trading_capital:p-21-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-21-t-2')} </span>
            {t('article_understanding_forex_trading_capital:p-21-p-2')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-21-t-3')} </span>
            {t('article_understanding_forex_trading_capital:p-21-p-3')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-21-t-4')} </span>
            {t('article_understanding_forex_trading_capital:p-21-p-4')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-21-t-5')} </span>
            {t('article_understanding_forex_trading_capital:p-21-p-5')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_understanding_forex_trading_capital:p-21-t-6')} </span>
            {t('article_understanding_forex_trading_capital:p-21-p-6')}
          </p> <br />

          {t('article_understanding_forex_trading_capital:p-22')}<br />
          <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=UnderstandingForexTradingCapital_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Understanding Forex Trading Capital"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

