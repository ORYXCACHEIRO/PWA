import {useForm} from 'react-hook-form';
import { useState } from "react";

const ForgotPass = () => {

    const {register, handleSubmit} = useForm();
    const submit = data => recoverPass(data);

    const url = window.location.href 
    let key = null;
    if(url)
    {
       key = url.split('/')[5];
       console.log(key)
    }


    const recoverPass = (data) => {
        console.log(data)
        console.log("ganza")
        fetch(`/auth/recover/${key}`, {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((response) => {
            console.log(response)
        });
    }


   
    return(
        <>
            <div className="">
                <div className=" p-28">
                    <h1 className=" text-center text-5xl  font-bold">Recover Password.</h1>
                    <div className="mt-10 flex justify-center">
                        <form className="w-80 flex flex-col gap-10" onSubmit={handleSubmit(submit)} >
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">New Password:</label>
                                <input type="password" {...register('password', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder=''/>
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-3 rounded-lg transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Send
                            </button>
                            <div className='flex '>
                                <p className='text-lg font-medium text-center'>Choose the new Password</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass;