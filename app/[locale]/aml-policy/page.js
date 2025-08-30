import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { bgImageStyle } from "@/constants/styles"
import {ENVIRONMENT_URL} from "@/constants/global";

//tranlations added
const metadata_en = {
  title: "Anti-Money Laundering Policy - TopTier Trader - Compliance & Integrity",
  description: "Read our Anti-Money Laundering Policy to understand how TopTier Trader prevents financial crimes and maintains regulatory compliance. Learn about our commitment to security.",
  keywords: "TopTier Trader AML, money laundering prevention, terrorist financing, compliance, financial security, regulatory adherence",
  language: "en",
  subject: "Anti-Money Laundering and Financial Crime Prevention",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "TopTier Trader's Commitment to Financial Security",
    description: "Discover how we prevent money laundering and financial crimes at TopTier Trader. Our AML Policy outlines our compliance framework and commitment to financial integrity.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/aml-policy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/aml-policy`,
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
  title: "Política Contra el Lavado de Dinero - TopTier Trader - Cumplimiento e Integridad",
  description: "Lee nuestra Política Contra el Lavado de Dinero para entender cómo TopTier Trader previene delitos financieros y mantiene el cumplimiento normativo. Conoce nuestro compromiso con la seguridad.",
  keywords: "TopTier Trader AML, prevención lavado dinero, financiamiento terrorismo, cumplimiento, seguridad financiera, adherencia regulatoria",
  language: "es",
  subject: "Prevención del Lavado de Dinero y Delitos Financieros",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Compromiso de TopTier Trader con la Seguridad Financiera",
    description: "Descubre cómo prevenimos el lavado de dinero y delitos financieros en TopTier Trader. Nuestra Política AML describe nuestro marco de cumplimiento y compromiso con la integridad financiera.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/aml-policy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/aml-policy`,
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
  title: "Politique Anti-Blanchiment d'Argent - TopTier Trader - Conformité et Intégrité",
  description: "Lisez notre Politique Anti-Blanchiment d'Argent pour comprendre comment TopTier Trader prévient les crimes financiers et maintient la conformité réglementaire. Découvrez notre engagement envers la sécurité.",
  keywords: "TopTier Trader AML, prévention blanchiment argent, financement terrorisme, conformité, sécurité financière, adhérence réglementaire",
  language: "fr",
  subject: "Prévention du Blanchiment d'Argent et des Crimes Financiers",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Engagement de TopTier Trader envers la Sécurité Financière",
    description: "Découvrez comment nous prévenons le blanchiment d'argent et les crimes financiers chez TopTier Trader. Notre Politique AML décrit notre cadre de conformité et notre engagement envers l'intégrité financière.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/aml-policy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/aml-policy`,
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


const MainSectionLazyLoading = dynamic(() => import("@/components/legal/AMLPolicy"), {
  ssr: true,
  loading: () => <div className="w-full py-80 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-textPrimary ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading AML Policy Section...</p>
  </div>
})

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-textPrimary ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
  </div>
})

const i18nNameSpaces = ["common", "aml_policy"];

export default async function Page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

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

  const translations = {
    h1_title_1: t('aml_policy:h1_title_1'),
    h1_title_2: t('aml_policy:h1_title_2'),
    t1: t('aml_policy:t1'),
    t2: t('aml_policy:t2'),
    t3: t('aml_policy:t3'),
    t4: t('aml_policy:t4'),
    t5: t('aml_policy:t5'),
    t6: t('aml_policy:t6'),
    t7: t('aml_policy:t7'),
    t8: t('aml_policy:t8'),
    t9: t('aml_policy:t9'),
    t10: t('aml_policy:t10'),
    t11: t('aml_policy:t11'),
    t12: t('aml_policy:t12'),
    t13: t('aml_policy:t13'),
    t14: t('aml_policy:t14'),
    t15: t('aml_policy:t15'),
    t16: t('aml_policy:t16'),
    t17: t('aml_policy:t17'),
    t18: t('aml_policy:t18'),
    p1_1: t('aml_policy:p1_1'),
    p1_2: t('aml_policy:p1_2'),
    p2_1: t('aml_policy:p2_1'),
    p2_2: t('aml_policy:p2_2'),
    p2_3: t('aml_policy:p2_3'),
    p2_4: t('aml_policy:p2_4'),
    p2_5: t('aml_policy:p2_5'),
    p3_1: t('aml_policy:p3_1'),
    p3_2: t('aml_policy:p3_2'),
    p3_3: t('aml_policy:p3_3'),
    p3_4: t('aml_policy:p3_4'),
    p3_5: t('aml_policy:p3_5'),
    p3_6: t('aml_policy:p3_6'),
    p4_1: t('aml_policy:p4_1'),
    p4_2: t('aml_policy:p4_2'),
    p4_3: t('aml_policy:p4_3'),
    p4_4: t('aml_policy:p4_4'),
    p5_1: t('aml_policy:p5_1'),
    p5_2: t('aml_policy:p5_2'),
    p5_3: t('aml_policy:p5_3'),
    p5_4: t('aml_policy:p5_4'),
    p5_5: t('aml_policy:p5_5'),
    p6_1: t('aml_policy:p6_1'),
    p6_2: t('aml_policy:p6_2'),
    p6_3: t('aml_policy:p6_3'),
    p6_4: t('aml_policy:p6_4'),
    p6_5: t('aml_policy:p6_5'),
    p6_6: t('aml_policy:p6_6'),
    p6_7: t('aml_policy:p6_7'),
    p6_8: t('aml_policy:p6_8'),
    p6_9: t('aml_policy:p6_9'),
    p6_10: t('aml_policy:p6_10'),
    p6_11: t('aml_policy:p6_11'),
    p7: t('aml_policy:p7'),
    p8_1: t('aml_policy:p8_1'),
    p8_2: t('aml_policy:p8_2'),
    p9_1: t('aml_policy:p9_1'),
    p9_2: t('aml_policy:p9_2'),
    p9_3: t('aml_policy:p9_3'),
    p10_1: t('aml_policy:p10_1'),
    p10_2: t('aml_policy:p10_2'),
    p10_3: t('aml_policy:p10_3'),
    p10_4: t('aml_policy:p10_4'),
    p10_5: t('aml_policy:p10_5'),
    p11_1: t('aml_policy:p11_1'),
    p11_2: t('aml_policy:p11_2'),
    p11_3: t('aml_policy:p11_3'),
    p12_1: t('aml_policy:p12_1'),
    p12_2: t('aml_policy:p12_2'),
    p12_3: t('aml_policy:p12_3'),
    p12_4: t('aml_policy:p12_4'),
    p12_5: t('aml_policy:p12_5'),
    p13_1: t('aml_policy:p13_1'),
    p13_2: t('aml_policy:p13_2'),
    p13_3: t('aml_policy:p13_3'),
    p13_4: t('aml_policy:p13_4'),
    p14_1: t('aml_policy:p14_1'),
    p14_2: t('aml_policy:p14_2'),
    p14_3: t('aml_policy:p14_3'),
    p14_4: t('aml_policy:p14_4'),
    p14_5: t('aml_policy:p14_5'),
    p14_6: t('aml_policy:p14_6'),
    p15_1: t('aml_policy:p15_1'),
    p15_2: t('aml_policy:p15_2'),
    p15_3: t('aml_policy:p15_3'),
    p15_4: t('aml_policy:p15_4'),
    p16_1: t('aml_policy:p16_1'),
    p16_2: t('aml_policy:p16_2'),
    p16_3: t('aml_policy:p16_3'),
    p16_4: t('aml_policy:p16_4'),
    p16_5: t('aml_policy:p16_5'),
    p16_6: t('aml_policy:p16_6'),
    p17_1: t('aml_policy:p17_1'),
    p17_2: t('aml_policy:p17_2'),
    p17_3: t('aml_policy:p17_3'),
    p17_4: t('aml_policy:p17_4'),
    p18_1: t('aml_policy:p18_1'),
    p18_2: t('aml_policy:p18_2'),
    p18_3: t('aml_policy:p18_3'),
    p18_4: t('aml_policy:p18_4'),
    p18_5: t('aml_policy:p18_5'),
    p18_6: t('aml_policy:p18_6'),
    p18_7: t('aml_policy:p18_7'),
    p18_8: t('aml_policy:p18_8'),
    p18_9: t('aml_policy:p18_9'),
    p18_10: t('aml_policy:p18_10'),
    p19_1: t('aml_policy:p19_1'),
    p19_2: t('aml_policy:p19_2'),
    p19_3: t('aml_policy:p19_3'),
    p19_4: t('aml_policy:p19_4'),
    p19_5: t('aml_policy:p19_5'),
    p19_6: t('aml_policy:p19_6'),
  }

  return (
    <div>
      <MainSectionLazyLoading translations={translations} />
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} /> 
    </div>
  )
}