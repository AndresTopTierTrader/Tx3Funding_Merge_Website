import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

//Metadata
const metadata_en = {
  title: "Terms of Use - TopTier Trader - Legal Guidelines and Conditions",
  description: "Review the Terms of Use governing your interactions and trading activities on TopTier Trader. Understand our legal conditions and your responsibilities.",
  keywords: "TopTier Trader terms, trading terms and conditions, legal obligations, proprietary trading rules, user responsibilities, compliance guidelines",
  language: "en",
  subject: "Legal Terms and Conditions for Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "TopTier Trader Terms of Use - Legal Guidelines and Conditions",
    description: "Familiarize yourself with the Terms of Use for TopTier Trader. Learn about the legal terms and conditions that govern our trading platform.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/terms`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/terms`,
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
  title: "Términos de Uso - TopTier Trader - Directrices Legales y Condiciones",
  description: "Revisa los Términos de Uso que rigen tus interacciones y actividades de trading en TopTier Trader. Entiende nuestras condiciones legales y tus responsabilidades.",
  keywords: "términos de TopTier Trader, condiciones de trading, obligaciones legales, reglas de trading propietario, responsabilidades del usuario, guías de cumplimiento",
  language: "es",
  subject: "Términos y Condiciones Legales para el Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Términos de Uso de TopTier Trader - Directrices Legales y Condiciones",
    description: "Familiarízate con los Términos de Uso de TopTier Trader. Aprende sobre los términos y condiciones legales que rigen nuestra plataforma de trading.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/terms`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/terms`,
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
  title: "Conditions d'Utilisation - TopTier Trader - Directives et Conditions Légales",
  description: "Examinez les conditions d'utilisation régissant vos interactions et activités de trading sur TopTier Trader. Comprenez nos conditions légales et vos responsabilités.",
  keywords: "Conditions TopTier Trader, termes et conditions de trading, obligations légales, règles de trading propriétaire, responsabilités de l'utilisateur, directives de conformité",
  language: "fr",
  subject: "Conditions Légales pour le Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Conditions d'Utilisation de TopTier Trader - Directives et Conditions Légales",
    description: "Familiarisez-vous avec les conditions d'utilisation de TopTier Trader. Découvrez les termes et conditions légaux qui régissent notre plateforme de trading.",
    // Assurez-vous de remplacer 'metadataImg' par les métadonnées réelles de l'image
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/terms`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/terms`,
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

const MainSectionLazyLoading = dynamic(() => import("@/components/legal/Terms"), {
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
    <p className="text-white ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
  </div>
})



const i18nNameSpaces = ["common", "terms_of_use"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);


  const mainSectionTranslations = {
    t1_1: t('terms_of_use:t1_1'),
    t1_2: t('terms_of_use:t1_2'),
    p1: t('terms_of_use:p1'),
    t2: t('terms_of_use:t2'),
    p2: t('terms_of_use:p2'),
    t3: t('terms_of_use:t3'),
    p3: t('terms_of_use:p3'),
    t4: t('terms_of_use:t4'),
    p4: t('terms_of_use:p4'),
    t5: t('terms_of_use:t5'),
    p5: t('terms_of_use:p5'),
    t6: t('terms_of_use:t6'),
    p6: t('terms_of_use:p6'),
    t7: t('terms_of_use:t7'),
    p7: t('terms_of_use:p7'),
    t8: t('terms_of_use:t8'),
    p8: t('terms_of_use:p8'),
    t9: t('terms_of_use:t9'),
    p9: t('terms_of_use:p9'),
    t10: t('terms_of_use:t10'),
    p10: t('terms_of_use:p10'),
    t11: t('terms_of_use:t11'),
    p11: t('terms_of_use:p11'),
    t12: t('terms_of_use:t12'),
    p12: t('terms_of_use:p12'),
    t13: t('terms_of_use:t13'),
    p13: t('terms_of_use:p13'),
    t14: t('terms_of_use:t14'),
    p14: t('terms_of_use:p14'),
    t15: t('terms_of_use:t15'),
    p15: t('terms_of_use:p15'),
    t16: t('terms_of_use:t16'),
    p16: t('terms_of_use:p16'),
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
