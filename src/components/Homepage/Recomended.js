import teste from '../../assets/exterior.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import React, { useState } from "react";
import AddFav from '../Hotel/AddFav';
import HotelRating from '../Hotel/HotelRating';

const Recomended = ({loginStatus}) => {

    const [hotelData, sethotelData] = useState([]);

    useEffect(() => {
        fetch('/hotel/recomended', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(data => sethotelData(data))

    }, []);

    return (
        <>
            <div className="ml-4 mr-4">
                <div>
                    <h1 className="text-gray-900 m-5 ml-8 font-extrabold text-5xl text-center md:text-4xl">Recomendations.</h1>
                </div>
                <div className="inline-flex pt-12 mr-auto ml-auto flex-wrap w-full justify-center gap-16 pb-10 lg:gap-12">

                    {hotelData.map((hotel) => (
                        <div key={hotel._id} className="sm:ml-0 ">
                            <div className="bg-purple-500 h-96 w-96 relative sm:right-2 rounded-lg ">
                                <div className="bg-gray-900 h-96 w-96 absolute left-7 top-7 rounded-lg ">
                                    <div className='relative'>
                                        <div className="top-1 right-[0.15rem] absolute">
                                            <AddFav hotelData={hotel._id} loginStatus={loginStatus} />
                                        </div>
                                        <Link to={`/hotel/${hotel._id}`} >
                                    
                                            <div className="p-10">
                                                <img src={teste} alt="" className=" rounded-xl" />
                                            </div>
                                            <div className=' -mt-5 flex gap-5 '>
                                                <div className='flex  w-max ml-7  items-center'>
                                                <HotelRating category={hotel.category}/>
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <h2 className='text-white font-medium text-2xl m-0 ml-7  break-words '>{hotel.name}</h2>
                                                <h2 className='text-purple-400 font-medium text-lg ml-7 '>{hotel.city}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )

}

export default Recomended;