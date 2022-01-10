import notificationSucess from '../../../../components/Notifications/Success';
import notificationError from '../../../../components/Notifications/Error';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const DetailsUser = () => {

    const { userid } = useParams();

    const [userData, setUserData] = useState({});
    const {register, handleSubmit} = useForm();
    
    const user = user => editData(user);

    const editData = (data) => {
        fetch(`/users/${userid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("User Edited");
            }
            else {
                notificationError('Error editing user');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getData = () => {

        fetch(`/users/${userid}`, {
            headers: {'Accept': 'application/json'},
        })
        .then((response) => response.json())
        .then((response) => {
            setUserData(response);
        }).catch((err) => {
            notificationError('Error: ' + err);
        });

    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(user)}>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">First Name</label>
                <input className="border-2 p-2 rounded" type="text" placeholder="example"  {...register('name', { required: true })} defaultValue={userData.name || ''}/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Last Name</label>
                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('lastName', { required: true })} defaultValue={userData.lastName || ''}/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Email</label>
                <input className="border-2 p-2 rounded" type="email" placeholder="example@example.com" {...register('email', { required: true })} defaultValue={userData.email || ''}/>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
              </div>
            </form>
        </>
    )

}

export default DetailsUser;