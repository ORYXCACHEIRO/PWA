import { useForm } from 'react-hook-form';
import notificationSucess from '../../Notifications/Success';
import notificationError from '../../Notifications/Error';
import {useEffect, useState } from 'react';

const AddWorkHotel = ({fetchHotels, dataa, userid}) => {

    const {register, handleSubmit} = useForm();
    const [hotels, setHotels] = useState([]);

    const addWork = hotel => addWorkStation(hotel);

    const addWorkStation = (data) => {
        
        fetch(`/users/workstation/${userid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Hotel added");
                fetchHotels(dataa.pagination.pageSize, dataa.pagination.current);
            }
            else {
                notificationError('Error adding hotel');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const fetchAPI = () => {

        fetch(`/hotel/`, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {   
            setHotels(response);
        }).catch((err) => {
            notificationError('Error getting hotels');
        });

    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return(
        <>
            <div>
                <form className="pt-5 flex gap-5 sm:pl-5" onSubmit={handleSubmit(addWork)}>
                    <select className="p-2 px-6 border-2 border-gray-800" {...register('hotel', { required: true })}>
                        {hotels.map((item) => {

                           return(<option value={item._id} key={item._id}>{item.name}</option>)

                        })}
                    </select>
                    <button className="bg-green-400 p-3 rounded-lg text-white" type="submit" >
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )

}

export default AddWorkHotel;