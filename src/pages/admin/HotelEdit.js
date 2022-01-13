import {FaStar, FaPhotoVideo, FaWifi, FaLanguage, FaBed} from 'react-icons/fa';
import {Link, useLocation, useParams } from 'react-router-dom';
import notificationSucess from '../../components/Notifications/Success';
import notificationError from '../../components/Notifications/Error';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import Select from 'react-select'

const HotelEdit = () => {

    var location = useLocation().pathname;
    const { hotelid } = useParams();

    const [hotelData, setHotelData] = useState({});
    const {register, handleSubmit} = useForm();
    const [selectedValue, setSelectedValue] = useState(hotelData.recomended || 0);   
    const [selectedValue2, setSelectedValue2] = useState(hotelData.state || 0);  
    const hotel = hotellll => editData(hotellll);

    if(location.substring(location.length-1, location.length)==="/"){
        location = location.slice(0, -1);
    }

    const editData = (data) => {

        data.main_image = "aaaaaaaaaaa";
        data.recomended = selectedValue;
        data.state = selectedValue2;
        console.log(data);

        fetch(`/hotel/${hotelid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                getData();
                notificationSucess("Hotel Edited");
            }
            else {
                notificationError('Error editing hotel');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getData = () => {

        fetch(`/hotel/${hotelid}`, {
            headers: {'Accept': 'application/json'},
        })
        .then((response) => response.json())
        .then((response) => {
            setHotelData(response);
            setSelectedValue(response.recomended);
            setSelectedValue2(response.state)
        }).catch((err) => {
            notificationError('Error: ' + err);
        });

    }

    const handleChangeRecomended = e => {
        setSelectedValue(e.value);
    }

    const handleChangeState = e => {
        setSelectedValue2(e.value);
    }

    const options = [
        { value: hotelData.recomended, label: (hotelData.recomended===1 ? "Yes": "No" ) },
        { value: 0, label: 'No' },
        { value: 1, label: 'Yes' }
    ]

    const options2 = [
        { value: hotelData.state, label: (hotelData.state===1 ? "Visible": "Not Visible" ) },
        { value: 0, label: 'Not Visible' },
        { value: 1, label: 'Visible' }
    ]

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <ToastContainer/>
            <div className="flex flex-col items-center justify-center  pb-10">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Edit Hotel</h1>
                        <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(hotel)}>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Name</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('name', { required: true })} defaultValue={hotelData.name || ''}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Short Description</label>
                                <textarea className="border-2 p-2 rounded" rows={2} {...register('description', { required: true })} defaultValue={hotelData.description || ''}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">About Hotel</label>
                                <textarea className="border-2 p-2 rounded" rows={2} {...register('about_hotel', { required: true })} defaultValue={hotelData.about_hotel || ''}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Adress</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="street name..." {...register('adress', { required: true })} defaultValue={hotelData.adress || ''}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Postal Code</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="0000-000" {...register('postalc', { required: true })} defaultValue={hotelData.postalc || ''}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">City</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('city', { required: true })} defaultValue={hotelData.city || ''}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Google Maps Iframe</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="" {...register('city_gmaps', { required: true })} defaultValue={hotelData.city_gmaps || ''}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Main Image</label>
                                <input className="border-2 p-2 rounded" type="file"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Category</label>
                                <select className="border-2 p-2 rounded" {...register('category', { required: true })}>
                                    <option defaultValue={hotelData.category} className='bg-gray-800 text-white'>{hotelData.category}</option>
                                    <option defaultValue={1}>1</option>
                                    <option defaultValue={2}>2</option>
                                    <option defaultValue={3}>3</option>
                                    <option defaultValue={4}>4</option>
                                    <option defaultValue={5}>5</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Recommended</label>
                                <Select options={options} isClearable={false} isSearchable={false} value={options.filter(obj => obj.value === selectedValue)} onChange={handleChangeRecomended}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">State</label>
                                <Select options={options2} isClearable={false} isSearchable={false} value={options2.filter(obj => obj.value === selectedValue2)} onChange={handleChangeState}/>
                            </div>
                            <div className="flex gap-2 sm:flex-col sm:gap-6">
                                <button type="submit" className="bg-gray-800 mx-4 p-3 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600  w-2/4 sm:w-full">Edit</button>
                                <Link to="/admin/hotels" className=' bg-indigo-500 mx-4 p-3 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-indigo-400 text-center w-2/4 sm:w-full'>
                                    Back to Hotels
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className=" w-3/4 flex flex-wrap gap-10 justify-evenly pt-10 pb-10">
                    <Link to={location + "/gallery"} className="hidden w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
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