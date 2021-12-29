import Search from "../Header/Search";
import {Link} from 'react-router-dom';
import {fb, twitter, linkdin} from '../../utils/icons';

function Footer() {
  return (
    <>
      <div className="rounded-t-2xl flex bg-gray-900 h-52 relative mt-20 md:flex-col md:h-max md:items-center">
        <div className=" w-3/12 md:w-max lg:pl-6 md:pl-0 flex flex-col justify-center gap-6">
          <Link className=" text-5xl font-bold text-white mr-auto ml-auto block w-max" to="/">
            Logo.
          </Link>
          <div className="flex justify-center gap-6">
            <button className="bg-white p-3 rounded-full transiton ease-out duration-100 hover:bg-slate-300">
              {fb}
            </button>
            <button className="bg-white p-3 rounded-full transiton ease-out duration-100 hover:bg-slate-300">
              {twitter}
            </button>
            <button className="bg-white p-3 rounded-full transiton ease-out duration-100 hover:bg-slate-300">
              {linkdin}
            </button>
          </div>
        </div>
        <div className=" w-9/12 flex justify-center items-center md:w-full md:p-3">
          <div className="ml-10 lg:hidden">
            <label className="font-bold text-xl text-white">Search</label>
          </div>
          <div className="w-10/12">
            <Search/>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2 bg-gradient-to-r from-purple-600 to-purple-400">
          <p className="text-base  text-white font-medium">
            All rights reserved by @ company 2021
          </p>
      </div>
    </>
  );
}

export default Footer;
