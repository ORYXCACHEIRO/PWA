import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import notificationSucess from '../../../../components/Notifications/Success';
import notificationError from '../../../../components/Notifications/Error';

const DetailsProfile = () => {

    const {register, handleSubmit} = useForm();
    const settings = settings => editData(settings);
    const [profileData, setProfileData] = useState({});

    const editData = (data) => {
        fetch('/profile/settings', {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Profile Edited");
            }
            else {
                notificationError('Error editg information');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getData = () => {

        fetch('/profile/settings', {
            headers: {'Accept': 'application/json'},
        })
        .then((response) => response.json())
        .then((response) => {
            setProfileData(response);
        }).catch((err) => {
            notificationError('Error: ' + err);
        });

    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(settings)}>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-lg">First Name</label>
                    <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('name', { required: true })} defaultValue={profileData.name || ''}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-lg">Last Name</label>
                    <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('lastName', { required: true })} defaultValue={profileData.lastName || ''}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-lg">Email</label>
                    <input className="border-2 p-2 rounded" type="email" placeholder="example@example.com" {...register('email', { required: true })} defaultValue={profileData.email || ''}/>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
                </div>
            </form>
        </>
    )

}

export default DetailsProfile;