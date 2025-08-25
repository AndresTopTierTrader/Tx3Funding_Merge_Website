//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
import Content from "../../../../../components/blog/Content";
import { bgImageStyleBlog } from "@/constants/styles"
 
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

//Params to bring the info from the db
const blogParam = "how-to-become-a-prop-trader"

const metadata_en = {
  title: "How to Become a Prop Trader",
  description: "Learn how to become a prop trader by exploring the steps, qualifications, and skills needed. Find out how to succeed in proprietary trading with TopTier Trader.",
  keywords: "how to become a prop trader, how to become a proprietary trader, how to get into prop trading, become a prop trader, what is a prop firm trader",
  language: "en",
  subject: "Proprietary Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "How to Become a Prop Trader | TopTier Trader",
    description: "Learn how to become a prop trader by exploring the steps, qualifications, and skills needed. Find out how to succeed in proprietary trading with TopTier Trader.",
    image: "", // Insert image URL here
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/how-to-become-a-prop-trader`
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
  title: "Cómo Convertirte en un Prop Trader",
  description: "Descubre cómo convertirte en un prop trader y aprende los pasos necesarios para comenzar tu carrera en el trading propietario con TopTier Trader.",
  keywords: "cómo convertirme en un prop trader, cómo convertirme en un trader propietario, cómo entrar en prop trading, convertirme en un prop trader, qué es un trader de una prop firm",
  language: "es",
  subject: "Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Cómo Convertirte en un Prop Trader | TopTier Trader",
    description: "Descubre cómo convertirte en un prop trader y aprende los pasos necesarios para comenzar tu carrera en el trading propietario con TopTier Trader.",
    image: "", // Insert image URL here
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/how-to-become-a-prop-trader`
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
  title: "Comment Devenir un Prop Trader",
  description: "Découvrez comment devenir un prop trader et apprenez les étapes nécessaires pour débuter votre carrière dans le trading propriétaire avec TopTier Trader.",
  keywords: "comment devenir un prop trader, comment devenir un trader propriétaire, comment entrer dans le prop trading, devenir un prop trader, qu'est-ce qu'un trader d'une prop firm",
  language: "fr",
  subject: "Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Comment Devenir un Prop Trader | TopTier Trader",
    description: "Découvrez comment devenir un prop trader et apprenez les étapes nécessaires pour débuter votre carrière dans le trading propriétaire avec TopTier Trader.",
    image: "", // Insérer l'URL de l'image ici
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/how-to-become-a-prop-trader`
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

const i18nNameSpaces = ["common", "blog_landing", "article_how_to_become_a_prop_trader"];

import image1 from './assets/How To Become a Prop Trader - Blog 2.jpg'
import image2 from './assets/How To Become a Prop Trader - Blog 3.jpg'
import image3 from './assets/How To Become a Prop Trader - Blog 4.jpg'
import image4 from './assets/How To Become a Prop Trader - Blog 5.jpg'

export default async function Page({ params: { locale } }) {

  const mainLang = locale.split('-')[0]

  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

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

  
  const blogTranslations = {
    h1_title: t('article_how_to_become_a_prop_trader:h1_title'),
    t1: t('article_how_to_become_a_prop_trader:t1'),
    t2: t('article_how_to_become_a_prop_trader:t2'),
    t3: t('article_how_to_become_a_prop_trader:t3'),
    t4: t('article_how_to_become_a_prop_trader:t4'),
    t5: t('article_how_to_become_a_prop_trader:t5'),
    t6: t('article_how_to_become_a_prop_trader:t6'),
    t7: t('article_how_to_become_a_prop_trader:t7'),
    t8: t('article_how_to_become_a_prop_trader:t8'),
    t9: t('article_how_to_become_a_prop_trader:t9'),
    t10: t('article_how_to_become_a_prop_trader:t10'),
    t11: t('article_how_to_become_a_prop_trader:t11'),
    t12: t('article_how_to_become_a_prop_trader:t12'),
    t13: t('article_how_to_become_a_prop_trader:t13'),
    t14: t('article_how_to_become_a_prop_trader:t14'),
    t15: t('article_how_to_become_a_prop_trader:t15'),
    t16: t('article_how_to_become_a_prop_trader:t16'),
    t17: t('article_how_to_become_a_prop_trader:t17'),
    p1: t('article_how_to_become_a_prop_trader:p1'),
    p2: t('article_how_to_become_a_prop_trader:p2'),
    p3: t('article_how_to_become_a_prop_trader:p3'),
    p4: t('article_how_to_become_a_prop_trader:p4'),
    p5: t('article_how_to_become_a_prop_trader:p5'),
    p6: t('article_how_to_become_a_prop_trader:p6'),
    p7: t('article_how_to_become_a_prop_trader:p7'),
    p8: t('article_how_to_become_a_prop_trader:p8'),
    p9: t('article_how_to_become_a_prop_trader:p9'),
    p10: t('article_how_to_become_a_prop_trader:p10'),
    p11: t('article_how_to_become_a_prop_trader:p11'),
    p12: t('article_how_to_become_a_prop_trader:p12'),
    p13: t('article_how_to_become_a_prop_trader:p13'),
    p14: t('article_how_to_become_a_prop_trader:p14'),
    p15: t('article_how_to_become_a_prop_trader:p15'),
    p16: t('article_how_to_become_a_prop_trader:p16'),
    p17_1: t('article_how_to_become_a_prop_trader:p17_1'),
    p17_2: t('article_how_to_become_a_prop_trader:p17_2'),
    p17_3: t('article_how_to_become_a_prop_trader:p17_3'),
    p17_4: t('article_how_to_become_a_prop_trader:p17_4'),
    p17_5: t('article_how_to_become_a_prop_trader:p17_5'),
    p18: t('article_how_to_become_a_prop_trader:p18'),
    p19: t('article_how_to_become_a_prop_trader:p19'),
    p20: t('article_how_to_become_a_prop_trader:p20'),
    p21: t('article_how_to_become_a_prop_trader:p21'),
    p22: t('article_how_to_become_a_prop_trader:p22'),
    p23: t('article_how_to_become_a_prop_trader:p23'),
    p24_1: t('article_how_to_become_a_prop_trader:p24_1'),
    p24_2: t('article_how_to_become_a_prop_trader:p24_2'),
    p24_3: t('article_how_to_become_a_prop_trader:p24_3'),
    p24_4: t('article_how_to_become_a_prop_trader:p24_4'),
    p24_5: t('article_how_to_become_a_prop_trader:p24_5'),
    p24_6: t('article_how_to_become_a_prop_trader:p24_6'),
    p24_7: t('article_how_to_become_a_prop_trader:p24_7'),
    p24_8: t('article_how_to_become_a_prop_trader:p24_8'),
    p24_9: t('article_how_to_become_a_prop_trader:p24_9'),
    p24_10: t('article_how_to_become_a_prop_trader:p24_10'),
    p25_1: t('article_how_to_become_a_prop_trader:p25_1'),
    p25_2: t('article_how_to_become_a_prop_trader:p25_2'),
    p25_3: t('article_how_to_become_a_prop_trader:p25_3'),
    p25_4: t('article_how_to_become_a_prop_trader:p25_4'),
    p25_5: t('article_how_to_become_a_prop_trader:p25_5'),
    p25_6: t('article_how_to_become_a_prop_trader:p25_6'),
    p25_7: t('article_how_to_become_a_prop_trader:p25_7'),
    p26_1: t('article_how_to_become_a_prop_trader:p26_1'),
    p26_2: t('article_how_to_become_a_prop_trader:p26_2'),
    p27_1: t('article_how_to_become_a_prop_trader:p27_1'),
    p27_2: t('article_how_to_become_a_prop_trader:p27_2'),
    p27_3: t('article_how_to_become_a_prop_trader:p27_3'),
    p27_4: t('article_how_to_become_a_prop_trader:p27_4'),
    p27_5: t('article_how_to_become_a_prop_trader:p27_5'),
    p27_6: t('article_how_to_become_a_prop_trader:p27_6'),
    p28_1: t('article_how_to_become_a_prop_trader:p28_1'),
    p28_2: t('article_how_to_become_a_prop_trader:p28_2'),
    p28_3: t('article_how_to_become_a_prop_trader:p28_3'),
    p28_4: t('article_how_to_become_a_prop_trader:p28_4'),
    p28_5: t('article_how_to_become_a_prop_trader:p28_5'),
    p28_6: t('article_how_to_become_a_prop_trader:p28_6'),
    p29: t('article_how_to_become_a_prop_trader:p29'),
    p30_1: t('article_how_to_become_a_prop_trader:p30_1'),
    p30_2: t('article_how_to_become_a_prop_trader:p30_2'),
    p30_3: t('article_how_to_become_a_prop_trader:p30_3'),
    p30_4: t('article_how_to_become_a_prop_trader:p30_4'),
    p30_5: t('article_how_to_become_a_prop_trader:p30_5'),
    p30_6: t('article_how_to_become_a_prop_trader:p30_6'),
    p31_1: t('article_how_to_become_a_prop_trader:p31_1'),
    p31_2: t('article_how_to_become_a_prop_trader:p31_2'),
    p31_3: t('article_how_to_become_a_prop_trader:p31_3'),
    p31_4: t('article_how_to_become_a_prop_trader:p31_4'),
    p31_5: t('article_how_to_become_a_prop_trader:p31_5'),
    p31_6: t('article_how_to_become_a_prop_trader:p31_6'),
    p31_7: t('article_how_to_become_a_prop_trader:p31_7'),
    p31_8: t('article_how_to_become_a_prop_trader:p31_8'),
    p31_9: t('article_how_to_become_a_prop_trader:p31_9'),
    p32: t('article_how_to_become_a_prop_trader:p32'),
    p33: t('article_how_to_become_a_prop_trader:p33'),
    p34: t('article_how_to_become_a_prop_trader:p34'),
    p35: t('article_how_to_become_a_prop_trader:p35'),
    p36: t('article_how_to_become_a_prop_trader:p36'),
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
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {blogTranslations.h1_title}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Oct 24 2024'} userImg={userImg} /> */}

          {blogTranslations.p1} <br /><br />
          {blogTranslations.p2} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t1}</h3><br />

          {blogTranslations.p3} <br /><br />

          <Image src={image1} className="w-full" alt="person in front of charts" /> <br /><br />

          {blogTranslations.p4} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t2}</h3><br />

          {blogTranslations.p5} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t3}</h3><br />

          {blogTranslations.p6} <br /><br />
          {blogTranslations.p7} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t4}</h3><br />

          {blogTranslations.p8} <br /><br />
          {blogTranslations.p9} <br /><br />

          <Image src={image2} className="w-full" alt="Graphic - Account table/chart" /> <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t5}</h3><br />

          {blogTranslations.p10} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t6}</h3><br />

          {blogTranslations.p11} <br /><br />
          {blogTranslations.p12} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t7}</h3><br />

          {blogTranslations.p3} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t8}</h3><br />

          {blogTranslations.p14} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t9}</h3><br />

          {blogTranslations.p15} <br /><br />
          {blogTranslations.p16} <br /><br />

          <Image src={image3} className="w-full" alt="Graphic of TopTier Academy" /> <br /><br />

          <div className="pl-7">
            {blogTranslations.p17_1} <br /><br />
            {blogTranslations.p17_2} <br /><br />
            {blogTranslations.p17_3} <br /><br />
            {blogTranslations.p17_4} <br /><br />
            {blogTranslations.p17_5} <br /><br />
          </div>

          {blogTranslations.p18} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t10}</h3><br />

          {blogTranslations.p19} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t11}</h3><br />

          {blogTranslations.p20} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t12}</h3><br />

          {blogTranslations.p21} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t13}</h3><br />

          {blogTranslations.p22} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t14}</h3><br />

          {blogTranslations.p23} <br /><br />

          {blogTranslations.p24_1} <br /><br />
          {blogTranslations.p24_2} <br /><br />
          <strong>{blogTranslations.p24_3}</strong> <br /><br />
          <div className="pl-7">
            {blogTranslations.p24_4} <br /><br />
            {blogTranslations.p24_5} <br /><br />
            {blogTranslations.p24_6} <br /><br />
          </div>
          <strong>{blogTranslations.p24_7}</strong> <br /><br />
          <div className="pl-7">
            {blogTranslations.p24_8} <br /><br />
            {blogTranslations.p24_9} <br /><br />
            {blogTranslations.p24_10} <br /><br />
          </div>

          <strong>{blogTranslations.p25_1}</strong> <br />
          {blogTranslations.p25_2} <br /><br />
          <div className="pl-7">
            {blogTranslations.p25_3} <br /><br />
            {blogTranslations.p25_4} <br /><br />
            {blogTranslations.p25_5} <br /><br />
            {blogTranslations.p25_6} <br /><br />
            {blogTranslations.p25_7} <br /><br />
          </div>

          <strong>{blogTranslations.p26_1}</strong> <br />
          {blogTranslations.p26_2} <br /><br />

          <strong>{blogTranslations.p27_1}</strong> <br />
          {blogTranslations.p27_2} <br /><br />
          <div className="pl-7">
            {blogTranslations.p27_3} <br /><br />
            {blogTranslations.p27_4} <br /><br />
            {blogTranslations.p27_5} <br /><br />
            {blogTranslations.p27_6} <br /><br />
          </div>

          <strong>{blogTranslations.p28_1}</strong> <br />
          {blogTranslations.p28_2} <br /><br />
          <div className="pl-7">
            {blogTranslations.p28_3} <br /><br />
            {blogTranslations.p28_4} <br /><br />
            {blogTranslations.p28_5} <br /><br />
            {blogTranslations.p28_6} <br /><br />
          </div>

          <h3 className="font-semibold text-2xl">{blogTranslations.t15}</h3><br />

          {blogTranslations.p29} <br /><br />

          <Image src={image4} className="w-full" alt="Graphic - Someone choosing a path" /> <br /><br />

          {blogTranslations.p30_1} <br /><br />
          <div className="pl-7">
            {blogTranslations.p30_2} <br /><br />
            {blogTranslations.p30_3} <br /><br />
            {blogTranslations.p30_4} <br /><br />
            {blogTranslations.p30_5} <br /><br />
            {blogTranslations.p30_6} <br /><br />
          </div>

          {blogTranslations.p31_1} <br /><br />
          <div className="pl-7">
            {blogTranslations.p31_2} <br /><br />
            {blogTranslations.p31_3} <br /><br />
            {blogTranslations.p31_4} <br /><br />
            {blogTranslations.p31_5} <br /><br />
            {blogTranslations.p31_6} <br /><br />
            {blogTranslations.p31_7} <br /><br />
            {blogTranslations.p31_8} <br /><br />
            {blogTranslations.p31_9} <br /><br />
          </div>

          {blogTranslations.p32} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t16}</h3><br />

          {blogTranslations.p33} <br /><br />
          {blogTranslations.p34} <br /><br />
          {blogTranslations.p35} <br /><br />

          <h3 className="font-semibold text-2xl">{blogTranslations.t17}</h3><br />

          {blogTranslations.p36} <br /><br />

          <a className="" href="https://app.toptiertrader.com/buy-challenge/?el=HowBecomeAPropTrader_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss" >
            <button className="px-6 flex flex-row items-center py-2.5  bg-ttorange text-white rounded-lg">
              <p>  {mainLang == 'es' ? "Comienza tu desafío ya!" : "Start your Challenge Now!"} </p>
              <FaArrowRight className="ml-2" />
            </button>
          </a><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=How_To_Become_A_Prop_Trader_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="How to Become a Prop Trader"
            translation={mainLang == 'es' ? "Comienza tu desafío ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

