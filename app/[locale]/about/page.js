import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n"
import { bgImageStyle } from "@/constants/styles"
import { ENVIRONMENT_URL } from "@/constants/global"

//Metadata
const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "About Us - TopTier Trader - Our Vision, Mission, and Legal Terms",
  description: "Discover TopTier Trader’s mission, vision, and the legal frameworks guiding our operations. Learn more about our commitment to fostering successful trading careers.",
  keywords: "TopTier Trader mission, TopTier Trader vision, trading legal terms, proprietary trading firm, trading ethics, company values, legal information",
  language: "en",
  subject: "Proprietary Trading Firm Background",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Learn About TopTier Trader - Vision, Mission, and Legal Terms",
    description: "Get to know TopTier Trader: our core values, mission, and the legal standards we adhere to. Discover how we're shaping the future of proprietary trading.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/about`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/about`,
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
  title: "Acerca de Nosotros | TopTier Trader - Nuestra Visión, Misión y Términos Legales",
  description: "Descubre la misión, visión y marcos legales que guían nuestras operaciones en TopTier Trader. Conoce más sobre nuestro compromiso con el desarrollo de carreras comerciales exitosas.",
  keywords: "misión de TopTier Trader, visión de TopTier Trader, términos legales de trading, firma de trading propietario, ética de trading, valores de la empresa, información legal",
  language: "es",
  subject: "Antecedentes de la Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Conoce a TopTier Trader - Visión, Misión y Términos Legales",
    description: "Conoce más sobre TopTier Trader: nuestros valores fundamentales, misión y los estándares legales a los que nos adherimos. Descubre cómo estamos dando forma al futuro del trading propietario.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/about`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/about`,
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
  title: "À Propos de Nous | TopTier Trader - Notre Vision, Mission et Termes Légaux",
  description: "Découvrez la mission, la vision et les cadres légaux qui guident nos opérations chez TopTier Trader. En savoir plus sur notre engagement envers le développement de carrières commerciales réussies.",
  keywords: "mission de TopTier Trader, vision de TopTier Trader, termes légaux de trading, société de trading propriétaire, éthique de trading, valeurs de l'entreprise, informations légales",
  language: "fr",
  subject: "Historique de la Société de Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Découvrez TopTier Trader - Vision, Mission et Termes Légaux",
    description: "En savoir plus sur TopTier Trader : nos valeurs fondamentales, notre mission et les normes légales auxquelles nous adhérons. Découvrez comment nous façonnons l'avenir du trading propriétaire.",
    // Remplacez 'metadataImg' par les métadonnées réelles de l'image
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/about`
  },
  alternates: {
    canonical:  `${ENVIRONMENT_URL}/fr/about`,
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

const MainSectionLazyLoading = dynamic(() => import("@/components/about/Main"), {
  ssr: true,
  loading: () => <div className="w-full py-80 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-slate-300 ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading About Us Section...</p>
  </div>
})

const LocationSectionLazyLoading = dynamic(() => import("@/components/about/Location"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>

  </div>
})

const TeamSectionLazyLoading = dynamic(() => import("@/components/about/Team"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>
  </div>
})

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>
  </div>
})

const i18nNameSpaces = ["common", "about-section"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);


  const mainSectionTranslations = {
    titleOne: t('about-section:title_one'),
    titleTwo: t('about-section:title_two'),
    content: t('about-section:content'),
    joinOurCommunity: t('about-section:join_our_community'),
    missionTitle: t('about-section:mission_title'),
    missionContent: t('about-section:mission_content'),
    visionTitle: t('about-section:vision_title'),
    visionContent: t('about-section:vision_content'),
    purposeTitle: t('about-section:purpose_title'),
    purposeContent: t('about-section:purpose_content'),
    cueStory: t('about-section:cue_story'),
    anthonyStory: t('about-section:anthony_story')
  }

  const locationSectionTranslations = {
    title: t('about-section:location_title'),
    pOne: t('about-section:location_p_one'),
    pTwo: t('about-section:location_p_two'),
    chat: t('about-section:location_chat'),
    phone: t('about-section:location_phone'),
    getInTouch: t('about-section:get_in_touch')
  }

  const teamSectionTranslations = {
    titleOne: t('about-section:team_title_one'),
    titleTwo: t('about-section:team_title_two'),
    content: t('about-section:team_content'),
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
    <div>

      <MainSectionLazyLoading translations={mainSectionTranslations} />
      <LocationSectionLazyLoading translations={locationSectionTranslations} locale={locale} />
      <TeamSectionLazyLoading translations={teamSectionTranslations} />
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} /> 
    </div>
  )
}
