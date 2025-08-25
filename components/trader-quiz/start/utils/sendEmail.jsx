import { API_URL } from "@/constants/global";

export async function sendMail({propObj}) {

    const {name, avatar, accountSize, addOns, link, imageLink, email, templateId} = propObj;

    const url = `${API_URL}/trader-quiz/submit`;
    const data = {
        name: name,
        avatar: avatar,
        accountSize: accountSize,
        addOns: addOns,
        link: link,
        imageLink: imageLink,
        mail: email,
        templateId: templateId
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            console.error('Response not ok, status:', response.status);
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();;
        
        return responseData; // Return the response data
        
    } catch (error) {
        console.error('=== Error occurred ===');
        console.error('Error type:', error.constructor.name);
        console.error('Error message:', error.message);
        console.error('Full error object:', error);
        
        // Log network-specific errors
        if (error instanceof TypeError && error.message.includes('fetch')) {
            console.error('This appears to be a network error - check your internet connection');
        }
        
        throw error; // Re-throw the error so calling code can handle it
    } 
}