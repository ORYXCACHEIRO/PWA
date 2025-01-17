import { FaTrash } from 'react-icons/fa';
import teste from '../../assets/exterior.jpg';

import { Popconfirm } from 'antd';


import { useEffect } from "react";
import React, { useState } from "react";

const Reviews = ({ userid, reviewData }) => {


    const [hotelData, setHotelData] = useState([])

    useEffect(() => {
        fetch(`/hotel/${reviewData.id_hotel}`, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setHotelData(data))

    }, []);




    function handleDelete(id) {
        console.log(id)
        fetch(`/profile/reviews/${id}`, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(console.log("response"))

    }



    return (
        <>

            <div key={reviewData._id} className=' bg-gray-800   rounded-lg mt-5 p-1'>
                <div className='border-3 border-white m-4 p-3 rounded-xl flex'>
                    <div className='w-max xl:hidden'>
                        <img src={teste} alt='' className='rounded-xl w-40' />
                    </div>
                    <div className='w-full flex lg:flex-col lg:gap-3 lg:pt-4'>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5 ml-3 lg:ml-0'>
                            <h1 className='font-bold text-2xl text-center '><span className='text-white'>{hotelData.name}</span></h1>
                            <h1 className='font-bold text-xl text-center text-purple-500'>{reviewData.coment}</h1>
                        </div>
                        <div className='w-max lg:w-full flex flex-col justify-center lg:items-center p-5 ml-auto '>
                            <Popconfirm size="middle" title="Sure to delete?" onConfirm={() => handleDelete(reviewData._id)}>
                                <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
                            </Popconfirm>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Reviews;