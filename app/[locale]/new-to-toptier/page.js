import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

//translations added
const metadata_en = {
  title: "20% OFF TopTier Trader Prop Firm - Exclusive Discount Code | Save on Trading Evaluations",
  description: "Get 20% OFF your TopTier Trader evaluation today! Join one of the best prop trading firms with our exclusive discount code. Start your funded trading journey and save on evaluation fees.",
  keywords: "TopTier Trader discount, prop firm coupon, 20% off trading evaluation, funded trader program discount, prop trading discount code, TopTier Trader promo code, best prop firm deals, trading challenge discount, funded account coupon, proprietary trading firm offers",
  language: "en",
  subject: "Prop Trading Firm Discount Offer",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Get 20% OFF TopTier Trader - Best Prop Firm Discount Code",
    description: "Exclusive 20% discount on TopTier Trader evaluations. Start your professional trading career with one of the leading prop firms. Limited time offer!",
    image: `${ENVIRONMENT_URL}/images/20-percent-off-coupon.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/new-to-toptier`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/new-to-toptier`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "20% OFF TopTier Trader Evaluation",
    "description": "Get 20% discount on all TopTier Trader prop firm evaluation programs",
    "category": "Trading Education",
    "offeredBy": {
      "@type": "Organization",
      "name": "TopTier Trader"
    },
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "value": "20",
      "valueAddedTaxIncluded": false
    }
  }
};

const metadata_es = {
  title: "20% DESCUENTO TopTier Trader - Código Exclusivo | Ahorra en Evaluaciones de Trading",
  description: "¡Obtén 20% de descuento en tu evaluación de TopTier Trader hoy! Únete a una de las mejores firmas de prop trading con nuestro código de descuento exclusivo. Comienza tu camino como trader fondeado y ahorra.",
  keywords: "descuento TopTier Trader, cupón firma prop, 20% descuento evaluación trading, descuento programa trader fondeado, código descuento prop trading, código promocional TopTier Trader, mejores ofertas firmas prop, descuento desafío trading, cupón cuenta fondeada",
  language: "es",
  subject: "Oferta de Descuento Firma de Prop Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Obtén 20% DESCUENTO TopTier Trader - Mejor Código Firma Prop",
    description: "Descuento exclusivo del 20% en evaluaciones TopTier Trader. Comienza tu carrera de trading profesional con una de las firmas prop líderes. ¡Oferta limitada!",
    image: `${ENVIRONMENT_URL}/images/20-percent-off-coupon-es.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/obtener-cupon`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/obtener-cupon`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  }
};

const metadata_fr = {
  title: "20% DE RÉDUCTION TopTier Trader - Code Exclusif | Économisez sur les Évaluations",
  description: "Obtenez 20% de réduction sur votre évaluation TopTier Trader aujourd'hui! Rejoignez l'une des meilleures sociétés de prop trading avec notre code de réduction exclusif. Commencez votre parcours de trader financé.",
  keywords: "réduction TopTier Trader, coupon société prop, 20% réduction évaluation trading, réduction programme trader financé, code réduction prop trading, code promo TopTier Trader, meilleures offres sociétés prop, réduction défi trading",
  language: "fr",
  subject: "Offre de Réduction Société de Prop Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Obtenez 20% DE RÉDUCTION TopTier Trader - Meilleur Code Société Prop",
    description: "Réduction exclusive de 20% sur les évaluations TopTier Trader. Commencez votre carrière de trading professionnel avec l'une des principales sociétés prop. Offre limitée!",
    image: `${ENVIRONMENT_URL}/images/20-percent-off-coupon-fr.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/obtenir-coupon`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/obtenir-coupon`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
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

const MainSectionLazyLoading = dynamic(() => import("@/components/common/SignUpPage/Main"), {
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


const i18nNameSpaces = ["common", "refund_policy"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);


  const mainSectionTranslations = {
    t1_1: t('refund_policy:t1_1'),
    t1_2: t('refund_policy:t1_2'),
    p1: t('refund_policy:p1'),
    t2: t('refund_policy:t2'),
    p2: t('refund_policy:p2'),
    t3: t('refund_policy:t3'),
    p3: t('refund_policy:p3'),
    t4: t('refund_policy:t4'),
    p4: t('refund_policy:p4'),
    t5: t('refund_policy:t5'),
    p5: t('refund_policy:p5'),
    t6: t('refund_policy:t6'),
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
