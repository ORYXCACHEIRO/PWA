import {FaArrowUp, FaArrowDown} from 'react-icons/fa';

const Filter = () => {
    return (
        <>
            <div className="bg-gray-900 w-80 rounded-xl ml-auto mr-auto flex flex-col mt-10 md:w-3/4 md:mt-5 xl:ml-5 md:ml-auto">
                <div className="p-3">
                    <div className="m-2">
                        <h1 className="text-3xl font-bold pl-3 text-white border-b-white border-b-3 pb-2 ">Filter by :</h1>
                    </div>
                </div>
                <div className="p-3 flex flex-col">
                    <div className=" m-2 text-white border-white border-3  rounded-lg ">
                        <h1 className="text-2xl font-bold pl-3 text-white2 m-2 ">Name</h1>
                        <div className="border-t-white border-t-2 flex  gap-3 p-3 flex-col">
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order <FaArrowUp/></span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order <FaArrowDown/></span>
                            </div>
                        </div>
                    </div>
                    <div className=" m-2 text-white border-white border-3  rounded-lg ">
                        <h1 className="text-2xl font-bold pl-3 text-white2 m-2 ">Comodities</h1>
                        <div className="border-t-white border-t-2 flex  gap-3 p-3 flex-col overflow-y-auto h-32 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100">
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order</span>
                            </div>
                        </div>
                    </div>
                    <div className=" m-2 text-white border-white border-3  rounded-lg ">
                        <h1 className="text-2xl font-bold pl-3 text-white2 m-2 ">Languages</h1>
                        <div className="border-t-white border-t-2 flex  gap-3 p-3 flex-col overflow-y-auto h-32 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100">
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order</span>
                            </div>
                        </div>
                    </div>
                    <div className=" m-2 text-white border-white border-3  rounded-lg ">
                        <h1 className="text-2xl font-bold pl-3 text-white2 m-2 ">Rating</h1>
                        <div className="border-t-white border-t-2 flex  gap-3 p-3 flex-col overflow-y-auto h-32 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100">
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='appearance-none ml-2 h-5 w-5 bg-white rounded-md checked:border-2 checked:border-purple-500 checked:bg-check checked:bg-purple-500 '/>
                                <span className='flex items-center gap-2 text-xl'>Order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;