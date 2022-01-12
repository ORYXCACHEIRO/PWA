import { useState, useEffect } from 'react';
import { favStarFilled, favStarNotFilled } from '../../utils/icons';
import { Link } from 'react-router-dom';
import { FaMapMarked, FaCheck } from 'react-icons/fa';



const AddFav = ({ comodityData, hotelData }) => {

    const [isFav, setFav] = useState(false);

    console.log(comodityData.comodities)


    const [comodityRData, setComodityRData] = useState([]);

    const getComodityData = () => {

        fetch(`/hotel/${hotelData._id}/comodities/${comodityData.comodities}`, {
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setComodityRData(data));

    }

    useEffect(() => {
        getComodityData();
    }, []);

    console.log(comodityRData)

    return (
        <>
            
                    <div className='flex items-center gap-2 p-3 text-lg'>
                        <span className='font-medium'>{comodityRData.name}</span>
                    </div>


        </>
    )

}

export default AddFav;