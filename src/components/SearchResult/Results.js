import teste from '../../assets/exterior.jpg';
import { starFilled, starNotFilled} from '../../utils/icons';
import {FaBed} from 'react-icons/fa';

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
                                    <div className="top-2 right-1 absolute">
                                        <button className='text-purple-400 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9  w-9" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        </button>
                                    </div>
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