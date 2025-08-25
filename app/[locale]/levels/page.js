//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Script from "next/script";
import { ENVIRONMENT_URL } from "@/constants/global";

//Components
import LandingSection from "@/components/levels/LandingSection/Landing-Section"

//Diferent namespaces
const i18nNameSpaces = ["levels_landing_page", "navbar", "common", "table_section", "competitive_edge_section", "comparation_section"];

const bgImageStyle = {
  backgroundColor: '#0B111D',
  backgroundImage: `
  radial-gradient(at 42% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
  radial-gradient(at 60% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
  radial-gradient(at 50% 33%, hsla(225,44%,19%,0.2) 0px, transparent 50%),
  radial-gradient(at 50% 47%, hsla(208,83%,41%,0.29) 0px, transparent 50%)
  `
}

//Lazy loading for components
const TableSectionLazyLoading = dynamic(() => import("@/components/levels/TableSection/Table-Section"), {
  ssr: false,
  loading: () => <div style={bgImageStyle} className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
  </div>
})


//Traders Around the World Section
const TrustedSectionLazyLoading = dynamic(() => import("@/components/levels/TrustedSection/Trusted-Section"), {
  ssr: true,
  loading: () => <div style={bgImageStyle} className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
  </div>
})

//Trustpilot Section
const TrustpilotLazyLoading = dynamic(() => import("@/components/levels/TrustpilotSection/Trustpilot-Section"), {
  ssr: true,
  loading: () => <div style={bgImageStyle} className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
  </div>
})

//Payout Perks
const StepsSectionLazyLoading = dynamic(() => import("@/components/levels/StepsSection/Steps-Section"), {
  ssr: true,
  loading: () => <div style={bgImageStyle} className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
  </div>
})

//Final Section
const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div style={bgImageStyle} className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
  </div>
})

//Socialmedia Section
const SocialMediaSectionLazyLoading = dynamic(() => import("@/components/common/SocialMediaSection/SocialMedia-Section"), {
  ssr: true,
  loading: () => <div style={bgImageStyle} className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
  </div>
})


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
  title: "Level Up with TopTier Trader - Join Our Proprietary Trading Firm",
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
  title: "Sube de Nivel con TopTier Trader - Únete a Nuestra Firma de Trading Propietario",
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
  title: "Sube de Nivel con TopTier Trader - La Mejor Firma de Trading Propietario en Colombia",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, Colombia",
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
  title: "Sube de Nivel con TopTier Trader - La Mejor Firma de Trading Propietario en Argentina",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, Argentina",
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
  title: "Sube de Nivel con TopTier Trader - La Mejor Firma de Trading Propietario en México",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, México",
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
  title: "Sube de Nivel con TopTier Trader - La Mejor Firma de Trading Propietario en Puerto Rico",
  description: "Obtén hasta $25,000 en ganancias. Sube de nivel sin límites de tiempo, opera los fines de semana, y las ganancias son todas tuyas.",
  keywords: "trading propietario, obtén fondeo, evaluación de trading, traders experimentados, trayectoria en trading, mercados financieros, oportunidades de trading, Puerto Rico",
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


  const perkTranslations = {
    whatsLevels: t('levels_landing_page:perks_whats_levels'),
    quickWalkthrough: t('levels_landing_page:perks_quick_walkthrough'),
    titleTarget: t('levels_landing_page:perks_title_target'),
    subtitleTarget: t('levels_landing_page:perks_subtitle_target'),
    titleRules: t('levels_landing_page:perks_title_rules'),
    subtitleRules: t('levels_landing_page:perks_subtitle_rules'),
    titlePayouts: t('levels_landing_page:perks_title_payouts'),
    subtitlePayouts: t('levels_landing_page:perks_subtitle_payouts'),
    cta: t('levels_landing_page:cta')
  }

  const tableTranslations = {
    start: t('levels_landing_page:table_start'),
    now: t('levels_landing_page:table_now'),
    title: t('levels_landing_page:table_title'),
    payoutLevel: t('levels_landing_page:table_payout_level'),
    free: t('levels_landing_page:table_free'),
    gold: t('levels_landing_page:table_gold'),
    platinum: t('levels_landing_page:table_platinium'),
    diamond: t('levels_landing_page:table_diamond'),
    cta: t('levels_landing_page:cta'),
    timeLimit: t('levels_landing_page:table_time_limit'),
    noMaxDrawdown: t('levels_landing_page:table_no_max_drawdown'),
    automatedRisk: t('levels_landing_page:table_automated_rik'),
    noSwaps: t('levels_landing_page:table_no_swaps'),
    noComissions: t('levels_landing_page:table_no_comissions'),
    lowSpreads: t('levels_landing_page:table_low'),
  }

  const howTranslations = {
    title: t('levels_landing_page:how_title'),
    firstTitle: t('levels_landing_page:how_first_title'),
    firstDesc: t('levels_landing_page:how_first_desc'),
    secondTitle: t('levels_landing_page:how_two_title'),
    secondDesc: t('levels_landing_page:how_two_desc'),
    thirdTitle: t('levels_landing_page:how_three_title'),
    thirdDesc: t('levels_landing_page:how_three_desc'),
    cta: t('levels_landing_page:cta')
  }

  const communityTranslations = {
    community_title: t('levels_landing_page:community_title'),
    community_review: t('competitive_edge_section:community_review'),
    cta: t('competitive_edge_section:cta')
  }

  const finalSectionTranslations = {
    form: {
      formTitle: t('levels_landing_page:form_text'),
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

  const socialmediaTranslations = {
    title: t('common:socialmedia_title'),
    desc: t('common:socialmedia_desc'),
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
        <StepsSectionLazyLoading locale={locale} translations={perkTranslations} />
        <TableSectionLazyLoading locale={locale} translations={tableTranslations} />
        <TrustedSectionLazyLoading locale={locale} translations={howTranslations} />
        <TrustpilotLazyLoading locale={locale} translations={communityTranslations} />
        <FinalSectionLazyLoading translations={finalSectionTranslations} locale={locale} isCarousel={false} />
        <SocialMediaSectionLazyLoading locale={locale} translations={socialmediaTranslations} />
      </TranslationsProvider>
    </>
  );
}
