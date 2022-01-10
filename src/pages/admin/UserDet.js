//import { Form, Input, Button } from "antd";
import {FaStar, FaHotel, FaBook, FaBriefcase} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import DetailsUser from './forms/users/Details';
import { ToastContainer } from 'react-toastify';
import PassUser from './forms/users/Pass';
import {useState} from 'react';

const UsersDet = () => {

  var location = useLocation().pathname;

  const [role, setRole] = useState(0);

  if(location.substring(location.length-1, location.length)==="/"){
    location = location.slice(0, -1);
  }

  return (
    <>
      <ToastContainer/>
      <div className="flex flex-col items-center">
        <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5">
          <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
            <h1 className="text-center text-3xl text-bold p-4">Details</h1>
            <DetailsUser setRole={setRole}/>
          </div>
          <div className=" w-2/4  lg:w-full  lg:pb-10 pb-3">
            <h1 className="text-center text-3xl text-bold p-4">Password</h1>
            <PassUser/>
          </div>
        </div>

        <div className=" w-3/4 flex flex-wrap gap-5 justify-evenly pt-10 pb-10">
          {role===0 && 
          <Link to={location + "/reviews"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaStar className='text-yellow-500'/>
              Reviews
          </Link>
          }
          {role===0 && 
          <Link to={location + "/favs"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaHotel className=''/>
              Favs
          </Link>
          }
          {role===0 && 
          <Link to={location + "/reservations"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaBook className=''/>
              Reservations
          </Link>
          
          }
          {role===1 && 
          <Link to={location + "/workstations"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaBriefcase className=''/>
              Workstations
          </Link>
          }
        </div>

      </div>
    </>
  );
};

export default UsersDet;
