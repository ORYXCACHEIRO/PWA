//import logo from './logo.svg';
import { Popover,Transition } from '@headlessui/react'
import { Fragment } from 'react'

import mainLogo from '../../logo.svg';
import Search from './Search';
import UpperHeader from './UpperHeader';

function Header() {
  
  return (
    <>
    
      <div className="m-3 ml-4 mr-4 rounded-t-2xl flex bg-gray-900 h-12 relative">
        <UpperHeader/>
      </div>
      <div className="m-3 ml-4 mr-4 rounded-b-3xl flex bg-gradient-to-r from-purple-600 to-purple-400 z-10 bottom-4 relative">  
        <div className=" p-px  w-2/12 md:w-5/6">
            <h1 className="text-white m-5 ml-8 font-extrabold text-5xl">LOGO.</h1>
        </div>
        <div className=" w-7/12 flex md:hidden items-center">
          <div className="ml-10 lg:hidden">
            <label className="font-bold text-xl text-white">Search</label>
          </div>
          <Search/>
        </div>
        <div className=" w-3/12 ">
          <div className="md:hidden">
            <div className="hidden">
              <button type="button" className="hidden mr-auto ml-auto shadow-lg transition duration-300 ease-in-out bg-gray-900 font-bold text-lg p-3 pl-4 pr-4 rounded-3xl text-white m-5 space-x-2 hover:bg-gray-700">
                <span className="inline-block lg:text-sm lg:mb-2">
                  Sign In
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mb-1 lg:text-sm lg:mb-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg> 
              </button>
            </div>
            <div className="">
              <div className="flex w-max space-x-2 pr-10 xl:pr-3 float-right relative top-4">
                <button type="button" className="flex w-max shadow-lg transition duration-300 ease-in-out bg-gray-900 font-bold text-lg p-2 pl-4 pr-4 lg:pl-1  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-2">
                  <span className="mt-1 lg:hidden ml-2">
                    Danielllll...
                  </span>
                  <img src={mainLogo} className=" h-10 w-10 relative top-0 lg:left-1 rounded-full" alt=""/>
                </button>
                <button type="button" className="flex w-max shadow-lg transition duration-300 ease-in-out bg-red-700 font-bold text-lg p-2 pl-4 pr-4 lg:pl-1  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 top-2 relative left-1 mr-1 lg:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className=" md:contents hidden ">
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

                  <Popover.Panel className="border-2 border-purple-600  absolute z-30 w-full left-0  top-0 bg-white h-80 rounded-b-2xl">
                    <div className="relative">
                      <div className="border-3 border-transparent">
                        <Popover.Button onClick={() => (open = false)} className=" absolute  font-bold right-4 top-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </Popover.Button>
                      </div>
                      <div>
                        <h1 className="text-purple-600 m-4 ml-8 font-extrabold text-5xl text-center">LOGO.</h1>
                      </div>
                      <div className="flex">
                        <input type="text" placeholder="hotel..." className="border-3 border-purple-700 rounded-3xl h-10 mt-6 w-4/5 ml-10 pl-3 focus:outline-none" />
                        <button className="shadow-lg transition duration-300 ease-in-out bg-purple-900 font-bold text-lg p-3 pl-4 pr-4 rounded-3xl text-white m-5 hover:bg-gray-700 lg:mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="hidden">
                        <button className="bg-purple-700 text-white mr-auto ml-auto block px-40 sm:px-24 m-4 p-3 text-lg font-medium rounded-full">
                          Sign Up
                        </button>
                      </div>
                      <div className="flex ">
                        <button className="bg-purple-700 text-white mr-auto ml-auto block px-28 sm:px-16 m-4 p-3 text-lg font-medium rounded-full space-x-2">
                          <span className="font-medium">Profile</span>
                        </button>
                        <button className="bg-red-700 text-white mr-auto ml-auto block px-28 sm:px-16 m-4 p-3 text-lg font-medium rounded-full space-x-2">
                          <span className="font-medium">Sign out</span>
                        </button>
                      </div>
                    </div>
                  </Popover.Panel>

                  </Transition>

                  <Popover.Overlay
                    className={`${
                      open ? 'opacity-30 fixed inset-0' : 'opacity-0'
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