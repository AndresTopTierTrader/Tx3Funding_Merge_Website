//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import { bgImageStyleBlog } from "@/constants/styles"
import {ENVIRONMENT_URL} from "@/constants/global";

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

const i18nNameSpaces = ["common", "blog_landing", "article_introduction-to-trading-terminology"];

//Params to bring the info from the db
const blogParam = "introduction-to-trading-terminology"

const metadata_en = {
  title: "Essential Forex Trading Terminology: Your Ultimate Guide",
  description: "Unlock the language of forex trading with this comprehensive guide to essential terminology, from common acronyms to advanced concepts.",
  keywords: "forex trading, trading terminology, forex market, trading acronyms, forex orders, currency pairs, technical analysis, fundamental analysis, risk management",
  language: "en",
  subject: "Forex Trading Terminology",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Decode Essential Forex Trading Terminology: Your Ultimate Guide",
    description: "Unlock the language of forex trading with this comprehensive guide to essential terminology, from common acronyms to advanced concepts.",
    image: "", // Add URL to the image
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
  title: "Terminología Esencial del Trading de Forex: Tu Guía Definitiva",
  description: "Desbloquea el lenguaje del trading de forex con esta guía completa de terminología esencial, desde acrónimos comunes hasta conceptos avanzados.",
  keywords: "trading de forex, terminología de trading, mercado de forex, acrónimos de trading, órdenes de forex, pares de divisas, análisis técnico, análisis fundamental, gestión de riesgos",
  language: "es",
  subject: "Terminología del Trading de Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Descifra la Terminología Esencial del Trading de Forex: Tu Guía Definitiva",
    description: "Desbloquea el lenguaje del trading de forex con esta guía completa de terminología esencial, desde acrónimos comunes hasta conceptos avanzados.",
    image: "", // Add URL to the image
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
  title: "Terminologie Essentielle du Trading Forex: Votre Guide Ultime",
  description: "Déverrouillez le langage du trading forex avec ce guide complet sur la terminologie essentielle, des acronymes courants aux concepts avancés.",
  keywords: "trading forex, terminologie de trading, marché forex, acronymes de trading, ordres forex, paires de devises, analyse technique, analyse fondamentale, gestion des risques",
  language: "fr",
  subject: "Terminologie du Trading Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Décodez la Terminologie Essentielle du Trading Forex: Votre Guide Ultime",
    description: "Déverrouillez le langage du trading forex avec ce guide complet sur la terminologie essentielle, des acronymes courants aux concepts avancés.",
    image: "", // Add URL to the image
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
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5 mb:-mt-10">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_introduction-to-trading-terminology:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Aug 19 2024'} userImg={userImg} /> */}

          {t('article_introduction-to-trading-terminology:p-1')} <br /><br />
          {t('article_introduction-to-trading-terminology:p-2')} <br /><br />
          {t('article_introduction-to-trading-terminology:p-3')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-1')}</h3><br />

          {t('article_introduction-to-trading-terminology:p-4')} <br /><br />

          <p>
            <span className="font-semibold"> 01 - {t('article_introduction-to-trading-terminology:p-5-t-1')} </span>
            {t('article_introduction-to-trading-terminology:p-5-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> 02 -  {t('article_introduction-to-trading-terminology:p-5-t-2')} </span>
            {t('article_introduction-to-trading-terminology:p-5-p-2')}
          </p> <br />
          <p>
            <span className="font-semibold"> 03 - {t('article_introduction-to-trading-terminology:p-5-t-3')}</span>
            {t('article_introduction-to-trading-terminology:p-5-p-3')}
          </p> <br />
          <p>
            <span className="font-semibold"> 04 -  {t('article_introduction-to-trading-terminology:p-5-t-4')} </span>
            {t('article_introduction-to-trading-terminology:p-5-p-4')}
          </p> <br />


          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-2')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-6')} <br /><br />

          <p>
            <span className="font-semibold"> 01 - {t('article_introduction-to-trading-terminology:p-7-t-1')} </span>
            {t('article_introduction-to-trading-terminology:p-7-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> 02 -  {t('article_introduction-to-trading-terminology:p-7-t-2')} </span>
            {t('article_introduction-to-trading-terminology:p-7-p-2')}
          </p> <br />
          <p>
            <span className="font-semibold"> 03 - {t('article_introduction-to-trading-terminology:p-7-t-3')}</span>
            {t('article_introduction-to-trading-terminology:p-7-p-3')}
          </p> <br />
          <p>
            <span className="font-semibold"> 04 - {t('article_introduction-to-trading-terminology:p-7-t-4')} </span>
            {t('article_introduction-to-trading-terminology:p-7-p-4')}
          </p> <br />

          <div className="flex flex-col bg-white px-5 pt-4 pb-0 mb-5 rounded-xl">
            <h3 className="font-semibold text-xl underline">  {t('article_introduction-to-trading-terminology:p-8-t-1')}</h3><br />
            {t('article_introduction-to-trading-terminology:p-8-p-1')} <br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-3')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-9')} <br /><br />

          <p>
            <span className="font-semibold"> {t('article_introduction-to-trading-terminology:p-10-t-1')} </span>
            {t('article_introduction-to-trading-terminology:p-10-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_introduction-to-trading-terminology:p-10-t-2')} </span>
            {t('article_introduction-to-trading-terminology:p-10-p-2')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_introduction-to-trading-terminology:p-10-t-3')}</span>
            {t('article_introduction-to-trading-terminology:p-10-p-3')}
          </p> <br />

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-4')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-13')} <br /><br />

          <div>
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-14')} prefix="01 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-15')} prefix="02 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-16')} prefix="03 - " /><br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-5')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-17')} <br /><br />


          <div>
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-18-p-1')} prefix="01 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-18-p-2')} prefix="02 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-18-p-3')} prefix="03 - " /><br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-6')}</h3><br />

          <div>
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-19-p-1')} prefix="01 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-19-p-2')} prefix="02 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-19-p-3')} prefix="03 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-19-p-4')} prefix="04 - " /><br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-7')}</h3><br />
          To deepen your understanding, let&#39;s explore some advanced forex trading concepts:<br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-8')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-21')} <br /><br />

          <div>
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-22-p-1')} prefix="01 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-22-p-2')} prefix="02 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-22-p-3')} prefix="03 - " /><br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-9')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-23')} <br /><br />

          <div>
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-24-p-1')} prefix="01 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-24-p-2')} prefix="02 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-24-p-3')} prefix="03 - " /><br /><br />
          </div>


          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-10')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-25')} <br /><br />

          <div>
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-26-p-1')} prefix="01 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-26-p-2')} prefix="02 - " /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-26-p-3')} prefix="03 - " /><br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {t('article_introduction-to-trading-terminology:t-11')}</h3><br />
          {t('article_introduction-to-trading-terminology:p-27')} <br /><br />

          <div>
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-1')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-2')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-3')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-4')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-5')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-6')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-7')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-8')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-9')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-10')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-11')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-12')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-13')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-14')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-15')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-16')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-17')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-18')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-19')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-20')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-21')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-22')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-23')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-24')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-25')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-26')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-27')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-28')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-29')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-30')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-31')} prefix="" /><br />
            <BoldBeforeComa inputText={t('article_introduction-to-trading-terminology:p-28-p-32')} prefix="" /><br />

          </div> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Introduction_To_Trading_Terminology_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Introduction to Trading Terminology"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

