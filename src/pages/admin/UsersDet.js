//import { Form, Input, Button } from "antd";
import {FaStar, FaHotel, FaBook} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';

const UsersDet = () => {

  const location = useLocation().pathname;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5">
          <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
            <h1 className="text-center text-3xl text-bold p-4">Details</h1>
            <form className="mx-20 flex-col flex gap-7 ">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">First Name</label>
                <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Last Name</label>
                <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Email</label>
                <input className="border-2 p-2 rounded" type="email" placeholder="example@example.com"/>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
              </div>
            </form>
          </div>
          <div className=" w-2/4  lg:w-full  lg:pb-10 pb-3">
            <h1 className="text-center text-3xl text-bold p-4">Password</h1>
            <form className="mx-20 flex-col flex gap-7 ">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">New password</label>
                <input className="border-2 p-2 rounded" type="password" placeholder=""/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Repeat Password</label>
                <input className="border-2 p-2 rounded" type="password" placeholder=""/>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
              </div>
            </form>
          </div>
        </div>

        <div className=" w-3/4 flex flex-wrap gap-5 justify-evenly pt-10 pb-10">
          <Link to={location + "/reviews"} className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaStar className='text-yellow-500'/>
              Reviews
          </Link>
          <Link to="/reviews" className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaHotel className=''/>
              Favs
          </Link>
          <Link to="/reviews" className=" w-80 h-96 items-center justify-center flex gap-2 text-3xl font-semibold bg-gray-800 text-white rounded-lg transition ease-out duration-100 hover:bg-gray-600">
              <FaBook className=''/>
              Reservations
          </Link>
        </div>

      </div>
    </>
  );
};

export default UsersDet;
