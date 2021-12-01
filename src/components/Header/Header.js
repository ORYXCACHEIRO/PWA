//import logo from './logo.svg';
import { Popover,Transition } from '@headlessui/react'
import { Fragment } from 'react'

import mainLogo from '../../logo.svg';

function Header() {
  
  return (
    <>
    
    <div className="m-3 ml-4 mr-4 rounded-t-2xl flex bg-gray-900 h-12 border-2 border-red-500 relative">
      <span className="text-white font-bold pt-2 pl-5 md:hidden">Follow Us</span>
      <div className="pt-2 pl-5 text-white font-bold  space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  inline-block" viewBox="0 0 97.75 97.75" fill="currentColor">
          <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0zM67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  inline-block" viewBox="0 0 33.88 33.88" fill="currentColor">
          <path d="M30.414,10.031c0.014,0.297,0.021,0.595,0.021,0.897c0,9.187-6.992,19.779-19.779,19.779c-3.928,0-7.58-1.149-10.657-3.123c0.546,0.063,1.099,0.095,1.658,0.095c3.26,0,6.254-1.107,8.632-2.974c-3.039-0.058-5.607-2.065-6.491-4.828c0.424,0.082,0.858,0.125,1.308,0.125c0.635,0,1.248-0.084,1.83-0.244c-3.177-0.639-5.576-3.448-5.576-6.815c0-0.029,0-0.058,0-0.087c0.939,0.521,2.01,0.833,3.15,0.869C2.646,12.48,1.419,10.35,1.419,7.938c0-1.274,0.343-2.467,0.94-3.495c3.427,4.206,8.552,6.973,14.327,7.263c-0.117-0.509-0.18-1.038-0.18-1.584c0-3.838,3.112-6.949,6.953-6.949c1.998,0,3.805,0.844,5.07,2.192c1.582-0.311,3.072-0.89,4.416-1.686c-0.521,1.624-1.621,2.986-3.057,3.844c1.406-0.166,2.746-0.54,3.991-1.092C32.949,7.826,31.771,9.05,30.414,10.031z" />
        </svg>
      </div>
      <span className="text-white font-bold pt-2 pl-5 absolute right-5">example@example.com</span>
    </div>
    <div className="m-3 ml-4 mr-4 mb-10 rounded-b-3xl flex bg-gradient-to-r from-purple-600 to-purple-400 z-10 bottom-4 relative">  
      <div className=" p-px  w-2/12 md:w-5/6">
          <h1 className="text-white m-5 ml-8 font-extrabold text-5xl">LOGO.</h1>
      </div>
      <div className=" w-7/12 flex md:hidden">
        <div className="w-1/12"></div>
        <div className="w-11/12 flex">
          <div className="w-full flex">
            <div className="m-auto ml-6 mb-9 lg:mb-10 lg:hidden">
              <label className="font-bold text-lg text-white">Search</label>
            </div>
            <input type="text" placeholder="hotel..." className="border-3 border-transparent rounded-3xl h-10 mt-6 w-4/5 ml-4 pl-3 focus:outline-none focus:ring-3 focus:ring-purple-700 focus:border-transparent" />
            <button className="shadow-lg transition duration-300 ease-in-out bg-purple-900 font-bold text-lg p-3 pl-4 pr-4 rounded-3xl text-white m-5 hover:bg-gray-700 lg:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" w-3/12">
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
            <div className="flex w-max space-x-2 mr-auto ml-auto relative top-4">
              <button type="button" className="flex w-max shadow-lg transition duration-300 ease-in-out bg-gray-900 font-bold text-lg p-2 pl-4 pr-4 lg:pl-1  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-2">
                <span className="mt-1 lg:hidden ml-2">
                  Danielllll...
                </span>
                <img src={mainLogo} className=" h-10 w-10 relative top-0 lg:left-1"/>
              </button>
              <button type="button" className="flex w-max shadow-lg transition duration-300 ease-in-out bg-red-700 font-bold text-lg p-2 pl-4 pr-4 lg:pl-1  rounded-3xl text-white space-x-1 hover:bg-gray-700 lg:mr-9">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 top-2 relative left-1 mr-1 lg:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokelinecap="round" strokelinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
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
