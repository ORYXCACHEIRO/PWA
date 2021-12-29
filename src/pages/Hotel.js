import teste from '../assets/exterior.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FaMapMarked, FaBed, FaCheck} from 'react-icons/fa';
import { starFilled, starNotFilled} from '../utils/icons';

import Rooms from '../components/Hotel/Rooms';
import Review from '../components/Hotel/Review';
import ReviewForm from '../components/Hotel/ReviewForm';
import AddFav from '../components/Hotel/AddFav';


const Hotel = () => {

    let arrayStar = [starFilled, starFilled, starFilled, starFilled, starNotFilled];

    const listItems = arrayStar.map((star, index) =>
        <div key={index}>{star}</div>
    );

    let images = [teste, teste, teste];

    return(
        <>
            <div >

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
                                <AddFav/>
                            </div>
                            <div className='flex flex-col gap-4 p-3 ml-2 '>
                                
                                <h1 className='text-5xl font-bold  text-purple-500 xl:text-4xl lg:text-5xl sm:text-4xl'>Hotel Cidnayaaaaaaa</h1>
                                <h1 className='text-3xl  text-gray-800 font-bold xl:text-2xl lg:text-3xl sm:text-2xl'>Santo Tirso</h1>
                            </div>
                            <div className='flex ml-3 p-2 gap-3'>
                                <div className='flex items-center'>
                                    {listItems}
                                </div>
                                <div className=' w-max flex  justify-center items-center gap-2 text-gray-800 text-xl font-bold'>
                                    <span>99</span>
                                    <FaBed className=' text-purple-400'/>
                                </div>
                            </div>
                            <div className='p-2 ml-3'>
                                <h1 className='flex items-center gap-4 text-xl sm:text-lg'><FaMapMarked/> <span className='font-medium'>Rua da Poupa nº33 3º Traseiras 4780-528, Santo Tirso</span></h1>
                            </div>
                        </div>
                        <div className='p-5 mt-3'>
                            <h1 className='font-bold text-2xl '>Small Information :</h1>
                            <p className='pt-5'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                            <Review/>
                        </div>
                        <ReviewForm/>
                    </div>
                </div>
            </div>
        </>
    )

} 

export default Hotel;