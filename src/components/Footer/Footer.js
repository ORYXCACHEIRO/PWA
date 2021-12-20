import Search from "../Header/Search";
import {Link} from 'react-router-dom';
import {fb, twitter, linkdin} from '../../utils/icons';

function Footer() {
  return (
    <>
      <div className="rounded-t-2xl flex bg-gray-900 h-52 relative mt-20 md:flex-col md:h-max">
        <div className=" w-3/12 lg:w-max md:w-full md:p-3">
          <Link className=" text-5xl font-bold text-white mr-auto ml-auto block w-max mt-2" to="/">
            Logo.
          </Link>
          <div className="flex mt-6 w-max ml-auto mr-auto gap-3 xl:pl-3 md:pl-0">
              <input
                type="text"
                className="p-2 h-auto text-smborder border-grey-lightroundtext-grey-dark rounded-lg"
                placeholder="Your email address"
              />
              <button className="h-auto p-2 text-xs text-white bg-purple-400 rounded-lg">
                Subscribe
              </button>
          </div>
          <div className="flex justify-center mt-10 lg:mt-6">
              {fb}
              {twitter}
              {linkdin}
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
