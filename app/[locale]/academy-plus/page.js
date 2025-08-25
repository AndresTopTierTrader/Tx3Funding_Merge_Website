//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import {ENVIRONMENT_URL} from "@/constants/global";

const i18nNameSpaces = ["home", "academy-plus"];

const metadata_en = {
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


  const academyPlusTranslations = {
    main: {
      title: t('academy-plus:main_title'),
      cta: t('academy-plus:main_cta'),
      descOne: t('academy-plus:main_desc_one'),
      descTwo: t('academy-plus:main_desc_two')
    },
    learn: {
      title: t('academy-plus:learn_title'),
      desc: t('academy-plus:learn_desc'),
      perkOne: t('academy-plus:perk_one'),
      perkTwo: t('academy-plus:perk_two'),
      perkThree: t('academy-plus:perk_three'),
      perkFour: t('academy-plus:perk_four'),
      perkFive: t('academy-plus:perk_five'),
      perkDescOne: t('academy-plus:perk_d_1'),
      perkDescTwo: t('academy-plus:perk_d_2'),
      perkDescThree: t('academy-plus:perk_d_3'),
      perkDescFour: t('academy-plus:perk_d_4'),
      perkDescFive: t('academy-plus:perk_d_5'),
      classes: t('academy-plus:learn_classes'),
      cta: t('academy-plus:learn_cta'),
      daveDesc: t('academy-plus:dave_desc'),
      shaunDesc: t('academy-plus:shaun_desc'),
      joshDesc: t('academy-plus:josh_desc'),
    },
    pricing: {
      title: t('academy-plus:price_title'),
      desc: t('academy-plus:price_desc'),
      cta: t('academy-plus:price_cta'),
      popOne: t('academy-plus:pop_one'),
      popTwo: t('academy-plus:pop_two'),
      monthly: t('academy-plus:price_monthly'),
      quart: t('academy-plus:price_quart'),
      annual: t('academy-plus:price_annual'),
      limited: t('academy-plus:price_limtted')
    }
  }


  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <div className="pt-40 pb-24 flex flex-col items-center">
      <p>We apologize, but this product is no longer available. Please explore our current product offerings for other options.</p>
     
        <a href={`${ENVIRONMENT_URL}/en/products`}>
          <button className="bg-ttblue py-2 px-6 rounded-lg mt-10 text-white">
            Check our other products
          </button>
        </a>
      </div>
    </TranslationsProvider>
  )
}

