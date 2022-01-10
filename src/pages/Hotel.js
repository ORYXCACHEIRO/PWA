import teste from '../assets/exterior.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FaMapMarked, FaCheck} from 'react-icons/fa';
import { useEffect } from "react";
import React, { useState } from "react";

import Rooms from '../components/Hotel/Rooms';
import Review from '../components/Hotel/Review';
import ReviewForm from '../components/Hotel/ReviewForm';
import AddFav from '../components/Hotel/AddFav';
import HotelRating from '../components/Hotel/HotelRating';
import { useParams } from 'react-router-dom';


const Hotel = ({loginStatus}) => {

    const { hotelid } = useParams();
    
    const [userData, setUserData] = useState([]);
    const [reviewData, setReviewData] = useState([]);

    const getHotelData = () => {

        fetch(`/hotel/${hotelid}`  , {
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => setUserData(data));

    }

    const getHotelReviews = () => {

        fetch(`/hotel/${hotelid}/reviews`  , {
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => setReviewData(data));

    }

    useEffect(() => {
        getHotelData();
        getHotelReviews();
    }, []);


    let images = [teste, teste, teste];

    return(
        <>
            <div>
                <div className="flex px-5 lg:flex-col">
                    <div className="w-2/4 lg:w-full">
                        <Carousel className='p-14' showArrows={true} showThumbs={true}>
                            {
                                images.map((url, index) => (
                                    <div key={index}>
                                        <img src={url} className='rounded-lg'/>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className='w-2/4 lg:w-full'>
                        <div>
                            <div className=' flex justify-end'>
                            <AddFav hotelData={userData._id} loginStatus={loginStatus} />
                            </div>
                            <div className='flex flex-col gap-4 p-3 ml-2 '>
                                <h1 className='text-5xl font-bold  text-purple-500 xl:text-4xl lg:text-5xl sm:text-4xl m-0'>{userData.name}</h1>
                                <h1 className='text-3xl  text-gray-800 font-bold xl:text-2xl lg:text-3xl sm:text-2xl m-0'>{userData.city}</h1>
                            </div>
                            <div className='flex ml-3 p-2 gap-3'>
                                <div className='flex items-center'>
                                    <HotelRating category={userData.category}/>
                                </div>
                            </div>
                            <div className='p-2 ml-3'>
                                <h1 className='flex items-center gap-4 text-xl sm:text-lg'><FaMapMarked/> <span className='font-medium'>{userData.adress} {userData.postalc}</span></h1>
                            </div>
                        </div>
                        <div className='p-5 mt-3'>
                            <h1 className='font-bold text-2xl '>Small Information :</h1>
                            <p className='pt-5 text-xl font-medium'>
                                {userData.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex px-5 md:flex-col'>
                    <div className=' w-2/4 px-5 md:w-full md:py-3'>
                        <h1 className='text-4xl font-bold p-2 md:text-2xl text-center'>Comodities offered :</h1>
                        <div className='flex flex-wrap gap-6 md:gap-3 pt-4 justify-center'>
                            <div className='flex items-center gap-2 p-3 text-lg'>
                                <FaCheck/>
                                <span className='font-medium'>Wifi</span>
                                <div className='bg-green-300 rounded-3xl px-3 py-1'>
                                    <span className='text-green-800 font-medium'>Free</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 p-3 text-lg'>
                                <FaCheck/>
                                <span className='font-medium'>Spa</span>
                                <div className='bg-gray-300 rounded-3xl px-3 py-1'>
                                    <span className='text-gray-700 font-medium'>Extra Charge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-2/4 px-5 md:w-full md:py-3'>
                        <h1 className='text-4xl font-bold p-2 md:text-2xl text-center'>Staff speaks :</h1>
                        <div className='flex flex-wrap gap-6 md:gap-3 pt-4 justify-center'>
                            <div className='flex items-center gap-2 p-3 text-lg'>
                                <FaCheck/>
                                <span className='font-medium'>English</span>
                            </div>
                            <div className='flex items-center gap-2 p-3 text-lg'>
                                <FaCheck/>
                                <span className='font-medium'>French</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex px-5 justify-center pt-20 md:pt-10'>
                    <div className=' w-3/4 '>
                        <h1 className='text-4xl font-bold p-2 md:text-2xl text-center'>Rooms :</h1>
                        <div className='pt-3 flex flex-col gap-6'>
                            <Rooms/>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col items-center gap-5  px-5 mt-20'>
                    <h1 className='text-4xl font-bold p-2 md:text-2xl text-center'>Reviews :</h1>
                    <div className=' w-3/4 flex flex-col gap-10'>
                        <div className='p-2  flex flex-col gap-8'>
                        {reviewData.map((review) => (
                            <Review reviewData={review}  key={review._id}/>
                        ))}
                        </div>
                        { loginStatus && <ReviewForm  userData={userData}/>}
                    </div>
                </div>
            </div>
        </>
    )

} 

export default Hotel;