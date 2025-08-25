'use client'

import logoImg from './assets/logo.svg'
import Image from 'next/image';
import React, { useState } from 'react';
import { IoCaretDown } from "react-icons/io5";

function ComparationSection({locale, translations}) {

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
        { label: translations.size, values: ['100K', '100K', '100K', '100K'] },
        { label: translations.price, values: ['$549', '$561', '$706', '$549'] },
        { label: translations.drawdown, values: [`5% ${translations.daily} | 10% Total`, `5% ${translations.daily} | 10% Total`, `5% ${translations.daily} | 10% Total`, `5% ${translations.daily} | 10% Total`] },
        { label: translations.split, values: [`${translations.up} 90%`, '80%', '80%', '80%'] },
        { label: translations.minimun, values: ['0', '0', '0', '5'] },
        { label: translations.evaluation, values: [`2 ${translations.phase} `, `2 ${translations.phase} `, `2 ${translations.phase} `, `2 ${translations.phase} `] },
        { label: translations.targets, values: [`8% ${translations.phase} 1 | 5% ${translations.phase} 2`, `10% ${translations.phase} 1 | 5% ${translations.phase} 2`, `10% ${translations.phase} 1 | 5% ${translations.phase} 2`, `10% ${translations.phase} 1 | 5% ${translations.phase} 2`] },
        { label: translations.weekends, values: [`${translations.yes}`, `${translations.yes}`, `${translations.yes}`, `${translations.yes}`] },
        { label: translations.frequency, values: [`14 ${translations.days}`, `30 ${translations.days}`, `14 ${translations.days}`, `30 ${translations.days}`] }
    ];

    const comparisonsMb = [
        { label: translations.size, values: ['100K', '100K', '100K'] },
        { label: translations.price, values: ['$561', '$706', '$549'] },
        { label: translations.drawdown, values: [`5% ${translations.daily} | 10% Total`, `5% ${translations.daily} | 10% Total`, `5% ${translations.daily} | 10% Total`] },
        { label: translations.split, values: ['80%', '80%', '80%'] },
        { label: translations.minimun, values: ['0', '0', '5'] },
        { label: translations.evaluation, values: [`2 ${translations.phase} `, `2 ${translations.phase} `, `2 ${translations.phase} `] },
        { label: translations.targets, values: [`10% ${translations.phase} 1 | 5% ${translations.phase} 2`, `10% ${translations.phase} 1 | 5% ${translations.phase} 2`, `10% ${translations.phase} 1 | 5% ${translations.phase} 2`] },
        { label: translations.weekends, values: [`${translations.yes}`, `${translations.yes}`, `${translations.yes}`] },
        { label: translations.frequency, values: [`30 ${translations.days}`, `14 ${translations.days}`, `30 ${translations.days}`]}
    ];

    return (
        <div className="flex flex-col -mt-1 mb:mt-0 pt-10 mb:pt-12 mb:pb-36 pb-16 items-center w-full bg-[#0B111D] ">
            <div className="max-w-[1100px] mb:w-full flex flex-col items-center">
                <h3 className='text-white font-light text-4xl text-center max-w-[500px] '> {translations.title}</h3>
                <p
                    className="pt-5 text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892] max-w-[350px] mb:max-w-[500px]"
                >
                {translations.desc}
                </p>
            </div>

            {/* Table - Desktop */}
            <table className="w-full hidden mb:block max-w-6xl mt-20 mx-auto border-separate border-spacing-0">
                <thead>
                    <tr>
                        <th className="text-left font-light text-xl text-slate-300 pl-6">{translations.indicators}</th>
                        {competitors.map((competitor, index) => (
                            <th
                                key={index}
                                className={`min-w-[200px] ${competitor.highlight
                                    ? 'border-2 border-x-[#0053B4] border-t-[#0053B4] border-b-[#0B111D] rounded-t-lg bg-[#0B111D]'
                                    : ''
                                    }`}
                            >
                                <div className="flex justify-center items-center h-20">
                                    {competitor.logo ? (
                                        <img src={competitor.logo} alt={competitor.name} className="py-4" />
                                    ) : (
                                        <span className="text-white pt-4 font-light">{competitor.name}</span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='boder-2 border-white'>
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
            <div className='mb:hidden flex flex-row items-center' >
                {/* TopTier Data */}
                <div className='flex flex-col border-2 rounded-lg border-[#0053B4]'>
                    <div className={`${selectedCompetitor == 0 ? 'py-[16px]': 'pt-[12px] pb-[0px]' } `}>
                        <Image src={logoImg} alt='TopTier Trader' loading='lazy' className='h-8 object-contain' />
                    </div>
                    {/* TopTier data */}
                    <div className={`w-36 overflow-hidden ${competitors[0].highlight ? ' border-t-0 bg-[#0B111D]' : 'bg-[#181D28]'
                        }`}>
                        {comparisons.map((row, index) => (
                            <div
                                key={index}
                                className="px-4 py-4 border-b border-opacity-10 border-white last:border-b-0"
                            >
                                <div className="text-gray-400 text-sm font-light mb-1">
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
                <div className="max-w-sm my-10 mx-auto relative">
                    {/* Header with dropdown */}
                    <div className={`rounded-t-lg w-36 overflow-hidden`}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between py-3 bg-[#0B111D]"
                        >
                            {competitorsMb[selectedCompetitor].logo ? (
                                <Image src={competitorsMb[selectedCompetitor].logo} alt={competitorsMb[selectedCompetitor].name} className="h-8" />
                            ) : (
                                <span className="text-white text-left px-3 text-sm font-light">{competitorsMb[selectedCompetitor].name}</span>
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
                                className="px-4 py-4 border-b border-opacity-10 border-white last:border-b-0"
                            >
                                <div className="text-gray-400 text-sm font-light mb-1">
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

export default ComparationSection