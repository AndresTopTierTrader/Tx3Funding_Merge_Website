//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";
import dynamic from "next/dynamic";
import Script from "next/script";

// Import Container component
import Main from "@/components/blog/Main";

//Different namespaces
const i18nNameSpaces = ["home", "navbar", "footer", "common"];

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Tx3 Funding - Forex or Futures, we will fund you fast",
  description: "Join Tx3 Funding, the leading proprietary trading firm offering fast funding for Forex and Futures traders. We're looking for skilled traders to fund. Start your trading journey and unlock new opportunities today!",
  keywords: "proprietary trading, get funded, forex funding, futures funding, trading evaluation, experienced traders, trading journey, financial markets, trading opportunities, prop firm",
  language: "en",
  subject: "Proprietary Trading Firm Services",
  coverage: "Global",
  robots: "index, follow",
  author: "Tx3 Funding",
  publisher: "Tx3 Funding LLC",
  og: {
    type: "website",
    title: "Join Tx3 Funding - Forex or Futures, we will fund you fast",
    description: "Seeking skilled traders for fast funding at Tx3 Funding. Trade Forex or Futures with our capital and explore unlimited financial markets opportunities.",
    site_name: "Tx3 Funding",
    url: `${ENVIRONMENT_URL}/en/`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en`,
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
  title: "Tx3 Funding - Forex o Futuros, te fondearemos rápido",
  description: "Únete a Tx3 Funding, la firma líder en trading propietario que ofrece fondeo rápido para traders de Forex y Futuros. Buscamos traders cualificados para financiar. ¡Inicia tu camino en el trading y descubre nuevas oportunidades hoy!",
  keywords: "trading propietario, prop trading, prop firm, fondeate, fondeo de forex, fondeo de futuros, fondeo de cuentas, financiacion simulada, financiamiento para traders, evaluación de trading, traders experimentados, carrera en trading, mercados financieros, oportunidades de trading",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "Tx3 Funding",
  publisher: "Tx3 Funding LLC",
  og: {
    type: "website",
    title: "Únete a Tx3 Funding - Forex o Futuros, te fondearemos rápido",
    description: "¿Eres un trader cualificado? Únete a Tx3 Funding para obtener financiamiento rápido en Forex o Futuros y elevar tu carrera en trading. ¡Aplica ahora y comienza a operar con nuestro capital!",
    site_name: "Tx3 Funding",
    url: `${ENVIRONMENT_URL}/es/`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es`,
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
  title: "Tx3 Funding - Forex ou Futures, nous vous financerons rapidement",
  description: "Rejoignez Tx3 Funding, la société leader en trading propriétaire offrant un financement rapide pour les traders de Forex et Futures. Nous recherchons des traders qualifiés à financer. Commencez votre parcours de trading et découvrez de nouvelles opportunités dès aujourd'hui !",
  keywords: "trading propriétaire, prop trading, société de prop trading, fonde, financement de forex, financement de futures, financement de comptes, financement simulé, financement pour traders, évaluation de trading, traders expérimentés, carrière en trading, marchés financiers, opportunités de trading",
  language: "fr",
  subject: "Services de Société de Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "Tx3 Funding",
  publisher: "Tx3 Funding LLC",
  og: {
    type: "website",
    title: "Rejoignez Tx3 Funding - Forex ou Futures, nous vous financerons rapidement",
    description: "Êtes-vous un trader qualifié ? Rejoignez Tx3 Funding pour obtenir un financement rapide en Forex ou Futures et propulser votre carrière de trading. Postulez maintenant et commencez à trader avec notre capital !",
    site_name: "Tx3 Funding",
    url: `${ENVIRONMENT_URL}/fr/`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr`,
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

export async function generateMetadata({ params }) {
  // Await params before destructuring
  const { locale } = await params;
  
  let returnedMetadata = ''
  if (locale === "en") {
    returnedMetadata = metadata_en
  }
  if (locale === "es") {
    returnedMetadata = metadata_es
  }
  if (locale === "fr") {
    returnedMetadata = metadata_fr
  }
  return returnedMetadata
}

export default async function Home({ params }) {
  // Await params before destructuring
  const { locale } = await params;
  
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  // Organize all translations
  const allTranslations = {
    homeTranslations: {
      titleOne: t('home:title_one'),
      titleTwo: t('home:title_two'),
      description: t('home:description'),
      cta: t('home:cta'),
      webDevelopment: t('home:webDevelopment'),
      mobileApps: t('home:mobileApps'),
      digitalStrategy: t('home:digitalStrategy'),
      cloudSolutions: t('home:cloudSolutions'),
      projectsDelivered: t('home:projectsDelivered'),
      clientSatisfaction: t('home:clientSatisfaction'),
      supportAvailable: t('home:supportAvailable')
    }
  };

  // When you have us-UK or es-MX, you want to use the main language for translations
  const mainLang = locale.split('-')[0];

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <Main 
 
        />
      </TranslationsProvider>
    </>
  );
}