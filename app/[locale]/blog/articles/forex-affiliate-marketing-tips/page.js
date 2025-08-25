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

const i18nNameSpaces = ["common", "blog_landing", "article_forex_affiliate_marketing_tips"];

//Params to bring the info from the db
const blogParam = "forex-affiliate-marketing-tips"

const metadata_en = {
  title: "7 Forex Affiliate Marketing Tips That Lead to Success",
  description: "Discover effective tips for success in forex affiliate marketing. Learn how to choose the right program, optimize payments, understand your audience, and more.",
  keywords: "Forex affiliate marketing tips, forex affiliate programs, affiliate commissions, payment terms, SEO for affiliates",
  language: "en",
  subject: "Forex Affiliate Marketing Tips for Success",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "7 Forex Affiliate Marketing Tips That Lead to Success",
    description: "Explore essential tips for achieving success in forex affiliate marketing. Learn about program selection, payment optimization, audience understanding, and more.",
    image: "",
    site_name: "TopTier Trader",
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
  title: "7 Tips de Marketing de Afiliados Que Te Llevarán al Éxito",
  description: "Descubre consejos efectivos para el éxito en el marketing de afiliados en Forex. Aprende a elegir el programa adecuado, optimizar los pagos, entender a tu audiencia y más.",
  keywords: "Consejos de marketing de afiliados en Forex, programas de afiliados de Forex, comisiones de afiliados, términos de pago, SEO para afiliados",
  language: "es",
  subject: "Consejos de Marketing de Afiliados en Forex para el Éxito",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "7 Tips de Marketing de Afiliados Que Te Llevarán al Éxito",
    description: "Explora consejos esenciales para lograr el éxito en el marketing de afiliados en Forex. Aprende sobre la selección de programas, la optimización de pagos, la comprensión de la audiencia y más.",
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
  title: "7 Conseils de Marketing d'Affiliation Forex Qui Mènent au Succès",
  description: "Découvrez des conseils efficaces pour réussir dans le marketing d'affiliation forex. Apprenez à choisir le bon programme, à optimiser les paiements, à comprendre votre public et plus encore.",
  keywords: "Conseils de marketing d'affiliation forex, programmes d'affiliation forex, commissions d'affiliation, conditions de paiement, SEO pour les affiliés",
  language: "fr",
  subject: "Conseils de Marketing d'Affiliation Forex pour Réussir",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "7 Conseils de Marketing d'Affiliation Forex Qui Mènent au Succès",
    description: "Explorez les conseils essentiels pour réussir dans le marketing d'affiliation forex. Découvrez la sélection de programmes, l'optimisation des paiements, la compréhension de votre public, et plus encore.",
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
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_forex_affiliate_marketing_tips:h1_title')}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Jul 27 2024'} userImg={userImg} /> */}

          {t('article_forex_affiliate_marketing_tips:p-1')} <br /><br />
          {t('article_forex_affiliate_marketing_tips:p-2')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-1')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-3')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-2')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-4')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-3')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-5')} <br /><br />

          {t('article_forex_affiliate_marketing_tips:p-6')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-4')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-7')} <br /><br />

          {t('article_forex_affiliate_marketing_tips:p-8')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-5')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-9')} <br /><br />

          {t('article_forex_affiliate_marketing_tips:p-10')} <br /><br />

          {t('article_forex_affiliate_marketing_tips:p-11')} <br /><br />

          {t('article_forex_affiliate_marketing_tips:p-12')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-6')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-13')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-7')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-14')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-8')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-15')} <br /><br />
          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-9')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-16')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-10')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-17')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-11')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-18')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-12')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-19')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-13')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-20')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-14')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-21')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-15')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-22')} <br /><br />
          {t('article_forex_affiliate_marketing_tips:p-23')} <br /><br />
          {t('article_forex_affiliate_marketing_tips:p-24')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-16')}</h3><br />

          {t('article_forex_affiliate_marketing_tips:p-25')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_forex_affiliate_marketing_tips:t-17')}</h3><br />
          {t('article_forex_affiliate_marketing_tips:p-26')} <br /><br />

          <a href="https://affiliates.toptiertrader.com" className="underline font-semibold">
            {t('article_forex_affiliate_marketing_tips:p-27')} <br /><br />
          </a>

          <CtaButton
            utm="https://affiliates.toptiertrader.com"
            page="Blog"
            section="Forex Affiliate Marketing Tips"
            translation='Join Our Affiliate Program Now' />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

