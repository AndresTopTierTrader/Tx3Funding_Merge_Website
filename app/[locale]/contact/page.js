import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

const bgImageStyle = {
  backgroundColor: '#0B111D',
  backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `,
  width: "auto", // Adjust width as needed
  height: "auto", // Adjust height as needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Contact Us - TopTier Trader - Get In Touch With Our Team",
  description: "Reach out to TopTier Trader for inquiries, support, or feedback. Find all the ways you can contact us, including email, phone, and social media.",
  keywords: "TopTier Trader contact, support, customer service, email, phone contact, social media, trading support, feedback",
  language: "en",
  subject: "Contact Information for TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Get In Touch With TopTier Trader - Contact Information",
    description: "Looking to contact TopTier Trader? Find all the necessary contact information here, including ways to reach out for support or inquiries.",
    // Ensure you replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/contact`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/contact`,
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
  title: "Contáctanos - TopTier Trader - Ponte en Contacto con Nuestro Equipo",
  description: "Contacta a TopTier Trader para consultas, soporte o comentarios. Encuentra todas las formas de contactarnos, incluyendo correo electrónico, teléfono y redes sociales.",
  keywords: "contacto TopTier Trader, soporte, servicio al cliente, email, contacto telefónico, redes sociales, soporte de trading, comentarios",
  language: "es",
  subject: "Información de Contacto de TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Ponte en Contacto con TopTier Trader - Información de Contacto",
    description: "¿Buscas contactar a TopTier Trader? Encuentra aquí toda la información de contacto necesaria, incluyendo maneras de solicitar soporte o realizar consultas.",
    // Replace 'metadataImg' with the actual image metadata
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/contact`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/contact`,
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
  title: "Contactez-Nous - TopTier Trader - Entrez en Contact avec Notre Équipe",
  description: "Contactez TopTier Trader pour des questions, du support ou des commentaires. Trouvez toutes les façons de nous contacter, y compris par email, téléphone et réseaux sociaux.",
  keywords: "contact TopTier Trader, support, service client, email, contact téléphonique, réseaux sociaux, support de trading, commentaires",
  language: "fr",
  subject: "Informations de Contact de TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Entrez en Contact avec TopTier Trader - Informations de Contact",
    description: "Vous cherchez à contacter TopTier Trader ? Trouvez ici toutes les informations de contact nécessaires, y compris les moyens de demander du support ou de poser des questions.",
    // Remplacez 'metadataImg' par les métadonnées réelles de l'image
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/contact`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/contact`,
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


const MainSectionLazyLoading = dynamic(() => import("@/components/contact/Main"), {
  ssr: true,
  loading: () => <div className="w-full py-80 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-slate-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-slate-300 ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Contact section...</p>
  </div>
})

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-textPrimary ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
  </div>
})

const i18nNameSpaces = ["common", "contact-section"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const mainSectionTranslations = {
    titleOne: t('contact-section:title_one'),
    titleTwo: t('contact-section:title_two'),
    content: t('contact-section:content'),
    chatSupport: t('contact-section:chat_support'),
    callUs: t('contact-section:call_us'),
    emailUs: t('contact-section:email_us'),
    contentTwo: t('contact-section:content_two'),
    viewFAQs: t('contact-section:faqs'),
    joinOurDiscord: t('contact-section:join_our_discord'),
    whatsapp: t('contact-section:whatsapp'),
    usResidents: t('contact-section:us_residents')
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
      <MainSectionLazyLoading translations={mainSectionTranslations} />\
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={true} locale={locale} />
    </div>
  )
}
