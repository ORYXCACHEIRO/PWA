import Recomended from "../components/Homepage/Recomended";
import BigImg from "../components/Homepage/big_img";

const Homepage = ({loginStatus}) => {

    return(
        <>
            <BigImg/>
            <Recomended loginStatus={loginStatus}/>
        </>
    )

}

export default Homepage;