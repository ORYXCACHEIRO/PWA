import { useState, useEffect } from 'react';
import { favStarFilled, favStarNotFilled} from '../../utils/icons';
import { Link } from 'react-router-dom';

const AddFav = ({hotelData, loginStatus}) => {

    const [isFav, setFav] = useState(false);
    const [loads, haveLoaded] = useState(false);

    const hotelId = hotelData;

    function changeState(){
        
        if(loginStatus===true){

            if(isFav===false){

                fetch(`/hotel/${hotelId}/favorites`, {
                    headers: {'Content-type': 'application/json'},
                    method: 'POST'
                })
                .then(r => r.json())
                .then((response) => {
                    if(!response){
                        alert('Error adding favorite');
                    } else {
                        setFav(true);
                    }
                });

            } else {

                fetch(`/profile/favorites/${hotelId}`, {
                    headers: {'Content-type': 'application/json'},
                    method: 'DELETE'
                })
                .then(r => r.json())
                .then((response) => {
                    if(response){
                        setFav(false);
                    }
                });

            }

        } else{
            setFav(false);
        }
        
        
    }

    useEffect(() => {

        if(loginStatus===true){

            fetch(`/profile/favorites`, {
                headers: { 'Accept': 'application/json' },
                method: 'GET'
            })
            .then(r => r.json())
            .then((response) => {
                response.map((fav) => {
                    if(fav.id_hotel===hotelId){
                        setFav(true);
                    }
                })
                haveLoaded(true);
            }).catch(() => {
                
            });

        }

    });

    return(
        <>  
        {
            loginStatus 
            ? 
            <button className='rounded-full ' onClick={changeState}>
                {isFav ? favStarFilled : favStarNotFilled}
            </button> 
            :
            <Link to="/signin" className='rounded-full '>
                {favStarNotFilled}
            </Link>    
        }
        </>
    )

}

export default AddFav;