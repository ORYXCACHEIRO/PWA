import mainLogo from '../logo.svg';
import {FaEdit} from 'react-icons/fa';

import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const Profile = () => {

    const {register, handleSubmit} = useForm();

    return(
        <>
            <div className="w-full flex  items-center flex-col p-10 gap-6">
                <div className=" w-3/4 bg-gray-900 h-28 rounded-xl relative flex md:flex-col md:h-max md:items-center">
                    <div className='w-max'>
                        <div className="w-24 h-24 bg-purple-500 rounded-full mt-9 ml-8 md:ml-0 flex items-center justify-center relative">
                            <img src={mainLogo} className="rounded-full" alt=""/>
                            <button type='button' className='absolute bg-gray-800 text-white p-3 rounded-full -top-3 -right-2 border border-white'><FaEdit/></button>
                        </div>
                    </div>
                    <div className='pl-8 md:pl-0 md:pt-5 flex items-end'>
                        <h2 className='text-white text-4xl font-bold mb-4 md:mb-4'>Daniel Faria</h2>
                    </div>
                </div>
                <div className=' h-max w-3/4 rounded-xl flex p-4 lg:flex-col relative flex-wrap lg:flex-nowrap'>
                    
                    <div className='w-2/4 p-4 flex flex-col items-center lg:w-full lg:p-7 '>
                        <h1 className='text-center text-3xl font-medium p-1'>Details</h1>
                        <form className="w-80 flex flex-col gap-6  ">
                            <div className=" flex flex-col gap-1">
                                <label className="font-medium text-xl">Email:</label>
                                <input type="email" {...register('email', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label className="font-medium text-xl">Name:</label>
                                <input type="text" {...register('name', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label className="font-medium text-xl">Last name:</label>
                                <input type="text" {...register('lastname', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-2 mr-auto ml-auto px-12 rounded-lg w-max transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Edit
                            </button>
                        </form>
                    </div>
                    <div className='absolute border-l-2 border-l-purple-500 h-5/6 left-2/4 top-7 lg:border-l-0 lg:border-l-transparent lg:border-b-2 lg:border-b-purple-500 lg:h-0 lg:w-5/6 lg:top-[52%] lg:left-[10%]'></div>
                    <div className='w-2/4 p-4 flex flex-col items-center lg:w-full lg:p-7 '>
                        <h1 className='text-center text-3xl font-medium p-1'>Password</h1>
                        <form className="w-80 flex flex-col gap-7 pt-7">
                            <div className=" flex flex-col gap-1">
                                <label className="font-medium text-xl">New password:</label>
                                <input type="password" {...register('password', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label className="font-medium text-xl">Repeat new passoword:</label>
                                <input type="password" {...register('reppass', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-2 mr-auto ml-auto px-12 rounded-lg w-max transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Edit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;