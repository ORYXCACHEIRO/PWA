import Filter from "../components/SearchResult/Filter";
import Result from "../components/SearchResult/Results";
import { useEffect } from "react";
import React, { useState } from "react";


const { search } = window.location;
const query = new URLSearchParams(search).get('s');




const SearchResPage = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/search/hotel/' + query , {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => setUserData(data))

    }, []);



return (
    <>
        <div className="mt-10">
            <h1 className="font-bold text-5xl text-center">Search result with <span className="text-purple-500">{query}</span>.</h1>
        </div>
        <h1></h1>
        <div className="pt-10 flex md:flex-col">
            <div className=" w-1/4 xl:w-max md:w-full">
                <Filter />
            </div>
            <div className=" w-3/4 md:w-full">
                <Result hoteis={userData}  />
            </div>
        </div>
    </>
)

}

export default SearchResPage;