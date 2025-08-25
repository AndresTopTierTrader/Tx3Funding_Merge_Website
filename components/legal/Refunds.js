'use client'

//translations added

 import { bgImageStyle } from "@/constants/styles"



function Team({ translations }) {

    const {
        t1_1,
        t1_2,
        p1,
        t2,
        p2,
        t3,
        p3,
        t4,
        p4,
        t5,
        p5,
        t6,
    } = translations

    return (
        <div style={bgImageStyle} className='flex flex-col'>
            <div className="mx-10 py-20 mb:pt-24 mb:-mb-16">
                <h1 className="text-center text-4xl mb:text-center mb:text-6xl font-light text-white">{t1_1} <span className="bg-gradient-to-r from-ttblue py-1 to-ttelectricBlue inline-block text-transparent bg-clip-text">{t1_2}</span>
                </h1>
                {/* Refunds after successful completion of the Challenge */}
                <div className="pt-16">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t2}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p1}
                    </p>
                </div>

                {/* Refund Policy Post */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t3}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p2}
                    </p>
                </div>

                {/* Acceptance of this Policy */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t4}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p3}
                    </p>
                </div>

                {/* Dispute Policy */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t5}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p4}
                    </p>
                </div>

                {/* Failed Transaction Policy */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t6}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p5}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Team;
