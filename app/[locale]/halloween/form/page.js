import React from 'react'
import dynamic from 'next/dynamic'
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

//Metadata
const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Halloween Contest | TopTier Trader - Win a Fully Funded Trading Account",
  description: "Join TopTier Trader's exciting Halloween contest for a chance to win one of three fully funded trading accounts. Participate now and kickstart your trading career!",
  keywords: "TopTier Trader contest, Halloween trading contest, fully funded account, trading opportunity, proprietary trading firm, trading competition",
  language: "en",
  subject: "Trading Contest",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Halloween Contest: Win a Fully Funded Trading Account with TopTier Trader",
    description: "Enter TopTier Trader's Halloween contest for your chance to win one of three fully funded trading accounts. Don't miss this opportunity to boost your trading career!",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/halloween`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/halloween`,
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
  title: "Concurso de Halloween | TopTier Trader - Gana una Cuenta de Trading Totalmente Fondeada",
  description: "Únete al emocionante concurso de Halloween de TopTier Trader y ten la oportunidad de ganar una de las tres cuentas de trading totalmente financiadas. ¡Participa ahora e impulsa tu carrera de trading!",
  keywords: "concurso TopTier Trader, concurso de trading de Halloween, cuenta totalmente fondeada, oportunidad de trading, firma de trading propietario, competición de trading",
  language: "es",
  subject: "Concurso de Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Concurso de Halloween: Gana una Cuenta de Trading Totalmente Financiada con TopTier Trader",
    description: "Participa en el concurso de Halloween de TopTier Trader para tener la oportunidad de ganar una de las tres cuentas de trading totalmente financiadas. ¡No te pierdas esta oportunidad de impulsar tu carrera de trading!",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/halloween`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/halloween`,
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
  title: "Concours d'Halloween | TopTier Trader - Gagnez un Compte de Trading Entièrement Financé",
  description: "Participez au passionnant concours d'Halloween de TopTier Trader pour avoir une chance de gagner l'un des trois comptes de trading entièrement financés. Inscrivez-vous maintenant et lancez votre carrière de trader !",
  keywords: "concours TopTier Trader, concours de trading d'Halloween, compte entièrement financé, opportunité de trading, société de trading propriétaire, compétition de trading",
  language: "fr",
  subject: "Concours de Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Concours d'Halloween : Gagnez un Compte de Trading Entièrement Financé avec TopTier Trader",
    description: "Participez au concours d'Halloween de TopTier Trader pour avoir la chance de gagner l'un des trois comptes de trading entièrement financés. Ne manquez pas cette opportunité de booster votre carrière de trader !",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/halloween`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/halloween`,
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


import { bgImageStyle } from "@/constants/styles"

const MainSectionLazyLoading = dynamic(() => import("@/components/halloween/form/Main"), {
  ssr: true,
  loading: () => <div className="w-full py-80 flex mb:flex-row flex-col justify-center items-center rounded-xl" style={bgImageStyle}>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
  </div>
})


const i18nNameSpaces = ["common", "halloween"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);


 
  const translations = {
    formTitle: t('halloween:form_title'),
    formJoin: t('halloween:form_join'),
    formName: t('halloween:form_name'),
    formLastName: t('halloween:form_lastname'),
    formInstagram: t('halloween:form_instagram'),
    formCheckBoxOne: t('halloween:form_checkbox_one'),
    formCheckBoxTwo: t('halloween:form_checkbox_two'),
    formTerms: t('halloween:form_terms'),
    formCTA: t('halloween:form_cta'),
    formSucces: t('halloween:from_succes'),
    postFormTitle: t('halloween:post_form_title'),
    postFormDescOne: t('halloween:post_form_desc_one'),
    postFormDescTwo: t('halloween:post_form_desc_two'),
    postFormDescThree: t('halloween:post_form_desc_three'),
    postFormCta: t('halloween:post_form_cta'),
    postFormBack: t('halloween:post_form_back')
  }

  return (
    <div>
      <MainSectionLazyLoading translations={translations} locale={locale} />
    </div>
  )
}
