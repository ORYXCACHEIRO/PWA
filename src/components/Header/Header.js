//import logo from './logo.svg';


function Header() {
  
  return (
    <>
    <div className="m-3 ml-4 mr-4 rounded-t-2xl flex bg-gray-900 h-12 ">
      <span className="text-white font-bold pt-2 pl-5">Follow</span>
      <div className="pt-2 pl-5 text-white font-bold  space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  inline-block" viewBox="0 0 97.75 97.75" fill="currentColor">
          <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0zM67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  inline-block" viewBox="0 0 33.88 33.88" fill="currentColor">
          <path d="M30.414,10.031c0.014,0.297,0.021,0.595,0.021,0.897c0,9.187-6.992,19.779-19.779,19.779c-3.928,0-7.58-1.149-10.657-3.123c0.546,0.063,1.099,0.095,1.658,0.095c3.26,0,6.254-1.107,8.632-2.974c-3.039-0.058-5.607-2.065-6.491-4.828c0.424,0.082,0.858,0.125,1.308,0.125c0.635,0,1.248-0.084,1.83-0.244c-3.177-0.639-5.576-3.448-5.576-6.815c0-0.029,0-0.058,0-0.087c0.939,0.521,2.01,0.833,3.15,0.869C2.646,12.48,1.419,10.35,1.419,7.938c0-1.274,0.343-2.467,0.94-3.495c3.427,4.206,8.552,6.973,14.327,7.263c-0.117-0.509-0.18-1.038-0.18-1.584c0-3.838,3.112-6.949,6.953-6.949c1.998,0,3.805,0.844,5.07,2.192c1.582-0.311,3.072-0.89,4.416-1.686c-0.521,1.624-1.621,2.986-3.057,3.844c1.406-0.166,2.746-0.54,3.991-1.092C32.949,7.826,31.771,9.05,30.414,10.031z" />
        </svg>
      </div>
    </div>
    <div className="m-3 ml-4 mr-4 mb-10 rounded-b-3xl flex bg-gradient-to-r from-purple-600 to-purple-400 z-10 bottom-4 relative">
        <div className="p-px  w-1/6 md:w-5/6">
            <h1 className="text-white m-5 ml-8 font-extrabold text-5xl">LOGO.</h1>
        </div>
        <div className="w-4/6 flex md:hidden">
          <div className="w-1/12"></div>
          <div className="w-10/12 flex">
            <div className="w-full flex">
              <div className="m-auto ml-6 mb-9 lg:mb-10">
                <label className="font-bold text-lg text-white">Search</label>
              </div>
              <input type="text" placeholder="hotel..." className="border-3 border-transparent rounded-3xl h-10 mt-6 w-4/5 ml-4 pl-3 focus:outline-none focus:ring-3 focus:ring-purple-700 focus:border-transparent" />
              <button className="shadow-lg transition duration-500 ease-in-out bg-purple-900 font-bold text-lg p-3 pl-4 pr-4 rounded-3xl text-white m-5 hover:bg-gray-700 lg:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/6 ">
          <div className="md:hidden flex ">
            <button type="button" className="mr-auto ml-auto shadow-lg transition duration-500 ease-in-out bg-gray-900 font-bold text-lg p-3 pl-4 pr-4 rounded-3xl text-white m-5 space-x-2 hover:bg-gray-700">
            <span className="inline-block lg:text-sm lg:mb-2">
              Sign In
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mb-1 lg:text-sm lg:mb-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg> 
            </button>
          </div>
          <div className="md:contents hidden">
          </div>
        </div>
    </div>

    </>
  );
}


export default Header;
