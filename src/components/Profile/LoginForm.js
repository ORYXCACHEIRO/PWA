import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import React, { useState } from "react";

const LoginForm =  ({  }) => {
    
    const { register, handleSubmit } = useForm();

    const submit = data => edituser(data);

    const edituser = (data) => {

        fetch('/profile/alt-password', {
            headers: { 'Content-type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then(r => {

        });
            
    }

    return(
        <>
                    <div className='w-2/4 p-4 flex flex-col items-center lg:w-full lg:p-7 '>
                        <h1 className='text-center text-3xl font-bold p-2'>Password</h1>
                        <form onSubmit={handleSubmit(submit)} className="w-80 flex flex-col gap-7 pt-7">
                            <div className=" flex flex-col gap-1">
                                <label className="font-medium text-xl">New password:</label>
                                <input type="password" {...register('password', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='password' />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label className="font-medium text-xl">Repeat new password:</label>
                                <input type="password" {...register('nPassword', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='password' />
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-2 mr-auto ml-auto px-12 rounded-lg w-max transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Edit
                            </button>
                        </form>
                    </div>
        </>
    )

}

export default LoginForm;