import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const {register, handleSubmit} = useForm();

    return(
        <>
            <div className="">
                <div className="p-8">
                    <h1 className=" text-center text-5xl  font-bold">Sign in.</h1>
                    <div className="mt-10 flex justify-center">
                        <form className="w-80 flex flex-col gap-10">
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Email:</label>
                                <input type="email" {...register('email', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Password:</label>
                                <input type="password" {...register('password', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1 ' placeholder='*********'/>
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-3 rounded-lg transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Sign In
                            </button>
                            <div className='flex flex-col gap-1'>
                                <p className='text-base font-medium text-center'>Don't have an account? <Link to="/signup" className='text-purple-500'>Sign up here</Link></p>
                                <p className='text-base font-medium text-center'>Forgot your passoword? Click <Link to="" className='text-purple-500'>here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignIn;