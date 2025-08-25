//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { bgImageStyleBlog } from "@/constants/styles"
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import chessImg from "./assets/chess.jpg";
import stopLossImg from "./assets/stop.jpg";
import journalImg from "./assets/journal.jpg";
import Image from "next/image";
import CtaButton from "@/components/common/Buttons/CtaButton";
import getCurrentUTMMonth from "@/utils/misc/getCurrentUTM.js";
import {ENVIRONMENT_URL} from "@/constants/global";

const CURRENT_MONTH = getCurrentUTMMonth();

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

const i18nNameSpaces = ["common", "blog_landing", "article_building_your_forex_plan"];

//Params to bring the info from the db
const blogParam = "building-your-forex-trading-plan"

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
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`,
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
    url: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`,
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
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`,
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
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className='mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5'> {t('article_building_your_forex_plan:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Aug 27 2024'} userImg={userImg} /> */}

          {t('article_building_your_forex_plan:p-1')} <br /><br />
          {t('article_building_your_forex_plan:p-2')} <br /><br />

          <h3 className="font-semibold text-3xl">  {t('article_building_your_forex_plan:t-1')}</h3><br />
          <Image className="mb-10" src={chessImg} alt='chess-img' />

          {t('article_building_your_forex_plan:p-3')} <br /><br />
          {t('article_building_your_forex_plan:p-4')} <br /><br />

          <ul>
            <li>- {t('article_building_your_forex_plan:p-4-p-1')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-4-p-2')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-4-p-3')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-4-p-4')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-4-p-5')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-4-p-6')} <br /><br /></li>
          </ul>

          {t('article_building_your_forex_plan:p-5')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_building_your_forex_plan:t-2')}</h3><br />

          {t('article_building_your_forex_plan:p-6')} <br /><br />
          {t('article_building_your_forex_plan:p-7')} <br /><br />

          <ul>
            <li>- {t('article_building_your_forex_plan:p-7-p-1')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-7-p-2')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-7-p-3')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-7-p-4')} <br /><br /></li>
            <li>- {t('article_building_your_forex_plan:p-7-p-5')} <br /></li><br />
          </ul>

          <h3 className="font-semibold text-2xl">  {t('article_building_your_forex_plan:t-3')}</h3><br />

          <Image className="mb-10" src={stopLossImg} alt='stopLoss-img' />

          {t('article_building_your_forex_plan:p-8')} <br /><br />

          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-9')} prefix={''}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-10')} prefix={''}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-11')} prefix={''}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-12')} prefix={''}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-13')} prefix={''}></BoldBeforeComa><br /><br />

          {t('article_building_your_forex_plan:p-14')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_building_your_forex_plan:t-4')}</h3><br />


          <Image className="mb-10" src={journalImg} alt='journal-img' />

          {t('article_building_your_forex_plan:p-15')} <br /><br />
          {t('article_building_your_forex_plan:p-16')} <br /><br />
          {t('article_building_your_forex_plan:p-17')} <br /><br />
          {t('article_building_your_forex_plan:p-18')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_building_your_forex_plan:t-5')}</h3><br />

          {t('article_building_your_forex_plan:p-19')} <br /><br />
          {t('article_building_your_forex_plan:p-20')} <br /><br />
          {t('article_building_your_forex_plan:p-21')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_building_your_forex_plan:t-6')}</h3><br />

          {t('article_building_your_forex_plan:p-22')} <br /><br />

          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-22-p-1')} prefix={'1. '}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-22-p-2')} prefix={'2. '}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-22-p-3')} prefix={'3. '}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-22-p-4')} prefix={'4. '}></BoldBeforeComa><br />
          <BoldBeforeComa inputText={t('article_building_your_forex_plan:p-22-p-5')} prefix={'5. '}></BoldBeforeComa><br /><br />


          {t('article_building_your_forex_plan:p-23')} <br /><br />
          {t('article_building_your_forex_plan:p-24')} <br /><br />
          {t('article_building_your_forex_plan:p-25')} <br /><br />

          <CtaButton
            utm={`https://app.toptiertrader.com/buy-challenge/?el=Building_Your_Forex_Trading_Plan_CTA&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss`}
            page="Blog"
            section="Building Your Forex Trading Plan"
            translation='Get Your Challenge Now' />

        </article>

      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

