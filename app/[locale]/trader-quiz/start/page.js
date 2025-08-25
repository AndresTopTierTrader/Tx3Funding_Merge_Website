//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";
import { bgImageStyle } from "@/constants/styles";


//Lazy loading for components
const MainSectionLazyLoading = dynamic(() => import("@/components/trader-quiz/start/Main"), {
  ssr: false,
  loading: () => <main style={bgImageStyle} className="flex flex-col items-center transition-all mb:mt-0 mb:pb-32 mb:pt-40 -mt-20 pb-14 pt-44">
  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
  </svg>
</main>
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

  const quizTranslations = {
    step1: {
      t1_1: t('trader_quiz:step1_t1_1'),
      t1_2: t('trader_quiz:step1_t1_2'),
      subtitle: t('trader_quiz:step1_subtitle'),
      nameLabel: t('trader_quiz:step1_nameLabel'),
      namePlaceholder: t('trader_quiz:step1_namePlaceholder'),
      lastLabel: t('trader_quiz:step1_lastLabel'),
      lastPlaceholder: t('trader_quiz:step1_lastPlaceholder'),
      emailLabel: t('trader_quiz:step1_emailLabel'),
      emailPlaceholder: t('trader_quiz:step1_emailPlaceholder'),
      checkbox: t('trader_quiz:step1_checkbox'),
      cta: t('trader_quiz:step1_cta'),
    },

    step2: {
      t1_1: t('trader_quiz:step2_t1_1'),
      t1_2: t('trader_quiz:step2_t1_2'),
      subtitle: t('trader_quiz:step2_subtitle'),
      q1: t('trader_quiz:step2_q1'),
      q2: t('trader_quiz:step2_q2'),
      q3: t('trader_quiz:step2_q3'),
      q4: t('trader_quiz:step2_q4'),
      q5: t('trader_quiz:step2_q5'),
      button: t('trader_quiz:nextQuestion')
    },

    step3: {
      t1_1: t('trader_quiz:step3_t1_1'),
      t1_2: t('trader_quiz:step3_t1_2'),
      subtitle: t('trader_quiz:step3_subtitle'),
      q1: t('trader_quiz:step3_q1'),
      q2: t('trader_quiz:step3_q2'),
      q3: t('trader_quiz:step3_q3'),
      q4: t('trader_quiz:step3_q4'),
      q5: t('trader_quiz:step3_q5'),
      button: t('trader_quiz:nextQuestion')
    },

    step4: {
      t1_1: t('trader_quiz:step4_t1_1'),
      t1_2: t('trader_quiz:step4_t1_2'),
      subtitle: t('trader_quiz:step4_subtitle'),
      q1: t('trader_quiz:step4_q1'),
      q2: t('trader_quiz:step4_q2'),
      q3: t('trader_quiz:step4_q3'),
      q4: t('trader_quiz:step4_q4'),
      q5: t('trader_quiz:step4_q5'),
      button: t('trader_quiz:nextQuestion')
    },

    step5: {
      t1_1: t('trader_quiz:step5_t1_1'),
      t1_2: t('trader_quiz:step5_t1_2'),
      subtitle: t('trader_quiz:step5_subtitle'),
      q1: t('trader_quiz:step5_q1'),
      q2: t('trader_quiz:step5_q2'),
      q3: t('trader_quiz:step5_q3'),
      q4: t('trader_quiz:step5_q4'),
      q5: t('trader_quiz:step5_q5'),
      button: t('trader_quiz:nextQuestion')
    },

    step6: {
      t1_1: t('trader_quiz:step6_t1_1'),
      t1_2: t('trader_quiz:step6_t1_2'),
      subtitle: t('trader_quiz:step6_subtitle'),
      q1: t('trader_quiz:step6_q1'),
      q2: t('trader_quiz:step6_q2'),
      q3: t('trader_quiz:step6_q3'),
      q4: t('trader_quiz:step6_q4'),
      q5: t('trader_quiz:step6_q5'),
      button: t('trader_quiz:nextQuestion')
    },

    step7: {
      t1_1: t('trader_quiz:step7_t1_1'),
      t1_2: t('trader_quiz:step7_t1_2'),
      subtitle: t('trader_quiz:step7_subtitle'),
      q1: t('trader_quiz:step7_q1'),
      q2: t('trader_quiz:step7_q2'),
      q3: t('trader_quiz:step7_q3'),
      q4: t('trader_quiz:step7_q4'),
      q5: t('trader_quiz:step7_q5'),
      button: t('trader_quiz:nextQuestion')
    },

    step8: {
      loadingMeesage: t('trader_quiz:loading'),
      processingData: t('trader_quiz:loading_2'),
      selectingAddOns: t('trader_quiz:loading_3'),
      selectingAccountSize: t('trader_quiz:loading_4'),
    },

    step9: {
      result: t('trader_quiz:step9_result'),
      avatar: t('trader_quiz:step9_avatar'),
      accountSize: t('trader_quiz:step9_accountSize'),
      addOns: t('trader_quiz:step9_addOns'),
      attributes: t('trader_quiz:step9_attributes'),
    }
  }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <MainSectionLazyLoading locale={locale} translations={quizTranslations} />
    </TranslationsProvider>
  )
}

