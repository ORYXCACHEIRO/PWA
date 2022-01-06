import {FaTrash} from 'react-icons/fa';
import hotelImg from '../../assets/exterior.jpg';

import { useEffect } from "react";
import React, { useState } from "react";

const Reservations = ({userid}) => {

    const [reservaData, setreservaData] = useState([]);
    
    console.log(userid)
    console.log(userid)

    useEffect(() => {
        fetch(`/profile/reservations/${userid.id}`  , {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => setreservaData(data))

        console.log(reservaData)

    }, []);




    return(
        <>
            <h1 className='text-center text-4xl font-bold p-3'>Reservations</h1>
            {reservaData.map((reserva) => (
            <div key={reserva._id} className=' bg-gray-800  rounded-lg mt-5 p-1'>
                <div className='border-3 border-purple-500 m-4 p-3 rounded-xl flex'>
                    <div className='w-max xl:hidden'>
                        <img src={hotelImg} alt='' className='rounded-xl w-40'/>
                    </div>
                    <div className='w-full flex lg:flex-col lg:gap-3 lg:pt-4'>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5 ml-3 lg:ml-0'>
                            <h1 className='font-bold text-2xl text-center '><span className='text-purple-500'>{reserva.total_price}€ </span></h1>
                            <h1 className='font-bold text-xl text-center text-white'>Santo Tirso</h1>
                        </div>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5  '>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Begins</span> {reserva.begin_date}</h1>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Ends</span> {reserva.end_date}</h1>
                        </div>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5  '>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Adults</span> 2</h1>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Children</span> 0</h1>
                        </div>
                        <div className='w-max lg:w-full flex flex-col justify-center lg:items-center p-5 ml-auto '>
                            <button type='button' className=' bg-red-500 p-4 rounded-full text-white transition duration-100 ease-out hover:bg-red-400 lg:px-28 md:px-14'><FaTrash/></button>
                        </div>
                    </div>
                </div>
            </div>
              ))}
        </>
    )

}

export default Reservations;