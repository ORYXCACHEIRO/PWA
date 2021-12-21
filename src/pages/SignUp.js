import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {register, handleSubmit} = useForm();

    return(
        <>
            <div className="">
                <div className="p-8">
                    <h1 className=" text-center text-5xl  font-bold">Sign up.</h1>
                    <div className="mt-10 flex justify-center">
                        <form className="w-80 flex flex-col gap-8">
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Email:</label>
                                <input type="email" {...register('email', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Name:</label>
                                <input type="text" {...register('name', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='example'/>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Last name:</label>
                                <input type="text" {...register('lastname', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='example'/>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Password:</label>
                                <input type="password" {...register('password', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1 ' placeholder='*********'/>
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-3 rounded-lg transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Sign Up
                            </button>
                            <div className='flex flex-col gap-1'>
                                <p className='text-lg font-medium text-center'>Already have an account? <Link to="/signin" className='text-purple-500'>Click here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignUp;