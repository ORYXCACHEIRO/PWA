import notificationSucess from '../../components/Notifications/Success';
import notificationError from '../../components/Notifications/Error';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const HotelCreate = () => {

    const {register, handleSubmit} = useForm();
    const settings = settings => editData(settings);

    const editData = (data) => {

        data.comodaties = [];
        data.languages = [];
        data.category = 2;
        data.main_image = "aaaaaaaaaaa";
        data.state =  0;
 
        fetch('/hotel', {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Hotel Created");
                <Navigate to="./admin/hotels" />
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
                        <h1 className="text-center text-3xl text-bold p-4">Create Hotel</h1>
                        <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(settings)}>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Name</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('name', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Short Description</label>
                                <textarea className="border-2 p-2 rounded" rows={2} {...register('description', { required: true })}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">About Hotel</label>
                                <textarea className="border-2 p-2 rounded" rows={2} {...register('about_hotel', { required: true })}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Adress</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="street name..." {...register('adress', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Postal Code</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="0000-000" {...register('postalc', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">City</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('city', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Google Maps Iframe</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="" {...register('city_gmaps', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Main Image</label>
                                <input className="border-2 p-2 rounded" type="file"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HotelCreate;