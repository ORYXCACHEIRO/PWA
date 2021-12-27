import { useState } from 'react';
import {FaCalendar, FaTimes} from 'react-icons/fa';
import Modal from 'react-modal';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img from '../../assets/exterior.jpg';

const Rooms = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    let images = [img, img, img];


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
       
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <>
            <div className='flex bg-gray-800 lg:flex-col lg:gap-3 lg:pt-4 rounded-xl gap-5'>
                <div className=' w-max lg:w-full flex flex-col justify-center ml-6 lg:ml-0'>
                    <h1 className='font-bold text-2xl text-center break-words'><span className='text-purple-500'>Quarto Tirsense</span></h1>
                    <h1 className='font-bold text-xl text-center text-white'>Hotel Cidnay</h1>
                </div>
                <div className=' w-max lg:w-full flex flex-col justify-center '>
                    <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Max Adults</span> 2</h1>
                    <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Max Children</span> 0</h1>
                </div>
                <div className='w-max lg:w-full flex flex-col justify-center lg:items-center p-5 ml-auto '>
                    <button type='button' onClick={openModal} className='flex items-center gap-1 font-medium bg-cyan-600 p-4 rounded-full text-white transition duration-100 ease-out hover:bg-cyan-400 lg:px-28 md:px-14'>
                        Check Dates <FaCalendar/>
                    </button>
                </div>
                
            </div>

            <div className=' flex bg-gray-800 lg:flex-col lg:gap-3 lg:pt-4 rounded-xl gap-5'>
                <div className=' w-max lg:w-full flex flex-col justify-center ml-6 lg:ml-0'>
                    <h1 className='font-bold text-2xl text-center '><span className='text-purple-500'>Quarto Tirsense</span></h1>
                    <h1 className='font-bold text-xl text-center text-white'>Hotel Cidnay</h1>
                </div>

                <div className=' w-max lg:w-full flex flex-col justify-center  '>
                    <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Max Adults</span> 2</h1>
                    <h1 className='font-bold text-lg text-center text-white'><span className='text-purple-500'>Max Children</span> 0</h1>
                </div>
                <div className='w-max lg:w-full flex flex-col justify-center lg:items-center p-5 ml-auto '>
                    <button type='button' onClick={openModal} className='flex items-center gap-1 font-medium bg-cyan-600 p-4 rounded-full text-white transition duration-100 ease-out hover:bg-cyan-400 lg:px-28 md:px-14'>
                        Check Dates <FaCalendar/>
                    </button>
                </div>
            </div>

            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} ariaHideApp={false} className="w-3/4 bg-purple-500 rounded-xl  " overlayClassName="z-[2]  fixed lg:items-baseline lg:p-3   lg:overflow-y-scroll  top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-80 flex justify-center items-center">
                <div className='w-full '>
                    <div className='flex justify-end p-4'>
                        <button onClick={closeModal} className='text-2xl bg-red-500 p-2 text-white rounded-full transition duration-100 ease-out hover:bg-red-400'><FaTimes/></button>
                    </div>
                    <div className='flex lg:flex-col p-5'>
                        <div className='w-2/4 lg:w-full'>
                            <Carousel className='p-14 md:p-4' showArrows={true} showThumbs={true}>
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
                            <div className='flex flex-col gap-4 p-3 ml-2 '>
                                <h1 className='text-4xl font-bold  text-white '>Quarto Tirsense</h1>
                                <h1 className='text-3xl  text-gray-800 font-bold xl:text-2xl lg:text-3xl sm:text-2xl'>Hotel Cidnay</h1>
                            </div>
                            <div className='flex flex-col mx-5 pt-5'>
                                <h1 className='text-3xl font-bold border-3 border-white  text-white p-2 text-center rounded-t-xl'>Limits</h1>
                                <div className='border-4 border-white rounded-b-xl border-t-0 flex sm:flex-col'>
                                    <div className='flex w-2/4 sm:w-full items-center justify-center border-4 border-y-0 border-l-0 sm:border-0 sm:border-b-3'>
                                        <div className='flex flex-col items-center p-5'>
                                            <span className='font-bold text-gray-800 text-xl'>Adults</span>
                                            <span className='font-bold text-white text-6xl'>3</span>
                                        </div>
                                    </div>
                                    <div className='flex w-2/4 sm:w-full items-center justify-center border-0'>
                                        <div className='flex flex-col items-center p-5'>
                                            <span className='font-bold text-gray-800 text-xl'>Children</span>
                                            <span className='font-bold text-white text-6xl'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 flex lg:flex-col'>
                        <div className='w-2/4 lg:w-full border-2 border-blue-500'>
                            <h1 className='text-center font-bold text-white text-2xl'>Reservation</h1>
                            <input type="date"/>
                        </div>
                        <div className='w-2/4 lg:w-full border-2 border-red-500'>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )

}

export default Rooms;