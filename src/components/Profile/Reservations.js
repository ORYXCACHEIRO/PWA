import hotelImg from '../../assets/exterior.jpg';
import { Popconfirm } from 'antd';

const Reservations = ({ reservaData }) => {


    function handleDelete(id){
        console.log(id)
        fetch(`/profile/reservations/${id}`, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(console.log("response"))
        
    }

    return (
        <>

            <div key={reservaData._id} className=' bg-gray-800  rounded-lg mt-5 p-1'>
                <div className='border-3 border-purple-500 m-4 p-3 rounded-xl flex'>
                    <div className='w-max xl:hidden'>
                        <img src={hotelImg} alt='' className='rounded-xl w-40' />
                    </div>
                    <div className='w-full flex lg:flex-col lg:gap-3 lg:pt-4'>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5 ml-3 lg:ml-0'>
                            <h1 className='font-bold text-2xl text-center '><span className='text-purple-500'>{reservaData.total_price}€ </span></h1>
                            <h1 className='font-bold text-xl text-center text-white'>Santo Tirso</h1>
                        </div>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5  '>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Begins</span> {reservaData.begin_date}</h1>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Ends</span> {reservaData.end_date}</h1>
                        </div>
                        <div className=' w-max lg:w-full flex flex-col justify-center px-5  '>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Adults</span> 2</h1>
                            <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Children</span> 0</h1>
                        </div>
                        <div className='w-max lg:w-full flex flex-col justify-center lg:items-center p-5 ml-auto '>
                         
                        </div>


                        <Popconfirm size="middle" title="Sure to delete?" onConfirm={() => handleDelete(reservaData._id)}>
                            <button className='bg-red-500 p-2 rounded-xl text-white font-medium btn'>Delete</button>
                        </Popconfirm>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Reservations;