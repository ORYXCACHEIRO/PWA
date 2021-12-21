import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const ForgotPass = () => {

    const {register, handleSubmit} = useForm();

    return(
        <>
            <div className="">
                <div className=" p-28">
                    <h1 className=" text-center text-5xl  font-bold">Forgot Password.</h1>
                    <div className="mt-10 flex justify-center">
                        <form className="w-80 flex flex-col gap-10">
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Email:</label>
                                <input type="email" {...register('email', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com'/>
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-3 rounded-lg transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Send
                            </button>
                            <div className='flex '>
                                <p className='text-lg font-medium text-center'>If the email exists a link will be sent to it</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass;