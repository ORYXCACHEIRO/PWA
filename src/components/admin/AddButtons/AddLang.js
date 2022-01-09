import { useForm } from 'react-hook-form';
import notificationSucess from '../../Notifications/Success';
import notificationError from '../../Notifications/Error';

const CreateLang = ({fetchLanguages, dataa}) => {

    const {register, handleSubmit} = useForm();

    const addLangauge = langauge => addLang(langauge);

    const addLang = (data) => {
        fetch('/languages', {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok){
                notificationSucess("Language added");
                fetchLanguages(dataa.pagination.pageSize, dataa.pagination.current);
            }
            else {
                notificationError('Error adding language');
            }
        }).catch((err) => {
            console.log('Error: ' + err);
        });
    }

    return(
        <>
            <div>
                <form className="pt-5 flex gap-5" onSubmit={handleSubmit(addLangauge)} >
                    <input className="p-2 px-6 border" type="text" placeholder="language" {...register('name', { required: true })}/>
                    <button className="bg-green-400 p-3 rounded-lg text-white" type="submit" >
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )

}

export default CreateLang;