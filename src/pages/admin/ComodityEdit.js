import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer} from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const ComodityEdit = () => {

    const { comid } = useParams();

    const [comData, setComData] = useState({});
    const {register, handleSubmit} = useForm();
    
    const comodity = com => editData(com);

    const editData = (data) => {
        fetch(`/comodities/${comid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Comodity Edited");
            }
            else {
                notificationError('Error editing information');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getData = () => {

        fetch(`/comodities/${comid}`, {
            headers: {'Accept': 'application/json'},
        })
        .then((response) => response.json())
        .then((response) => {
            setComData(response);
        }).catch((err) => {
            notificationError('Error: ' + err);
        });

    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <ToastContainer/>
            <div className="flex flex-col items-center justify-center h-full">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Edit Comodity</h1>
                        <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(comodity)}>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Comodity Name</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder="example"  {...register('name', { required: true })} defaultValue={comData.name || ''}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Comodity Type</label>
                            <select className="border-2 p-2 rounded" {...register('free', { required: true })}>
                                <option value={comData.free || 0} selected="selected" className='bg-gray-800 text-white'>{comData.free===1 ? "Free" : "Extra"}</option>
                                <option value="1">Free</option>
                                <option value="0">Extra</option>
                            </select>
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

export default ComodityEdit;