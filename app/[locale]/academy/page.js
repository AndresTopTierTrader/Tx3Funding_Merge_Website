//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
 import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
const Container = dynamic(() => import("@/components/academy/Container"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading Academy...</p>
})

const i18nNameSpaces = ["home", "academy"];


const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "TopTier Academy",
  description: "Advance your trading career with free masterclasses from TopTier Academy. Learn from experts, develop your strategies, and elevate your skills with zero financial risk.",
  keywords: "trading masterclasses, free trading courses, trading skill development, financial market education, trading strategy, TopTier Academy",
  language: "en",
  subject: "Advanced Trading Education Services",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Academy",
  publisher: "TopTier Academy LLC",
  og: {
    type: "website",
    title: "TopTier Academy",
    description: "Join the ranks of skilled traders at TopTier Academy and elevate your trading journey with our expert-led masterclasses. Seize opportunities in global financial markets starting today.",
   
    site_name: "TopTier Academy",
    url: `${ENVIRONMENT_URL}/en/academy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/academy`,
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
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "TopTier Academy",
  description: "Avanza en tu carrera de trading con las clases magistrales gratuitas de TopTier Academy. Aprende de expertos, desarrolla tus estrategias y mejora tus habilidades sin riesgo financiero.",
  keywords: "clases magistrales de trading, cursos de trading gratuitos, desarrollo de habilidades de trading, educación en mercados financieros, estrategia de trading, TopTier Academy",
  language: "es",
  subject: "Servicios de Educación Avanzada en Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Academy",
  publisher: "TopTier Academy LLC",
  og: {
    type: "website",
    title: "TopTier Academy",
    description: "Únete a los traders expertos en TopTier Academy y eleva tu carrera de trading con nuestras clases magistrales dirigidas por expertos. Aprovecha las oportunidades en los mercados financieros globales desde hoy.",
   
    site_name: "TopTier Academy",
    url: `${ENVIRONMENT_URL}/es/academy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/academy`,
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
  title: "TopTier Academy",
  description: "Avancez votre carrière de trading avec les masterclasses gratuites de TopTier Academy. Apprenez des experts, développez vos stratégies et améliorez vos compétences sans risque financier.",
  keywords: "masterclasses de trading, cours de trading gratuits, développement des compétences en trading, éducation aux marchés financiers, stratégie de trading, TopTier Academy",
  language: "fr",
  subject: "Services d'Éducation Avancée en Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Academy",
  publisher: "TopTier Academy LLC",
  og: {
    type: "website",
    title: "TopTier Academy",
    description: "Rejoignez les traders experts de TopTier Academy et élevez votre carrière de trading avec nos masterclasses dirigées par des experts. Saisissez les opportunités sur les marchés financiers mondiaux dès aujourd'hui.",
   
    site_name: "TopTier Academy",
    url: `${ENVIRONMENT_URL}/fr/academy`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/academy`,
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


export default async function Products({ params: { locale } }) {

  const mainLang = locale.split('-')[0]
  const { t, resources, i18n } = await initTranslations(mainLang, i18nNameSpaces);

  const currentLanguage = i18n.language;

  const academyTranslations = {
    main: {
      title: t('academy:welcome'),
      cta: t('academy:cta'),
      get: t('academy:get_5k'),
      learn: t('academy:get_learn'),
    },
    learn: {
      tOne: t('academy:t-1'),
      pOne: t('academy:p-1'),
      secOneTitleOne: t('academy:s-1-t-1'),
      secOneParOne: t('academy:s-1-p-1'),
      secOneTitleTwo: t('academy:s-1-t-2'),
      secOneParTwo: t('academy:s-1-p-2'),
      inside: t('academy:inside'),
      discover: t('academy:discoverd'),
      classOne: t('academy:c-1'),
      classTwo: t('academy:c-2'),
      classThree: t('academy:c-3'),
      classFour: t('academy:c-4'),
      classFive: t('academy:c-5'),
      classSix: t('academy:c-6'),
      secOneTitleThree: t('academy:s-1-t-3'),
      secOneParThree: t('academy:s-1-p-3'),
    },
    popular: {
      popular: t('academy:popular'),
      goToClass: t('academy:go_to_class'),
      secTwoTitleOne: t('academy:s-2-t-1'),
      secTwoParOne: t('academy:s-2-p-1'),
      secTwoTitleTwo: t('academy:s-2-t-2'),
      secTwoParTwo: t('academy:s-2-p-2'),
      secTwoTitleThree: t('academy:s-2-t-3'),
      secTwoParThree: t('academy:s-2-p-3'),
    },
    become: {
      become: t('academy:become'),
      join: t('academy:join'),
    },
    help: {
      title: t('academy:t-help'),
      p: t('academy:p-help'),
      cta: t('academy:cta-help')
    },
    lang: {
      select: t('academy:select_lang'),
    },
    plus: {
      title: t('academy:plus_title'),
      desc: t('academy:plus_d'),
      perkOne: t('academy:plus_perk_one'),
      perkTwo: t('academy:plus_perk_two'),
      perkThree: t('academy:plus_perk_three'),
      cta: t('academy:plus_cta'),
    }
  }


  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <Container translations={academyTranslations} locale={mainLang} />
    </TranslationsProvider>
  )
}

