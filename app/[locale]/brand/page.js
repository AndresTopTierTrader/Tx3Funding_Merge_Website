import React from 'react'
import initTranslations from "@/i18n"
import { ENVIRONMENT_URL } from "@/constants/global"

//Metadata
const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "How to Use Our Brand Colors - TopTier Trader Brand Guidelines",
  description: "Learn how to apply TopTier Trader’s brand colors effectively. Follow our official guidelines to maintain consistency and strengthen our brand identity.",
  keywords: "TopTier Trader brand colors, brand guidelines, color usage, branding tips, design consistency, brand identity",
  language: "en",
  subject: "TopTier Trader Brand Color Usage Guidelines",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Brand Colors - How to Use TopTier Trader’s Official Palette",
    description: "Follow our official brand color usage guidelines to create consistent, professional designs that reflect TopTier Trader’s identity.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/brand`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/brand`,
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

// Metadata for Spanish
const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Cómo Usar Nuestros Colores de Marca - Guía de Estilo de TopTier Trader",
  description: "Aprende a aplicar los colores de marca de TopTier Trader de forma correcta. Sigue nuestras pautas oficiales para mantener la coherencia y fortalecer la identidad de la marca.",
  keywords: "colores de marca TopTier Trader, guía de marca, uso de colores, consejos de diseño, coherencia visual, identidad de marca",
  language: "es",
  subject: "Guía de Uso de Colores de Marca de TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Colores de Marca - Cómo Usar la Paleta Oficial de TopTier Trader",
    description: "Sigue nuestras pautas oficiales de uso de colores de marca para crear diseños consistentes y profesionales que reflejen la identidad de TopTier Trader.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/brand`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/brand`,
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

// Metadata for French
const metadata_fr = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Comment Utiliser Nos Couleurs de Marque - Guide de Style TopTier Trader",
  description: "Apprenez à appliquer correctement les couleurs de marque de TopTier Trader. Suivez nos directives officielles pour maintenir la cohérence et renforcer notre identité visuelle.",
  keywords: "couleurs de marque TopTier Trader, guide de marque, utilisation des couleurs, conseils de design, cohérence visuelle, identité de marque",
  language: "fr",
  subject: "Guide d’Utilisation des Couleurs de Marque de TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Couleurs de Marque - Comment Utiliser la Palette Officielle de TopTier Trader",
    description: "Suivez nos directives officielles sur l’utilisation des couleurs de marque pour créer des designs cohérents et professionnels reflétant l’identité de TopTier Trader.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/brand`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/brand`,
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

import Main from "@/components/brand/Main"


const i18nNameSpaces = ["common", "about-section"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);


  return (
    <div>
      <Main />
    </div>
  )
}
