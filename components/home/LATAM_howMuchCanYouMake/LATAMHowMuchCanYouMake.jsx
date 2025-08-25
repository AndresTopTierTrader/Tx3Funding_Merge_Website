'use client'
import { SectionLayout } from "@/components/common/SectionLayout";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import tablet from './assets/tablet.webp'

const Icon = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.833 28.2501C15.833 29.8667 17.083 31.1667 18.6164 31.1667H21.7497C23.083 31.1667 24.1663 30.0334 24.1663 28.6167C24.1663 27.1001 23.4997 26.5501 22.5164 26.2001L17.4997 24.4501C16.5163 24.1001 15.8497 23.5667 15.8497 22.0334C15.8497 20.6334 16.933 19.4834 18.2663 19.4834H21.3997C22.933 19.4834 24.183 20.7834 24.183 22.4001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 17.8334V32.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36.6663 25.3334C36.6663 34.5334 29.1997 42.0001 19.9997 42.0001C10.7997 42.0001 3.33301 34.5334 3.33301 25.3334C3.33301 16.1334 10.7997 8.66675 19.9997 8.66675" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M34.6285 1.91344C34.8316 1.82319 35.0593 1.8103 35.2695 1.87476L35.3729 1.91344L43.6229 5.57898C43.9547 5.72641 44.165 6.05371 44.1674 6.41023L44.1617 6.51792L43.637 11.2403C43.3688 13.6541 42.0516 15.8221 40.0446 17.173L39.81 17.3252L35.4865 20.0274C35.2223 20.1925 34.8949 20.2108 34.6167 20.0824L34.5148 20.0274L30.1914 17.3252C28.1319 16.038 26.7483 13.9117 26.3999 11.5176L26.3643 11.2403L25.8396 6.51792C25.7995 6.15705 25.976 5.81035 26.2827 5.62846L26.3785 5.57898L34.6285 1.91344ZM35.0012 3.75423L27.7363 6.98208L28.187 11.0378C28.3942 12.9027 29.4064 14.5789 30.9498 15.631L31.1636 15.7705L35.0012 18.1691L38.8388 15.7705C40.43 14.7761 41.5024 13.1377 41.7822 11.2909L41.8154 11.0378L42.2661 6.98208L35.0012 3.75423ZM37.0298 7.6837C37.3426 7.28562 37.9189 7.21647 38.3169 7.52925C38.6844 7.81796 38.7716 8.33119 38.5368 8.72154L38.4714 8.81637L34.8048 13.3997C34.4895 13.8009 33.9144 13.8626 33.5227 13.5583L33.4358 13.4815L31.6025 11.6482C31.2445 11.2902 31.2445 10.7098 31.6025 10.3518C31.9329 10.0214 32.4529 9.99597 32.8125 10.2756L32.8988 10.3518L34.0015 11.4545L37.0298 7.6837Z" fill="white" />
    </svg>
)

const ChevronRight = () => (
    <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 24.0616L12.9995 13.0308L2 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ChevronLeft = () => (
    <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1.99997L2.00047 13.0307L13 24.0615" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export function LATAMHowMuchCanYouMake({ currency }) {

    const accountSizes = [
        5000,
        10000,
        25000,
        50000,
        100000,
        200000,
        300000
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [profitRate, setProfitRate] = useState(4.3);
    const [convertedToLocal, setConvertedToLocal] = useState(null);


    const goToPrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prev => Math.min(accountSizes.length - 1, prev + 1));
    };

    const calculateProfit = (accountSize) => {
        return accountSize * (profitRate / 100);
    };

    const currentAccountSize = accountSizes[currentIndex]
    const monthlyProfit = calculateProfit(currentAccountSize);

    const CACHE_DURATION = 10 * 24 * 60 * 60 * 1000; // 10 days

    const getExchangeRate = async (targetCurrency) => {
        const cacheKey = `exchange-rate-USD-${targetCurrency}`;
        const cachedData = localStorage.getItem(cacheKey);

        // Check if cache exists and is not expired
        if (cachedData) {
            try {
                const { rate, timestamp } = JSON.parse(cachedData);
                const now = Date.now();

            } catch (error) {
                throw new Error(error)
            }
        }

        // Make request to API
        try {
            const res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');

            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }

            const data = await res.json();
            const currencyCode = targetCurrency.toLowerCase();

            if (data.usd && data.usd[currencyCode]) {
                const rate = data.usd[currencyCode];

                // save on cache
                const cacheData = {
                    rate: rate,
                    timestamp: Date.now(),
                    currency: targetCurrency
                };

                localStorage.setItem(cacheKey, JSON.stringify(cacheData));

                return rate;
            } else {
                throw new Error(`value not found for: ${targetCurrency}`);
            }

        } catch (error) {
            return null;
        }
    };

    const convertFromUSD = async (amountInUSD, targetCurrency) => {
        if (!amountInUSD || amountInUSD <= 0 || !targetCurrency) {
            return null;
        }

        if (targetCurrency.toUpperCase() === 'USD') {
            return amountInUSD;
        }

        const rate = await getExchangeRate(targetCurrency.toUpperCase());

        if (rate === null) {
            return null;
        }

        return amountInUSD * rate;
    };

    useEffect(() => {
        const fetchLocalValue = async () => {
            if (!currency || currency === "USD") {
                setConvertedToLocal(monthlyProfit);
                return;
            }

            const localValue = await convertFromUSD(monthlyProfit, currency);
            setConvertedToLocal(localValue);
        };

        fetchLocalValue();
    }, [monthlyProfit, currency]);

    return (
        <SectionLayout bgColor='bg-[#0B111D] text-[#A2ACCF]' padding>

            <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto text-white md:grid-cols-2 md:grid-rows-auto">
                <div className="row-span-2 p-6 rounded-lg border border-[#717892] bg-gradient-to-br from-[#2F3547]/60 via-[#2F3547]/0 to-black/0 flex flex-col gap-10 relative">
                    <h3 className="z-10 text-xl font-light md:text-3xl">¿Cuánto <br /> podrías ganar?</h3>
                    <p className="max-w-[280px] z-10">Vive del trading a tiempo completo. Sin arriesgar tu propio capital.</p>

                    <Image src={tablet} alt="guy holding tablet" className="w-full max-w-[332px] absolute right-2 bottom-0" />
                </div>

                <div className="row-span-3 p-6 rounded-lg border border-[#717892] bg-gradient-to-br from-[#2F3547]/60 via-[#2F3547]/0 to-black/0 flex flex-col items-center justify-between text-center">
                    <h3 className="text-xl font-light md:text-3xl">Estima Tus Ganancias</h3>
                    <span className="flex flex-col items-center gap-4 text-[#717892]">
                        Tamaño de Cuenta
                        <div className="flex items-center gap-6">
                            <button onClick={goToPrevious} className="rounded-full transition-colors hover:bg-[#2F3547]/60 aspect-square p-1">
                                <ChevronLeft />
                            </button>
                            <p className="px-12 grid place-items-center min-w-[200px] py-3 rounded-md text-white bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">${currentAccountSize.toLocaleString()}</p>
                            <button onClick={goToNext} className="rounded-full transition-colors hover:bg-[#2F3547]/60 aspect-square p-1">
                                <ChevronRight />
                            </button>
                        </div>
                        Tasa de Ganancia: {profitRate}%
                        <input
                            type="range"
                            min="1"
                            max="10"
                            step="0.1"
                            value={profitRate}
                            onChange={(e) => setProfitRate(parseFloat(e.target.value))}
                            className="w-full h-2 bg-[#2F3547] rounded-lg appearance-none cursor-pointer slider"
                            style={{
                                background: `linear-gradient(to right, #0052B4 0%, #45D1FF ${((profitRate - 1) / 9) * 100}%, #2F3547 ${((profitRate - 1) / 9) * 100}%, #2F3547 100%)`
                            }}
                        />
                    </span>

                    <span>
                        <p className="text-[#717892]">USD${monthlyProfit.toLocaleString()}<span>/Mes</span></p>

                        <p className="font-light text-[#FF532D] text-xl md:text-3xl">{currency}${convertedToLocal?.toLocaleString('es', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })}<span className="text-base text-white">/Mes</span></p>
                    </span>
                </div>

                <div className="p-6 rounded-lg border border-[#717892] bg-gradient-to-br from-[#2F3547]/60 via-[#2F3547]/0 to-black/0 flex flex-col gap-3 relative">
                    <span className="flex items-center gap-4">
                        <Icon />
                        <h3 className="text-xl font-light md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#0052B4] via-[#45D1FF] to-[#45D1FF]">24/7 Payouts</h3>
                    </span>
                    <p>Recibe tu pago en 24 horas o te damos $1,000 extra.</p>

                    <p className="px-4 py-2 rounded-md bg-[#FF532D] absolute top-4 scale-75 md:scale-100 -right-8 md:-right-2">GARANTIZADO</p>
                </div>

            </div>

            <span className="grid mx-auto mt-12 place-items-center">
                <CtaButton
                    utm={'https://app.toptiertrader.com/buy-challenge/?el=LATAM_PAGE_MainTableCtaTwoPhaseProJuly2025&hcategory=July2025&htrafficsource=Website&id=670ce1e2-70ec-4b6b-9e3f-b8258c187fb1&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss'}
                    translation={'Comienza Tu Challenge de 10K Ahora'}
                    page={'LATAM - Landing'}
                    section={'Estimate your earnings'}
                />
            </span>
        </SectionLayout>
    )
}