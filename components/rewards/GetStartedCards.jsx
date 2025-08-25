import { PointsPointsPoints, AndEvenMorePoints, RedemRewardsIcon } from "./icons"

export function GetStartedCards({ texts }) {

    const {
        card1_t,
        card1_p,
        card1_st,

        card2_t,
        card2_p,

        card3_t,
        card3_p,
        card3_st,
    } = texts

    return (
        <div className="flex items-center gap-8 md:gap-12 justify-center flex-wrap">
            <Card title={card1_t} icon={<PointsPointsPoints />} desc={card1_p} highlight={card1_st} />

            <Card title={card2_t} icon={<AndEvenMorePoints />} desc={card2_p} />

            <Card title={card3_t} icon={<RedemRewardsIcon />} desc={card1_p} highlight={card3_st} />
        </div>
    )
}

function Card({ title, icon, desc, highlight }) {
    return (
        <article className="flex flex-col items-center p-8 max-w-[350px] md:min-h-[420px] gap-6 text-center rounded-xl bg-white shadow-lg">
            <strong className="font-bold text-2xl">{title}</strong>
            <span>
                {icon}
            </span>
            <p>{desc}</p>
            <p className="font-semibold text-ttorange">{highlight}</p>
        </article>
    )
}