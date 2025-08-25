'use client';

import React, { useEffect, useState } from "react"
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import ElementInGrill from "./ElementInGrill"
import FiltersDesktop from "./FiltersDesktop"
import FiltersMobile from "./FiltersMobile"
import { bgImageStyle } from "@/constants/styles"
import { STRAPI_DB_URL } from '@/constants/global';


const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Main({ initialTranslations, initialItemList }) {
    const { t, i18n } = useTranslation();
    const [translations, setTranslations] = useState(initialTranslations);
    const [itemList, setItemList] = useState(initialItemList);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(initialTranslations.catAll);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const categories = [
        translations.catAll,
        "Levels",
        translations.catUpdates,
        "FX Summit",
        translations.catMarket,
        translations.catMeet,
        "Traders",
        translations.catTips
    ];

    useEffect(() => {
        const fetchListOfItems = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${STRAPI_DB_URL}/${i18n.language.split('-')[0]}-blog-items?populate=image&pagination[pageSize]=100`);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                const data = result.data;
                const newItemList = data
                    .map((item) => ({
                        image: item.attributes.image.data.length > 0
                            ? item.attributes.image.data[0].attributes.url
                            : item.attributes.image.data.attributes.url,
                        link: item.attributes.link,
                        title: item.attributes.title,
                        description: item.attributes.description,
                        goesIntoCarousel: item.attributes.goesIntoCarousel,
                        tags: item.attributes.tags,
                        specialTag: item.attributes.specialTag,
                        priorityOnCarousel: item.attributes.priorityOnCarousel,
                        createdAt: item.attributes.createdAt,
                    }))
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setItemList(newItemList);
            } catch (error) {
                console.error("Error fetching images", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (i18n.language !== initialTranslations.language) {
            fetchListOfItems();
        }
    }, [i18n.language, initialTranslations.language]);

    useEffect(() => {
        handleCategoryChange();
    }, [selectedCategory, itemList, currentPage]);

    const handleCategoryChange = () => {
        const filteredItems = selectedCategory === translations.catAll
            ? itemList
            : itemList.filter(item => item.tags.includes(selectedCategory));

        // Sort by createdAt first (latest first), then by priorityOnCarousel for items with same date
        const sortedItems = filteredItems.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            
            // Primary sort: by createdAt (newest first)
            if (dateB.getTime() !== dateA.getTime()) {
                return dateB.getTime() - dateA.getTime();
            }
            
            // Secondary sort: by priorityOnCarousel (lower priority number first)
            return a.priorityOnCarousel - b.priorityOnCarousel;
        });

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

        setSortedAndSlicedItems(currentItems);

        setTotalPages(Math.ceil(sortedItems.length / itemsPerPage));
    };

    const [sortedAndSlicedItems, setSortedAndSlicedItems] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <motion.div
            style={bgImageStyle}
            className="flex flex-col mb:mt-0 mb:pb-20 mb:pt-40 -mt-24 pb-14 pt-48 text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <main className="mx-auto w-full max-w-[1200px]">
                <motion.div
                    className="flex flex-row items-center justify-evenly mb-0 mb:mb-10 w-full"
                    variants={titleVariants}
                >
                    <div className="mx-10">
                        <motion.h1
                            className="text-center text-4xl mb:text-center mb:text-5xl font-light text-white"
                            variants={titleVariants}
                        >
                            {translations.titleTwo}
                        </motion.h1>
                        <motion.h2
                            className="mt-8 text-center max-w-[600px] text-lg mb:px-0 mb:text-center mb:text-base text-secondary"
                            variants={titleVariants}
                        >
                            {translations.content} <br className="mb:flex hidden" /> {translations.contentTwo}
                        </motion.h2>
                    </div>
                </motion.div>

                <section className="flex flex-col w-full mb:grid grid-cols-[250px_1fr] px-7">
                    <motion.div
                        className="mb:mt-12"
                        variants={itemVariants}
                    >
                        <FiltersDesktop currentLanguage={i18n.language} categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

                        <div className="px-8 mt-5 w-full">
                            <FiltersMobile currentLanguage={i18n.language} categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                        </div>
                    </motion.div>

                    <div>
                        {isLoading ? (
                            <motion.div
                                className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl"
                                variants={itemVariants}
                            >
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-800 animate-spin dark:text-gray-200 fill-slate-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <p className="text-white ml-3 font-light text-xl mt-5 mb:ml-5 mb:mt-0">Loading Blogs</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="mx-auto"
                                variants={containerVariants}
                            >
                                <div className="flex flex-col mb:flex-row justify-center mb:mr-24 flex-wrap mb:max-w-[800px] gap-1 mb:gap-12 items-center mx-auto">
                                    {sortedAndSlicedItems
                                        .map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="py-5 mb:py-0 max-w-[600px] w-full mb:w-fit"
                                                variants={itemVariants}
                                            >
                                                <ElementInGrill itemData={item} locale={i18n.language} />
                                            </motion.div>
                                        ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Pagination */}
                        <motion.div
                            className="flex justify-center items-center mb-8 mb:-ml-24 mb:mb-0 mb:mt-8"
                            variants={itemVariants}
                        >
                            {/* Previous Arrow */}
                            <motion.button
                                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`mx-2 mb:mx-4 py-1 px-3 rounded ${currentPage === 1
                                        ? 'bg-transparent border border-slate-500 text-slate-500 cursor-not-allowed'
                                        : 'bg-transparent border border-slate-300 text-slate-300 hover:bg-slate-700'
                                    }`}
                                whileHover={currentPage > 1 ? { scale: 1.05 } : {}}
                                whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
                            >
                                ←
                            </motion.button>

                            {/* Page Numbers (1-4) */}
                            {[1, 2, 3, 4].map((pageNum) => (
                                <motion.button
                                    key={pageNum}
                                    onClick={() => paginate(pageNum)}
                                    disabled={pageNum > totalPages}
                                    className={`mx-2 mb:mx-4 py-1 rounded ${currentPage === pageNum
                                            ? 'text-[#0B111D] font-medium bg-white px-4'
                                            : pageNum <= totalPages
                                                ? 'bg-transparent border px-3 border-slate-300 text-slate-300'
                                                : 'bg-transparent border px-3 border-slate-500 text-slate-500 cursor-not-allowed'
                                        }`}
                                    whileHover={pageNum <= totalPages ? { scale: 1.05 } : {}}
                                    whileTap={pageNum <= totalPages ? { scale: 0.95 } : {}}
                                >
                                    {pageNum}
                                </motion.button>
                            ))}

                            {/* Next Arrow */}
                            <motion.button
                                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                                disabled={currentPage >= totalPages}
                                className={`mx-2 mb:mx-4 py-1 px-3 rounded ${currentPage >= totalPages
                                        ? 'bg-transparent border border-slate-500 text-slate-500 cursor-not-allowed'
                                        : 'bg-transparent border border-slate-300 text-slate-300 hover:bg-slate-700'
                                    }`}
                                whileHover={currentPage < totalPages ? { scale: 1.05 } : {}}
                                whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
                            >
                                →
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </motion.div>
    )
}

export default Main;