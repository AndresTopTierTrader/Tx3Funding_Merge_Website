//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { bgImageStyleBlog } from "@/constants/styles"
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
import Content from "../../../../../components/blog/Content";

const VideoFrameLazyLoading = dynamic(() => import("../VideoFrame"), {
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-white ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Video</p>
  </div>
})

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

const i18nNameSpaces = ["common", "blog_landing", "article_max_hines_trading"];

//Params to bring the info from the db
const blogParam = "max-hines-trading-futures"

const metadata_en = {
  title: "The Trading Journey of Max Hines: From Musician to TopTier Trader",
  description: "Discover the inspiring journey of Max Hines from a touring musician to a successful TopTier Trader. Learn about his trading strategy, experience with futures, and valuable lessons in risk management.",
  keywords: "Max Hines, TopTier Trader, trading journey, futures trading, risk management, trading indices, NASDAQ, SP 500, DOW JONES, technical analysis",
  language: "en",
  subject: "Max Hines' Trading Journey and Strategies",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader Platform",
  publisher: "TopTier Trader Platform",
  og: {
    type: "article",
    title: "The Trading Journey of Max Hines: From Musician to TopTier Trader",
    description: "Follow the unique path of Max Hines as he transitions from the music scene to the financial world, becoming a successful trader with insights on futures, indices, and risk management.",
    image: "",
    site_name: "TopTier Trader Platform",
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
  title: "El Viaje de Trading de Max Hines: De Músico a Trader TopTier",
  description: "Descubre el viaje inspirador de Max Hines de músico de gira a exitoso Trader TopTier. Aprende sobre su estrategia de trading, experiencia con futuros y valiosas lecciones en la gestión del riesgo.",
  keywords: "Max Hines, Trader TopTier, viaje de trading, trading de futuros, gestión del riesgo, índices de trading, NASDAQ, SP 500, DOW JONES, análisis técnico",
  language: "es",
  subject: "El Viaje y Estrategias de Trading de Max Hines",
  coverage: "Global",
  robots: "index, follow",
  author: "Plataforma TopTier Trader",
  publisher: "Plataforma TopTier Trader",
  og: {
    type: "article",
    title: "El Viaje de Trading de Max Hines: De Músico a Trader TopTier",
    description: "Sigue el camino único de Max Hines mientras transita de la escena musical al mundo financiero, convirtiéndose en un trader exitoso con perspectivas sobre futuros, índices y gestión del riesgo.",
    image: "",
    site_name: "Plataforma TopTier Trader",
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
  title: "Le Parcours de Trading de Max Hines : De Musicien à TopTier Trader",
  description: "Découvrez le parcours inspirant de Max Hines, de musicien en tournée à trader à succès chez TopTier Trader. Apprenez-en davantage sur sa stratégie de trading, son expérience avec les contrats à terme et les précieuses leçons en gestion des risques.",
  keywords: "Max Hines, TopTier Trader, parcours de trading, trading de contrats à terme, gestion des risques, trading d'indices, NASDAQ, SP 500, DOW JONES, analyse technique",
  language: "fr",
  subject: "Parcours de Trading et Stratégies de Max Hines",
  coverage: "Global",
  robots: "index, follow",
  author: "Plateforme TopTier Trader",
  publisher: "Plateforme TopTier Trader",
  og: {
    type: "article",
    title: "Le Parcours de Trading de Max Hines : De Musicien à TopTier Trader",
    description: "Suivez le chemin unique de Max Hines alors qu'il passe de la scène musicale au monde financier, devenant un trader à succès avec des insights sur les contrats à terme, les indices et la gestion des risques.",
    image: "",
    site_name: "Plateforme TopTier Trader",
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

      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} />

      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5 mb:-mt-10">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_max_hines_trading:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'May 20 2024'} userImg={userImg} /> */}

          <VideoFrameLazyLoading link={"https://www.youtube.com/embed/RTQwZjnMox0?si=TYbYS7AjY_Yb4fCg"} /><br /> <br />

          {t('article_max_hines_trading:par_one')}  <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_max_hines_trading:title_one')} <br /><br /></h3>

          {t('article_max_hines_trading:par_two')} <br /><br />

          {t('article_max_hines_trading:par_three')}  <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_max_hines_trading:title_two')}</h3> <br />

          {t('article_max_hines_trading:par_four')}<br /><br />
          {t('article_max_hines_trading:par_five')} <br /><br />
          {t('article_max_hines_trading:par_six')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_max_hines_trading:title_six')}</h3><br />

          {t('article_max_hines_trading:par_seven')} <br /><br />
          {t('article_max_hines_trading:par_eight')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_max_hines_trading:title_four')} </h3><br />

          {t('article_max_hines_trading:par_nine')} <br /><br />
          {t('article_max_hines_trading:par_ten')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_max_hines_trading:title_five')} </h3><br />

          {t('article_max_hines_trading:par_eleven')} <br /><br />
          {t('article_max_hines_trading:par_twelve')} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Max_Hines_Trading_Futures_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog" 
            section="Max Hines Trading Futures"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />
        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

