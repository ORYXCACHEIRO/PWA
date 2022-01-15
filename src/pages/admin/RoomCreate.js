import {Link} from 'react-router-dom';
import notificationSucess from '../../components/Notifications/Success';
import notificationError from '../../components/Notifications/Error';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const RoomCreate = () => {

    var location = useLocation().pathname;
    const {register, handleSubmit} = useForm();
    const settings = settings => editData(settings);
    const { hotelid } = useParams();

    const editData = (data) => {

        data.comodaties = [];
        data.state =  0;
 
        fetch(`/hotel/${hotelid}/rooms/`, {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Room Created");
                <Navigate to={"./admin/hotels/" + hotelid + "/rooms"}/>
            }
            else {
                notificationError('Error editing information');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    return(
        <>
            <ToastContainer/>
            <div className="flex flex-col items-center justify-center  pb-10">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Create Room</h1>
                        <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(settings)}>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Name</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('name', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Short Description</label>
                                <textarea className="border-2 p-2 rounded" rows={2} {...register('descrption', { required: true })}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Adults</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..." {...register('maxAdult', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Children</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..." {...register('maxChildren', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Price per night</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..." {...register('price_per_night', { required: true })}/>
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
            </div>
        </>
    )

}

export default RoomCreate;