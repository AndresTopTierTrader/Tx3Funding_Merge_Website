'use client'

import logoImg from './assets/logo.svg'
import Image from 'next/image';
import React, { useState } from 'react';
import { IoCaretDown } from "react-icons/io5";

function LATAMComparationSection({locale, translations}) {

    const [selectedCompetitor, setSelectedCompetitor] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const competitors = [
        {
            name: 'TOPTIER TRADER',
            logo: logoImg.src, // You'll need to add your actual logo path
            highlight: true
        },
        {
            name: 'Goat Funded Trader',
            logo: null,
        },
        {
            name: 'E8 Markets',
            logo: null,
        },
        {
            name: 'Funded Next',
            logo: null,
        }
    ];

    const competitorsMb = [
        {
            name: 'Goat Funded Trader',
            logo: null,
        },
        {
            name: 'E8 Markets',
            logo: null,
        },
        {
            name: 'Funded Next',
            logo: null,
        }
    ];

    const comparisons = [
        { label: 'Tamaño de Cuenta', values: ['100K', '100K', '100K', '100K'] },
        { label: 'Precio (USD)', values: ['$549', '$561', '$706', '$549'] },
        { label: 'Drawdown Máximo', values: [`5% Diario | 10% Total`, `5% Diario | 10% Total`, `5% Diario | 10% Total`, `5% Diario | 10% Total`] },
        { label: 'Payout Split (Trade/Firma)', values: [`Hasta 90%`, '80%', '80%', '80%'] },
        { label: 'Días Mínimos de Trading', values: ['0', '0', '0', '5'] },
        { label: 'Evaluación', values: [`2 Fase `, `2 Fase `, `2 Fase `, `2 Fase `] },
        { label: 'Objetivos', values: [`8% Fase 1 | 5% Fase 2`, `10% Fase 1 | 5% Fase 2`, `10% Fase 1 | 5% Fase 2`, `10% Fase 1 | 5% Fase 2`] },
        { label: 'Mantener Trades en FDS', values: [`Sí`, `Sí`, `Sí`, `Sí`] },
        { label: 'Frecuencia de Payout', values: [`14 Días`, `30 Días`, `14 Días`, `30 Días`] }
    ];

    const comparisonsMb = [
        { label: 'Tamaño de Cuenta', values: ['100K', '100K', '100K'] },
        { label: 'Precio (USD)', values: ['$561', '$706', '$549'] },
        { label:'Drawdown Máximo', values: [`5% Diario | 10% Total`, `5% Diario | 10% Total`, `5% Diario | 10% Total`] },
        { label: 'Payout Split (Trade/Firma)', values: ['80%', '80%', '80%'] },
        { label: 'Días Mínimos de Trading', values: ['0', '0', '5'] },
        { label: 'Evaluación', values: [`2 Fase `, `2 Fase `, `2 Fase `] },
        { label: 'Objetivos', values: [`10% Fase 1 | 5% Fase 2`, `10% Fase 1 | 5% Fase 2`, `10% Fase 1 | 5% Fase 2`] },
        { label: 'Mantener Trades en FDS', values: [`Sí`, `Sí`, `Sí`] },
        { label: 'Frecuencia de Payout', values: [`30 Días`, `14 Días`, `30 Días`]}
    ];

    return (
        <div className="flex flex-col -mt-1 mb:mt-0 pt-10 mb:pt-12 mb:pb-36 pb-16 items-center w-full bg-[#0B111D] ">
            <div className="max-w-[1100px] mb:w-full flex flex-col items-center">
                <h3 className='text-white font-light text-4xl text-center max-w-[500px] '>¿Aún no estás convencido?</h3>
                <p
                    className="pt-5 text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892] max-w-[350px] mb:max-w-[500px]"
                >
                Nuestros competidores no tienen ninguna posibilidad.
                </p>
            </div>

            {/* Table - Desktop */}
            <table className="hidden w-full max-w-6xl mx-auto mt-20 border-separate mb:block border-spacing-0">
                <thead>
                    <tr>
                        <th className="pl-6 text-xl font-light text-left text-slate-300">Indicadores</th>
                        {competitors.map((competitor, index) => (
                            <th
                                key={index}
                                className={`min-w-[200px] ${competitor.highlight
                                    ? 'border-2 border-x-[#0053B4] border-t-[#0053B4] border-b-[#0B111D] rounded-t-lg bg-[#0B111D]'
                                    : ''
                                    }`}
                            >
                                <div className="flex items-center justify-center h-20">
                                    {competitor.logo ? (
                                        <img src={competitor.logo} alt={competitor.name} className="py-4" />
                                    ) : (
                                        <span className="pt-4 font-light text-white">{competitor.name}</span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='border-white boder-2'>
                    {comparisons.map((row, rowIndex) => (
                        <tr key={rowIndex} >
                            <td className={`text-left py-2 px-6 text-gray-400 ${rowIndex === 0 ? 'rounded-tl-xl' : ''
                                } ${rowIndex === comparisons.length - 1 ? 'rounded-bl-xl' : ''
                                } bg-[#181D28]`}>
                                {row.label}
                            </td>
                            {row.values.map((value, colIndex) => {
                                const isFirst = colIndex === 0;
                                const isLast = colIndex === row.values.length - 1;
                                const isFirstRow = rowIndex === 0;
                                const isLastRow = rowIndex === comparisons.length - 1;

                                return (
                                    <td
                                        key={colIndex}
                                        className={`px-4 py-4 text-center ${competitors[colIndex].highlight
                                            ? 'border-x-2 border-[#0053B4] text-white bg-[#0B111D]'
                                            : `text-gray-400 bg-[#181D28] ${isLast && isFirstRow ? 'rounded-tr-xl' : ''
                                            } ${isLast && isLastRow ? 'rounded-br-lg' : ''
                                            }`
                                            } ${isLastRow && competitors[colIndex].highlight
                                                ? 'border-b-2 pb-6 border-[#0053B4]'
                                                : ''
                                            }`}
                                    >
                                        {value}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Table - Mobile */}
            <div className='flex flex-row items-center mb:hidden' >
                {/* TopTier Data */}
                <div className='flex flex-col border-2 rounded-lg border-[#0053B4]'>
                    <div className={`${selectedCompetitor == 0 ? 'py-[16px]': 'pt-[12px] pb-[0px]' } `}>
                        <Image src={logoImg} alt='TopTier Trader' loading='lazy' className='object-contain h-8' />
                    </div>
                    {/* TopTier data */}
                    <div className={`w-36 overflow-hidden ${competitors[0].highlight ? ' border-t-0 bg-[#0B111D]' : 'bg-[#181D28]'
                        }`}>
                        {comparisons.map((row, index) => (
                            <div
                                key={index}
                                className="px-4 py-4 border-b border-white border-opacity-10 last:border-b-0"
                            >
                                <div className="mb-1 text-sm font-light text-gray-400">
                                    {row.label}
                                </div>
                                <div className={`text-white text-sm ${competitors[0].highlight ? 'font-normal' : 'font-light'}`}>
                                    {row.values[0]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Comparator */}
                <div className="relative max-w-sm mx-auto my-10">
                    {/* Header with dropdown */}
                    <div className={`rounded-t-lg w-36 overflow-hidden`}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between py-3 bg-[#0B111D]"
                        >
                            {competitorsMb[selectedCompetitor].logo ? (
                                <Image src={competitorsMb[selectedCompetitor].logo} alt={competitorsMb[selectedCompetitor].name} className="h-8" />
                            ) : (
                                <span className="px-3 text-sm font-light text-left text-white">{competitorsMb[selectedCompetitor].name}</span>
                            )}
                            <IoCaretDown className={`text-white transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute w-full bg-[#0B111D] shadow-lg z-10 border border-white rounded-b-lg border-t-0">
                                {competitorsMb.map((competitor, index) => (
                                    <button
                                        key={index}
                                        className="w-full text-left px-4 py-3 text-sm text-white hover:bg-[#181D28] transition-colors font-light"
                                        onClick={() => {
                                            setSelectedCompetitor(index);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {competitor.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Comparison data */}
                    <div className={`rounded-lg w-36 overflow-hidden ${competitorsMb[selectedCompetitor].highlight ? 'border-2 border-[#0053B4] border-t-0 bg-[#0B111D]' : 'bg-[#181D28]'
                        }`}>
                        {comparisonsMb.map((row, index) => (
                            <div
                                key={index}
                                className="px-4 py-4 border-b border-white border-opacity-10 last:border-b-0"
                            >
                                <div className="mb-1 text-sm font-light text-gray-400">
                                    {row.label}
                                </div>
                                <div className={`text-white text-sm ${competitorsMb[selectedCompetitor].highlight ? 'font-normal' : 'font-light'}`}>
                                    {row.values[selectedCompetitor]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LATAMComparationSection