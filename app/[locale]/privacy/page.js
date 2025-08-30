import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
  title: "Privacy Policy - TopTier Trader - Your Data, Your Rights",
  description: "Read our Privacy Policy to understand how TopTier Trader collects, uses, and protects your personal information. Learn about your rights and our commitments.",
  keywords: "TopTier Trader privacy, data protection, user privacy rights, personal data usage, data security, privacy compliance",
  language: "en",
  subject: "Privacy and Data Protection Policy",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Understand Your Privacy Rights with TopTier Trader",
    description: "Discover how we handle your personal information at TopTier Trader. Our Privacy Policy outlines your rights and our responsibilities to protect your data.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/privacy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/privacy`,
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
  title: "Política de Privacidad - TopTier Trader - Tus Datos, Tus Derechos",
  description: "Lee nuestra Política de Privacidad para entender cómo TopTier Trader recopila, utiliza y protege tu información personal. Conoce tus derechos y nuestros compromisos.",
  keywords: "privacidad de TopTier Trader, protección de datos, derechos de privacidad del usuario, uso de datos personales, seguridad de datos, cumplimiento de privacidad",
  language: "es",
  subject: "Política de Privacidad y Protección de Datos",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Entiende tus Derechos de Privacidad con TopTier Trader",
    description: "Descubre cómo manejamos tu información personal en TopTier Trader. Nuestra Política de Privacidad delinea tus derechos y nuestras responsabilidades para proteger tus datos.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/privacy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/privacy`,
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
  title: "Politique de Confidentialité - TopTier Trader - Vos Données, Vos Droits",
  description: "Lisez notre politique de confidentialité pour comprendre comment TopTier Trader collecte, utilise et protège vos informations personnelles. Apprenez vos droits et nos engagements.",
  keywords: "Confidentialité TopTier Trader, protection des données, droits de confidentialité des utilisateurs, utilisation des données personnelles, sécurité des données, conformité à la confidentialité",
  language: "fr",
  subject: "Politique de Confidentialité et de Protection des Données",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Comprenez Vos Droits en Matière de Confidentialité avec TopTier Trader",
    description: "Découvrez comment nous traitons vos informations personnelles chez TopTier Trader. Notre politique de confidentialité décrit vos droits et nos responsabilités pour protéger vos données.",
    // Assurez-vous de remplacer 'metadataImg' par les métadonnées réelles de l'image
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/privacy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/privacy`,
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

import { bgImageStyle } from "@/constants/styles"

const MainSectionLazyLoading = dynamic(() => import("@/components/legal/Privacy"), {
  ssr: true,
  loading: () => <div className="w-full py-80 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-ttblue ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading About Us Section...</p>
  </div>
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



const i18nNameSpaces = ["common", "privacy_policy"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);


  const mainSectionTranslations = {
    t1_1: t('privacy_policy:t1_1'),
    t1_2: t('privacy_policy:t1_2'),
    p1: t('privacy_policy:p1'),
    t2: t('privacy_policy:t2'),
    p2: t('privacy_policy:p2'),
    t3: t('privacy_policy:t3'),
    p3: t('privacy_policy:p3'),
    t4: t('privacy_policy:t4'),
    p4: t('privacy_policy:p4'),
    t5: t('privacy_policy:t5'),
    p5: t('privacy_policy:p5'),
    t6: t('privacy_policy:t6'),
    p6: t('privacy_policy:p6'),
    t7: t('privacy_policy:t7'),
    p7: t('privacy_policy:p7'),
    t8: t('privacy_policy:t8'),
    p8: t('privacy_policy:p8'),
    t9: t('privacy_policy:t9'),
    p9: t('privacy_policy:p9'),
    t10: t('privacy_policy:t10'),
    p10: t('privacy_policy:p10'),
    t11: t('privacy_policy:t11'),
    p11: t('privacy_policy:p11'),
    t12: t('privacy_policy:t12'),
    p12: t('privacy_policy:p12'),
    t13: t('privacy_policy:t13'),
    p13: t('privacy_policy:p13'),
    t14: t('privacy_policy:t14'),
    p14: t('privacy_policy:p14'),
    t15: t('privacy_policy:t15'),
    p15: t('privacy_policy:p15'),
    t16: t('privacy_policy:t16'),
    p16: t('privacy_policy:p16'),
    t17: t('privacy_policy:t17'),
    p17: t('privacy_policy:p17'),
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
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} /> 
    </div>
  )
}
