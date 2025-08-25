import { cookies } from 'next/headers'
import Image from 'next/image'
import bgImgEs from './assets/CallUs/CallUsEs.png'
import bgImgEn from './assets/CallUs/CallUsEn.png'
import { IoClose } from 'react-icons/io5'
import './animations.css'
import { ENVIRONMENT_URL } from '@/constants/global'


async function closePopup() {
  'use server'
  cookies().set('callUsPopUp', 'closed')
}

function CallUsPopUp({ locale }) {
  const cookieStore = cookies()
  const popupState = cookieStore.get('callUsPopUp')
  const mainLang = locale.split('-')[0]

  if (popupState?.value === 'closed') return null

  return (
    <div className="popup-container" data-visible="true">
      <div className="popup-content">
        <form action={closePopup}>
          <button className="close-button" aria-label="Close popup">
            <IoClose size={24} />
          </button>
        </form>
        <a href={`${ENVIRONMENT_URL}/${locale}/contact`} 
          target="_blank" alt="CallUs by TopTierTrader" rel="noopener noreferrer">
          <Image
            src={mainLang === 'es' ? bgImgEs : bgImgEn}
            alt='popup-img'
            width='auto'
            height='auto'
            priority
            className='w-96 rounded-lg'
          />
        </a>
      </div>
    </div>
  )
}

export default CallUsPopUp