//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { bgImageStyle } from "@/constants/styles";
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
const MainSectionLazyLoading = dynamic(() => import("@/components/trader-quiz/Main"), {
  ssr: true,
  loading: () => <div
    className={`min-h-screen w-full flex items-center justify-center fixed inset-0 z-50 transition-all duration-[1200ms] ease-in-out opacity-100`}
    style={bgImageStyle}
  >
    <div className={`text-center animate-fade-in transition-all duration-[800ms] ease-out opacity-100 scale-100`}>
      <div className="mb-8">
        <div className="w-16 h-16 mx-auto rounded-full border-4 border-[#45D1FF] border-t-transparent animate-spin"></div>
      </div>
      <p className="text-xl font-light text-textPrimary opacity-80 animate-pulse">Loading the trader quiz...</p>
    </div>
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `
    }} />
  </div>
})

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
  </div>
})

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Trader Quiz",
  description: "Test your trading knowledge with our comprehensive Trader Quiz",
  keywords: "TopTier Trader quiz, trading knowledge test, financial markets assessment, trader evaluation, trading skills test",
  language: "en",
  subject: "Trading Knowledge Assessment",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "TopTier Trader Quiz - Evaluate Your Trading Skills",
    description: "Challenge yourself with our Trader Quiz. Test your knowledge of financial markets and trading strategies.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/trader-quiz/start`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/trader-quiz/start`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Trader Quiz",
  description: "Pon a prueba tus conocimientos de trading con nuestro completo Cuestionario del Trader",
  keywords: "cuestionario de TopTier Trader, prueba de conocimientos de trading, evaluación de mercados financieros, evaluación de trader, prueba de habilidades de trading",
  language: "es",
  subject: "Evaluación de Conocimientos de Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Cuestionario de TopTier Trader - Evalúa tus Habilidades de Trading",
    description: "Desafíate a ti mismo con nuestro Cuestionario del Trader. Prueba tus conocimientos sobre mercados financieros y estrategias de trading.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/trader-quiz/start`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/trader-quiz/start`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_fr = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Quiz du Trader",
  description: "Testez vos connaissances en trading avec notre Quiz du Trader complet",
  keywords: "quiz TopTier Trader, test de connaissances en trading, évaluation des marchés financiers, évaluation du trader, test de compétences en trading",
  language: "fr",
  subject: "Évaluation des Connaissances en Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Quiz TopTier Trader - Évaluez vos Compétences en Trading",
    description: "Mettez-vous au défi avec notre Quiz du Trader. Testez vos connaissances des marchés financiers et des stratégies de trading.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/trader-quiz/start`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/trader-quiz/start`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
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

const i18nNameSpaces = ["common", "trader_quiz"];

export default async function Products({ params: { locale } }) {
  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

  const homeSectionTranslations = {
    // Hero section translations
    badge: t('trader_quiz:badge'),
    heroTitle1: t('trader_quiz:hero_title_1'),
    heroTitle2: t('trader_quiz:hero_title_2'),
    heroTitle3: t('trader_quiz:hero_title_3'),
    learnButton: t('trader_quiz:learn_button'),
    
    // Stats section translations
    stat1Label: t('trader_quiz:stat1_label'),
    stat1Desc: t('trader_quiz:stat1_desc'),
    stat2Label: t('trader_quiz:stat2_label'),
    stat2Desc: t('trader_quiz:stat2_desc'),
    stat3Desc: t('trader_quiz:stat3_desc'),
    
    // Informative section translations
    whatIs: t('trader_quiz:informativeTitle_1'),
    traderQuizTitle: t('trader_quiz:informativeTitle_2'),
    quizDescription: t('trader_quiz:quiz_description'),
    
    // How it works translations
    howItWorksTitle: t('trader_quiz:how_it_works_title'),
    step1: t('trader_quiz:step_1'),
    step2: t('trader_quiz:step_2'),
    step3: t('trader_quiz:step_3'),
    step4: t('trader_quiz:step_4'),
    
    // Avatar translations
    t1_1: t('trader_quiz:t1_1'),
    t1_2: t('trader_quiz:t1_2'),
    p1: t('trader_quiz:p1'),
    p2: t('trader_quiz:p2'),
    t2_1: t('trader_quiz:t2_1'),
    t2_2: t('trader_quiz:t2_2'),
    zenTrader: t('trader_quiz:zenTrader'),
    zenTraderDesc: t('trader_quiz:zenTraderDesc'),
    theDaredevil: t('trader_quiz:theDaredevil'),
    theDaredevilDesc: t('trader_quiz:theDaredevilDesc'),
    theThinker: t('trader_quiz:theThinker'),
    theThinkerDesc: t('trader_quiz:theThinkerDesc'),
    masterTrader: t('trader_quiz:masterTrader'),
    masterTraderDesc: t('trader_quiz:masterTraderDesc'),
    geniusTrader: t('trader_quiz:geniusTrader'),
    geniusTraderDesc: t('trader_quiz:geniusTraderDesc'),
    theTrailblazer: t('trader_quiz:theTrailblazer'),
    theTrailblazerDesc: t('trader_quiz:theTrailblazerDesc'),
    cta: t('trader_quiz:cta'),
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
      resourcesResourcesTitle: t('common:resources_resources_title'),
      exploreResources: t('common:explore_resource')
    }
  }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <MainSectionLazyLoading translations={homeSectionTranslations} locale={locale} />

      <div className="-mt-5 mb:-mt-20">
        <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} />
      </div>
    </TranslationsProvider>
  )
}