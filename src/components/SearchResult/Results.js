import teste from '../../assets/exterior.jpg';
import { starFilled, starNotFilled} from '../../utils/icons';
import {FaBed} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import AddFav from '../Hotel/AddFav';

const Result = () => {

    let arrayStar = [starFilled, starFilled, starFilled, starFilled, starNotFilled];

    const listItems = arrayStar.map((star, index) =>
        <div key={index}>{star}</div>
    );

    return (
        <div className="ml-4 mr-4">
                <div className="inline-flex pt-12 mr-auto ml-auto flex-wrap w-full justify-center gap-16 pb-10 lg:gap-12"> 
                    
                        <div className="sm:ml-0 ">
                            <div className="bg-purple-500 h-96 w-96 relative sm:right-2 rounded-lg ">
                                <div className="bg-gray-900 h-96 w-96 absolute left-7 top-7 rounded-lg ">
                                    <div className='relative'>
                                        <div className="top-1 right-[0.15rem] absolute">
                                            <AddFav/>
                                        </div>
                                        <Link to="/hotel/1">
                                            <div className="p-10">
                                                <img src={teste} alt="" className=" rounded-xl"/>
                                            </div>
                                            <div className=' -mt-5 flex gap-5 '>
                                                <div className='flex  w-max ml-7  items-center'>
                                                    {listItems}
                                                </div>
                                                <div className=' w-max flex  justify-center items-center gap-2 text-white text-lg font-medium'>
                                                    <span>99</span>
                                                    <FaBed className=' text-purple-400'/>
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <h2 className='text-white font-medium text-2xl ml-7  break-words'>Hotel Cidnaya</h2>
                                                <h2 className='text-purple-400 font-medium text-lg ml-7 '>Santo Tirso</h2>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="sm:ml-0">
                        <div className="bg-purple-500 h-96 w-96 relative sm:right-2">
                            <div className="bg-black h-96 w-96 absolute  left-7 top-7">

                            </div>
                        </div>
                    </div>
                    <div className="sm:ml-0">
                        <div className="bg-purple-500 h-96 w-96 relative sm:right-2">
                            <div className="bg-black h-96 w-96 absolute  left-7 top-7">

                            </div>
                        </div>
                    </div>
                    <div className="sm:ml-0">
                        <div className="bg-purple-500 h-96 w-96 relative sm:right-2">
                            <div className="bg-black h-96 w-96 absolute  left-7 top-7">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Result;