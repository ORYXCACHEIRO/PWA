const Search = () => {

    return(
        <>
            <div className="w-full flex">
                <div className="w-full flex items-center justify-center">
                    <input type="text" placeholder="hotel..." className="border-3 border-purple-400 rounded-3xl h-12 w-4/5 ml-4 pl-3 lg:ml-12 sm:ml-0 focus:outline-none focus:ring-3 focus:ring-purple-700 focus:border-transparent" />
                    <button className="shadow-lg transition duration-300 ease-in-out bg-purple-900 font-bold text-lg p-3 pl-4 pr-4 rounded-3xl text-white m-5 hover:bg-gray-700 lg:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )

}

export default Search;