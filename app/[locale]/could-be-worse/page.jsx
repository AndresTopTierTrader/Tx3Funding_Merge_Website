import SocialMediaSection from "@/components/common/SocialMediaSection/SocialMedia-Section";
import { CheapPropFirms } from "@/components/could-be-worse/cheapPropFirms/Main";
import { Hero } from "@/components/could-be-worse/Hero/Main";
import { TheOnlyPropFirm } from "@/components/could-be-worse/theOnlyPropFirm/Main";
import { VideoSlider } from "@/components/could-be-worse/videosSection/Main";
import { WhatTTStands } from "@/components/could-be-worse/whatTTStands/Main";
import { YouTradeWePay } from "@/components/could-be-worse/youTradeWePay/Main";
import initTranslations from "@/i18n";
import { ENVIRONMENT_URL } from "@/constants/global";

const metadata_en = {
    title: "TopTier Trader - High Quality Proprietary Trading | Fair Trading Conditions",
    description: "TopTier offers fair trading conditions, simple rules, and guaranteed 24-hour payouts. Start your challenge today with a prop firm that refuses to compromise on quality.",
    keywords: "prop trading, proprietary trading, funded trader, trading challenge, fair trading conditions, fast payouts, trading support, TopTier Trader",
    language: "en",
    subject: "Proprietary Trading Services and Challenges",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "TopTier Trader - Quality Proprietary Trading That Puts Traders First",
        description: "We could make it cheaper. We could also make it worse. TopTier offers fair trading conditions, simple rules, and 24-hour payouts with no hidden costs or tricks.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/en/could-be-worse`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/en/could-be-worse`,
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
    title: "TopTier Trader - Trading Propietario de Alta Calidad | Condiciones Justas de Trading",
    description: "TopTier ofrece condiciones justas de trading, reglas simples y pagos garantizados en 24 horas. Inicia tu desafío hoy con una firma propietaria que se niega a comprometer la calidad.",
    keywords: "trading propietario, trader financiado, desafío de trading, condiciones justas de trading, pagos rápidos, soporte de trading, TopTier Trader",
    language: "es",
    subject: "Servicios de Trading Propietario y Desafíos",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "TopTier Trader - Trading Propietario de Calidad que Pone a los Traders Primero",
        description: "Podríamos hacerlo más barato. También podríamos hacerlo peor. TopTier ofrece condiciones justas de trading, reglas simples y pagos en 24 horas sin costos ocultos ni trucos.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/es/could-be-worse`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/es/could-be-worse`,
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
    title: "TopTier Trader - Trading Propriétaire de Haute Qualité | Conditions Équitables de Trading",
    description: "TopTier propose des conditions équitables de trading, des règles simples et des paiements garantis en 24 heures. Commencez votre défi aujourd'hui avec une société propriétaire qui refuse de compromettre la qualité.",
    keywords: "trading propriétaire, trader financé, défi de trading, conditions équitables de trading, paiements rapides, support de trading, TopTier Trader",
    language: "fr",
    subject: "Services de Trading Propriétaire et Défis",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "TopTier Trader - Trading Propriétaire de Qualité qui Met les Traders en Premier",
        description: "Nous pourrions le rendre moins cher. Nous pourrions aussi le rendre pire. TopTier offre des conditions équitables de trading, des règles simples et des paiements en 24 heures sans coûts cachés ni astuces.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/fr/could-be-worse`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/fr/could-be-worse`,
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

const i18nNameSpaces = ["common", "could_be_worse"];

export default async function CouldBeWorse({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNameSpaces);
    const mainLang = locale.split('-')[0]

    const translations = {
        hero: {
            h1_title_1: t("could_be_worse:h1_title_1"),
            h1_title_2: t("could_be_worse:h1_title_2"),
        },
        cheapPropFirms: {
            t1: t("could_be_worse:t1"),
            t2: t("could_be_worse:t2"),
            p1: t("could_be_worse:p1"),
            p2: t("could_be_worse:p2"),
            p3: t("could_be_worse:p3"),
            p4: t("could_be_worse:p4"),
            p5: t("could_be_worse:p5"),
            CTA: t("could_be_worse:CTA")
        },
        whatTTStands: {
            t3: t("could_be_worse:t3"),
            card1_t: t("could_be_worse:card1_t"),
            card1_p: t("could_be_worse:card1_p"),
            card2_t: t("could_be_worse:card2_t"),
            card2_p: t("could_be_worse:card2_p"),
            card3_t: t("could_be_worse:card3_t"),
            card3_p: t("could_be_worse:card3_p"),
            card4_t: t("could_be_worse:card4_t"),
            card4_p: t("could_be_worse:card4_p"),
            card5_t: t("could_be_worse:card5_t"),
            card5_p: t("could_be_worse:card5_p"),
        },
        theOnlyPropFirm: {
            t4_1: t("could_be_worse:t4_1"),
            t4_2: t("could_be_worse:t4_2"),
            t4_3: t("could_be_worse:t4_3"),
            p6: t("could_be_worse:p6"),
            CTA: t("could_be_worse:CTA")
        },
        videosSection: {
            t5: t("could_be_worse:t5"),
            p7: t("could_be_worse:p7"),
        },
        youTradeWePay: {
            t6: t("could_be_worse:t6"),
            p8: t("could_be_worse:p8"),
            button1: t("could_be_worse:button_1"),
            button2: t("could_be_worse:button_2"),
            button3: t("could_be_worse:button_3"),
        },
        socialMediaSection: {
            title: t("could_be_worse:t7"),
            desc: t("could_be_worse:p9"),
        }
    }

    return (
        <div className="text-[#0B111D]">
            <Hero locale={mainLang} translations={translations.hero} />
            <CheapPropFirms translations={translations.cheapPropFirms} />
            <WhatTTStands translations={translations.whatTTStands} />
            <TheOnlyPropFirm translations={translations.theOnlyPropFirm} />
            <VideoSlider translations={translations.videosSection} />
            <YouTradeWePay translations={translations.youTradeWePay} />
            <SocialMediaSection translations={translations.socialMediaSection} />
        </div>
    )
}