import notificationSucess from '../../../../components/Notifications/Success';
import notificationError from '../../../../components/Notifications/Error';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const PassUser = () => {

    const { userid } = useParams();

    const {register, handleSubmit} = useForm();

    const altPassword = pass => editPass(pass);

    const editPass = (data) => {
        fetch(`/users/alt-password/${userid}`, {
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

    return(
        <>
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
        </>
    )

}

export default PassUser;