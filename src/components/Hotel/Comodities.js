import { useState, useEffect } from 'react';
import { favStarFilled, favStarNotFilled} from '../../utils/icons';
import { Link } from 'react-router-dom';
import { FaMapMarked, FaCheck } from 'react-icons/fa';



const AddFav = ({comodityData}) => {

    const [isFav, setFav] = useState(false);

    


    return(
        <>  
             <div className=' w-2/4 px-5 md:w-full md:py-3'>
                        <h1 className='text-4xl font-bold p-2 md:text-2xl text-center'>Comodities offered :</h1>
                        <div className='flex flex-wrap gap-6 md:gap-3 pt-4 justify-center'>
                            <div className='flex items-center gap-2 p-3 text-lg'>
                                <FaCheck />
                                <span className='font-medium'>Wifi</span>
                                <div className='bg-green-300 rounded-3xl px-3 py-1'>
                                    <span className='text-green-800 font-medium'>Free</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 p-3 text-lg'>
                                <FaCheck />
                                <span className='font-medium'>Spa</span>
                                <div className='bg-gray-300 rounded-3xl px-3 py-1'>
                                    <span className='text-gray-700 font-medium'>Extra Charge</span>
                                </div>
                            </div>
                        </div>
                    </div>

        </>
    )

}

export default AddFav;