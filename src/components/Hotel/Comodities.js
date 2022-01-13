import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const AddFav = ({ comodityData, hotelData }) => {

    const [comodityRData, setComodityRData] = useState([]);

    console.log(comodityRData)

    const getComodityData = () => {

        fetch(`/hotel/${hotelData._id}/comodities/${comodityData.comodity}`, {
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => setComodityRData(data));

    }

    useEffect(() => {
        getComodityData();
    }, []);

    return (
        <>  
            {comodityRData.free==1 ?
            <div className='flex items-center gap-2 p-3 text-lg'>
                <FaCheck />
                <span className='font-medium'>{comodityRData.name}</span>
                <div className='bg-green-300 rounded-3xl px-3 py-1'>
                    <span className='text-green-800 font-medium'>Free</span>
                </div>
            </div>
            :
            <div className='flex items-center gap-2 p-3 text-lg'>
                <FaCheck />
                <span className='font-medium'>{comodityRData.name}</span>
                <div className='bg-gray-300 rounded-3xl px-3 py-1'>
                    <span className='text-gray-700 font-medium'>Extra Charge</span>
                </div>
            </div>
            }
        </>
    )

}

export default AddFav;