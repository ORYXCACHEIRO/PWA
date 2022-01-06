//import logo from './logo.svg';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react';

import mainLogo from '../../logo.svg';
import Search from './Search';
import UpperHeader from './UpperHeader';
import { Link } from "react-router-dom";

const Header = ({ userName }) => {
  let signedin = false;
  let defaultHeader = true;

      if(userName)
      {
        defaultHeader = false
        signedin = true
      }
  
  const onClickLogout = () => {
    fetch('/auth/logout', {
        headers: {'Accept': 'application/json'}
    })
    .then((response) => response.json())
    .then((response) => {
      defaultHeader = true
      signedin = false
    }).catch(() => {

    });
}

  return (
    <>
      <div className="m-3 ml-4 mr-4 rounded-t-2xl flex bg-gray-900 h-12 relative">
        <UpperHeader />
      </div>
      <div className="m-3 ml-4 mr-4 rounded-b-3xl flex bg-gradient-to-r from-purple-600 to-purple-400  bottom-4 relative">
        <div className=" p-px  w-2/12 md:w-5/6">
          <Link to="/">
            <h1 className="text-white m-5 ml-8 font-extrabold text-5xl">LOGO.</h1>
          </Link>
        </div>
        <div className=" w-7/12 flex md:hidden items-center">
          <div className="ml-10 lg:hidden">
          </div>
          <Search />
        </div>
        <div className=" w-3/12 ">
          <div className="md:hidden h-full">


            {defaultHeader &&
              <div className='h-full'>
                <div className='flex justify-end items-center w-max space-x-2 pr-10 xl:pr-2 lg:pr-7 float-right gap-5 xl:gap-0 h-full'>
                  <Link to="/signin" className="flex items-center justify-center w-max shadow-lg transition duration-300 ease-in-out bg-gray-900 font-bold text-lg p-3 pl-4 pr-4 lg:p-5  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-2">
                    <span className=" lg:text-sm lg:hidden">
                      Sign In
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:text-sm md:mr-auto md:ml-auto md:block " viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link to="/signup" className="flex items-center justify-center w-max shadow-lg transition duration-300 ease-in-out bg-gray-900 font-bold text-lg p-3 pl-4 pr-4 lg:p-5  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-2">
                    <span className=" lg:text-sm lg:hidden">
                      Sign Up
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:text-sm md:mr-auto md:ml-auto md:block" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            }
             {signedin &&
            <div className=" h-full">
              <div className="flex justify-end items-center w-max space-x-2 pr-10 xl:pr-2 lg:pr-8 float-right gap-5 xl:gap-0  h-full">
                <button type="button" className="flex items-center justify-center w-max shadow-lg transition duration-300 ease-in-out bg-gray-900 font-bold text-lg p-3 pl-4 pr-4  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-2">
                  <span className="lg:hidden">
                    {userName}
                  </span>
                  <img src={mainLogo} className=" h-10 w-10 rounded-full" alt="" />
                </button>
                <button onClick={onClickLogout} type="button" className="flex items-center justify-center w-max shadow-lg transition duration-300 ease-in-out bg-red-700 font-bold text-lg p-5 pl-5 pr-5  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:text-sm md:mr-auto md:ml-auto md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          }

          </div>
          <div className="md:contents hidden">
            <Popover>

              {({ open }) => (
                <>
                  <Popover.Button className=" mr-auto ml-auto block m-5 rounded-3xl bg-purple-900 text-white hover:bg-gray-700 shadow-lg transition duration-500 ease-in-out sm:mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-in duration-250"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-out duration-250"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >

                    <Popover.Panel className="border-2 border-purple-600  absolute z-30 w-full left-0 top-0 bg-white h-80 rounded-b-2xl">
                      <div className="relative">
                        <div className="border-3 border-transparent">
                          <Popover.Button onClick={() => (open = false)} className=" absolute  font-bold right-4 top-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Popover.Button>
                        </div>
                        <div>
                          <h1 className="text-purple-600 m-4 ml-8 font-extrabold text-5xl text-center ">
                            <Link to="/" className='text-purple-600 hover:text-purple-500'>
                              LOGO.
                            </Link>
                          </h1>
                        </div>
                        <div className="flex w-max mr-auto ml-auto pl-10">
                          <Search />
                        </div>
                        <div className=''>
                          <div className="flex ">
                            <Link to="/signin" className="bg-purple-700 text-white mr-auto ml-auto block px-28 sm:px-16 m-4 p-3 text-lg font-medium rounded-full transition duration-100 ease-out hover:ease-in hover:bg-purple-400">
                              Sign In
                            </Link>
                            <Link to="/signup" className="bg-purple-700 text-white mr-auto ml-auto block px-28 sm:px-16 m-4 p-3 text-lg font-medium rounded-full transition duration-100 ease-out hover:ease-in hover:bg-purple-400">
                              Sign Up
                            </Link>
                          </div>
                        </div>
                        <div className='hidden'>
                          <div className="flex ">
                            <button className="bg-purple-700 text-white mr-auto ml-auto block px-28 sm:px-16 m-4 p-3 text-lg font-medium rounded-full space-x-2 transition duration-100 ease-out hover:ease-in hover:bg-purple-300">
                              <span className="font-medium">Profile</span>
                            </button>
                            <button className="bg-red-700 text-white mr-auto ml-auto block px-28 sm:px-16 m-4 p-3 text-lg font-medium rounded-full space-x-2 transition duration-100 ease-out hover:ease-in hover:bg-red-400">
                              <span className="font-medium">Sign out</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>

                  </Transition>

                  <Popover.Overlay
                    className={`${open ? 'opacity-30 fixed inset-0' : 'opacity-0'
                      } bg-black`}
                  />
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}


export default Header;
