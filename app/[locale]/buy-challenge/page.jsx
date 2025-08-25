//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";
import { bgImageStyle } from "@/constants/styles";

// Main loading component with skeleton animation for dynamic import
const MainLoadingComponent = ({ bgImageStyle }) => (
  <main 
    style={bgImageStyle} 
    className="flex flex-col min-h-[900px] md:h-screen items-center transition-all justify-center mb:mt-0 md:pb-32 md:mt-40 -mt-20 pb-14 pt-44"
  >
    <div className="w-full max-w-6xl px-4">
      {/* Form Card Skeleton */}
      <div className="bg-gradient-to-br border rounded-xl border-[#717892] from-white/5 to-[#0B111D] p-8 max-w-[1000px] mx-auto mb-8">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-slate-700 rounded-lg w-48 animate-pulse mb-6"></div>
          <div className="h-5 bg-slate-600 rounded w-80 animate-pulse mb-6"></div>
          
          {/* Step Indicator Skeleton */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
            <div className="h-0.5 w-12 bg-slate-700 animate-pulse"></div>
            <div className="w-8 h-8 bg-slate-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Form Fields Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div>
            <div className="h-4 bg-slate-600 rounded w-20 animate-pulse mb-2"></div>
            <div className="h-12 bg-slate-700 rounded-lg animate-pulse"></div>
          </div>
          
          {/* Last Name */}
          <div>
            <div className="h-4 bg-slate-600 rounded w-20 animate-pulse mb-2"></div>
            <div className="h-12 bg-slate-700 rounded-lg animate-pulse"></div>
          </div>
          
          {/* Email */}
          <div>
            <div className="h-4 bg-slate-600 rounded w-12 animate-pulse mb-2"></div>
            <div className="h-12 bg-slate-700 rounded-lg animate-pulse"></div>
          </div>
          
          {/* Confirm Email */}
          <div>
            <div className="h-4 bg-slate-600 rounded w-24 animate-pulse mb-2"></div>
            <div className="h-12 bg-slate-700 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Phone Number Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-slate-600 rounded w-28 animate-pulse mb-2"></div>
          <div className="flex">
            <div className="h-12 bg-slate-700 rounded-l-lg w-24 animate-pulse"></div>
            <div className="h-12 bg-slate-700 rounded-r-lg flex-1 animate-pulse"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="pt-6">
          <div className="h-12 bg-slate-700 rounded-lg animate-pulse w-full"></div>
        </div>
      </div>

      {/* Product Card Skeleton */}
      <div className="bg-gradient-to-br border rounded-xl border-green-200 from-white/5 to-[#0B111D] p-8 max-w-[1000px] mx-auto">
        {/* Header Section Skeleton */}
        <div className="flex flex-row justify-between items-center mb-6">
          <div className="h-8 bg-slate-700 rounded-lg w-48 animate-pulse"></div>
          <div className="h-9 bg-slate-700 rounded-lg w-16 animate-pulse"></div>
        </div>
        
        {/* Product Information Grid Skeleton */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-8">
          {/* Challenge Type */}
          <div className="flex flex-col space-y-2">
            <div className="h-4 bg-slate-600 rounded w-20 animate-pulse"></div>
            <div className="h-6 bg-slate-700 rounded w-32 animate-pulse"></div>
          </div>

          {/* Challenge Amount */}
          <div className="flex flex-col space-y-2">
            <div className="h-4 bg-slate-600 rounded w-32 animate-pulse"></div>
            <div className="flex flex-row items-center">
              <div className="w-7 h-7 bg-slate-700 rounded-full animate-pulse mr-1"></div>
              <div className="h-6 bg-slate-700 rounded w-16 animate-pulse"></div>
            </div>
          </div>

          {/* Broker */}
          <div className="flex flex-col space-y-2">
            <div className="h-4 bg-slate-600 rounded w-16 animate-pulse"></div>
            <div className="flex flex-row items-center">
              <div className="w-7 h-7 bg-slate-700 rounded-full animate-pulse mr-1"></div>
              <div className="h-6 bg-slate-700 rounded w-20 animate-pulse"></div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="flex flex-col space-y-2">
            <div className="h-4 bg-slate-600 rounded w-16 animate-pulse"></div>
            <div className="flex flex-row items-center">
              <div className="w-7 h-6 bg-slate-700 rounded animate-pulse mr-2"></div>
              <div className="h-6 bg-slate-700 rounded w-40 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Coupon Section Skeleton */}
        <div className="border-t border-[#717892]/30 pt-6 mb-8">
          <div className="h-4 bg-slate-600 rounded w-24 animate-pulse mb-4"></div>
          <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-3">
            <div className="w-full md:min-w-[400px] md:max-w-[600px]">
              <div className="h-12 bg-slate-700 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-12 bg-slate-700 rounded-lg w-full md:w-20 animate-pulse"></div>
          </div>
        </div>

        {/* Price Section Skeleton */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <div className="h-4 bg-slate-600 rounded w-12 animate-pulse mb-2"></div>
            <div className="h-12 bg-slate-700 rounded w-32 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="flex items-center justify-center mt-8">
        <svg 
          aria-hidden="true" 
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-white" 
          viewBox="0 0 100 101" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="text-lg font-light text-slate-400 ml-3">Loading your challenge details...</span>
      </div>
    </div>
  </main>
);

// Usage in your dynamic import
const MainSectionLazyLoading = dynamic(() => import("@/components/buy-challenge/Main"), {
  ssr: false,
  loading: () => <MainLoadingComponent bgImageStyle={bgImageStyle} />
});

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () =>
    <main style={bgImageStyle} className="flex flex-col items-center transition-all mb:mt-0 mb:pb-32 mb:pt-40 -mt-20 pb-14 pt-44">
      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
    </main>
})



const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Secure Checkout - Start Your Challenge Today| TopTier Trader",
  description: "Complete your purchase and join TopTier Trader today! Secure checkout for our proprietary trading evaluation programs. Your trading career starts here.",
  keywords: "TopTier Trader checkout, secure payment, trading evaluation purchase, proprietary trading enrollment, funded trader program, trading account purchase",
  language: "en",
  subject: "Proprietary Trading Program Checkout",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Secure Checkout - Join TopTier Trader Today",
    description: "Complete your enrollment at TopTier Trader. Secure checkout for our exclusive proprietary trading evaluation programs. Your path to funding starts now!",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/checkout`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/checkout`,
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Checkout - Inicia tu Challenge Hoy | TopTier Trader",
  description: "Completa tu compra y únete a TopTier Trader hoy! Pago seguro para nuestros programas de evaluación de trading propietario. Tu carrera trading comienza aquí.",
  keywords: "pago TopTier Trader, pago seguro, compra evaluación trading, inscripción trading propietario, programa trader financiado, compra cuenta trading",
  language: "es",
  subject: "Pago Programa Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Pago Seguro - Únete a TopTier Trader Hoy",
    description: "Completa tu inscripción en TopTier Trader. Pago seguro para nuestros programas exclusivos de evaluación de trading propietario. ¡Tu camino al financiamiento comienza ahora!",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/checkout`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/checkout`,
    languages: {
      'en': '/en',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_fr = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Paiement Sécurisé - Commencez Votre Parcours Trading | TopTier Trader",
  description: "Finalisez votre achat et rejoignez TopTier Trader aujourd'hui! Paiement sécurisé pour nos programmes d'évaluation de trading propriétaire. Votre carrière trading commence ici.",
  keywords: "paiement TopTier Trader, paiement sécurisé, achat évaluation trading, inscription trading propriétaire, programme trader financé, achat compte trading",
  language: "fr",
  subject: "Paiement Programme Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Paiement Sécurisé - Rejoignez TopTier Trader Aujourd'hui",
    description: "Finalisez votre inscription chez TopTier Trader. Paiement sécurisé pour nos programmes exclusifs d'évaluation de trading propriétaire. Votre chemin vers le financement commence maintenant!",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/checkout`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/checkout`,
    languages: {
      'en': '/en',
      'es': '/es',
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

const i18nNameSpaces = ["common", ""];

export default async function Checkout({ params: { locale }, searchParams }) {

  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

  // Construct the full URL with search parameters
  const baseUrl = `${ENVIRONMENT_URL}/${locale}/checkout`;
  const searchParamsString = searchParams ? new URLSearchParams(searchParams).toString() : '';
  const urlParam = searchParamsString ? `${baseUrl}?${searchParamsString}` : baseUrl;

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
    }
  }


  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >

      <MainSectionLazyLoading 
        locale={locale} 
        urlParam={urlParam}
      />

      <div className="-mt-5 md:-mt-20 ">
        <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} />
      </div>
    </TranslationsProvider>
  )
}