import { useForm } from 'react-hook-form';
import notificationSucess from '../../Notifications/Success';
import notificationError from '../../Notifications/Error';
import {useEffect, useState} from 'react';

const AddComodityRoom = ({fetchCom, dataa, hotelid, roomid}) => {

    const {register, handleSubmit} = useForm();
    const [coms, setComs] = useState([]);

    const addCom = com => addComo(com);

    const addComo = (data) => {
        fetch(`/hotel/${hotelid}/rooms/${roomid}/comodities/`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Comodity added");
                fetchCom(dataa.pagination.pageSize, dataa.pagination.current);
            }
            else {
                notificationError('Error adding comodity');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    const getComs = () => {
        fetch(`/comodities/`, {
            headers: { 'Accept': 'application/json' }
        })
        .then((response) => response.json())
        .then((response) =>{
            setComs(response);
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
                    <select className="p-2 px-6" {...register('comodity', { required: true })}>
                        {coms.map((item) => (
                            <option value={item._id} key={item._id}>{item.name}</option>    
                        ))}   
                    </select>
                    <button type='submit' className="bg-green-400 p-3 rounded-lg text-white">
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )

}

export default AddComodityRoom;
