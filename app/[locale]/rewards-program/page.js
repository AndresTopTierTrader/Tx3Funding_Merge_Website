import React from 'react'
import initTranslations from "@/i18n";
import { bgImageStyle } from "@/constants/styles";
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
  title: "Rewards Program",
  description: "You are being redirected to the TopTier Trader Rewards Program",
  keywords: "TopTier Trader rewards, trading rewards, loyalty program, trader benefits, trading incentives",
  language: "en",
  subject: "Trader Rewards Program",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "TopTier Trader Rewards Program - Earn While You Trade",
    description: "Discover the benefits of our Rewards Program. Earn points, unlock exclusive perks, and enhance your trading experience.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/rewards-program`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/rewards-program`,
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
  title: "Programa de Recompensas",
  description: "Estás siendo redirigido al Programa de Recompensas de TopTier Trader",
  keywords: "recompensas de TopTier Trader, recompensas de trading, programa de lealtad, beneficios para traders, incentivos de trading",
  language: "es",
  subject: "Programa de Recompensas para Traders",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Programa de Recompensas de TopTier Trader - Gana Mientras Operas",
    description: "Descubre los beneficios de nuestro Programa de Recompensas. Gana puntos, desbloquea ventajas exclusivas y mejora tu experiencia de trading.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/programa-recompensas`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/programa-recompensas`,
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
  title: "Programme de Récompenses",
  description: "Vous êtes redirigé vers le Programme de Récompenses de TopTier Trader",
  keywords: "récompenses TopTier Trader, récompenses de trading, programme de fidélité, avantages pour traders, incitations au trading",
  language: "fr",
  subject: "Programme de Récompenses pour Traders",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Programme de Récompenses TopTier Trader - Gagnez en Tradant",
    description: "Découvrez les avantages de notre Programme de Récompenses. Gagnez des points, débloquez des avantages exclusifs et améliorez votre expérience de trading.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/programme-recompenses`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/programme-recompenses`,
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

const i18nNameSpaces = ["rewards-program", "rewards-faqs"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  const mainLang = locale.split('-')[0]


  return (
    <div className='flex flex-col  items-center -mt-0 py-24 mb:mt-0 mb:py-40 ' style={bgImageStyle}>
      <p className='pt-20 pb-5 font-semibold text-6xl bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'>{mainLang == 'es' ? 'Esta página ya no esta disponible' : 'This page is no longer avalible'}</p>
      <p className='text-white text-center text-3xl mb:text-4xl font-light'> {mainLang == 'es' ? 'Ups... Algo no fue como esperabamos' : 'Opps... Something went wrong'}  </p>
      <p className='mt-5 text-secondary'>{mainLang == 'es' ? 'Dejanos guiarte' : 'Let us guide you back'}</p>
      <a href={`${ENVIRONMENT_URL}`}>
        <button className='text-white py-2 px-3 border text-sm border-slate-300 rounded-lg mt-5' >
          {mainLang == 'es' ? 'Voler a la página principal' : 'Back to Home Page'}
        </button>
      </a>
    </div>
  )
}
