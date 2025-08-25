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

const i18nNameSpaces = ["common", "blog_landing", "article_trading_psychology"];

//Params to bring the info from the db
const blogParam = "trading-psychology-risk-management-and-discipline"

const metadata_en = {
  title: "Mastering Forex Trading: Psychology, Risk Management, and Discipline",
  description: "Explore the three crucial elements of successful forex trading: trading psychology, risk management, and discipline. Learn how mastering these aspects can enhance your trading performance and increase your chances of long-term success.",
  keywords: "forex trading, trading psychology, risk management, trading discipline, successful trading, trading plan, stop-loss orders, trading decisions",
  language: "en",
  subject: "Essential Elements of Successful Forex Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Mastering Forex Trading: Psychology, Risk Management, and Discipline",
    description: "Uncover the importance of trading psychology, risk management, and discipline in achieving forex trading success. Implement these principles to make consistent and profitable trading decisions.",
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
  title: "Dominando el Trading de Forex: Psicología, Gestión de Riesgo y Disciplina",
  description: "Explora los tres elementos cruciales para el éxito en el trading de forex: la psicología del trading, la gestión de riesgo y la disciplina. Aprende cómo dominar estos aspectos puede mejorar tu rendimiento en el trading y aumentar tus posibilidades de éxito a largo plazo.",
  keywords: "trading de forex, psicología del trading, gestión de riesgo, disciplina de trading, éxito en el trading, plan de trading, órdenes de stop-loss, decisiones de trading",
  language: "es",
  subject: "Elementos Esenciales para el Éxito en el Trading de Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Dominando el Trading de Forex: Psicología, Gestión de Riesgo y Disciplina",
    description: "Descubre la importancia de la psicología del trading, la gestión de riesgo y la disciplina para lograr el éxito en el trading de forex. Implementa estos principios para tomar decisiones de trading consistentes y rentables.",
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
  title: "Maîtriser le Trading Forex : Psychologie, Gestion des Risques et Discipline",
  description: "Explorez les trois éléments essentiels pour réussir dans le trading forex : la psychologie du trading, la gestion des risques et la discipline. Apprenez comment maîtriser ces aspects peut améliorer vos performances de trading et augmenter vos chances de succès à long terme.",
  keywords: "trading forex, psychologie du trading, gestion des risques, discipline de trading, trading réussi, plan de trading, ordres stop-loss, décisions de trading",
  language: "fr",
  subject: "Éléments Essentiels du Trading Réussi sur le Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Maîtriser le Trading Forex : Psychologie, Gestion des Risques et Discipline",
    description: "Découvrez l'importance de la psychologie du trading, de la gestion des risques et de la discipline pour réussir dans le trading forex. Appliquez ces principes pour prendre des décisions de trading cohérentes et rentables.",
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
          <h1 className='mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5'> {t('article_trading_psychology:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Jun 2 2024'} userImg={userImg} /> */}

          {t('article_trading_psychology:par_one')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_trading_psychology:title_one')}</h3><br />
          {t('article_trading_psychology:par_two')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_trading_psychology:title_two')}</h3><br />
          {t('article_trading_psychology:par_three')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_trading_psychology:title_three')}</h3><br />
          {t('article_trading_psychology:par_four')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_trading_psychology:title_four')}</h3><br />
          {t('article_trading_psychology:par_five')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_trading_psychology:title_five')}</h3><br />
          {t('article_trading_psychology:par_six')} <br /><br />

          {t('article_trading_psychology:par_seven')} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=TradingPsychologyRiskManagementAndDiscipline_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Trading Psychology, Risk Management, and Discipline"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>

      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

