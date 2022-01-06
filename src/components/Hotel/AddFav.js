import { useState } from 'react';
import { favStarFilled, favStarNotFilled} from '../../utils/icons';
import { useEffect } from "react";


const AddFav = ({hotelData}) => {

    const [isFav, setFav] = useState(false);

    const hotelId = hotelData







    function changeState(){
        setFav(!isFav)
        fetch(`/hotel/${hotelId}/favorites`, {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify()
        })
        .then(r => r.json())
        .then((response) => {
            if(response.auth){
            } else {
                alert('Erro ao adicionar Favorite');
            }
        });

    }
    return(
        <>
            <button className='rounded-full ' onClick={changeState}>
                {isFav ? favStarFilled : favStarNotFilled}
            </button>
        </>
    )

}

export default AddFav;