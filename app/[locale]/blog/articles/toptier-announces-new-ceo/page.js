//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import HyperLink from "@/utils/blog/HyperLink";
import { FaArrowRight } from "react-icons/fa6";
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

const i18nNameSpaces = ["common", "blog_landing", "article_toptier-announces-new-ceo"];

//Params to bring the info from the db
const BLOG_PARAM = "toptier-announces-new-ceo"

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "TopTier Trader Welcomes Back Visionary CEO: Jamal Hollingsworth",
  description: "Jamal Hollingsworth, founder of Top Tier Trader, returns as CEO to lead a new era of innovation and growth in the leading proprietary trading firm.",
  keywords: "Jamal Hollingsworth, Top Tier Trader, CEO, proprietary trading, innovation, leadership, FinTech, prop trading",
  language: "en",
  subject: "Leadership change at Top Tier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "Top Tier Trader",
  publisher: "Top Tier Trader",
  og: {
    type: "article",
    title: "Top Tier Trader Welcomes Back Visionary CEO: Jamal Hollingsworth",
    description: "Jamal Hollingsworth returns as CEO of Top Tier Trader to lead a new era of innovation and growth in the leading proprietary trading firm.",
    image: "",
    site_name: "Top Tier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/${BLOG_PARAM}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/blog/articles/${BLOG_PARAM}`,
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
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "TopTier Trader da la bienvenida de vuelta al visionario CEO: Jamal Hollingsworth",
  description: "Jamal Hollingsworth, fundador de Top Tier Trader, regresa como CEO para liderar una nueva era de innovación y crecimiento en la empresa líder de trading propietario.",
  keywords: "Jamal Hollingsworth, Top Tier Trader, CEO, trading propietario, innovación, liderazgo, FinTech, prop trading",
  language: "es",
  subject: "Cambio de liderazgo en Top Tier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "Top Tier Trader",
  publisher: "Top Tier Trader",
  og: {
    type: "article",
    title: "TopTier Trader da la bienvenida de nuevo al visionario CEO: Jamal Hollingsworth",
    description: "Jamal Hollingsworth regresa como CEO de Top Tier Trader para liderar una nueva era de innovación y crecimiento en la empresa líder de trading propietario.",
    image: "",
    site_name: "Top Tier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/${BLOG_PARAM}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/blog/articles/${BLOG_PARAM}`,
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
  title: "TopTier Trader Accueille à Nouveau son PDG Visionnaire : Jamal Hollingsworth",
  description: "Jamal Hollingsworth, fondateur de Top Tier Trader, revient en tant que PDG pour diriger une nouvelle ère d'innovation et de croissance dans la principale entreprise de trading propriétaire.",
  keywords: "Jamal Hollingsworth, TopTier Trader, PDG, trading propriétaire, innovation, leadership, FinTech, prop trading",
  language: "fr",
  subject: "Changement de direction chez Top Tier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "Top Tier Trader",
  publisher: "Top Tier Trader",
  og: {
    type: "article",
    title: "Top Tier Trader Accueille à Nouveau son PDG Visionnaire : Jamal Hollingsworth",
    description: "Jamal Hollingsworth revient en tant que PDG de Top Tier Trader pour diriger une nouvelle ère d'innovation et de croissance dans la principale entreprise de trading propriétaire.",
    image: "",
    site_name: "Top Tier Trader",
    url:  `${ENVIRONMENT_URL}/fr/blog/articles/${BLOG_PARAM}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/blog/articles/${BLOG_PARAM}`,
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

  
  const firstParagraph = [
    { phrase: "Jamal Hollingsworth", link: "https://www.instagram.com/jamal.hollingsworth/?hl=en" },
  ]

  const secondParagraph = [
    { phrase: "Dave Guttman", link: "https://x.com/daveguttman_" },
    { phrase: "Nicolas Castillo", link: "https://www.instagram.com/nickcastle/?hl=en" },
    { phrase: "AI Technologies Co", link: "https://aitechnologiesco.com/" },
  ]

  const forthParagraph = [
    { phrase: "community", link: "https://discord.com/invite/9vUYq5FZnq" },
    { phrase: "Quillan Black-@cuebanks", link: "https://www.instagram.com/cuebanks/" },
    { phrase: "Tyler Williams-@anthonysworld", link: "https://www.instagram.com/anthonysworld/?hl=en" },
  ]

  const sixthParagraph = [
    { phrase: "released Levels", link: "https://levels.toptiertrader.com" },
    { phrase: "customizable challenges", link: "https://app.toptiertrader.com/buy-challenge/" },
  ]

  const sevenParagraph = [
    { phrase: "TopTier Trader is making it clear", link: "https://www.youtube.com/watch?v=7lTXSKzG8Ig" },
  ]

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >


      <Content currentLanguage={i18n.language} params={BLOG_PARAM} translations={headContentTranslations} locale={locale} />


      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">

        <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_toptier-announces-new-ceo:h1_title')}</h1>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Nov 11 2024'} userImg={userImg}/> */}

          <HyperLink text={t('article_toptier-announces-new-ceo:p-1')} links={firstParagraph} />  <br /><br />
          {/* {t('article_toptier-announces-new-ceo:p-1')} <br /><br /> */}

          <h3 className="font-semibold text-2xl">  {t('article_toptier-announces-new-ceo:t-1')}</h3><br />
          <HyperLink text={t('article_toptier-announces-new-ceo:p-2')} links={secondParagraph} />  <br />
          {t('article_toptier-announces-new-ceo:p-3')} <br /><br />
          <HyperLink text={t('article_toptier-announces-new-ceo:p-4')} links={forthParagraph} />  <br />
          {t('article_toptier-announces-new-ceo:p-5')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_toptier-announces-new-ceo:t-2')}</h3><br />
          <HyperLink text={t('article_toptier-announces-new-ceo:p-6')} links={sixthParagraph} />  <br />


          <div className="flex flex-row">
            <a href="https://levels.toptiertrader.com">
              <button className="bg-ttblue flex flex-row items-center py-2.5 px-6 text-white rounded-lg">
                <p>Explore Levels </p>
                <FaArrowRight className="ml-2 w-4 h-4" />
              </button>
            </a>
          </div><br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_toptier-announces-new-ceo:t-3')}</h3><br />
          <HyperLink text={t('article_toptier-announces-new-ceo:p-7')} links={sevenParagraph} />  <br />
          {t('article_toptier-announces-new-ceo:p-8')} <br /><br />
          {t('article_toptier-announces-new-ceo:p-9')} <br /><br />

          <a href="https://app.toptiertrader.com/buy-challenge/?el=New_CEO_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=SAVE10">
            <button className="bg-ttorange flex flex-row items-center py-2.5 px-6 text-white rounded-lg">
              <p>Start Your Challenge Today with 10% OFF </p>
              <FaArrowRight className="ml-2 w-4 h-4" />
            </button>
          </a><br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_toptier-announces-new-ceo:t-4')}</h3><br />
          {t('article_toptier-announces-new-ceo:p-10')} <br /><br />
          {t('article_toptier-announces-new-ceo:p-11')} <br /><br />
          {t('article_toptier-announces-new-ceo:p-12')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_toptier-announces-new-ceo:t-5')}</h3><br />

          {t('article_toptier-announces-new-ceo:p-13')} <br /><br />
          {t('article_toptier-announces-new-ceo:p-14')} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=TopTierAnnouncesNewCEO_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="TopTier Announces New CEO"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

