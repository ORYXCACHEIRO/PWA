import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const Languagues = ({ languageData, hotelData }) => {



   

    const [languageRData, setLanguageRData] = useState([]);


    const getLanguageRData = () => {

        fetch(`/hotel/${hotelData._id}/languages/${languageData}`, {
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setLanguageRData(data));

    }

    useEffect(() => {
        getLanguageRData();
    }, []);

    console.log(hotelData)
    console.log(languageData)
    console.log(languageRData)

    return (
        <>
            <div className='flex flex-wrap gap-6 md:gap-3 pt-4 justify-center'>

                    <div className='flex items-center gap-2 p-3 text-lg'>
                    <FaCheck />
                        <span className='font-medium'>{languageRData.name || "" }</span>
                    </div>
            </div>
        </>
    )

}

export default Languagues;