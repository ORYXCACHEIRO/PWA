import { useState } from 'react';
import {FaCalendar} from 'react-icons/fa';
import Modal from 'react-modal';

import Reservation from './Reservation';

const Rooms = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);

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

            

            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} ariaHideApp={false} className="w-3/4 bg-gray-800 rounded-xl ml-auto mr-auto border-0" overlayClassName="z-[2] fixed  overflow-y-scroll p-5  top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-80">
                <Reservation closeModal={closeModal}/>
            </Modal>
        </>
    )

}

export default Rooms;