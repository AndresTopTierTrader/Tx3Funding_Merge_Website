import CarouselTextSection from "@/components/common/FinalSection/Carousel-Text-Section";
import SocialMediaSection from "@/components/common/SocialMediaSection/SocialMedia-Section";
import { TheProcess } from "@/components/one-phase-challenge/theProcess/Main";
import { Considerations } from "@/components/two-phase-challenge/considerations/Main";
import { Hero } from "@/components/two-phase-challenge/hero/Main";
import { WhichIsForYou } from "@/components/two-phase-challenge/whichIsForYou/Main";
import initTranslations from "@/i18n";
import TableSection from "@/components/common/TableSection/Main";
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
    title: "TopTier Trader - FLEX or PRO Trading Challenges | Trade with Our Capital",
    description: "Choose between FLEX and PRO challenges. Trade with our capital, keep up to 90% of profits. No risk, no investment required. Get funded in as little as 2 days.",
    keywords: "prop trading, proprietary trading, funded trader, trading challenge, FLEX challenge, PRO challenge, no risk trading, TopTier Trader",
    language: "en",
    subject: "Proprietary Trading Services and Challenges",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "TopTier Trader - FLEX or PRO Challenges | Get Funded in as Little as 2 Days",
        description: "2 Phase Challenge: Trade with our capital and keep up to 90% of your virtual profits. No risk, no investment required. Scale up to $2 Million in funding.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/en/two-phase-challenge`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/en/two-phase-challenge`,
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
    title: "TopTier Trader - Desafíos FLEX o PRO | Opera con Nuestro Capital",
    description: "Elige entre los desafíos FLEX y PRO. Opera con nuestro capital, quédate con hasta el 90% de las ganancias. Sin riesgo, sin inversión requerida. Obtén financiamiento en tan solo 2 días.",
    keywords: "trading propietario, trader financiado, desafío de trading, desafío FLEX, desafío PRO, trading sin riesgo, TopTier Trader",
    language: "es",
    subject: "Servicios de Trading Propietario y Desafíos",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "TopTier Trader - Desafíos FLEX o PRO | Obtén Financiamiento en Tan Solo 2 Días",
        description: "Desafío de 2 Fases: Opera con nuestro capital y quédate con hasta el 90% de tus ganancias virtuales. Sin riesgo, sin inversión requerida. Escala hasta $2 Millones en financiamiento.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/es/two-phase-challenge`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/es/two-phase-challenge`,
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
    title: "TopTier Trader - Défis FLEX ou PRO | Tradez avec Notre Capital",
    description: "Choisissez entre les défis FLEX et PRO. Tradez avec notre capital, conservez jusqu'à 90% des profits. Sans risque, sans investissement requis. Obtenez un financement en seulement 2 jours.",
    keywords: "trading propriétaire, trader financé, défi de trading, défi FLEX, défi PRO, trading sans risque, TopTier Trader",
    language: "fr",
    subject: "Services de Trading Propriétaire et Défis",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "TopTier Trader - Défis FLEX ou PRO | Obtenez un Financement en Seulement 2 Jours",
        description: "Défi en 2 Phases: Tradez avec notre capital et conservez jusqu'à 90% de vos profits virtuels. Sans risque, sans investissement requis. Évoluez jusqu'à 2 millions $ de financement.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/fr/two-phase-challenge`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/fr/two-phase-challenge`,
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

const i18nNameSpaces = ["common", "table_section", "one_phase_challenge", "two_phase_challenge"];

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

export default async function OnePhasePage({ params: { locale } }) {

    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    const socialmediaTranslations = {
        title: t('common:socialmedia_title'),
        desc: t('common:socialmedia_desc'),
    }

    const theProcess = {
        t4_1: t('one_phase_challenge:t4_1'),
        t4_2: t('one_phase_challenge:t4_2'),
        p14: t('one_phase_challenge:p14'),
        p15: t('one_phase_challenge:p15'),
        p16: t('one_phase_challenge:p16'),
        p17: t('one_phase_challenge:p17'),
        CTA: t('one_phase_challenge:CTA'),
    }

    const tableTranslations = {
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
    }

    const heroTranslations = {
        h1_1: t('two_phase_challenge:h1_title_1'),
        h1_2: t('two_phase_challenge:h1_title_2'),
        h1_3: t('two_phase_challenge:h1_title_3'),
        st_1: t('two_phase_challenge:st_1'),
        p1: t('two_phase_challenge:p1'),
    }

    const whichChallenge = {
        t1_1: t('two_phase_challenge:t1_1'),
        t1_2: t('two_phase_challenge:t1_2'),
        t1_3: t('two_phase_challenge:t1_3'),
        flex: t('two_phase_challenge:flex'),
        pro: t('two_phase_challenge:pro'),
        phase_1: t('two_phase_challenge:phase_1'),
        phase_2: t('two_phase_challenge:phase_2'),
        profit_target_1: t('two_phase_challenge:profit_target_1'),
        profit_target_2: t('two_phase_challenge:profit_target_2'),
        profit_target_3: t('two_phase_challenge:profit_target_3'),
        p2: t('two_phase_challenge:p2'),
        p3: t('two_phase_challenge:p3'),
        p4: t('two_phase_challenge:p4'),
        p5: t('two_phase_challenge:p5'),
        p6: t('two_phase_challenge:p6'),
        p7: t('two_phase_challenge:p7'),
        p8: t('two_phase_challenge:p8'),
        p9: t('two_phase_challenge:p9'),
    }

    const considerationsTranslations = {
        t2: t('two_phase_challenge:t2'),
        flex_st_1: t('two_phase_challenge:flex_st_1'),
        flex_p_1: t('two_phase_challenge:flex_p1'),
        flex_st_2: t('two_phase_challenge:flex_st_2'),
        flex_p_2: t('two_phase_challenge:flex_p_2'),
        flex_st_3: t('two_phase_challenge:flex_st_3'),
        flex_p_3: t('two_phase_challenge:flex_p_3'),
        flex_st_4: t('two_phase_challenge:flex_st_4'),
        flex_p_4: t('two_phase_challenge:flex_p_4'),
        flex_sug: t('two_phase_challenge:flex_sug'),
        pro_st_1: t('two_phase_challenge:pro_st_1'),
        pro_p_1: t('two_phase_challenge:pro_p_1'),
        pro_st_2: t('two_phase_challenge:pro_st_2'),
        pro_p_2: t('two_phase_challenge:pro_p_2'),
        pro_st_3: t('two_phase_challenge:pro_st_3'),
        pro_p_3: t('two_phase_challenge:pro_p_3'),
        pro_st_4: t('two_phase_challenge:pro_st_4'),
        pro_p_4: t('two_phase_challenge:pro_p_4'),
        pro_sug: t('two_phase_challenge:pro_sug'),
        flex: t('two_phase_challenge:flex'),
        pro: t('two_phase_challenge:pro'),
    }

    return (
        <div className="bg-[#0B111D] text-[#A2ACCF]">
            <Hero translations={heroTranslations} />
            <WhichIsForYou translations={whichChallenge} />
            <Considerations translations={considerationsTranslations} />
            <TheProcess translations={theProcess} pageType="twoPhase"/>
            <TableSection locale={locale} translations={tableTranslations} initial="TwoPhaseChallenge" pageType="twoPhase" />
            <span className="relative">
                <CarouselTextSection />
            </span>
            <SocialMediaSection translations={socialmediaTranslations} />
        </div>
    )
}