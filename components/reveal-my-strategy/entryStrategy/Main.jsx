'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

const QuotesIcon = () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4232_545)">
            <path d="M27 15C28.5913 15 30.1174 15.6321 31.2426 16.7574C32.3679 17.8826 33 19.4087 33 21V39C33 48.39 28.05 54.579 18.729 56.91C18.3458 57.0089 17.9468 57.031 17.555 56.9751C17.1632 56.9191 16.7864 56.7862 16.4462 56.5839C16.106 56.3817 15.8092 56.1141 15.5728 55.7967C15.3365 55.4792 15.1653 55.1181 15.0691 54.7342C14.973 54.3503 14.9537 53.9512 15.0125 53.5598C15.0712 53.1684 15.2068 52.7925 15.4115 52.4538C15.6162 52.1151 15.8859 51.8202 16.205 51.5861C16.5241 51.352 16.8864 51.1834 17.271 51.09C23.952 49.419 27 45.609 27 39V36H18C16.4863 36.0005 15.0283 35.4288 13.9184 34.3995C12.8084 33.3702 12.1285 31.9595 12.015 30.45L12 30V21C12 19.4087 12.6321 17.8826 13.7574 16.7574C14.8826 15.6321 16.4087 15 18 15H27Z" fill="#45D1FF" />
            <path d="M54 15C55.5913 15 57.1174 15.6321 58.2426 16.7574C59.3679 17.8826 60 19.4087 60 21V39C60 48.39 55.05 54.579 45.729 56.91C45.3458 57.0089 44.9468 57.031 44.555 56.9751C44.1632 56.9191 43.7864 56.7862 43.4462 56.5839C43.106 56.3817 42.8092 56.1141 42.5728 55.7967C42.3365 55.4792 42.1653 55.1181 42.0691 54.7342C41.973 54.3503 41.9537 53.9512 42.0125 53.5598C42.0712 53.1684 42.2068 52.7925 42.4115 52.4538C42.6162 52.1151 42.8858 51.8202 43.205 51.5861C43.5241 51.352 43.8864 51.1834 44.271 51.09C50.952 49.419 54 45.609 54 39V36H45C43.4863 36.0005 42.0283 35.4288 40.9184 34.3995C39.8084 33.3702 39.1285 31.9595 39.015 30.45L39 30V21C39 19.4087 39.6321 17.8826 40.7574 16.7574C41.8826 15.6321 43.4087 15 45 15H54Z" fill="#45D1FF" />
        </g>
        <defs>
            <clipPath id="clip0_4232_545">
                <rect width="72" height="72" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const BuyIcon = () => (
    <svg width="130" height="74" viewBox="0 0 130 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="103" height="44" rx="5" fill="#0A7B2A" />
        <path d="M26.5803 31V12.8182H33.8601C35.1977 12.8182 36.3133 13.0165 37.207 13.413C38.1007 13.8095 38.7725 14.36 39.2223 15.0643C39.6721 15.7627 39.897 16.5676 39.897 17.479C39.897 18.1893 39.755 18.8137 39.4709 19.3523C39.1868 19.8849 38.7962 20.3229 38.299 20.6662C37.8078 21.0036 37.2455 21.2433 36.6122 21.3853V21.5629C37.3047 21.5924 37.9528 21.7878 38.5565 22.1488C39.1661 22.5098 39.6603 23.0159 40.0391 23.6669C40.4179 24.312 40.6072 25.0814 40.6072 25.9751C40.6072 26.9399 40.3675 27.801 39.8881 28.5586C39.4147 29.3103 38.7133 29.9051 37.7841 30.343C36.8549 30.781 35.7096 31 34.3484 31H26.5803ZM30.4244 27.8572H33.5582C34.6295 27.8572 35.4107 27.6531 35.902 27.2447C36.3932 26.8304 36.6388 26.2799 36.6388 25.5934C36.6388 25.0903 36.5175 24.6464 36.2749 24.2617C36.0322 23.877 35.686 23.5752 35.2362 23.3562C34.7923 23.1372 34.2625 23.0277 33.647 23.0277H30.4244V27.8572ZM30.4244 20.4265H33.2741C33.8009 20.4265 34.2685 20.3348 34.6768 20.1513C35.0911 19.9619 35.4167 19.6955 35.6534 19.3523C35.8961 19.009 36.0174 18.5977 36.0174 18.1183C36.0174 17.4613 35.7836 16.9316 35.3161 16.5291C34.8544 16.1267 34.1974 15.9254 33.3452 15.9254H30.4244V20.4265ZM54.339 12.8182H58.1831V24.6257C58.1831 25.9515 57.8665 27.1115 57.2332 28.1058C56.6059 29.1001 55.7269 29.8755 54.5965 30.4318C53.4661 30.9822 52.1492 31.2575 50.6459 31.2575C49.1366 31.2575 47.8168 30.9822 46.6863 30.4318C45.5559 29.8755 44.677 29.1001 44.0496 28.1058C43.4223 27.1115 43.1086 25.9515 43.1086 24.6257V12.8182H46.9527V24.2972C46.9527 24.9897 47.1036 25.6052 47.4055 26.1438C47.7132 26.6824 48.1453 27.1056 48.7016 27.4134C49.258 27.7211 49.906 27.875 50.6459 27.875C51.3916 27.875 52.0397 27.7211 52.5901 27.4134C53.1465 27.1056 53.5756 26.6824 53.8774 26.1438C54.1852 25.6052 54.339 24.9897 54.339 24.2972V12.8182ZM60.2805 12.8182H64.5863L68.7322 20.6484H68.9098L73.0558 12.8182H77.3615L70.7298 24.5724V31H66.9123V24.5724L60.2805 12.8182Z" fill="white" />
        <path d="M90 37L92 35H94.4998L98 39.5L99.9998 38L102 38.9998L105 37L106.5 38H108L110 37L112.5 38L117.5 46.5L118 48.5L117.5 51L119 53.9998L107 61.4998L106 58.9998L104.5 57.9998L98.5 55.4998L96 53.9998V51.9998L96.5 48.9998H98L90.5 38.9998L90 37Z" fill="#D9D9D9" />
        <g clipPath="url(#clip0_4287_425)">
            <path d="M108.934 36.869L108.754 36.9776C108.356 37.2167 108.031 37.5313 107.786 37.892C106.802 36.8455 105.186 36.5866 103.906 37.3564L103.725 37.4652C103.269 37.7397 102.909 38.1129 102.654 38.5414C101.671 37.8226 100.311 37.7182 99.203 38.3846L99.0222 38.4934C98.6481 38.7184 98.3379 39.0103 98.0987 39.3442L95.7974 35.519C94.9107 34.0452 92.991 33.568 91.5172 34.4547L91.3364 34.5635C89.8631 35.4499 89.3855 37.3698 90.2719 38.8432L96.175 48.6554L95.5146 50.3091C94.9885 51.6265 95.0183 53.0649 95.5977 54.3594C96.1774 55.6544 97.2304 56.6348 98.5638 57.1198L105.178 59.5271L106.299 61.3908C106.978 62.5196 108.449 62.8859 109.578 62.2068L119.047 56.5105C120.175 55.8314 120.542 54.3601 119.862 53.2309L118.798 51.4612C119.094 49.2091 118.621 46.9198 117.452 44.9769L113.215 37.9331C112.328 36.4602 110.408 35.9824 108.934 36.869ZM115.834 45.9502C116.832 47.6092 117.204 49.581 116.882 51.5016C116.845 51.7237 116.889 51.9513 117.005 52.1442L118.244 54.2044C118.387 54.4414 118.31 54.7504 118.073 54.893L108.605 60.589C108.368 60.7314 108.059 60.6545 107.917 60.4175L106.623 58.2675C106.512 58.0823 106.34 57.9409 106.137 57.867L99.2095 55.3455C98.3605 55.0367 97.6897 54.4124 97.3208 53.5878C96.9517 52.7638 96.9331 51.8474 97.2679 51.0086L97.3969 50.6865L98.7339 52.9089C99.0026 53.3554 99.583 53.4998 100.029 53.2312C100.476 52.9625 100.62 52.3821 100.352 51.9356L98.0387 48.091C98.0353 48.0853 98.0324 48.0805 98.029 48.0748L91.8894 37.8695C91.5395 37.2879 91.7279 36.5307 92.3095 36.1808L92.4902 36.0721C93.0718 35.7222 93.8293 35.9109 94.179 36.4921L97.9577 42.7731C97.9579 42.7735 97.9579 42.7735 97.9581 42.7739L101.105 47.9957C101.374 48.4419 101.954 48.5857 102.4 48.3171C102.846 48.0481 102.991 47.4681 102.722 47.021L99.5754 41.7998C99.2255 41.2183 99.4139 40.461 99.9951 40.1114L100.176 40.0026C100.757 39.6527 101.515 39.8415 101.865 40.4227L102.66 41.7452L102.661 41.746L105.012 45.6455C105.281 46.0917 105.86 46.2355 106.307 45.9669C106.307 45.9667 106.307 45.9667 106.307 45.9664C106.754 45.6974 106.898 45.1173 106.628 44.6706L104.278 40.7715C103.928 40.1899 104.116 39.4327 104.697 39.0831L104.878 38.9743C105.46 38.6244 106.217 38.8132 106.567 39.3944L107.562 41.0477C107.575 41.0759 107.585 41.1052 107.601 41.1323L108.911 43.3001C109.181 43.7461 109.76 43.8891 110.206 43.6207C110.206 43.6205 110.206 43.6202 110.207 43.6197C110.653 43.3503 110.797 42.77 110.527 42.3236L109.343 40.3634C109.33 40.3369 109.321 40.3098 109.306 40.2844C108.956 39.7028 109.144 38.9453 109.726 38.5956L109.906 38.4871C110.488 38.1372 111.245 38.326 111.595 38.9072L115.832 45.951L115.834 45.9502Z" fill="black" />
            <path d="M102.414 30.9945L97.478 33.9639C97.0314 34.2325 96.4511 34.0882 96.1824 33.6416C95.9138 33.1951 96.0582 32.6148 96.5047 32.3461L101.441 29.3767C101.887 29.1081 102.467 29.2524 102.736 29.6989C103.005 30.1455 102.861 30.7256 102.414 30.9945Z" fill="black" />
            <path d="M90.4391 33.0723C89.9926 33.3409 89.4122 33.1966 89.1436 32.7501L86.1741 27.8143C85.9055 27.3678 86.0499 26.7874 86.4964 26.5187C86.9429 26.2501 87.5233 26.3945 87.7919 26.841L90.7613 31.7768C91.0302 32.2237 90.886 32.8035 90.4391 33.0723Z" fill="black" />
            <path d="M94.4504 31.8911C94.2433 32.0156 93.9892 32.0611 93.7359 31.9981C93.23 31.8723 92.922 31.3602 93.0479 30.8543L94.4386 25.2646C94.5644 24.7587 95.0765 24.4506 95.5824 24.5765C96.0883 24.7023 96.3963 25.2143 96.2705 25.7202L94.8797 31.31C94.8167 31.5633 94.6571 31.7667 94.4504 31.8911Z" fill="black" />
            <path d="M87.9294 39.7083L82.9936 42.6778C82.5471 42.9464 81.9667 42.802 81.6981 42.3555C81.4294 41.909 81.5738 41.3286 82.0203 41.06L86.9561 38.0906C87.4026 37.8219 87.983 37.9663 88.2516 38.4128C88.5203 38.8593 88.3759 39.4397 87.9294 39.7083Z" fill="black" />
            <path d="M87.516 36.0627C87.309 36.1873 87.0544 36.233 86.8016 36.1698L81.2121 34.7794C80.7062 34.6536 80.3981 34.1415 80.524 33.6356C80.6494 33.13 81.1622 32.8215 81.6677 32.9475L87.2572 34.3379C87.7631 34.4637 88.0712 34.9758 87.9453 35.4817C87.8827 35.7347 87.7231 35.9381 87.516 36.0627Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_4287_425">
                <rect width="43" height="43" fill="white" transform="translate(70 36.167) rotate(-31.0315)" />
            </clipPath>
        </defs>
    </svg>
)

export function EntryStrategy({translations}) {
    return (
        <SectionLayout padding>
            <div className="text-center flex flex-col gap-4 justify-center">
                <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl mx-auto max-w-xl text-center font-light">{translations.t4}</motion.h2>
                <motion.strong {...animationSteps} className="text-transparent bg-clip-text bg-gradient-to-br from-[#0052B4] to-[#45D1FF] text-lg md:text-2xl">{translations.p10}</motion.strong>
            </div>

            <ul className="hidden mt-8 md:mt-16 md:grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-4 mx-auto max-w-5xl">
                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">1</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-white font-medium">{translations.st_1}</p>
                        <p>{translations.p11}</p>
                    </div>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6 relative">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">4</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-green-500 font-medium">{translations.st_4}</p>
                        <p>{translations.p17}</p>
                    </div>

                    <span className="absolute -top-6 -right-12 scale-75">
                        <BuyIcon />
                    </span>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">2</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-white font-medium">{translations.st_2}</p>
                        <span>
                            {translations.p12}
                            <ul className="flex flex-col list-disc pl-5">
                                <li>{translations.p14}</li>
                                <li>{translations.p15}</li>
                            </ul>
                        </span>
                    </div>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6 row-span-2 relative">
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-medium">{translations.p18}</p>
                        <p>{translations.p19}</p>
                        <p>{translations.p20}</p>
                        <p>{translations.p21}</p>
                        <strong className="text-green-500"><span className="text-white">{translations.result_1}</span> {translations.result_2}</strong>
                    </div>

                    <span className="absolute -top-8 -right-8">
                        <QuotesIcon />
                    </span>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">3</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-white font-medium">{translations.st_3}</p>
                        <p>{translations.p16}</p>
                    </div>
                </motion.li>
            </ul>

            <ul className="md:hidden mt-8 md:mt-16 flex flex-col gap-4">
                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">1</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-white font-medium">{translations.st_1}</p>
                        <p>{translations.p11}</p>
                    </div>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">2</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-white font-medium">{translations.st_2}</p>
                        <span>
                            {translations.p12}
                            <ul className="flex flex-col list-disc pl-5">
                                <li>{translations.p14}</li>
                                <li>{translations.p15}</li>
                            </ul>
                        </span>
                    </div>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">3</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-white font-medium">{translations.st_3}</p>
                        <p>{translations.p16}</p>
                    </div>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6">
                    <strong className="aspect-square grid place-items-center w-[50px] h-[50px] text-xl text-white rounded-md bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">4</strong>

                    <div className="flex flex-col gap-1">
                        <p className="text-green-500 font-medium">{translations.st_4}</p>
                        <p>{translations.p17}</p>
                    </div>
                </motion.li>

                <motion.li {...animationSteps} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex gap-4 p-6 row-span-2">
                    <div className="flex flex-col gap-4">
                        <p className="text-white font-medium">{translations.p18}</p>
                        <p>{translations.p19}</p>
                        <p>{translations.p20}</p>
                        <p>{translations.p21}</p>
                        <strong className="text-green-500"><span className="text-white">{translations.result_1}</span> {translations.result_2}</strong>
                    </div>
                </motion.li>
            </ul>
        </SectionLayout>
    )
}