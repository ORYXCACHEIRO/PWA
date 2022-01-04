import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Navigate } from 'react-router'
const SignIn = () => {

    const { register, handleSubmit } = useForm();
    const [rt, setrt] = useState(false);
    const submit = data => login(data);

    const login = (data) => {
        fetch('http://127.0.0.1:5000/auth/login', {
            headers: { 'Content-type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then((response) => {
                console.log(response);
                if (response) {
                    setrt(true);
                }
                else {
                    alert("Ta dificil")
                }
            });


    }

    if (rt) {
        return <Navigate to='/' />
    }

    return (
        <>
            <div className="">
                <div className="p-8">
                    <h1 className=" text-center text-5xl  font-bold">Sign in.</h1>
                    <div className="mt-10 flex justify-center">
                        <form className="w-80 flex flex-col gap-10" onSubmit={handleSubmit(submit)} >
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Email:</label>
                                <input type="email" {...register('email', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1' placeholder='email@email.com' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="font-medium text-xl">Password:</label>
                                <input type="password" {...register('password', { required: true })} className='border-3 border-purple-500 rounded-lg pl-2 p-1 ' placeholder='*********' />
                            </div>
                            <button type="submit" className='bg-purple-500 text-white font-medium p-3 rounded-lg transition duration-100 ease-out hover:ease-in hover:bg-purple-300'>
                                Sign In
                            </button>
                            <div className='flex flex-col gap-1'>
                                <p className='text-lg font-medium text-center'>Don't have an account? Sign up <Link to="/signup" className='text-purple-500'>here</Link></p>
                                <p className='text-lg font-medium text-center'>Forgot your passoword? Click <Link to="/forgotpass" className='text-purple-500'>here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignIn;