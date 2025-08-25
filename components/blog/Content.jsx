
'use client'

//Images & Icons
import loadingImg from '@/public/img/loadingImg.svg';
import { BsInstagram, BsYoutube, BsTwitterX, BsFacebook, BsTiktok, BsTelegram, BsDiscord } from 'react-icons/bs'
import {STRAPI_DB_URL, ENVIRONMENT_URL} from '@/constants/global';

//Functions & Hooks
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const bgStyle = {
    background: "#0B111D",
    width: "auto",
    height: "auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default function Content({ currentLanguage, params, translations, locale }) {

    //Styles for links
    const linkStyles = "bg-gradient-to-br border z-20 p-6 rounded-lg border-[#717892] from-white/5 to-[#0B111D] p-1 mb:p-2 rounded-lg  h-8 mb:h-12 w-8 mb:w-12 text-slate-300 hover:scale-110 transition-all"


    //Checks if blog content is still loading
    const [isLoading, setIsLoading] = useState(true);

    //Stores the info of the blog from the db
    const [blogInfo, setblogInfo] = useState([]);

    // Transform from country code to language code
    const fixedCurrentLanguage = currentLanguage.split('-')[0];


    //Fetch the blog info from the db
    async function bringblogInfo() {
        setIsLoading(true);
        try {
            const response = await fetch(`${STRAPI_DB_URL}/${fixedCurrentLanguage}-blog-items?filters[link]=${params}&populate=image`);
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            const data = result.data[0].attributes;

            setblogInfo({
                title: data.title,
                tag: data.tags[0],
                specialTag: data.specialTag,
                image: data.image.data.length > 0 ? data.image.data[0].attributes.url : data.image.data.attributes.url,
            });

            

        } catch (error) {
            console.error("Error fetching images", error);
        } finally {
            setIsLoading(false);
        }
    }
            
    useEffect(() => {
        bringblogInfo();
    }, [params]);

    return (
        <>
            <div style={bgStyle} className="flex flex-col -mb-1 mb:mb-0 items-center justify-center px-8 mb:px-0 w-full mb:mt-0 pb-14 -mt-[100px] pt-44 ">

                <div className='flex flex-col max-w-[1100px] items-center -z-5'>
                    {isLoading ? (
                        //Loading	
                        <div className="w-full pt-10  mb:py-10 flex mb:flex-row flex-col justify-center items-center ">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-slate-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <p className="text-slate-300 ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Blog...</p>
                        </div>
                    ) : (
                        //Loaded Content
                        <div className="flex flex-col items-center  relative">

                            {/* Name and Template */}
                            <div className='' >
                                <div className='justify-start w-full mb:px-6'>
                                    {/* Breadcrumbs */}
                                    <p className='w-full text-start text-secondary hidden mb:flex'> <Link href={`${ENVIRONMENT_URL}/${locale} `}> {translations.home} / </Link>  &nbsp;  <Link href={`${ENVIRONMENT_URL}/${locale}/blog `}> {translations.blog} / &nbsp; </Link> <span className='font-medium text-slate-300 cursor-pointer'> {blogInfo.title} </span>  </p>

                                    {/* Tags y Social Media*/}
                                    <div className='flex flex-col mb:flex-row mb-5 mb:mb-0 mx-2 mb:mx-0 items-center mb:items-end mt-2 justify-between'>
                                        {/* Tags */}
                                        <div className='flex flex-row mt-5'>
                                            <div className={blogInfo.specialTag !== null ? 'bg-transparent border border-ttelectricBlue px-10 py-3 mr-2 rounded-lg text-ttelectricBlue' : "hidden"}> {blogInfo.specialTag} </div>
                                            <div className='bg-transparent border mb:border-slate-400 px-4 mb:px-10 mr-3 py-3 rounded-lg text-white mb:text-slate-300 font-light mb:font-medium'>{blogInfo.tag}</div>
                                        </div>

                                        {/* Social Media */}
                                        <div className='hidden mb:flex flex-row  w-full mb:w-2/5 justify-around '>
                                            <Link href="https://www.instagram.com/toptier.trader/?hl=e" target="_blank">
                                                <BsInstagram className={linkStyles} />
                                            </Link>

                                            <Link href="https://www.youtube.com/@toptier.trader" target="_blank">
                                                <BsYoutube className={linkStyles} />
                                            </Link>


                                            <Link href="https://x.com/_toptier_trader" target="_blank">
                                                <BsTwitterX className={linkStyles} />
                                            </Link>

                                            <Link href="https://www.facebook.com/TopTier.Trader/" target="_blank">
                                                <BsFacebook className={linkStyles} />
                                            </Link>

                                            <Link href="https://www.tiktok.com/@toptier.trader" target="_blank">
                                                <BsTiktok className={linkStyles} />
                                            </Link>

                                            <Link href="https://t.me/joinchat_TopTierTrader">
                                                <BsTelegram className={linkStyles} />
                                            </Link>

                                            
                                            <Link href="https://discord.com/invite/WrC2xdZZng">
                                                <BsDiscord className={linkStyles} />
                                            </Link>


                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center mb:mt-12">
                                    <Image decoding='async' width={1280} height={720} alt="main-img-blog" object-fit="cover" src={blogInfo.image ? blogInfo.image : loadingImg} objectFit="cover" className='rounded-lg -mb-14 mb:mb-0' />
                
                                </div>
                            </div>

                        </div>
                    )
                    }
                </div>
            
            </div>
        </>
    )
}





