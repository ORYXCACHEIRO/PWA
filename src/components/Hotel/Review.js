import teste from '../../assets/exterior.jpg';
import HotelRating from './HotelRating';

import { useEffect,useState } from "react";

const Review = ({ reviewData }) => {

    const [userData, setuserData] = useState([]);

    useEffect(() => {
        fetch(`/profile/${reviewData.id_user}`, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => setuserData(data))

    }, []);

    return (
        <>

                <div className='flex gap-5 sm:justify-center'>
                    <div className='sm:hidden'>
                        <img src={teste} className='w-24 h-24  rounded-full' alt='' />
                    </div>
                    <div className='w-3/4 '>
                        <div className=' p-2 flex flex-col gap-1 md:gap-4'>
                            <div className='flex md:flex-col h-max items-end md:items-baseline gap-2'>
                                <span className='font-bold text-xl'>{userData.name}</span>
                                <span className='font-medium '>{reviewData.review_date}</span>
                            </div>
                            <div className='flex'>
                                <HotelRating category={reviewData.review}/>
                            </div>
                        </div>
                        <div >
                            <p className='font-medium text-2xl  break-words '>{reviewData.coment}</p>
                        </div>
                    </div>
                </div>
        </>
    )

}

export default Review;
