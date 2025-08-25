import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Certificate Questions & Verification - TopTier Trader",
  description: "Have questions about your certificate or need to verify someone else’s? Discover comprehensive certificate inquiry and verification services with TopTier Trader.",
  keywords: "certificate questions, certificate verification, certificate inquiries, TopTier Trader, credential verification",
  language: "en",
  subject: "Certificate Verification and Inquiry Information for TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Certificate Verification & Questions - TopTier Trader",
    description: "Looking to verify a certificate or have questions about your credentials? Explore TopTier Trader's certificate verification services for reliable information.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/certificate`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/certificates`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Preguntas y Verificación de Certificados - TopTier Trader",
  description: "¿Tienes preguntas sobre tu certificado o necesitas verificar el de otro? Descubre nuestros servicios de consulta y verificación de certificados con TopTier Trader.",
  keywords: "preguntas de certificados, verificación de certificados, consulta de certificados, TopTier Trader",
  language: "es",
  subject: "Información de Verificación y Consulta de Certificados de TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Verificación y Preguntas sobre Certificados - TopTier Trader",
    description: "¿Quieres verificar un certificado o tienes dudas sobre el tuyo? Explora los servicios de verificación de certificados de TopTier Trader para obtener información confiable.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/certificates`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/certificates`,
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
  title: "Questions et Vérification des Certificats - TopTier Trader",
  description: "Vous avez des questions concernant votre certificat ou souhaitez vérifier celui d'autrui ? Découvrez nos services de vérification et d'information sur les certificats avec TopTier Trader.",
  keywords: "questions de certificats, vérification des certificats, TopTier Trader, consultation de certificats",
  language: "fr",
  subject: "Informations sur la Vérification et les Questions de Certificats de TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Vérification et Questions sur les Certificats - TopTier Trader",
    description: "Vous cherchez à vérifier un certificat ou avez des questions à son sujet ? Découvrez les services de vérification de certificats de TopTier Trader pour obtenir des informations fiables.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/certificate`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/certificate`,
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

const CertificatePageLazyLoading = dynamic(() => import("@/components/certificates/CertificatePage"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-white ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Certificate...</p>
  </div>
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

const i18nNameSpaces = ["common", "contact-section", "certificates"];

export default async function CertificateSlugPage({ params }) {
  const { locale, slug } = params;
  const certificateId = slug; // The slug parameter is the certificate UUID

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const mainSectionTranslations = {
    loadingCert: t('certificates:loadingCert'),
    loadingP: t('certificates:loadingP'),
    certNotFound: t('certificates:CertNotFound'),
    certNotFound2: t('certificates:certNotFound2'),
    certNotFound3: t('certificates:certNotFound3'),
    goBack: t('certificates:goBack'),
    certDetails: t('certificates:certDetails'),
    verified: t('certificates:verified'),
    cert_id: t('certificates:cert_id'),
    cert_recipient: t('certificates:cert_recipient'),
    cert_date: t('certificates:cert_date'),
    cert_amount: t('certificates:cert_amount'),
    cert_download: t('certificates:cert_download'),
    cert_back: t('certificates:cert_back'),
    cert_noInfo: t('certificates:cert_noInfo'),
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
    }
  }

  return (
    <div>
      <CertificatePageLazyLoading 
        translations={mainSectionTranslations} 
        isResourcesVisible={false} 
        locale={locale} 
        certificateId={certificateId} // Pass the certificate UUID to the component
      />
      <FinalSectionLazyLoading 
        translations={finalSectionTranslations} 
        isResourcesVisible={true} 
        locale={locale} 
      />
    </div>
  )
}