import { useEffect, useState } from 'react';
import {FaUser, FaHotel, FaBook, FaStar} from 'react-icons/fa'

const Homepage = () => {

    const [usersCount, setUsersCount] = useState(0);
    const [hotelCount, setHotelCount] = useState(0);
    const [reservationCount, setReservationCount] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);

    function users(){
        fetch('/users/count', {
                headers: {'Accept': 'application/json'}
        })
        .then((r) => r.json())
        .then((response) => {
                if(response.length>0){
                        setUsersCount(response.length);
                }
                else {
                        setUsersCount(0);
                }
                
        });
    }

    function hotels(){
        fetch('/hotel', {
                headers: {'Accept': 'application/json'}
        })
        .then((r) => r.json())
        .then((response) => {
                if(response.length>0){
                        setHotelCount(response.length);
                }
                else {
                        setHotelCount(0);
                }
                
        });
    }

    function reviews(){
        fetch('/hotel/all-reviews', {
                headers: {'Accept': 'application/json'}
        })
        .then((r) => r.json())
        .then((response) => {
                if(response.length>0){
                        setReviewsCount(response.length);
                } else {
                        setReviewsCount(0);
                }
                
        }).catch((err) => {
                //console.log(err);
        });
    }

    function reservations(){
        fetch('/hotel/all-reservs', {
                headers: {'Accept': 'application/json'}
        })
        .then((r) => r.json())
        .then((response) => {
                if(response.length>0){
                        setReservationCount(response.length);
                } else {        
                        setReservationCount(0);
                }
                
        }).catch((err) => {
                //console.log(err);
        });
    }
    
    useEffect(() => {
        users();
        hotels();
        reviews();
        reservations();
    }, []);

    return(
        <>
            
           <div className="h-full ">
               <div className="flex flex-wrap lg:block  justify-between pt-8">
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Users</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">{usersCount}</h1>
                            <FaUser className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Hotels</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">{hotelCount}</h1>
                            <FaHotel className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Reservations</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">{reservationCount}</h1>
                            <FaBook className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Total Reviews</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">{reviewsCount}</h1>
                            <FaStar className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
               </div>
           </div>
        </>
    )

}

export default Homepage;