import ReactStars from "react-rating-stars-component";
import { starFilled, starNotFilled } from '../../utils/icons';

const HotelRating = ({category}) => {

    switch(category){
        case 0:
            return (<ReactStars count={5} fullIcon={starFilled} emptyIcon={starNotFilled}  size={25} activeColor="#ffd700" value={category} edit={false}/>)
        case 1:
            return (<ReactStars count={5} fullIcon={starFilled} emptyIcon={starNotFilled} size={25} activeColor="#ffd700" value={category} edit={false}/>)
        case 2:
            return (<ReactStars count={5} fullIcon={starFilled} emptyIcon={starNotFilled} size={25} activeColor="#ffd700" value={category} edit={false}/>)
        case 3:
            return (<ReactStars count={5} fullIcon={starFilled} emptyIcon={starNotFilled} size={25} activeColor="#ffd700" value={category} edit={false}/>)
        case 4:
            return (<ReactStars count={5} fullIcon={starFilled} emptyIcon={starNotFilled} size={25} activeColor="#ffd700" value={category} edit={false}/>)
        case 5:
            return (<ReactStars count={5} fullIcon={starFilled} emptyIcon={starNotFilled} size={25} activeColor="#ffd700" value={category} edit={false}/>)
        default:
            return (<ReactStars count={5} fullIcon={starFilled} emptyIcon={starNotFilled} size={25} activeColor="#ffd700" value={0} edit={false}/>)
    }

}

export default HotelRating;