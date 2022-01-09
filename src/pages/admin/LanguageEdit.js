import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer} from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const LanguageEdit = () => {

    const { langid } = useParams();

    const [langData, setLangData] = useState({});
    const {register, handleSubmit} = useForm();
    
    const language = language => editData(language);

    const editData = (data) => {
        fetch(`/languages/${langid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Language Edited");
            }
            else {
                notificationError('Error editing information');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getData = () => {

        fetch(`/languages/${langid}`, {
            headers: {'Accept': 'application/json'},
        })
        .then((response) => response.json())
        .then((response) => {
            setLangData(response);
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
                        <h1 className="text-center text-3xl text-bold p-4">Edit Language</h1>
                        <form className="mx-20 flex-col flex gap-7 " onSubmit={handleSubmit(language)}>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Language Name</label>
                                <input className="border-2 p-2 rounded" type="text" placeholder="example" {...register('name', { required: true })} defaultValue={langData.name || ''}/>
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

export default LanguageEdit;