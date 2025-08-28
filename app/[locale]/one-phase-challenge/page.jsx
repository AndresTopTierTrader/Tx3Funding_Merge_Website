import CarouselTextSection from "@/components/common/FinalSection/Carousel-Text-Section";
import SocialMediaSection from "@/components/common/SocialMediaSection/SocialMedia-Section";
import TableSection from "@/components/common/ForexTableSection/Main";
import { HeroSection } from "@/components/one-phase-challenge/hero/Main";
import { PassionateTraders } from "@/components/one-phase-challenge/passionateTraders/Main";
import { TheProcess } from "@/components/one-phase-challenge/theProcess/Main";
import { WhyChoose } from "@/components/one-phase-challenge/whyChoose/Main";
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
  title:
    "TopTier Trader - One Phase Challenge | Fast Funding for Passionate Traders",
  description:
    "One Phase Challenge: Trade with our capital, keep up to 90% of profits. No risk, no investment required. Scale up to $400,000 with our funding program.",
  keywords:
    "prop trading, proprietary trading, funded trader, one phase challenge, fast funding, unlimited profit, trading challenge, TopTier Trader",
  language: "en",
  subject: "Proprietary Trading Services and Challenges",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title:
      "TopTier Trader - One Phase Challenge | Your Evaluation Company for Passionate Traders",
    description:
      "Pass one phase, get funded. No second phases or lengthy evaluations. Unlimited profit earning potential with scaling up to $400,000.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/one-phase-challenge`,
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/one-phase-challenge`,
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
    openGraph: {
      images: {},
    },
  },
};

const metadata_es = {
  title:
    "TopTier Trader - Desafío de Una Fase | Financiamiento Rápido para Traders Apasionados",
  description:
    "Desafío de Una Fase: Opera con nuestro capital, quédate con hasta el 90% de las ganancias. Sin riesgo, sin inversión requerida. Escala hasta $400,000 con nuestro programa de financiamiento.",
  keywords:
    "trading propietario, trader financiado, desafío de una fase, financiamiento rápido, ganancias ilimitadas, desafío de trading, TopTier Trader",
  language: "es",
  subject: "Servicios de Trading Propietario y Desafíos",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title:
      "TopTier Trader - Desafío de Una Fase | Tu Compañía de Evaluación para Traders Apasionados",
    description:
      "Supera una fase, obtén financiamiento. Sin segundas fases ni evaluaciones prolongadas. Potencial de ganancias ilimitado con escalamiento hasta $400,000.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/one-phase-challenge`,
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/one-phase-challenge`,
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
    openGraph: {
      images: {},
    },
  },
};

const metadata_fr = {
  title:
    "TopTier Trader - Défi Une Phase | Financement Rapide pour Traders Passionnés",
  description:
    "Défi Une Phase: Tradez avec notre capital, conservez jusqu'à 90% des profits. Sans risque, sans investissement requis. Évoluez jusqu'à 400 000$ avec notre programme de financement.",
  keywords:
    "trading propriétaire, trader financé, défi une phase, financement rapide, profits illimités, défi de trading, TopTier Trader",
  language: "fr",
  subject: "Services de Trading Propriétaire et Défis",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title:
      "TopTier Trader - Défi Une Phase | Votre Société d'Évaluation pour Traders Passionnés",
    description:
      "Réussissez une phase, obtenez un financement. Pas de seconde phase ni d'évaluations prolongées. Potentiel de gains illimité avec évolution jusqu'à 400 000$.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/one-phase-challenge`,
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/one-phase-challenge`,
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
    openGraph: {
      images: {},
    },
  },
};

export async function generateMetadata({ params: { locale } }) {
  let returnedMetadata = "";
  const mainLang = locale.split("-")[0];

  if (mainLang === "en") {
    returnedMetadata = metadata_en;
  }
  if (mainLang === "es") {
    returnedMetadata = metadata_es;
  }
  if (mainLang === "fr") {
    returnedMetadata = metadata_fr;
  }
  return returnedMetadata;
}

const i18nNameSpaces = ["common", "one_phase_challenge", "table_section"];

export default async function OnePhasePage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const heroTranslations = {
    h1_title_1: t("one_phase_challenge:h1_title_1"),
    h1_title_2: t("one_phase_challenge:h1_title_2"),
    p1: t("one_phase_challenge:p1"),
  };

  const passionateTraders = {
    t1_1: t("one_phase_challenge:t1_1"),
    t1_2: t("one_phase_challenge:t1_2"),
    phase: t("one_phase_challenge:phase"),
    profit_target: t("one_phase_challenge:profit_target"),
    funded: t("one_phase_challenge:funded"),
    p2: t("one_phase_challenge:p2"),
    p3: t("one_phase_challenge:p3"),
    p4: t("one_phase_challenge:p4"),
    p5: t("one_phase_challenge:p5"),
    p6: t("one_phase_challenge:p6"),
    p7: t("one_phase_challenge:p7"),
  };

  const whyChoose = {
    t2_1: t("one_phase_challenge:t2_1"),
    t2_2: t("one_phase_challenge:t2_2"),
    t3_1: t("one_phase_challenge:t3_1"),
    t3_2: t("one_phase_challenge:t3_2"),
    st_1: t("one_phase_challenge:st_1"),
    st_2: t("one_phase_challenge:st_2"),
    st_3: t("one_phase_challenge:st_3"),
    st_4: t("one_phase_challenge:st_4"),
    st_5: t("one_phase_challenge:st_5"),
    st_6: t("one_phase_challenge:st_6"),
    p8: t("one_phase_challenge:p8"),
    p9: t("one_phase_challenge:p9"),
    p10: t("one_phase_challenge:p10"),
    p11: t("one_phase_challenge:p11"),
    p12: t("one_phase_challenge:p12"),
    p13: t("one_phase_challenge:p13"),
  };

  const theProcess = {
    t4_1: t("one_phase_challenge:t4_1"),
    t4_2: t("one_phase_challenge:t4_2"),
    p14: t("one_phase_challenge:p14"),
    p15: t("one_phase_challenge:p15"),
    p16: t("one_phase_challenge:p16"),
    p17: t("one_phase_challenge:p17"),
    CTA: t("one_phase_challenge:CTA"),
  };

  const socialmediaTranslations = {
    title: t("common:socialmedia_title"),
    desc: t("common:socialmedia_desc"),
  };

  const tableTranslations = {
    accountType: t("table_section:table_accountType"),
    description: t("table_section:description"),
    table_one_phase: t("table_section:table_one_phase"),
    table_two_phase: t("table_section:table_two_phase"),
    challenge: t("table_section:table_challenge"),
    get: t("table_section:table_get"),
    limited_time: t("table_section:table_limited_time"),
    offer_1: t("table_section:offer_1"),
    offer_2: t("table_section:offer_2"),
    offer_3: t("table_section:offer_3"),
  };

  const challengeCTA = {
    CTA_text_1: t("one_phase_challenge:CTA_text_1"),
    CTA_text_2: t("one_phase_challenge:CTA_text_2"),
    CTA: t("one_phase_challenge:CTA"),
  };

  return (
    <div className="bg-[#0B111D] text-[#A2ACCF]">
      <HeroSection translations={heroTranslations} />
      <PassionateTraders
        translations={passionateTraders}
        ctaTranslations={challengeCTA}
      />
      <WhyChoose translations={whyChoose} />
      <TheProcess translations={theProcess} pageType="onePhase" />
      <TableSection
        initial="OnePhaseChallenge"
        locale={locale}
        translations={tableTranslations}
        ctaTranslations={challengeCTA}
        pageType="onePhase"
      />
      <span className="my-24">
        <CarouselTextSection />
      </span>
      <SocialMediaSection translations={socialmediaTranslations} />
    </div>
  );
}
