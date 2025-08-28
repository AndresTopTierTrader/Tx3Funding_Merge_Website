import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import TableSection from "@/components/common/ForexTableSection/Main"
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Select Your Prop Firm Challenge - TopTier Trader - Choose Your Trading Path",
  description: "Choose from our selection of proprietary trading firm challenges. Compare funding amounts, profit targets, and trading rules to find the perfect prop firm challenge for your trading style.",
  keywords: "prop firm challenge, proprietary trading, funded trading account, trading challenge selection, prop firm comparison, funded trader program, trading evaluation, prop trading",
  language: "en",
  subject: "Proprietary Trading Firm Challenge Selection",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Select Your Prop Firm Challenge - Find Your Perfect Trading Opportunity",
    description: "Explore and compare different prop firm challenges. Choose the right funding amount, profit targets, and trading rules that match your trading strategy and experience level.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/select-challenge`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/select-challenge`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Selecciona Tu Desafío de Prop Firm - TopTier Trader - Elige Tu Camino de Trading",
  description: "Elige entre nuestra selección de desafíos de firmas de trading propietario. Compara montos de financiamiento, objetivos de ganancia y reglas de trading para encontrar el desafío perfecto para tu estilo.",
  keywords: "desafío prop firm, trading propietario, cuenta de trading financiada, selección de desafío trading, comparación prop firm, programa trader financiado, evaluación trading, prop trading",
  language: "es",
  subject: "Selección de Desafío de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Selecciona Tu Desafío de Prop Firm - Encuentra Tu Oportunidad de Trading Perfecta",
    description: "Explora y compara diferentes desafíos de prop firm. Elige el monto de financiamiento, objetivos de ganancia y reglas de trading que coincidan con tu estrategia y nivel de experiencia.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/select-challenge`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/select-challenge`,
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
  title: "Sélectionnez Votre Défi Prop Firm - TopTier Trader - Choisissez Votre Voie de Trading",
  description: "Choisissez parmi notre sélection de défis de firmes de trading propriétaire. Comparez les montants de financement, objectifs de profit et règles de trading pour trouver le défi parfait pour votre style.",
  keywords: "défi prop firm, trading propriétaire, compte de trading financé, sélection défi trading, comparaison prop firm, programme trader financé, évaluation trading, prop trading",
  language: "fr",
  subject: "Sélection de Défi de Firme de Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Sélectionnez Votre Défi Prop Firm - Trouvez Votre Opportunité de Trading Parfaite",
    description: "Explorez et comparez différents défis de prop firm. Choisissez le montant de financement, objectifs de profit et règles de trading qui correspondent à votre stratégie et niveau d'expérience.",
    // Remplacez 'metadataImg' par les métadonnées réelles de l'image
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/select-challenge`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/select-challenge`,
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

const i18nNameSpaces = ["common", "table_section"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const mainSectionTranslations = {
    titleOne: t('contact-section:title_one'),
    titleTwo: t('contact-section:title_two'),
    content: t('contact-section:content'),
    chatSupport: t('contact-section:chat_support'),
    callUs: t('contact-section:call_us'),
    emailUs: t('contact-section:email_us'),
    contentTwo: t('contact-section:content_two'),
    viewFAQs: t('contact-section:faqs'),
    joinOurDiscord: t('contact-section:join_our_discord'),
    whatsapp: t('contact-section:whatsapp'),
    usResidents: t('contact-section:us_residents')
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

  const tableTranslations = {
    accountType: t('table_section:table_accountType'),
    description: t('table_section:description'),
    table_one_phase: t('table_section:table_one_phase'),
    table_two_phase: t('table_section:table_two_phase'),
    challenge: t('table_section:table_challenge'),
    get: t('table_section:table_get'),
    limited_time: t('table_section:table_limited_time'),
    offer_1: t('table_section:offer_1'),
    offer_2: t('table_section:offer_2'),
    offer_3: t('table_section:offer_3'),
  }


  return (
    <div>
      <section className='py-36 bg-[#0B111D]'>
        <TableSection locale={locale} translations={tableTranslations} />\
      </section>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} />
    </div>
  )
}
