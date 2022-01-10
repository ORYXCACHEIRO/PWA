//import { Form, Input, Button } from "antd";
import {FaStar, FaHotel, FaBook} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import DetailsUser from './forms/users/Details';
import { ToastContainer } from 'react-toastify';
import PassUser from './forms/users/Pass';

const UsersDet = () => {

  const location = useLocation().pathname;

  return (
    <>
      <ToastContainer/>
      <div className="flex flex-col items-center">
        <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5">
          <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
            <h1 className="text-center text-3xl text-bold p-4">Details</h1>
            <DetailsUser/>
          </div>
          <div className=" w-2/4  lg:w-full  lg:pb-10 pb-3">
            <h1 className="text-center text-3xl text-bold p-4">Password</h1>
            <PassUser/>
          </div>
        </div>

        <div className=" w-3/4 flex flex-wrap gap-5 justify-evenly pt-10 pb-10">
          <Link to={location + "/reviews"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaStar className='text-yellow-500'/>
              Reviews
          </Link>
          <Link to={location + "/favs"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaHotel className=''/>
              Favs
          </Link>
          <Link to={location + "/reservations"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaBook className=''/>
              Reservations
          </Link>
        </div>

      </div>
    </>
  );
};

export default UsersDet;
