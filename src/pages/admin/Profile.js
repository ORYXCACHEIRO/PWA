import { ToastContainer} from 'react-toastify';
import DetailsProfile from './forms/profile/Details';
import PassProfile from './forms/profile/Pass';

const Profile = () => {


    return(
        <>
            <ToastContainer/>
            <div className="flex flex-col items-center pb-10">
                <div className=" border-2 flex w-3/4 flex-col h-max mt-5">
                    <div className=" w-full h-max pb-10 ">
                        <h1 className="text-center text-3xl text-bold p-4">Details</h1>
                        <DetailsProfile/>
                    </div>
                    <div className=" w-full  pb-10 ">
                        <h1 className="text-center text-3xl text-bold p-4">Password</h1>
                        <PassProfile/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Profile;