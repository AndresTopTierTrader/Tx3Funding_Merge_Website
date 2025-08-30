//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Script from "next/script";
import { ENVIRONMENT_URL } from "@/constants/global";

// Import Container component
import Container from "@/components/home/Container";

// Pop Ups
const PromoPopUp = dynamic(() => import("@/components/common/PopUp/PromoPopUp"), {
  ssr: true
})

//Different namespaces
const i18nNameSpaces = ["home", "navbar", "payout", "common", "table_section", "competitive_edge_section", "comparation_section", "bento_section"];

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

const metadata_es_co = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Tx3 Funding - La mejor Prop Firm para Colombia - Forex o Futuros",
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
    url: `${ENVIRONMENT_URL}/es-co/`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-co`,
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
  title: "Tx3 Funding - La mejor Prop Firm para Argentina - Forex o Futuros",
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
    url: `${ENVIRONMENT_URL}/es-ar/`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-ar`,
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
  title: "Tx3 Funding - La mejor Prop Firm para Mexico - Forex o Futuros",
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
    url: `${ENVIRONMENT_URL}/es-mx/`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-mx`,
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
  title: "Tx3 Funding - La mejor Prop Firm de LATAM - Forex o Futuros",
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
    url: `${ENVIRONMENT_URL}/es-pr/`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es-pr`,
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

  // Organize all translations
  const allTranslations = {
    homeTranslations: {
      titleOne: t('home:title_one'),
      titleTwo: t('home:title_two'),
      description: t('home:description'),
      cta: t('home:cta'),
      join: t('home:join'),
      reviews: t('home:reviews'),
      mission: t('home:mission'),
      million: t('home:million')
    },
    payoutTranslations: {
      program: t('payout:program'),
      simple: t('payout:simple'),
      sign_up: t('payout:sign_up'),
      sign_up_desc: t('payout:sign_up_desc'),
      trade: t('payout:trade'),
      trade_desc: t('payout:trade_desc'),
      funding: t('payout:funding'),
      funding_desc: t('payout:funding_desc'),
      scale: t('payout:scale'),
      scale_desc: t('payout:scale_desc'),
      cta: t('payout:cta')
    },
    tableTranslations: {
      accountType: t('table_section:table_accountType'),
      description: t('table_section:description'),
      table_one_phase: t('table_section:table_one_phase'),
      table_two_phase: t('table_section:table_two_phase'),
      challenge: t('table_section:table_challenge'),
      get: t('table_section:table_get'),
      limited_time: t('table_section:table_limited_time'),
      offer_1: t('table_section:offer_1'),
      offer_2: t('table_section:offer_2'),
      offer_3: t('table_section:offer_3'),
    },
    competitiveEdgeSection: {
      title: t('competitive_edge_section:title'),
      desc: t('competitive_edge_section:desc'),
      cta: t('competitive_edge_section:cta'),
      fair: t('competitive_edge_section:fair'),
      fair_desc: t('competitive_edge_section:fair_desc'),
      simple: t('competitive_edge_section:simple'),
      simple_desc: t('competitive_edge_section:simple_desc'),
      challenge: t('competitive_edge_section:challenge'),
      challenge_desc: t('competitive_edge_section:challenge_desc'),
      professional: t('competitive_edge_section:professional'),
      professional_desc: t('competitive_edge_section:professional_desc'),
      payouts: t('competitive_edge_section:payouts'),
      payouts_desc: t('competitive_edge_section:payouts_desc'),
      fairness: t('competitive_edge_section:fairness'),
      fairness_desc: t('competitive_edge_section:fairness_desc')
    },
    trustedTranslations: {
      trusted_title: t('competitive_edge_section:trusted_title'),
      trusted_desc: t('competitive_edge_section:trusted_desc'),
      cta: t('competitive_edge_section:cta')
    },
    communityTranslations: {
      community_title: t('competitive_edge_section:community_title'),
      community_review: t('competitive_edge_section:community_review'),
      cta: t('competitive_edge_section:cta')
    },
    finalSectionTranslations: {
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
    },
    comparationTranslations: {
      title: t('comparation_section:title'),
      desc: t('comparation_section:desc'),
      indicators: t('comparation_section:indicators'),
      price: t('comparation_section:price'),
      drawdown: t('comparation_section:drawdown'),
      split: t('comparation_section:split'),
      minimun: t('comparation_section:minimun'),
      evaluation: t('comparation_section:evaluation'),
      targets: t('comparation_section:targets'),
      size: t('comparation_section:size'),
      weekends: t('comparation_section:weekends'),
      frequency: t('comparation_section:frequency'),
      yes: t('comparation_section:yes'),
      up: t('comparation_section:up'),
      phase: t('comparation_section:phase'),
      days: t('comparation_section:days'),
      daily: t('comparation_section:daily')
    },
    socialmediaTranslations: {
      title: t('common:socialmedia_title'),
      desc: t('common:socialmedia_desc'),
    },
    bentoTranslations: {
      forex_title: t('bento_section:forex_title'),
      forex_p: t('bento_section:forex_p'),
      forex_CTA: t('bento_section:forex_CTA'),
      trust_title_1: t('bento_section:trust_title_1'),
      trust_title_2: t('bento_section:trust_title_2'),
      trust_p1_1: t('bento_section:trust_p1_1'),
      trust_p1_2: t('bento_section:trust_p1_2'),
      trust_p2_1: t('bento_section:trust_p2_1'),
      trust_p2_2: t('bento_section:trust_p2_2'),
      futures_title: t('bento_section:futures_title'),
      futures_p1_1: t('bento_section:futures_p1_1'),
      futures_p1_2: t('bento_section:futures_p1_2'),
      futures_p2: t('bento_section:futures_p2'),
      futures_p3: t('bento_section:futures_p3'),
      futures_p4: t('bento_section:futures_p4'),
      futures_CTA: t('bento_section:futures_CTA'),
      support_title: t('bento_section:support_title'),
      support_p: t('bento_section:support_p'),
      levels_title: t('bento_section:levels_title'),
      levels_p1: t('bento_section:levels_p1'),
      levels_p2: t('bento_section:levels_p2'),
      levels_p3: t('bento_section:levels_p3'),
      levels_p4: t('bento_section:levels_p4'),
      levels_CTA: t('bento_section:levels_CTA'),
    }
  };

  const mainLang = locale.split('-')[0];

  return (
    <>
      {/* Add Trustpilot script */}
      <Script
        id="trustpilot-widget-script"
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
        async
      />

      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        {/* <PromoPopUp locale={locale} />  */}
        <Container 
          locale={locale} 
          translations={allTranslations}
          mainLang={mainLang}
        />
      </TranslationsProvider>
    </>
  );
}