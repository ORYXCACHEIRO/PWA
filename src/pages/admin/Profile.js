import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer} from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const Profile = () => {

    const {register, handleSubmit} = useForm();
    
    const settings = settings => editData(settings);
    const altPassword = pass => editPass(pass);

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

    const editPass = (data) => {
        fetch('/profile/alt-password', {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Profile Edited");
            }
            else {
                notificationError('Error editing password');
            }
        }).catch((err) => {
            notificationError(err);
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
            console.log('Error: ' + err);
        });

    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <ToastContainer/>
            <div className="flex flex-col items-center pb-10">
                <div className=" border-2 flex w-3/4 flex-col h-max mt-5">
                    <div className=" w-full h-max pb-10 ">
                        <h1 className="text-center text-3xl text-bold p-4">Details</h1>
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
                    </div>
                    <div className=" w-full  pb-10 ">
                        <h1 className="text-center text-3xl text-bold p-4">Password</h1>
                        <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(altPassword)}>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">New password</label>
                                <input className="border-2 p-2 rounded" type="password" placeholder="" {...register('password', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Repeat Password</label>
                                <input className="border-2 p-2 rounded" type="password" placeholder="" {...register('nPassword', { required: true })}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Profile;