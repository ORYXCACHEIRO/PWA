import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Navigate } from 'react-router'


const Search = () => {


    const handleSubmit = data => search(data);

    const search = (data) => {
 
        console.log(data);

     //   this.props.history.push('/search/${data}');
   //     <Redirect to={`/search/${match.params.course}/home`} />
///${data} to={`/search/:query`}/
    }
    return (
        <>
            <form method="get" action="/search/:query" onSubmit={handleSubmit}>
                <div className="w-full flex">
                    <div className="w-full flex items-center justify-center">
                        <input type="text" name="s" placeholder="hotel..." className="border-3 border-purple-400 rounded-3xl h-14 w-4/5 ml-4 pl-3 font-bold lg:ml-16 md:ml-0 focus:outline-none focus:ring-3 focus:ring-purple-700 focus:border-transparent" />
                        <button type="submit"  className="shadow-lg transition duration-300 ease-in-out bg-purple-900 font-bold text-lg p-3 pl-4 pr-4 rounded-3xl text-white m-5 hover:bg-gray-700 lg:mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )

}



export default Search;