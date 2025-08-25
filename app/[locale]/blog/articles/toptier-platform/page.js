//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Head from 'next/head';
import Image from "next/image";
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

//Params to bring the info from the db
const blogParam = "toptier-platform"

const metadata_en = {
  title: "How to Use the TopTier Trader Platform: A Comprehensive Guide",
  description: "Master the TopTier Trader platform with this step-by-step guide. Learn how to navigate the challenges, maximize your funded account, and grow your trading potential.",
  keywords: "TopTier Trader, forex trading platform, funded trader, trading challenges, proprietary trading, trading guide, TopTier challenges, forex education",
  language: "en",
  subject: "Comprehensive Guide to TopTier Trader Platform",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "How to Use the TopTier Trader Platform: A Comprehensive Guide",
    description: "Master the TopTier Trader platform with this step-by-step guide. Learn how to navigate the challenges, maximize your funded account, and grow your trading potential.",
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
  title: "Cómo Utilizar la Plataforma TopTier Trader: Guía Completa",
  description: "Domina la plataforma TopTier Trader con esta guía paso a paso. Aprende a navegar los retos, maximiza tu cuenta financiada y potencia tu crecimiento como trader.",
  keywords: "TopTier Trader, plataforma de trading forex, trader financiado, desafíos de trading, trading propietario, guía de trading, desafíos TopTier, educación forex",
  language: "es",
  subject: "Guía Completa de la Plataforma TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Cómo Utilizar la Plataforma TopTier Trader: Guía Completa",
    description: "Domina la plataforma TopTier Trader con esta guía paso a paso. Aprende a navegar los retos, maximiza tu cuenta financiada y potencia tu crecimiento como trader.",
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
  title: "Comment Utiliser la Plateforme TopTier Trader : Guide Complet",
  description: "Maîtrisez la plateforme TopTier Trader avec ce guide étape par étape. Apprenez à naviguer dans les défis, à maximiser votre compte financé et à développer votre potentiel de trading.",
  keywords: "TopTier Trader, plateforme de trading forex, trader financé, défis de trading, trading propriétaire, guide de trading, défis TopTier, éducation forex",
  language: "fr",
  subject: "Guide Complet de la Plateforme TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Comment Utiliser la Plateforme TopTier Trader : Guide Complet",
    description: "Maîtrisez la plateforme TopTier Trader avec ce guide étape par étape. Apprenez à naviguer dans les défis, à maximiser votre compte financé et à développer votre potentiel de trading.",
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

import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'

const i18nNameSpaces = ["common", "blog_landing", "article_toptier_platform"];

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

  const translatedTexts = {
    h1_title: t('article_toptier_platform:h1_title'),
    t1: t('article_toptier_platform:t1'),
    t2: t('article_toptier_platform:t2'),
    t3: t('article_toptier_platform:t3'),
    t4: t('article_toptier_platform:t4'),
    t5: t('article_toptier_platform:t5'),
    t6: t('article_toptier_platform:t6'),
    t7: t('article_toptier_platform:t7'),
    t8: t('article_toptier_platform:t8'),
    t9: t('article_toptier_platform:t9'),
    t10: t('article_toptier_platform:t10'),
    t11: t('article_toptier_platform:t11'),
    t12: t('article_toptier_platform:t12'),
    t13: t('article_toptier_platform:t13'),
    t14: t('article_toptier_platform:t14'),
    t15: t('article_toptier_platform:t15'),
    t16: t('article_toptier_platform:t16'),
    t17: t('article_toptier_platform:t17'),
    p1: t('article_toptier_platform:p1'),
    p2: t('article_toptier_platform:p2'),
    p3: t('article_toptier_platform:p3'),
    p4: t('article_toptier_platform:p4'),
    p5: t('article_toptier_platform:p5'),
    p6: t('article_toptier_platform:p6'),
    p7: t('article_toptier_platform:p7'),
    p8: t('article_toptier_platform:p8'),
    p9: t('article_toptier_platform:p9'),
    p10: t('article_toptier_platform:p10'),
    p11: t('article_toptier_platform:p11'),
    p12_1: t('article_toptier_platform:p12_1'),
    p12_2: t('article_toptier_platform:p12_2'),
    p12_3: t('article_toptier_platform:p12_3'),
    p12_4: t('article_toptier_platform:p12_4'),
    p12_5: t('article_toptier_platform:p12_5'),
    p13_1: t('article_toptier_platform:p13_1'),
    p13_2: t('article_toptier_platform:p13_2'),
    p13_3: t('article_toptier_platform:p13_3'),
    p14_1: t('article_toptier_platform:p14_1'),
    p14_2: t('article_toptier_platform:p14_2'),
    p14_3: t('article_toptier_platform:p14_3'),
    p15_1: t('article_toptier_platform:p15_1'),
    p15_2: t('article_toptier_platform:p15_2'),
    p15_3: t('article_toptier_platform:p15_3'),
    p16: t('article_toptier_platform:p16'),
    p17_1: t('article_toptier_platform:p17_1'),
    p17_2: t('article_toptier_platform:p17_2'),
    p17_3: t('article_toptier_platform:p17_3'),
    p18: t('article_toptier_platform:p18'),
    p19_1: t('article_toptier_platform:p19_1'),
    p19_2: t('article_toptier_platform:p19_2'),
    p19_3: t('article_toptier_platform:p19_3'),
    p19_4: t('article_toptier_platform:p19_4'),
    p20_1: t('article_toptier_platform:p20_1'),
    p20_2: t('article_toptier_platform:p20_2'),
    p20_3: t('article_toptier_platform:p20_3'),
    p21: t('article_toptier_platform:p21'),
    p22: t('article_toptier_platform:p22'),
    p23: t('article_toptier_platform:p23'),
    p24_1: t('article_toptier_platform:p24_1'),
    p24_2: t('article_toptier_platform:p24_2'),
    p24_3: t('article_toptier_platform:p24_3'),
    p24_4: t('article_toptier_platform:p24_4'),
    p24_5: t('article_toptier_platform:p24_5'),
    p24_6: t('article_toptier_platform:p24_6'),
    p25: t('article_toptier_platform:p25'),
    p26: t('article_toptier_platform:p26'),
    p27: t('article_toptier_platform:p27'),
    p28: t('article_toptier_platform:p28'),
    p29: t('article_toptier_platform:p29'),
    p30: t('article_toptier_platform:p30'),
    p31: t('article_toptier_platform:p31'),
    p32: t('article_toptier_platform:p32'),
    p33: t('article_toptier_platform:p33'),
    p34: t('article_toptier_platform:p34'),
    p35: t('article_toptier_platform:p35'),
    p36: t('article_toptier_platform:p36'),
    p37: t('article_toptier_platform:p37'),
    p38_1: t('article_toptier_platform:p38_1'),
    p38_2: t('article_toptier_platform:p38_2'),
    p38_3: t('article_toptier_platform:p38_3'),
    p38_4: t('article_toptier_platform:p38_4'),
    p38_5: t('article_toptier_platform:p38_5'),
    p39: t('article_toptier_platform:p39'),
    p40: t('article_toptier_platform:p40')
  }

  
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <Head>
        <link rel="alternate" hreflang="en" href={`${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`} />
        <link rel="alternate" hreflang="es" href={`${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`} />
      </Head>

      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />

      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">

        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {translatedTexts.h1_title}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Oct 6 2024'} userImg={userImg} /> */}

          {translatedTexts.p1} <br /><br />
          {translatedTexts.p2} <br /><br />
          {translatedTexts.p3} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t1}</h3><br />

          {translatedTexts.p4} <br /><br />
          {translatedTexts.p5} <br /><br />
          {translatedTexts.p6} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t2}</h3><br />

          {translatedTexts.p7} <br /><br />
          {translatedTexts.p8} <br /><br />
          {translatedTexts.p9} <br /><br />
          {translatedTexts.p10} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t3}</h3><br />

          {translatedTexts.p11} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t4}</h3><br />
          <h3 className="font-semibold text-xl">  {translatedTexts.t5}</h3><br />

          <Image alt="blog image" src={image1} className='w-full mb-4' />

          {translatedTexts.p12_1} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p12_2} <br /><br /></p>
            <p>  {translatedTexts.p12_3} <br /><br /></p>
            <p>  {translatedTexts.p12_4} <br /><br /></p>
            <p>  {translatedTexts.p12_5} <br /><br /></p>
          </div>

          <h3 className="font-semibold text-xl">  {translatedTexts.t6}</h3><br />

          <Image alt="blog image" src={image2} className='w-full mb-4' />

          {translatedTexts.p13_1} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p13_2} <br /><br /></p>
            <p>  {translatedTexts.p13_3} <br /><br /></p>
          </div>

          <h3 className="font-semibold text-xl">  {translatedTexts.t7}</h3><br />

          <Image alt="blog image" src={image3} className='w-full mb-4' />

          {translatedTexts.p14_1} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p14_2} <br /><br /></p>
            <p>  {translatedTexts.p14_3} <br /><br /></p>
          </div>

          <h3 className="font-semibold text-xl">  {translatedTexts.t8}</h3><br />

          <Image alt="blog image" src={image4} className='w-full mb-4' />

          {translatedTexts.p15_1} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p15_2} <br /><br /></p>
            <p>  {translatedTexts.p15_3} <br /><br /></p>
          </div>

          {translatedTexts.p16} <br /><br />

          <h3 className="font-semibold text-xl">  {translatedTexts.t9}</h3><br />

          <Image alt="blog image" src={image5} className='w-full mb-4' />

          {translatedTexts.p17_1} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p17_2} <br /><br /></p>
            <p>  {translatedTexts.p17_3} <br /><br /></p>
          </div>

          {translatedTexts.p18} <br /><br />

          <h3 className="font-semibold text-xl">  {translatedTexts.t10}</h3><br />

          <Image alt="blog image" src={image6} className='w-full mb-4' />

          {translatedTexts.p19_1} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p19_2} <br /><br /></p>
            <p>  {translatedTexts.p19_3} <br /><br /></p>
            <p>  {translatedTexts.p19_4} <br /><br /></p>
          </div>

          <h3 className="font-semibold text-xl">  {translatedTexts.t11}</h3><br />

          <Image alt="blog image" src={image7} className='w-full mb-4' />

          {translatedTexts.p20_1} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p20_2} <br /><br /></p>
            <p>  {translatedTexts.p20_3} <br /><br /></p>
          </div>

          {translatedTexts.p21} <br /><br />
          {translatedTexts.p22} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t12}</h3><br />

          {translatedTexts.p23} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p24_1} <br /><br /></p>
            <p>  {translatedTexts.p24_2} <br /><br /></p>
            <p>  {translatedTexts.p24_3} <br /><br /></p>
            <p>  {translatedTexts.p24_4} <br /><br /></p>
            <p>  {translatedTexts.p24_5} <br /><br /></p>
            <p>  {translatedTexts.p24_6} <br /><br /></p>
          </div>

          {translatedTexts.p25} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t13}</h3><br />

          {translatedTexts.p26} <br /><br />
          {translatedTexts.p27} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t14}</h3><br />

          {translatedTexts.p28} <br /><br />
          {translatedTexts.p29} <br /><br />
          {translatedTexts.p30} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t15}</h3><br />

          {translatedTexts.p31} <br /><br />
          {translatedTexts.p32} <br /><br />
          {translatedTexts.p33} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t16}</h3><br />

          {translatedTexts.p34} <br /><br />
          {translatedTexts.p35} <br /><br />
          {translatedTexts.p36} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t17}</h3><br />

          {translatedTexts.p37} <br /><br />
          <div className="pl-4 ">
            <p>  {translatedTexts.p38_1} <br /><br /></p>
            <p>  {translatedTexts.p38_2} <br /><br /></p>
            <p>  {translatedTexts.p38_3} <br /><br /></p>
            <p>  {translatedTexts.p38_4} <br /><br /></p>
            <p>  {translatedTexts.p38_5} <br /><br /></p>
          </div>

          {translatedTexts.p39} <br /><br />
          {translatedTexts.p40} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=TopTierPlatform_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="TopTier Platform"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading locale={mainLang} translations={finalSectionTranslations} isResourcesVisible={false} />
    </TranslationsProvider>
  )
}

