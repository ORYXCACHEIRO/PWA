import { FaTrash } from 'react-icons/fa';
import teste from '../../assets/exterior.jpg';


import { useEffect } from "react";
import React, { useState } from "react";

const Favorites =  ({ favoriteData}) => {

    const [userData, setuserData] = useState([]);
    const [hotelData, setHotelData] = useState([]);

    useEffect(() => {
        fetch(`/profile/${favoriteData.id_user}`, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setuserData(data))

            fetch(`/hotel/${favoriteData.id_hotel}`  , {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            })
            .then(response => response.json())
            .then(data => setHotelData(data))

    }, []);


    return(
        <>


           

            <div className=' bg-purple-500   rounded-lg mt-5 p-1'>
                <div className='border-3 border-white m-4 p-3 rounded-xl flex'>
                    <div className='w-max xl:hidden'>
                        <img src={teste} alt='' className='rounded-xl w-40'/>
                    </div>
                    <div className='w-full flex lg:flex-col lg:gap-3 lg:pt-4'>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5 ml-3 lg:ml-0'>
                            <h1 className='font-bold text-2xl text-center '><span className='text-gray-800'>{hotelData.name}</span></h1>
                            <h1 className='font-bold text-xl text-center text-white'>{hotelData.city}</h1>
                        </div>
                        <div className='w-max lg:w-full flex flex-col justify-center lg:items-center p-5 ml-auto '>
                            <button type='button' className=' bg-red-500 p-4 rounded-full text-white transition duration-100 ease-out hover:bg-red-400 lg:px-28 md:px-14'><FaTrash/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Favorites;