import Image from "next/image"
import userImg from './assets/user.png'

export function User({date}) {
    return (
        <section className="w-full mb:-mt-3 mb-6" >
            <div className="flex flex-row items-center">
                <Image className="rounded-full w-16 mb:w-20" alt="user image" src={userImg} width={80} height={80} />
                <div className="ml-2">
                    <p className="text-slate-300 text-lg mb:text-xl" >Brittany Hughes</p>
                    <p className="text-secondary text-sm mb:text-base" >Creative Director</p>
                    <p className="text-sm text-secondary">{date}</p>
                </div>
            </div>
        </section>
    )
}