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
        p6,
        t7,
        p7,
        t8,
        p8,
        t9,
        p9,
        t10,
        p10,
        t11,
        p11,
        t12,
        p12,
        t13,
        p13,
        t14,
        p14,
        t15,
        p15,
        t16,
        p16,
    } = translations

    return (
        <div style={bgImageStyle} className='flex flex-col'>
            <div className="mx-10 py-20 mb:py-32 mb:-mb-2">
                <h1 className="text-center text-4xl mb:text-center mb:text-6xl font-light text-textPrimary">{t1_1} <span className="bg-gradient-to-r from-ttblue py-1 to-ttelectricBlue inline-block text-transparent bg-clip-text">{t1_2}</span>
                </h1>
                <p className="mt-8 text-base px-0 mb:px-24 text-left text-slate-300">
                    {p1}
                </p>

                {/* Privacy */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t2}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">{p2}</p>
                </div>

                {/* Electronic Communications*/}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t3}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">{p3}</p>
                </div>

                {/* Your Account*/}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t4}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">{p4}</p>
                </div>

                {/* Funded Account Terms*/}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t5}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">{p5}</p>
                </div>

                {/* Children Under Eighteen */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t6}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p6}
                    </p>
                </div>

                {/* Links to Third Party Sites/Third Party Services */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t7}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p7}
                    </p>
                </div>

                {/* No Unlawful or Prohibited Use/Intellectual Property */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t8}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p8}
                    </p>
                </div>

                {/* International Users */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t9}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p9}
                    </p>
                </div>

                {/* Legal and Market Compliance */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t10}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p10}
                    </p>
                </div>

                {/* Indemnification */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t11}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p11}
                    </p>
                </div>

                {/* Arbitration */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t12}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p12}
                    </p>
                </div>

                {/* Class Action Waiver */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t13}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p13}
                    </p>
                </div>

                {/* Disclaimers */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t14}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p14}
                    </p>
                </div>

                {/* Termination/Access Restriction */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t15}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p15}
                    </p>
                </div>

                {/* Changes to Terms */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t16}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p16}
                    </p>
                </div>


            </div>

        </div>
    );
}

export default Team;
