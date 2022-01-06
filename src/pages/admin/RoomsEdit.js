import {FaPhotoVideo, FaBook, FaWifi} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';

const RoomsEdit = () => {

    const location = useLocation().pathname;

    return(
        <>
            <div className="flex flex-col items-center justify-center  pb-10">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Edit Room</h1>
                        <form className="mx-20 flex-col flex gap-7 ">
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Name</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Short Description</label>
                                <textarea className="border-2 p-2 rounded" rows={2}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Adults</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..."/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Children</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..."/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Price per night</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..."/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">State</label>
                                <select className="border-2 p-2 rounded">
                                    <option value={0}>Not visible</option>
                                    <option value={1}>Visible</option>
                                </select>
                            </div>
                            <div className="flex gap-2 sm:flex-col sm:gap-6">
                                <button type="submit" className="bg-gray-800 mx-4 p-3 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600  w-2/4 sm:w-full">Edit</button>
                                <Link to="/admin/hotels/1/rooms" className=' bg-indigo-500 mx-4 p-3 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-indigo-400 text-center w-2/4 sm:w-full'>
                                    Back to Rooms
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className=" w-3/4 flex flex-wrap gap-10 justify-evenly pt-10 pb-10">
                    <Link to={location + "/gallery"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaPhotoVideo className=''/>
                        Gallery
                    </Link>
                    <Link to={location + "/reservations"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaBook className=''/>
                        Reservations
                    </Link>
                    <Link to={location + "/comodities"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaWifi className=''/>
                        Comodities
                    </Link>
                </div>
            </div>
        </>
    )

}

export default RoomsEdit;