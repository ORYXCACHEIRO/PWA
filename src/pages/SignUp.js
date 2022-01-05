import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Navigate } from 'react-router'

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [rt, setrt] = useState(false);
    const submit = data => registeruser(data);


    const registeruser = (data) => {
        fetch('http://127.0.0.1:5000/auth/register', {
            headers: { 'Content-type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then((response) => {
                console.log(response.auth);
                if (response.auth) {
                    setrt(true);
                }
                else {
                    alert("Ta dificil")
                }
            });
        if (rt) {
            return <Navigate to='/' />
        }
    }


    return (
        <>
            <div className="">
                <div className="p-8">
                    <h1 className=" text-center text-5xl  font-bold">Sign up.</h1>
                    <div className="mt-10 flex justify-center">
                        <form className="w-80 flex flex-col gap-8" onSubmit={handleSubmit(submit)}>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Email:</label>
                                <input type="email" {...register('email', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Name:</label>
                                <input type="text" {...register('name', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='example' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Last name:</label>
                                <input type="text" {...register('lastName', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='example' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Password:</label>
                                <input type="password" {...register('password', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1 ' placeholder='*********' />
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