import { useForm } from 'react-hook-form';
import notificationSucess from '../../Notifications/Success';
import notificationError from '../../Notifications/Error';
import {useEffect, useState} from 'react';

const AddLanguage = ({fetchLang, dataa, hotelid}) => {

    const {register, handleSubmit} = useForm();
    const [langs, setLangs] = useState([]);

    const addCom = com => addComo(com);

    const addComo = (data) => {
        fetch(`/hotel/${hotelid}/languages/`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Language added");
                fetchLang(dataa.pagination.pageSize, dataa.pagination.current);
            }
            else {
                notificationError('Error adding language');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getComs = () => {
        fetch(`/languages/`, {
            headers: { 'Accept': 'application/json' }
        })
        .then((response) => response.json())
        .then((response) =>{
            setLangs(response);
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    useEffect(() => {
        getComs();
    },[]);

    return(
        <>
            <div>
                <form className="pt-5 flex gap-5" onSubmit={handleSubmit(addCom)}>
                    <select className="p-2 px-6" {...register('language', { required: true })}>
                        {langs.map((item) => (
                            <option value={item._id} key={item._id}>{item.name}</option>    
                        ))} 
                    </select>
                    <button className="bg-green-400 p-3 rounded-lg text-white">
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )

}

export default AddLanguage;