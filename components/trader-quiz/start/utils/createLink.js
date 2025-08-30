import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { sendMail } from './sendEmail';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useTranslation } from 'react-i18next';

import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM.js';

const CURRENT_MONTH = getCurrentUTMMonth();

const firebaseConfig = {
    apiKey: "AIzaSyD4Eaiv3QgIumwAqFEXDgy2SM-H-b3FQk4",
    authDomain: "trader-quiz-be320.firebaseapp.com",
    projectId: "trader-quiz-be320",
    storageBucket: "trader-quiz-be320.appspot.com",
    messagingSenderId: "892177362427",
    appId: "1:892177362427:web:4d8f1d70362046ed08ef5e",
    measurementId: "G-WQET4WD0QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'Trader Quiz');
const db = getFirestore(app);

const accountSizeLinks = {
    "5K": `https://app.toptiertrader.com/buy-challenge/?el=NewTraderQuiz&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=a1e87aed-ea17-47e7-a8de-6aae34b1dc8b`,
    "10K": `https://app.toptiertrader.com/buy-challenge/?el=NewTraderQuiz&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=670ce1e2-70ec-4b6b-9e3f-b8258c187fb1`,
    "25K": `https://app.toptiertrader.com/buy-challenge/?el=NewTraderQuiz&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=522c8b05-078a-4e3c-9762-fd7c0ca0c01e`,
    "50K": `https://app.toptiertrader.com/buy-challenge/?el=NewTraderQuiz&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=d5190cb2-4755-460f-be43-d8a713e4c823`,
    "100K": `https://app.toptiertrader.com/buy-challenge/?el=NewTraderQuiz&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17`,
    "200K": `https://app.toptiertrader.com/buy-challenge/?el=NewTraderQuiz&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=5e938ace-5e27-444f-a38e-ad3a6ea5be12`,
    "300K": `https://app.toptiertrader.com/buy-challenge/?el=NewTraderQuiz&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=9ef2c2db-cbeb-4338-9162-43b4c90761b2`
};

const addonMapping = {
    "Double Leverage": "doubleLeverage",
    "14-Day Payout": "expressPayout",
    "90/10 Profit Split": "higherProfitShare",
    "Weekend Trading": "tradeOnWeekends",
    "Expert Advisor": "EAsAllowed",
    "Economic News": "newsTrading",
    "Reduce Profit Target to 8%": "maxLoss",
    "No Minimum Trading Days": "noMinDays"
};

function generateLink(accountSize, addOns) {
    
    const baseLink = accountSizeLinks[accountSize];
    if (!baseLink) {
        return "";
    }


    const addOnParams = addOns.split(", ")
        .map(addon => {
            const mapped = addonMapping[addon];
            return mapped;
        })
        .filter(Boolean)
        .map(param => `addons=${param}`)
        .join("&");


    const finalLink = addOnParams ? `${baseLink}&${addOnParams}&promo=TRADERQUIZIMREADY` : `${baseLink}&promo=TRADERQUIZIMREADY`;
    
    return finalLink;
}

function CreateLink({ userData, currentLanguage, avatarDescription, translations }) {


    const [t, i18n] = useTranslation('trader_quiz')

    const getAvatarInfo = (finalAvatar) => {

        
        const avatarMap = {
            "Genius Trader": {
                imageLink: "http://cdn.mcauto-images-production.sendgrid.net/b50862ccc2a09aea/ddb1c7c2-43a2-4a55-b05d-fb9fd3d6bfe4/721x1003.png",
                description: t('geniusTraderEmailDesc')
            },
            "Master Trader": {
                imageLink: "http://cdn.mcauto-images-production.sendgrid.net/b50862ccc2a09aea/2776e602-3125-4a24-89fc-325b79a981cd/840x915.png",
                description: t('masterTraderEmailDesc')
            },
            "The Daredevil": {
                imageLink: "http://cdn.mcauto-images-production.sendgrid.net/b50862ccc2a09aea/5a78c851-e53a-4984-b28d-443bdd2e23dd/932x964.png",
                description: t('theDaredevilEmailDesc')
            },
            "The Thinker": {
                imageLink: "http://cdn.mcauto-images-production.sendgrid.net/b50862ccc2a09aea/ed5b24af-189e-4e57-bc91-9c72996c5237/798x1056.png",
                description: t('theThinkerEmailDesc')
            },
            "The Trailblazer": {
                imageLink: "http://cdn.mcauto-images-production.sendgrid.net/b50862ccc2a09aea/9a62b011-4062-4785-a573-9c932657d2a4/969x950.png",
                description: t('theTrailblazerEmailDesc')
            },
            "Zen Trader": {
                imageLink: "http://cdn.mcauto-images-production.sendgrid.net/b50862ccc2a09aea/14a16eed-ea47-4d52-9c44-75e8683c6352/1055x976.png",
                description: t('zenTraderEmailDesc')
            }
        };

        const result = avatarMap[finalAvatar] || { imageLink: "", description: "" };
        return result;
    }

    const [link, setLink] = useState('');

    useEffect(() => {

        
        if (userData?.accountSize && userData?.addOns) {
            const generatedLink = generateLink(userData.accountSize, userData.addOns);
            setLink(generatedLink);
        } else {
            console.warn('Missing userData properties for link generation');
        }
    }, [userData]);

    const handleClick = async (e) => {

        
        // Prevent default if needed
        // e.preventDefault(); // Uncomment if you want to prevent navigation temporarily for testing
        
        if (!userData) {
            console.error('No userData available');
            return;
        }

        const { accountSize, addOns, firstName, avatar, email } = userData;

        // Format data for SendGrid
        const templateId = currentLanguage === "es" ? "d-d7c7fdf1fcce4b8aa3aa7086f7095615" : "d-524a98884b024c2d9651bd29c9b6025f";

        const { imageLink, description } = getAvatarInfo(avatar);


        const attributes = avatarDescription;

        const finalAvatarObj = {
            avatar: avatar,
            description: description,
            attributes: attributes
        };

        const propObj = {
            name: firstName,
            avatar: finalAvatarObj,
            accountSize: accountSize,
            addOns: addOns,
            link: link,
            imageLink: imageLink,
            email: email,
            templateId: templateId
        };

        try {
            // Send email
            await sendMail({ propObj });

        } catch (error) {
            console.error('Error in sendMail:', error);
        }

        // Create a new document in the "users" collection
        try {            
            const docRef = await addDoc(collection(db, "users"), {
                ...userData,
                createdAt: new Date(),
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <a 
            href={link} 
            onClick={handleClick} 
            target='_blank' 
            className='bg-ttorange px-4 flex flex-row rounded-xl hover:cursor-pointer hover:scale-110 transition-all hover:bg-orange-600 text-textPrimary items-center py-2'
        >
            <p>{t('buyNow')}</p>
            <FaArrowRight className='w-4 mb:w-3 mb:h-3 ml-2 h-4' />
        </a>
    );
}

export default CreateLink;