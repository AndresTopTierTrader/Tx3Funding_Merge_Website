import Image from 'next/image'
import badgeOne from './assets/adventurer.webp'
import badgeTwo from './assets/reviewer.webp'
import badgeThree from './assets/community.webp'
import badgeFour from './assets/socialTrader.webp'
import badgeFive from './assets/challenger.webp'
import badgeSix from './assets/fundedTrader.webp'
import badgeSeven from './assets/king.webp'

export function Badges({texts}) {


    const badges = [
        {
            title: texts.badge1,
            img: badgeOne
        },
        {
            title: texts.badge2,
            img: badgeTwo
        },
        {
            title: texts.badge3,
            img: badgeThree
        },
        {
            title: texts.badge4,
            img: badgeFour
        },
        {
            title: texts.badge5,
            img: badgeFive
        },
        {
            title: texts.badge6,
            img: badgeSix
        },
        {
            title: texts.badge7,
            img: badgeSeven
        },
    ]

    return (
        <ul className="flex items-center flex-wrap justify-center gap-12">
            {
                badges.map(({title, img}) => (
                    <li key={title} className="flex flex-col items-center gap-2">
                        <Image className="w-32" width={'20'} height={'20'}  src={img} alt="" />
                        {title}
                    </li>
                ))
            }
        </ul>
    )
}