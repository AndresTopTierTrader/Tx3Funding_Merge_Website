//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import Image from "next/image";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import billsImg from './assets/bills.jpg'
import payImg from './assets/payment.jpg'
import traderImg from './assets/trader.jpg'
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

const i18nNameSpaces = ["common", "blog_landing", "article_how_is_prop_trading_profitable"];

//Params to bring the info from the db
const blogParam = "is-prop-trading-profitable"

const metadata_en = {
  title: "Is Prop Trading Profitable? A Complete Guide",
  description: "Learn about proprietary trading profitability, how it works, career opportunities, and whether you can make a living as a prop trader in this comprehensive guide.",
  keywords: "is prop trading profitable, prop trading career, proprietary trading, how to make money prop trading, prop trading income, prop firm payouts, prop trading success",
  language: "en",
  subject: "prop trading profitability, proprietary trading, trading careers",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Is Prop Trading Profitable? A Complete Guide",
    description: "Learn about proprietary trading profitability, how it works, career opportunities, and whether you can make a living as a prop trader in this comprehensive guide.",
    image: "",
    site_name: "TopTier Trader",
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

const metadata_es = {
  title: "¿Es Rentable el Prop Trading? Una Guía Completa",
  description: "Aprende sobre la rentabilidad del prop trading, cómo funciona, las oportunidades profesionales y si puedes ganarte la vida como trader propietario en esta guía completa.",
  keywords: "es rentable el trading propietario, carrera en trading propietario, trading prop, cómo ganar dinero con trading prop, ingresos trading prop, pagos firma prop, éxito en trading prop",
  language: "es",
  subject: "rentabilidad del trading propietario, trading prop, carreras en trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "¿Es Rentable el Trading Propietario? Una Guía Completa",
    description: "Aprende sobre la rentabilidad del trading propietario, cómo funciona, las oportunidades profesionales y si puedes ganarte la vida como trader propietario en esta guía completa.",
    image: "",
    site_name: "TopTier Trader",
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
  title: "Le Trading Propriétaire Est-il Rentable ? Un Guide Complet",
  description: "Découvrez la rentabilité du trading propriétaire, son fonctionnement, les opportunités de carrière et si vous pouvez gagner votre vie en tant que trader propriétaire dans ce guide complet.",
  keywords: "rentabilité trading propriétaire, carrière trading propriétaire, trading prop, comment gagner argent trading prop, revenus trading prop, paiements société prop, succès trading prop",
  language: "fr",
  subject: "rentabilité du trading propriétaire, trading prop, carrières dans le trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Le Trading Propriétaire Est-il Rentable ? Un Guide Complet",
    description: "Découvrez la rentabilité du trading propriétaire, son fonctionnement, les opportunités de carrière et si vous pouvez gagner votre vie en tant que trader propriétaire dans ce guide complet.",
    image: "",
    site_name: "TopTier Trader",
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
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5 ">{t('article_how_is_prop_trading_profitable:h1_title')}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'OCt 26 2024'} userImg={userImg} /> */}

          {t('article_how_is_prop_trading_profitable:p-1')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:t-1')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-2')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:t-2')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-3')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:st-1')}</h3><br />


          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-4-p-1')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-4-p-2')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-4-p-3')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-4-p-4')} prefix={t('')} /><br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:st-2')}</h3><br />


          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-5-p-1')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-5-p-2')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-5-p-3')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-5-p-4')} prefix={t('')} /><br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:st-3')}</h3><br />

          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-6-p-1')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-6-p-2')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-6-p-3')} prefix={t('')} /><br />

          {t('article_how_is_prop_trading_profitable:p-7')} <br /><br /><br />


          <Image alt="blog image" src={billsImg} loading="lazy" className="w-full" /><br /><br />

          <h3 className="font-medium text-4xl">  {t('article_how_is_prop_trading_profitable:t-3')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-8')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:st-4')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-9')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:st-5')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-10')} <br /><br />

          {t('article_how_is_prop_trading_profitable:p-11')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:st-6')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-12')} <br /><br /><br />


          <Image alt="blog image" src={payImg} loading="lazy" className="w-full" /><br /><br />

          <h3 className="font-medium text-4xl">  {t('article_how_is_prop_trading_profitable:st-7')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-13')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:t-5')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-14')} <br /><br />
          {t('article_how_is_prop_trading_profitable:p-15')} <br /><br />
          {t('article_how_is_prop_trading_profitable:p-16')} <br /><br />
          {t('article_how_is_prop_trading_profitable:p-17')} <br /><br /><br />

          <Image alt="blog image" src={traderImg} loading="lazy" className="w-full" /><br /><br />

          <h3 className="font-medium text-4xl">  {t('article_how_is_prop_trading_profitable:t-6')}</h3><br />

          {t('article_how_is_prop_trading_profitable:p-18')} <br /><br />

          <h3 className="font-medium text-2xl">  {t('article_how_is_prop_trading_profitable:st-8')}</h3><br />

          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-19-p-1')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-19-p-2')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-19-p-3')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-19-p-4')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-19-p-5')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_is_prop_trading_profitable:p-19-p-6')} prefix={t('')} /><br />

          {t('article_how_is_prop_trading_profitable:p-20')} <br /><br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Is_Prop_Trading_Profitable_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Is Prop Trading Profitable"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

