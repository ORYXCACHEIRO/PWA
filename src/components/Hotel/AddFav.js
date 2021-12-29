import { useState } from 'react';
import { favStarFilled, favStarNotFilled} from '../../utils/icons';

const AddFav = () => {

    const [isFav, setFav] = useState(false);

    function changeState(){
        setFav(!isFav);
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