import {FaStar, FaPhotoVideo, FaWifi, FaLanguage, FaBed} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';

const HotelEdit = () => {

    const location = useLocation().pathname;

    return(
        <>
            <div className="flex flex-col items-center justify-center  pb-10">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Edit Hotel</h1>
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
                                <label className="font-medium text-lg">About Hotel</label>
                                <textarea className="border-2 p-2 rounded" rows={2}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Adress</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="street name..."/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Postal Code</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="0000-000"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">City</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Google Maps Iframe</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder=""/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Main Image</label>
                                <input className="border-2 p-2 rounded" type="file"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">State</label>
                                <select className="border-2 p-2 rounded">
                                    <option value={0}>Not visible</option>
                                    <option value={1}>Visible</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className=" w-3/4 flex flex-wrap gap-10 justify-evenly pt-10 pb-10">
                    <Link to={location + "/reviews"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaStar className='text-yellow-500'/>
                        Reviews
                    </Link>
                    <Link to={location + "/gallery"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaPhotoVideo className=''/>
                        Gallery
                    </Link>
                    <Link to={location + "/comodities"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaWifi className=''/>
                        Comodities
                    </Link>
                    <Link to={location + "/languages"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaLanguage className=''/>
                        Languages
                    </Link>
                    <Link to={location + "/rooms"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
                        <FaBed className=''/>
                        Rooms
                    </Link>
                </div>
            </div>
        </>
    )

}

export default HotelEdit;