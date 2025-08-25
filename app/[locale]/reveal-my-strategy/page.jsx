import initTranslations from "@/i18n";
import CarouselTextSection from "@/components/common/FinalSection/Carousel-Text-Section";
import SocialMediaSection from "@/components/common/SocialMediaSection/SocialMedia-Section";
import { Hero } from "@/components/reveal-my-strategy/hero/Main";
import { ExactPicks } from "@/components/reveal-my-strategy/exactPicks/Main";
import { Rules } from "@/components/reveal-my-strategy/rules/Main";
import { TheSetup } from "@/components/reveal-my-strategy/theSetup/Main";
import { WhatIDid } from "@/components/reveal-my-strategy/whatIDid/Main";
import { SameSecrets } from "@/components/prop-firm-secrets/sameSecrets/Main";
import { EntryStrategy } from "@/components/reveal-my-strategy/entryStrategy/Main";

const i18nNameSpaces = ["common", "prop_firm_secrets", "reveal_my_strategy"];

export default async function PropFirmSecrets({ params: { locale } }) {

    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    const socialmediaTranslations = {
        title: t('common:socialmedia_title'),
        desc: t('common:socialmedia_desc'),
    }

    const sameSecrets = {
        t5_1: t('prop_firm_secrets:t6'),
        p19: t('prop_firm_secrets:p19'),
        p20: t('prop_firm_secrets:p20'),
        p21: t('prop_firm_secrets:p21'),
        p22: t('prop_firm_secrets:p22'),
        p23: t('prop_firm_secrets:p23'),
        st_7: t('reveal_my_strategy:st_10'),
        st_8: t('prop_firm_secrets:st_8'),
        st_9: t('prop_firm_secrets:st_9'),
    }

    const heroTranslations = {
        h1_title_1: t("reveal_my_strategy:h1_title_1"),
        h1_title_2: t("reveal_my_strategy:h1_title_2"),
        h1_title_3: t("reveal_my_strategy:h1_title_3"),
        h1_title_4: t("reveal_my_strategy:h1_title_4"),
    }

    const picks = {
        t1_1: t("reveal_my_strategy:t1_1"),
        t1_2: t("reveal_my_strategy:t1_2"),
        t1_3: t("reveal_my_strategy:t1_3"),
        p1: t("reveal_my_strategy:p1"),
        p2: t("reveal_my_strategy:p2"),
        p3: t("reveal_my_strategy:p3"),
        p4: t("reveal_my_strategy:p4"),
        p5: t("reveal_my_strategy:p5"),
    }

    const rules = {
        t2: t("reveal_my_strategy:t2"),
        rule: t("reveal_my_strategy:rule"),
        p6: t("reveal_my_strategy:p6"),
        p7: t("reveal_my_strategy:p7"),
        p8: t("reveal_my_strategy:p8"),
        p9: t("reveal_my_strategy:p9"),
    }

    const setup = {
        t3: t("reveal_my_strategy:t3"),
        volume: t("reveal_my_strategy:volume"),
    }

    const strategy = {
        t4: t("reveal_my_strategy:t4"),
        p10: t("reveal_my_strategy:p10"),
        p11: t("reveal_my_strategy:p11"),
        p12: t("reveal_my_strategy:p12"),
        p14: t("reveal_my_strategy:p14"),
        p15: t("reveal_my_strategy:p15"),
        p16: t("reveal_my_strategy:p16"),
        p17: t("reveal_my_strategy:p17"),
        p18: t("reveal_my_strategy:p18"),
        p19: t("reveal_my_strategy:p19"),
        p20: t("reveal_my_strategy:p20"),
        p21: t("reveal_my_strategy:p21"),
        st_1: t("reveal_my_strategy:st_1"),
        st_2: t("reveal_my_strategy:st_2"),
        st_3: t("reveal_my_strategy:st_3"),
        st_4: t("reveal_my_strategy:st_4"),
        result_1: t("reveal_my_strategy:result_1"),
        result_2: t("reveal_my_strategy:result_2"),
    }

    const whatIDid = {
        t5: t("reveal_my_strategy:t5"),
        st_5: t("reveal_my_strategy:st_5"),
        st_6: t("reveal_my_strategy:st_6"),
        st_7: t("reveal_my_strategy:st_7"),
        p22: t("reveal_my_strategy:p22"),
        p23: t("reveal_my_strategy:p23"),
        p24: t("reveal_my_strategy:p24"),
    }

    return (
        <div className="bg-[#0B111D] text-[#717892]">
            <Hero translations={heroTranslations} />
            <ExactPicks translations={picks} />
            <Rules translations={rules} />
            <TheSetup translations={setup} />
            <EntryStrategy translations={strategy} />
            <WhatIDid translations={whatIDid} />
            <SameSecrets translations={sameSecrets} promoCode={'Strategy20'} />
            <span className="my-32">
                <CarouselTextSection />
            </span>
            <SocialMediaSection translations={socialmediaTranslations} />
        </div>
    )
}