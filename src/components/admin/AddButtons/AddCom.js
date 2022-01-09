import { useForm } from 'react-hook-form';
import notificationSucess from '../../Notifications/Success';
import notificationError from '../../Notifications/Error';

const CreateCom = ({fetchLanguages, dataa}) => {

    const {register, handleSubmit} = useForm();

    const addComodity = com => addCom(com);

    const addCom = (data) => {
        fetch('/comodities', {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Comodity added");
                fetchLanguages(dataa.pagination.pageSize, dataa.pagination.current);
            }
            else {
                notificationError('Error adding comodity');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    return(
        <>
            <div>
                <form className="pt-5 flex gap-5 sm:pl-5" onSubmit={handleSubmit(addComodity)}>
                    <input className="p-2 px-6 border-2 border-gray-800" type="text" placeholder="comodity" {...register('name', { required: true })}/>
                    <select className="p-2 px-6 border-2 border-gray-800" {...register('free', { required: true })}>
                        <option value="1">Free</option>
                        <option value="0">Extra</option>
                    </select>
                    <button className="bg-green-400 p-3 rounded-lg text-white" type="submit" >
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )

}

export default CreateCom;