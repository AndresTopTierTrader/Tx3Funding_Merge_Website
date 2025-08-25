import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
  title: "Affiliate Terms and Conditions - TopTier Trader - Partnership Guidelines",
  description: "Review our Affiliate Terms and Conditions to understand the partnership agreement with TopTier Trader. Learn about commission structures, responsibilities, and program rules.",
  keywords: "TopTier Trader affiliate program, affiliate terms, partnership agreement, commission structure, affiliate guidelines, referral program",
  language: "en",
  subject: "Affiliate Program Terms and Conditions",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Affiliate Partnership Terms with TopTier Trader",
    description: "Join the TopTier Trader affiliate program. Our Terms and Conditions outline the partnership structure, commissions, and requirements for successful collaboration.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/affiliate-terms`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/affiliate-terms`,
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
  title: "Términos y Condiciones de Afiliados - TopTier Trader - Directrices de Asociación",
  description: "Revisa nuestros Términos y Condiciones de Afiliados para entender el acuerdo de asociación con TopTier Trader. Conoce las estructuras de comisiones, responsabilidades y reglas del programa.",
  keywords: "programa de afiliados de TopTier Trader, términos de afiliados, acuerdo de asociación, estructura de comisiones, directrices para afiliados, programa de referidos",
  language: "es",
  subject: "Términos y Condiciones del Programa de Afiliados",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Términos de Asociación de Afiliados con TopTier Trader",
    description: "Únete al programa de afiliados de TopTier Trader. Nuestros Términos y Condiciones describen la estructura de la asociación, las comisiones y los requisitos para una colaboración exitosa.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/affiliate-terms`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/affiliate-terms`,
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
  title: "Conditions Générales d'Affiliation - TopTier Trader - Directives de Partenariat",
  description: "Consultez nos Conditions Générales d'Affiliation pour comprendre l'accord de partenariat avec TopTier Trader. Découvrez les structures de commission, les responsabilités et les règles du programme.",
  keywords: "programme d'affiliation TopTier Trader, conditions d'affiliation, accord de partenariat, structure de commission, directives d'affiliation, programme de parrainage",
  language: "fr",
  subject: "Conditions Générales du Programme d'Affiliation",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Conditions de Partenariat d'Affiliation avec TopTier Trader",
    description: "Rejoignez le programme d'affiliation de TopTier Trader. Nos Conditions Générales décrivent la structure du partenariat, les commissions et les exigences pour une collaboration réussie.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/affiliate-terms`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/affiliate-terms`,
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


const MainSectionLazyLoading = dynamic(() => import("@/components/legal/AffiliateTerms"), {
  ssr: true,
  loading: () => <div className="w-full py-80 flex mb:flex-row flex-col justify-center items-center rounded-xl" s>
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



const i18nNameSpaces = ["common", "affiliate-terms-and-conditions"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);


  const mainSectionTranslations = {
    h1_1: t('affiliate-terms-and-conditions:h1_1'),
    h1_2: t('affiliate-terms-and-conditions:h1_2'),
    t1: t('affiliate-terms-and-conditions:t1'),
    t2: t('affiliate-terms-and-conditions:t2'),
    t3: t('affiliate-terms-and-conditions:t3'),
    t4: t('affiliate-terms-and-conditions:t4'),
    t5: t('affiliate-terms-and-conditions:t5'),
    t6: t('affiliate-terms-and-conditions:t6'),
    t7: t('affiliate-terms-and-conditions:t7'),
    t8: t('affiliate-terms-and-conditions:t8'),
    t9: t('affiliate-terms-and-conditions:t9'),
    t10: t('affiliate-terms-and-conditions:t10'),
    t11: t('affiliate-terms-and-conditions:t11'),
    t12: t('affiliate-terms-and-conditions:t12'),
    t13: t('affiliate-terms-and-conditions:t13'),
    t14: t('affiliate-terms-and-conditions:t14'),
    t15: t('affiliate-terms-and-conditions:t15'),
    t16: t('affiliate-terms-and-conditions:t16'),
    t17: t('affiliate-terms-and-conditions:t17'),
    t18: t('affiliate-terms-and-conditions:t18'),
    t19: t('affiliate-terms-and-conditions:t19'),
    t20: t('affiliate-terms-and-conditions:t20'),
    t21: t('affiliate-terms-and-conditions:t21'),
    p1_1: t('affiliate-terms-and-conditions:p1_1'),
    p1_2: t('affiliate-terms-and-conditions:p1_2'),
    p2_1: t('affiliate-terms-and-conditions:p2_1'),
    p2_2: t('affiliate-terms-and-conditions:p2_2'),
    p3_1: t('affiliate-terms-and-conditions:p3_1'),
    p3_2: t('affiliate-terms-and-conditions:p3_2'),
    p4_1: t('affiliate-terms-and-conditions:p4_1'),
    p4_2: t('affiliate-terms-and-conditions:p4_2'),
    p4_3: t('affiliate-terms-and-conditions:p4_3'),
    p4_4: t('affiliate-terms-and-conditions:p4_4'),
    p4_5: t('affiliate-terms-and-conditions:p4_5'),
    p4_6: t('affiliate-terms-and-conditions:p4_6'),
    p4_7: t('affiliate-terms-and-conditions:p4_7'),
    p4_8: t('affiliate-terms-and-conditions:p4_8'),
    p4_9: t('affiliate-terms-and-conditions:p4_9'),
    p4_10: t('affiliate-terms-and-conditions:p4_10'),
    p4_11: t('affiliate-terms-and-conditions:p4_11'),
    p4_12: t('affiliate-terms-and-conditions:p4_12'),
    p4_13: t('affiliate-terms-and-conditions:p4_13'),
    p4_14: t('affiliate-terms-and-conditions:p4_14'),
    p4_15: t('affiliate-terms-and-conditions:p4_15'),
    p4_16: t('affiliate-terms-and-conditions:p4_16'),
    p4_17: t('affiliate-terms-and-conditions:p4_17'),
    p4_18: t('affiliate-terms-and-conditions:p4_18'),
    p4_19: t('affiliate-terms-and-conditions:p4_19'),
    p5_1: t('affiliate-terms-and-conditions:p5_1'),
    p5_2: t('affiliate-terms-and-conditions:p5_2'),
    p5_3: t('affiliate-terms-and-conditions:p5_3'),
    p6_1: t('affiliate-terms-and-conditions:p6_1'),
    p6_2: t('affiliate-terms-and-conditions:p6_2'),
    p6_3: t('affiliate-terms-and-conditions:p6_3'),
    p6_4: t('affiliate-terms-and-conditions:p6_4'),
    p6_5: t('affiliate-terms-and-conditions:p6_5'),
    p6_6: t('affiliate-terms-and-conditions:p6_6'),
    p7_1: t('affiliate-terms-and-conditions:p7_1'),
    p7_2: t('affiliate-terms-and-conditions:p7_2'),
    p7_3: t('affiliate-terms-and-conditions:p7_3'),
    p7_4: t('affiliate-terms-and-conditions:p7_4'),
    p8_1: t('affiliate-terms-and-conditions:p8_1'),
    p8_2: t('affiliate-terms-and-conditions:p8_2'),
    p8_3: t('affiliate-terms-and-conditions:p8_3'),
    p8_4: t('affiliate-terms-and-conditions:p8_4'),
    p8_5: t('affiliate-terms-and-conditions:p8_5'),
    p8_6: t('affiliate-terms-and-conditions:p8_6'),
    p8_7: t('affiliate-terms-and-conditions:p8_7'),
    p8_8: t('affiliate-terms-and-conditions:p8_8'),
    p9_1: t('affiliate-terms-and-conditions:p9_1'),
    p9_2: t('affiliate-terms-and-conditions:p9_2'),
    p9_3: t('affiliate-terms-and-conditions:p9_3'),
    p9_4: t('affiliate-terms-and-conditions:p9_4'),
    p9_5: t('affiliate-terms-and-conditions:p9_5'),
    p9_6: t('affiliate-terms-and-conditions:p9_6'),
    p9_7: t('affiliate-terms-and-conditions:p9_7'),
    p10_1: t('affiliate-terms-and-conditions:p10_1'),
    p10_2: t('affiliate-terms-and-conditions:p10_2'),
    p10_3: t('affiliate-terms-and-conditions:p10_3'),
    p10_4: t('affiliate-terms-and-conditions:p10_4'),
    p10_5: t('affiliate-terms-and-conditions:p10_5'),
    p10_6: t('affiliate-terms-and-conditions:p10_6'),
    p11_1: t('affiliate-terms-and-conditions:p11_1'),
    p11_2: t('affiliate-terms-and-conditions:p11_2'),
    p11_3: t('affiliate-terms-and-conditions:p11_3'),
    p11_4: t('affiliate-terms-and-conditions:p11_4'),
    p11_5: t('affiliate-terms-and-conditions:p11_5'),
    p11_6: t('affiliate-terms-and-conditions:p11_6'),
    p11_7: t('affiliate-terms-and-conditions:p11_7'),
    p12_1: t('affiliate-terms-and-conditions:p12_1'),
    p12_2: t('affiliate-terms-and-conditions:p12_2'),
    p12_3: t('affiliate-terms-and-conditions:p12_3'),
    p12_4: t('affiliate-terms-and-conditions:p12_4'),
    p12_5: t('affiliate-terms-and-conditions:p12_5'),
    p12_6: t('affiliate-terms-and-conditions:p12_6'),
    p12_7: t('affiliate-terms-and-conditions:p12_7'),
    p12_8: t('affiliate-terms-and-conditions:p12_8'),
    p12_9: t('affiliate-terms-and-conditions:p12_9'),
    p12_10: t('affiliate-terms-and-conditions:p12_10'),
    p12_11: t('affiliate-terms-and-conditions:p12_11'),
    p12_12: t('affiliate-terms-and-conditions:p12_12'),
    p12_13: t('affiliate-terms-and-conditions:p12_13'),
    p13_1: t('affiliate-terms-and-conditions:p13_1'),
    p13_2: t('affiliate-terms-and-conditions:p13_2'),
    p13_3: t('affiliate-terms-and-conditions:p13_3'),
    p13_4: t('affiliate-terms-and-conditions:p13_4'),
    p13_5: t('affiliate-terms-and-conditions:p13_5'),
    p13_6: t('affiliate-terms-and-conditions:p13_6'),
    p13_7: t('affiliate-terms-and-conditions:p13_7'),
    p14_1: t('affiliate-terms-and-conditions:p14_1'),
    p14_2: t('affiliate-terms-and-conditions:p14_2'),
    p14_3: t('affiliate-terms-and-conditions:p14_3'),
    p14_4: t('affiliate-terms-and-conditions:p14_4'),
    p14_5: t('affiliate-terms-and-conditions:p14_5'),
    p14_6: t('affiliate-terms-and-conditions:p14_6'),
    p14_7: t('affiliate-terms-and-conditions:p14_7'),
    p15_1: t('affiliate-terms-and-conditions:p15_1'),
    p15_2: t('affiliate-terms-and-conditions:p15_2'),
    p15_3: t('affiliate-terms-and-conditions:p15_3'),
    p15_4: t('affiliate-terms-and-conditions:p15_4'),
    p15_5: t('affiliate-terms-and-conditions:p15_5'),
    p15_6: t('affiliate-terms-and-conditions:p15_6'),
    p15_7: t('affiliate-terms-and-conditions:p15_7'),
    p15_8: t('affiliate-terms-and-conditions:p15_8'),
    p15_9: t('affiliate-terms-and-conditions:p15_9'),
    p15_10: t('affiliate-terms-and-conditions:p15_10'),
    p16_1: t('affiliate-terms-and-conditions:p16_1'),
    p16_2: t('affiliate-terms-and-conditions:p16_2'),
    p16_3: t('affiliate-terms-and-conditions:p16_3'),
    p16_4: t('affiliate-terms-and-conditions:p16_4'),
    p16_5: t('affiliate-terms-and-conditions:p16_5'),
    p16_6: t('affiliate-terms-and-conditions:p16_6'),
    p16_7: t('affiliate-terms-and-conditions:p16_7'),
    p16_8: t('affiliate-terms-and-conditions:p16_8'),
    p16_9: t('affiliate-terms-and-conditions:p16_9'),
    p17_1: t('affiliate-terms-and-conditions:p17_1'),
    p17_2: t('affiliate-terms-and-conditions:p17_2'),
    p17_3: t('affiliate-terms-and-conditions:p17_3'),
    p17_4: t('affiliate-terms-and-conditions:p17_4'),
    p17_5: t('affiliate-terms-and-conditions:p17_5'),
    p17_6: t('affiliate-terms-and-conditions:p17_6'),
    p17_7: t('affiliate-terms-and-conditions:p17_7'),
    p17_8: t('affiliate-terms-and-conditions:p17_8'),
    p17_9: t('affiliate-terms-and-conditions:p17_9'),
    p18_1: t('affiliate-terms-and-conditions:p18_1'),
    p18_2: t('affiliate-terms-and-conditions:p18_2'),
    p18_3: t('affiliate-terms-and-conditions:p18_3'),
    p18_4: t('affiliate-terms-and-conditions:p18_4'),
    p19_1: t('affiliate-terms-and-conditions:p19_1'),
    p19_2: t('affiliate-terms-and-conditions:p19_2'),
    p19_3: t('affiliate-terms-and-conditions:p19_3'),
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
