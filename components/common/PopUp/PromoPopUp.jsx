'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import bgImgEs from './assets/PromoPopUp/PopUpEs.png'
import bgImgEn from './assets/PromoPopUp/PopUpEn.png'
import { IoClose } from 'react-icons/io5'
import './animations.css'
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM'

function PromoPopUp({ locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const mainLang = locale.split('-')[0]

  useEffect(() => {
    const popupState = localStorage.getItem('FlashSaleAugust')

    if (popupState !== 'closed') {
      setIsVisible(true)
    }
  }, [])

  const handleClosePopup = () => {
    setIsVisible(false)

    localStorage.setItem('FlashSaleAugust', 'closed')
  }

  if (!isVisible) return null

  return (
    <div className="popup-container" data-visible="true">
      <div className="popup-content">
        <button
          className="close-button"
          aria-label="Close popup"
          onClick={handleClosePopup}
        >
          <IoClose size={24} />
        </button>

        <a
          href={`https://app.toptiertrader.com/buy-challenge/?el=FlashSaleAugust_PopUp&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=9f760fbf-d1d6-4236-8cf9-d338961bdf90&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=FASTFUNDING25`}
          target="_blank"
          alt="Promo PopUp by TopTierTrader"
          rel="noopener noreferrer"
        >
          <Image
            src={mainLang === 'es' ? bgImgEs : bgImgEn}
            alt='popup-img'
            width='auto'
            height='auto'
            priority
            className='rounded-lg w-96'
          />
        </a>
      </div>
    </div>
  )
}

export default PromoPopUp