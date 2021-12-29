import img from '../../assets/exterior.jpg';
import {FaTimes} from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//https://docs.mobiscroll.com/5-13-2/react/datepicker
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions, localePtPT } from '@mobiscroll/react';

setOptions({
    locale: localePtPT,
    theme: 'windows',
    themeVariant: 'light'
});

const Reservation = ({closeModal}) =>  {

    let images = [img, img, img];

    return(
        <>
            <div className='w-full '>
                <div className='flex justify-end p-4'>
                    <button onClick={closeModal} className='text-2xl bg-red-500 p-2 text-white rounded-full transition duration-100 ease-out hover:bg-red-400'><FaTimes/></button>
                </div>
                <div className='flex lg:flex-col '>
                    <div className='w-2/4 lg:w-full'>
                        <Carousel className='p-14 md:p-4' showArrows={true} showThumbs={true}>
                            {
                                images.map((url, index) => (
                                    <div key={index}>
                                        <img src={url} className='rounded-lg' alt=''/>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className='w-2/4 lg:w-full'>
                        <div className='flex flex-col gap-4 p-3 ml-2 '>
                            <h1 className='text-4xl font-bold  text-white '>Quarto Tirsense</h1>
                            <h1 className='text-3xl  text-purple-500 font-bold xl:text-2xl lg:text-3xl sm:text-2xl'>Hotel Cidnay</h1>
                        </div>
                        <div className='flex flex-col mx-5 pt-5'>
                            <h1 className='text-3xl font-bold border-3 border-white  text-white p-2 text-center rounded-t-xl'>Limits</h1>
                            <div className='border-4 border-white rounded-b-xl border-t-0 flex sm:flex-col'>
                                <div className='flex w-2/4 sm:w-full items-center justify-center border-4 border-y-0 border-l-0 sm:border-0 sm:border-b-3'>
                                    <div className='flex flex-col items-center p-5'>
                                        <span className='font-bold text-purple-500 text-xl'>Adults</span>
                                        <span className='font-bold text-white text-6xl'>3</span>
                                    </div>
                                </div>
                                <div className='flex w-2/4 sm:w-full items-center justify-center border-0'>
                                    <div className='flex flex-col items-center p-5'>
                                        <span className='font-bold text-purple-500 text-xl'>Children</span>
                                        <span className='font-bold text-white text-6xl'>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-col lg:gap-5 p-10'>
                    <div className='w-2/4 lg:w-full flex flex-col gap-8 items-center '>
                        <h1 className='text-center font-bold text-white text-2xl pt-2'>Reservation</h1>
                        <form className='flex w-2/4 sm:w-3/4 flex-col gap-5'>
                            <div className='flex flex-col gap-3 w-full'>
                                <label className='text-white font-bold text-lg'>Begin Date</label>
                                <input type="date" className='p-2 w-full rounded-lg'/>
                            </div>
                            <div className='flex flex-col gap-3 w-full'>
                                <label className='text-white font-bold text-lg'>Ending Date</label>
                                <input type="date" className='p-2 w-full rounded-lg'/>
                            </div>
                            <div className='flex flex-col gap-3 w-full'>
                                <label className='text-white font-bold text-lg'>Adults</label>
                                <select className='p-2 w-full rounded-lg'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3 w-full'>
                                <label className='text-white font-bold text-lg'>Children</label>
                                <select className='p-2 w-full rounded-lg'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <button type='submit' className='bg-purple-500 font-medium p-2 mt-3 text-white rounded-lg transition ease-in duration-100 hover:bg-purple-400'>Send</button>
                        </form>
                    </div>
                    <div className='w-2/4 lg:w-full flex items-center p-20 md:p-5'>
                        <Datepicker
                            controls={['calendar']}
                            display="inline"
                            className='rounded-lg'
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Reservation;