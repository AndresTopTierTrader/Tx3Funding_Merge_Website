//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import Script from "next/script";
import { ENVIRONMENT_URL } from "@/constants/global";

//Components
import LandingSection from "@/components/levels/Thank-you/Landing-Section"

//Diferent namespaces
const i18nNameSpaces = ["levels_landing_page", "navbar", "common", "table_section", "competitive_edge_section", "comparation_section"];

//Google Tag Manager Component
const GoogleTagManager = () => (
  <>
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M9DPNVNV');
        `,
      }}
    />
    <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-M9DPNVNV"
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
);


const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Thank you for joining Levels - TopTier Trader",
  description: "Get up to a $25,000 payout. Leveling up with No rush on time limits, trade on Weekends, and the profits are all yours.",
  keywords: "proprietary trading, get funded, trading evaluation, experienced traders, trading journey, financial markets, trading opportunities",
  language: "en",
  subject: "Proprietary Trading Firm Services",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Join TopTier Trader - Exclusive Proprietary Trading Firm",
    description: "Seeking skilled traders for funding at TopTier Trader. Start your proprietary trading journey with us and explore unlimited financial markets opportunities.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/levels`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/levels`,
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

const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Gracias por unirte a Levels - TopTier Trader",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete a TopTier Trader - Firma Exclusiva de Trading Propietario",
    description: "Buscamos traders cualificados para fondear en TopTier Trader. Inicia tu trayectoria en trading propietario con nosotros y explora oportunidades ilimitadas en los mercados financieros.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/levels`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/levels`,
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

const metadata_es_co = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Gracias por unirte a Levels - TopTier Trader La Mejor Firma de Trading Propietario en Colombia",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, prop firms en Colombia",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete a TopTier Trader - Firma Exclusiva de Trading Propietario en Colombia",
    description: "Buscamos traders cualificados para fondear en TopTier Trader. Inicia tu trayectoria en trading propietario con nosotros y explora oportunidades ilimitadas en los mercados financieros.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es-co/levels`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-co/levels`,
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

const metadata_es_ar = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Gracias por unirte a Levels - TopTier Trader La Mejor Firma de Trading Propietario en Argentina",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtener fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, prop firms en Argentina",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete a TopTier Trader - Firma Exclusiva de Trading Propietario en Argentina",
    description: "Buscamos traders cualificados para fondear en TopTier Trader. Inicia tu trayectoria en trading propietario con nosotros y explora oportunidades ilimitadas en los mercados financieros.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es-ar/levels`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-ar/levels`,
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

const metadata_es_mx = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Gracias por unirte a Levels - TopTier Trader La Mejor Firma de Trading Propietario en México",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, prop firms en México",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete a TopTier Trader - Firma Exclusiva de Trading Propietario en México",
    description: "Buscamos traders cualificados para fondear en TopTier Trader. Inicia tu trayectoria en trading propietario con nosotros y explora oportunidades ilimitadas en los mercados financieros.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es-mx/levels`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-mx/levels`,
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

const metadata_es_pr = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Gracias por unirte a Levels - TopTier Trader La Mejor Firma de Trading Propietario en Puerto Rico",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, prop firms en Puerto Rico",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete a TopTier Trader - Firma Exclusiva de Trading Propietario en Puerto Rico",
    description: "Buscamos traders cualificados para fondear en TopTier Trader. Inicia tu trayectoria en trading propietario con nosotros y explora oportunidades ilimitadas en los mercados financieros.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es-pr/levels`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-pr/levels`,
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
  title: "Montez en Niveau avec TopTier Trader - Rejoignez Notre Société de Trading Propriétaire",
  description: "Gagnez jusqu'à 25 000 $ de versement. Progressez sans limite de temps, tradez le week-end, et les profits sont entièrement à vous.",
  keywords: "trading propriétaire, obtenir un financement, évaluation de trading, traders expérimentés, parcours de trading, marchés financiers, opportunités de trading",
  language: "fr",
  subject: "Services de Société de Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Rejoignez TopTier Trader - Société Exclusive de Trading Propriétaire",
    description: "Nous recherchons des traders qualifiés pour financement chez TopTier Trader. Commencez votre parcours de trading propriétaire avec nous et explorez des opportunités illimitées sur les marchés financiers.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/levels`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/levels`,
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
  if (locale === "en") {
    returnedMetadata = metadata_en
  }
  if (locale === "es") {
    returnedMetadata = metadata_es
  }
  if (locale === "es-co") {
    returnedMetadata = metadata_es_co
  }
  if (locale === "es-ar") {
    returnedMetadata = metadata_es_ar
  }
  if (locale === "es-mx") {
    returnedMetadata = metadata_es_mx
  }
  if (locale === "es-pr") {
    returnedMetadata = metadata_es_pr
  }
  if (locale === "fr") {
    returnedMetadata = metadata_fr
  }
  return returnedMetadata
}


export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const homeTranslations = {
    titleOne: t('levels_landing_page:home_title_one'),
    titleTwo: t('levels_landing_page:home_title_two'),
    subtitleOne: t('levels_landing_page:home_subtitle_one'),
    subtitleTwo: t('levels_landing_page:home_subtitle_two'),
    cta: t('levels_landing_page:cta')
  }

  return (
    <>
      <GoogleTagManager />
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <LandingSection locale={locale} translations={homeTranslations} />
      </TranslationsProvider>
    </>
  );
}
