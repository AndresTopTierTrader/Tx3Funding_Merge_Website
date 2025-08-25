//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
const MainSectionLazyLoading = dynamic(() => import("@/components/hyper-dopamine/Main"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading Products Section...</p>
})

const WhatTTStandsLazyLoading = dynamic(() => import("@/components/hyper-dopamine/What-tt-stands"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading WhatTTStandns Section...</p>
})

const SocialMediaSectionLazyLoading = dynamic(() => import("@/components/common/SocialMediaSection/SocialMedia-Section"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading Social Media Section...</p>
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

const i18nNameSpaces = ["home", "common", "products_home", "hyper-dopamine", "could_be_worse"];


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


export default async function Products({ params: { locale } }) {


  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);


  const homeSectionTranslations = {
    titleOne: t('hyper-dopamine:title_one'),
    titleTwo: t('hyper-dopamine:title_two'),
    titleThree: t('hyper-dopamine:title_three'),
    cta_cue: t('hyper-dopamine:cta_cue'),
    ctaButton: t('hyper-dopamine:cta_button'),
  }

  const whatTTStands = {
    t3: t("could_be_worse:t3"),
    card1_t: t("could_be_worse:card1_t"),
    card1_p: t("could_be_worse:card1_p"),
    card2_t: t("could_be_worse:card2_t"),
    card2_p: t("could_be_worse:card2_p"),
    card3_t: t("could_be_worse:card3_t"),
    card3_p: t("could_be_worse:card3_p"),
    card4_t: t("could_be_worse:card4_t"),
    card4_p: t("could_be_worse:card4_p"),
    card5_t: t("could_be_worse:card5_t"),
    card5_p: t("could_be_worse:card5_p"),
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

  const socialmediaTranslations = {
    title: t('common:socialmedia_title'),
    desc: t('common:socialmedia_desc'),
  }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <MainSectionLazyLoading translations={homeSectionTranslations} locale={locale} />
      <WhatTTStandsLazyLoading translations={whatTTStands} />
      <SocialMediaSectionLazyLoading locale={locale} translations={socialmediaTranslations} />
      <div className="bg-[#0B111D] -mt-1 pt-10 mb:pt-5 ">
        <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} />
      </div>

    </TranslationsProvider>
  )
}

