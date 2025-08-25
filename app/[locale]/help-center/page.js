import React from 'react'
import Proxy from "@/utils/misc/proxy";
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

//Metadata
const metadata_en = {
  title: "Redirecting",
  description: "You are being re directed to the TopTier Help Center",
  keywords: "TopTier Trader refunds, refund conditions, trading refund policy, cancellation policy, money back guarantee",
  language: "en",
  subject: "Refund and Cancellation Policy",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "TopTier Trader Refund Policy - Know Your Rights",
    description: "Learn how refunds are handled at TopTier Trader. Our policy details the process and conditions for obtaining a refund.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/help-center`
  },
  alternates: {
    canonical:  `${ENVIRONMENT_URL}/en/help-center`,
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

const metadata_fr = {
  title: "Redirecting",
  description: "You are being re directed to the TopTier Help Center",
  keywords: "TopTier Trader refunds, refund conditions, trading refund policy, cancellation policy, money back guarantee",
  language: "en",
  subject: "Refund and Cancellation Policy",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "TopTier Trader Refund Policy - Know Your Rights",
    description: "Learn how refunds are handled at TopTier Trader. Our policy details the process and conditions for obtaining a refund.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/help-center`
  },
  alternates: {
    canonical:  `${ENVIRONMENT_URL}/fr/help-center`,
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
  title: "Redirigiendo",
  description: "Explora nuestra Política de Reembolsos para entender las condiciones bajo las cuales se proporcionan reembolsos en TopTier Trader. Aprende sobre tus derechos y cómo solicitar un reembolso.",
  keywords: "reembolsos de TopTier Trader, condiciones de reembolso, política de reembolso de trading, política de cancelación, garantía de devolución de dinero",
  language: "es",
  subject: "Política de Reembolso y Cancelación",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Política de Reembolsos de TopTier Trader - Conoce Tus Derechos",
    description: "Aprende cómo se manejan los reembolsos en TopTier Trader. Nuestra política detalla el proceso y las condiciones para obtener un reembolso.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/help-center`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/help-center`,
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

const i18nNameSpaces = ["common", "about-section"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);



  return (
    <div>
      <Proxy link={'https://help.toptiertrader.com'} />
    </div>
  )
}
