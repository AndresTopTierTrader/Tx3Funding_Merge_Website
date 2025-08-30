//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
const MainSectionLazyLoading = dynamic(() => import("@/components/products/Main"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading Products Section...</p>
})

//Lazy loading for components
const TableSectionLazyLoading = dynamic(() => import("../../../../components/common/ForexTableSection/Main"), {
  ssr: false,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
  </div>
})

const EvaluationSectionLazyLoading = dynamic(() => import("@/components/products/Evaluation"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading...</p>
})

const FaqSectionLazyLoading = dynamic(() => import("@/components/products/Faq/Faq"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading...</p>
})

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-textPrimary ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
  </div>
})

const i18nNameSpaces = ["home", "common", "products_home", "products_evaluation", "products_faq", "table_section"];


const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Enhance Your Trading Career with Challenges | TopTier Proprietary Trading",
  description: "Embark on your trading career with a Sim Funded Account from TopTier. Trade using our capital, retain up to 90% of earnings, and advance with zero financial risk.",
  keywords: "proprietary trading, trading challenges, funded trading account, trading career progression, financial market exploration, trading strategy evaluation, TopTier trading",
  language: "en",
  subject: "Advanced Proprietary Trading Firm Services",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Advance in Proprietary Trading with TopTier Trader",
    description: "Join the ranks of skilled traders at TopTier Trader and elevate your trading journey with our funding and support. Seize opportunities in global financial markets starting today.",
   
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/products/challenges`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/products/challenges`,
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
  title: "Desafíos de Trading - Fondeo y Oportunidades | TopTier Proprietary Trading",
  description: "Participa en nuestros Desafíos de Trading y obtén una Cuenta de Fondeo Simulado para comenzar tu carrera. Opera con capital de TopTier, conserva el 90% de tus ganancias y progresa sin riesgo financiero.",
  keywords: "trading propietario, financiamiento para traders, desafíos de trading, cuenta de fondeo simulado, carrera en trading, operaciones financieras, oportunidades de trading, TopTier",
  language: "es",
  subject: "Fondeo y Desarrollo en Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete y Avanza en Trading Propietario con TopTier Trader",
    description: "Eleva tu carrera de trading uniendo fuerzas con TopTier Trader. Obtén acceso a financiamiento y conserva la mayor parte de tus ganancias mientras operas en los mercados financieros globales.",
    // Aquí deberías incluir la URL de una imagen relevante
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/products/challenges`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/products/challenges`,
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
  title: "Défis de Trading - Financement et Opportunités | TopTier Proprietary Trading",
  description: "Participez à nos Défis de Trading et obtenez un Compte de Financement Simulé pour commencer votre carrière. Tradez avec le capital de TopTier, gardez 90% de vos gains et progressez sans risque financier.",
  keywords: "trading propriétaire, financement pour traders, défis de trading, compte de financement simulé, carrière en trading, opérations financières, opportunités de trading, TopTier",
  language: "fr",
  subject: "Financement et Développement en Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Rejoignez et Progressez en Trading Propriétaire avec TopTier Trader",
    description: "Élevez votre carrière de trading en rejoignant TopTier Trader. Obtenez un accès au financement et gardez la majorité de vos gains tout en opérant sur les marchés financiers mondiaux.",
    // Ici, vous devriez inclure l'URL d'une image pertinente
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/products/challenges`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/products/challenges`,
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr',
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


export default async function Products({ params: { locale }  }) {


  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

  const currentLanguage = i18n.language;

  const homeSectionTranslations = {
    titleOne: t('products_home:title_one'),
    titleTwo: t('products_home:title_two'),
    titleThree: t('products_home:title_three'),
    contentOne: t('products_home:content_one'),
    contentTwo: t('products_home:content_two'),
    contentThree: t('products_home:content_three'),
    contentFour: t('products_home:content_four'),
    ctaButton: t('common:start_the_challenge'),
    buttonDiscord: t('products_home:button_discord'),
  }

  const tableTranslations = {
    accountType: t('table_section:table_accountType'),
    description: t('table_section:description'),
    table_one_phase: t('table_section:table_one_phase'),
    table_two_phase: t('table_section:table_two_phase'),
    challenge: t('table_section:table_challenge'),
    get: t('table_section:table_get'),
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

  const evaluationSectionTranslations = {
    titleOne: t('products_evaluation:title_one'),
    titleTwo: t('products_evaluation:title_two'),
    content: t('products_evaluation:content'),

    oneCardTier: t('products_evaluation:one_card_tier'),
    oneCardTitle: t('products_evaluation:one_card_title'),
    oneCardDescOne: t('products_evaluation:one_card_desc_one'),
    oneCardDescTwo: t('products_evaluation:one_card_desc_two'),
    oneCardItemOne: t('products_evaluation:one_card_item_one'),
    oneCardItemTwoOne: t('products_evaluation:one_card_item_two_one'),
    oneCardItemTwoTwo: t('products_evaluation:one_card_item_two_two'),
    oneCardItemThree: t('products_evaluation:one_card_item_three'),

    twoCardTier: t('products_evaluation:two_card_tier'),
    twoCardTitle: t('products_evaluation:two_card_title'),
    twoCardDescOne: t('products_evaluation:two_card_desc_one'),
    twoCardDescTwo: t('products_evaluation:two_card_desc_two'),
    twoCardDescThree: t('products_evaluation:two_card_desc_three'),
    twoCardItemOne: t('products_evaluation:two_card_item_one'),
    twoCardItemTwo: t('products_evaluation:two_card_item_two'),
    twoCardItemThree: t('products_evaluation:two_card_item_three'),

    simTitleOne: t('products_evaluation:sim_title_one'),
    simTitleTwo: t('products_evaluation:sim_title_two'),
    simTitleThree: t('products_evaluation:sim_title_three'),
    simItemFour: t('products_evaluation:sim_item_four'),

    simContent: t('products_evaluation:sim_content'),
    simItemOne: t('products_evaluation:sim_item_one'),
    simItemTwo: t('products_evaluation:sim_item_two'),
    simItemThree: t('products_evaluation:sim_item_three'),
    ctaButton: t('common:start_the_challenge')
  }

  const faqSectionTranslations = {
    titleOne: t('products_faq:title_one'),
    titleTwo: t('products_faq:title_two'),
    content: t('products_faq:content'),
    buttonFaqs: t('products_faq:button_faqs'),
    ctaButton: t('common:start_the_challenge'),
    faqOneTitle: t('products_faq:faq_1_title'),
    faqOneContent: t('products_faq:faq_1_content'),
    faqTwoTitle: t('products_faq:faq_2_title'),
    faqTwoContent: t('products_faq:faq_2_content'),
    faqThreeTitle: t('products_faq:faq_3_title'),
    faqThreeContent: t('products_faq:faq_3_content'),
    faqFourTitle: t('products_faq:faq_4_title'),
    faqFourContent: t('products_faq:faq_4_content'),
    faqFiveTitle: t('products_faq:faq_5_title'),
    faqFiveContent: t('products_faq:faq_5_content'),
  }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <MainSectionLazyLoading translations={homeSectionTranslations} />
      <EvaluationSectionLazyLoading translations={evaluationSectionTranslations} />
      <TableSectionLazyLoading locale={locale} translations={tableTranslations} />
      <FaqSectionLazyLoading translations={faqSectionTranslations} locale={currentLanguage} />
      <div className="-mt-5 mb:-mt-20">
        <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} /> 
      </div>
    </TranslationsProvider>
  )
}

