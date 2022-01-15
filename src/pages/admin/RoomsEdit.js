import {FaPhotoVideo, FaBook, FaWifi} from 'react-icons/fa';
import {Link, useLocation, useParams} from 'react-router-dom';
import notificationSucess from '../../components/Notifications/Success';
import notificationError from '../../components/Notifications/Error';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import Select from 'react-select'

const RoomsEdit = () => {

    var location = useLocation().pathname;
    const { hotelid, roomid } = useParams();
    const [roomData, setRoomData] = useState({});
    const {register, handleSubmit} = useForm();
    const [selectedValue, setSelectedValue] = useState(roomData.state || 0);  
    const room = roommm => editData(roommm);

    if(location.substring(location.length-1, location.length)==="/"){
        location = location.slice(0, -1);
    }

    const editData = (data) => {

        data.state = selectedValue;
        console.log(data);

        fetch(`/hotel/${hotelid}/rooms/${roomid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                getData();
                notificationSucess("Room Edited");
            }
            else {
                notificationError('Error editing room');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getData = () => {

        fetch(`/hotel/${hotelid}/rooms/${roomid}`, {
            headers: {'Accept': 'application/json'},
        })
        .then((response) => response.json())
        .then((response) => {
            setRoomData(response);
            setSelectedValue(response.state);
        }).catch((err) => {
            notificationError('Error: ' + err);
        });

    }

    const handleChangeState = e => {
        setSelectedValue(e.value);
    }

    const options = [
        { value: roomData.state, label: (roomData.state===1 ? "Visible": "Not Visible" ) },
        { value: 0, label: 'Not Visible' },
        { value: 1, label: 'Visible' }
    ];

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <ToastContainer/>
            <div className="flex flex-col items-center justify-center  pb-10">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Edit Room</h1>
                        <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(room)}>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Name</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('name', { required: true })} defaultValue={roomData.name || ''}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Short Description</label>
                                <textarea className="border-2 p-2 rounded" rows={2} {...register('descrption', { required: true })} defaultValue={roomData.descrption || ''}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Adults</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..." {...register('maxAdult', { required: true })} defaultValue={roomData.maxAdult || 0}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Children</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..." {...register('maxChildren', { required: true })} defaultValue={roomData.maxChildren || 0}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Price per night</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..." {...register('price_per_night', { required: true })} defaultValue={roomData.price_per_night || 0}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">State</label>
                                <Select options={options} isClearable={false} isSearchable={false} value={options.filter(obj => obj.value === selectedValue)} onChange={handleChangeState}/>
                            </div>
                            <div className="flex gap-2 sm:flex-col sm:gap-6">
                                <button type="submit" className="bg-gray-800 mx-4 p-3 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600  w-2/4 sm:w-full">Edit</button>
                                <Link to={(location + "/..")} className=' bg-indigo-500 mx-4 p-3 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-indigo-400 text-center w-2/4 sm:w-full'>
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