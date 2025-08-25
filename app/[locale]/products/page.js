//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
const MainSectionLazyLoading = dynamic(() => import("@/components/products/ProductsPage"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading Products Section...</p>
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

const i18nNameSpaces = ["home", "common", "products"];

const metadata_es = {
  title: "Conoce Todos Nuestros Productos | TopTier Proprietary Trading",
  description: "Empoderando a nuestra Comunidad de Traders mediante Educación y Crecimiento. Descubre nuestro Trader Quiz, Desafíos de Trading y TT Academy para impulsar tu carrera como trader.",
  keywords: "Trader Quiz, Desafíos de Trading, TT Academy, educación para traders, crecimiento en trading, financiamiento para traders, comunidad de traders, TopTier",
  language: "es",
  subject: "Productos y Servicios de Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Conoce Todos Nuestros Productos - TopTier Trader",
    description: "Empoderando traders con Educación y Crecimiento. Explora nuestro Trader Quiz, Desafíos de Trading con hasta $600.000 de financiación simulada, y la TT Academy para impulsar tu carrera en trading.",
   
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/products`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/products`,
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

const metadata_en = {
  title: "Discover All Our Products | TopTier Proprietary Trading",
  description: "Empowering our Trader Community through Education and Growth. Explore our Trader Quiz, Trading Challenges, and TT Academy to boost your trading career.",
  keywords: "Trader Quiz, Trading Challenges, TT Academy, trader education, trading growth, trader funding, trader community, TopTier",
  language: "en",
  subject: "Trading Products and Services",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Discover All Our Products - TopTier Trader",
    description: "Empowering traders through Education and Growth. Explore our Trader Quiz, Trading Challenges with up to $600,000 in simulated funding, and the TT Academy to boost your trading career.",
   
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/products`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/products`,
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
  title: "Découvrez Tous Nos Produits | TopTier Proprietary Trading",
  description: "Autonomiser notre Communauté de Traders par l'Éducation et la Croissance. Explorez notre Quiz de Trader, nos Défis de Trading et notre TT Academy pour booster votre carrière de trader.",
  keywords: "Quiz de Trader, Défis de Trading, TT Academy, éducation des traders, croissance en trading, financement des traders, communauté de traders, TopTier",
  language: "fr",
  subject: "Produits et Services de Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Découvrez Tous Nos Produits - TopTier Trader",
    description: "Autonomiser les traders par l'Éducation et la Croissance. Explorez notre Quiz de Trader, nos Défis de Trading avec jusqu'à 600 000 $ de financement simulé, et la TT Academy pour booster votre carrière de trader.",
   
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/products`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/products`,
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

  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

  const homeSectionTranslations = {
    titleOne: t('products:t-1'),
    titleTwo: t('products:t-2'),
    pOne: t('products:p-1'),
    pTwo: t('products:p-2'),
    quizTitle: t('products:quiz-t'),
    quizDesc: t('products:quiz-d'),
    quizCta: t('products:quiz-cta'),
    challengeTitle: t('products:challenge-t'),
    challengeDesc: t('products:challenge-d'),
    challengeCta: t('products:challenge-cta'),
    academyTitle: t('products:academy-t'),
    academyDesc: t('products:academy-d'),
    academyCta: t('products:academy-cta'),
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
    }}

  return(
    <TranslationsProvider
      resources = { resources }
      locale = { locale }
      namespaces = { i18nNameSpaces }
        >
     
      <MainSectionLazyLoading translations={homeSectionTranslations} locale={locale} />
      <div className="-mt-5 mb:-mt-20">
        <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} /> 
      </div>
    </TranslationsProvider >
  )
}

