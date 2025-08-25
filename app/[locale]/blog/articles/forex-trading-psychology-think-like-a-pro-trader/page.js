//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import Image from "next/image";
import CtaButton from "@/components/common/Buttons/CtaButton";
import {ENVIRONMENT_URL} from "@/constants/global";

//Images
import traderImg from "./assets/trader.jpg";
import viewImg from "./assets/view.JPG";
import chartImg from "./assets/chart.jpg";
import yogaImg from "./assets/yoga.jpg";
import { bgImageStyleBlog } from "@/constants/styles"

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

const i18nNameSpaces = ["common", "blog_landing", "article_forex_trading_psychology_think_like_a_pro_trader"];

//Params to bring the info from the db
const blogParam = "forex-trading-psychology-think-like-a-pro-trader"

const metadata_en = {
  title: "TopTier Academy: Learn, Trade, Succeed!",
  description: "Discover TopTier Academy, a revolutionary free forex education platform. Learn forex trading and earn a free 5K challenge upon completion.",
  keywords: "TopTier Academy, forex education, free forex course, trading psychology, market analysis, trading strategies, 5K challenge",
  language: "en",
  subject: "Forex Education",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "TopTier Academy: Free Forex Education with 5K Challenge",
    description: "Join TopTier Academy today for free, comprehensive forex education. Complete the course and earn a free 5K trading challenge!",
    image: "", // Add URL to the image
    site_name: "Toptier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/forex-trading-psychology-think-like-a-pro-trader`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/blog/articles/forex-trading-psychology-think-like-a-pro-trader`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  }
};

const metadata_es = {
  title: "TopTier Academy: ¡Aprende, Tradea, Gana!",
  description: "Descubre TopTier Academy, una plataforma revolucionaria de educación forex gratuita. Aprende trading forex y gana un desafío de 5K gratis al completar el curso.",
  keywords: "TopTier Academy, educación forex, curso forex gratuito, psicología del trading, análisis de mercado, estrategias de trading, desafío de 5K",
  language: "es",
  subject: "Educación Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "TopTier Academy: Educación Forex Gratuita con Desafío de 5K",
    description: "Únete a TopTier Academy hoy para una educación forex gratuita y completa. ¡Completa el curso y gana un desafío de trading de 5K gratis!",
    image: "", // Add URL to the image
    site_name: "Toptier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/forex-trading-psychology-think-like-a-pro-trader`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/blog/articles/forex-trading-psychology-think-like-a-pro-trader`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  }
};

const metadata_fr = {
  title: "Lancement de TopTier Academy : Éducation Forex Gratuite et Défi 5K",
  description: "Découvrez TopTier Academy, une plateforme révolutionnaire d'éducation forex gratuite. Apprenez le trading forex et gagnez un défi 5K gratuit à la fin du cours.",
  keywords: "TopTier Academy, éducation forex, cours forex gratuit, psychologie du trading, analyse de marché, stratégies de trading, défi 5K",
  language: "fr",
  subject: "Éducation Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "TopTier Academy : Éducation Forex Gratuite avec Défi 5K",
    description: "Rejoignez TopTier Academy aujourd'hui pour une éducation forex gratuite et complète. Terminez le cours et gagnez un défi de trading 5K gratuit !",
    image: "", // Add URL to the image
    site_name: "Toptier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/forex-trading-psychology-think-like-a-pro-trader`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/blog/articles/forex-trading-psychology-think-like-a-pro-trader`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
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
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5 mb:-mt-10">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_forex_trading_psychology_think_like_a_pro_trader:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Sep 1 2024'} userImg={userImg} /> */}

          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-1')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-2')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_trading_psychology_think_like_a_pro_trader:t-1')}</h3><br />
          <Image className="mb-10" loading="lazy" src={traderImg} alt='chess-img' />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-3')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-4')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-5')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-6')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-7')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_trading_psychology_think_like_a_pro_trader:t-2')}</h3><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-8')} <br /><br />

          <ul>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-9-p-1')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-9-p-2')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-9-p-3')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-9-p-4')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-9-p-5')} <br /><br /></li>
          </ul>

          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-10')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_trading_psychology_think_like_a_pro_trader:t-3')}</h3><br />
          <Image className="mb-10" loading="lazy" src={yogaImg} alt='chess-img' />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-11')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-12')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-13')} <br /><br />
          <h3 className="font-semibold text-2xl">  {t('article_forex_trading_psychology_think_like_a_pro_trader:t-4')}</h3><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-14')} <br /><br />

          <ul>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-14-p-1')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-14-p-2')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-14-p-3')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-14-p-4')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-14-p-5')} <br /><br /></li>
          </ul>

          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-15')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-16')} <br /><br />
          <h3 className="font-semibold text-2xl">  {t('article_forex_trading_psychology_think_like_a_pro_trader:t-5')}</h3><br />
          <Image className="mb-10" src={viewImg} alt='chess-img' />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-17')} <br /><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-18')} <br /><br />

          <ul>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-18-p-1')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-18-p-2')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-18-p-3')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-18-p-4')} <br /><br /></li>
          </ul>

          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-19')} <br /><br />

          <ul>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-19-p-1')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-19-p-2')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-19-p-3')} <br /><br /></li>
            <li>- {t('article_forex_trading_psychology_think_like_a_pro_trader:p-19-p-4')} <br /><br /></li>
          </ul>


          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-20')} <br /><br />
          <Image className="mb-10" src={chartImg} alt='chess-img' />
          <h3 className="font-semibold text-2xl">  {t('article_forex_trading_psychology_think_like_a_pro_trader:t-6')}</h3><br />
          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-21')} <br /><br />

          <ul>
            <BoldBeforeComa inputText={t('article_forex_trading_psychology_think_like_a_pro_trader:p-22-p-1')} prefix={'1. '}></BoldBeforeComa><br />
            <BoldBeforeComa inputText={t('article_forex_trading_psychology_think_like_a_pro_trader:p-22-p-2')} prefix={'2. '}></BoldBeforeComa><br />
            <BoldBeforeComa inputText={t('article_forex_trading_psychology_think_like_a_pro_trader:p-22-p-3')} prefix={'3. '}></BoldBeforeComa><br />
            <BoldBeforeComa inputText={t('article_forex_trading_psychology_think_like_a_pro_trader:p-22-p-4')} prefix={'4. '}></BoldBeforeComa><br />
            <BoldBeforeComa inputText={t('article_forex_trading_psychology_think_like_a_pro_trader:p-22-p-5')} prefix={'5. '}></BoldBeforeComa><br /><br />
          </ul>

          {t('article_forex_trading_psychology_think_like_a_pro_trader:p-23')} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Forex_Trading_Psychology_Think_Like_A_Pro_Trader_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Forex Trading Psychology: Pro Trader"
            translation='Start Your Challenge Today!' />
          <br />
        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

