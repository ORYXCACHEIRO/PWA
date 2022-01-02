import {FaUser, FaHotel, FaBook, FaStar} from 'react-icons/fa'

const Homepage = () => {

    return(
        <>
            
           <div className="h-full ">
               <div className="flex flex-wrap lg:block  justify-between pt-8">
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Users</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">0</h1>
                            <FaUser className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Hotels</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">0</h1>
                            <FaHotel className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Reservations</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">0</h1>
                            <FaBook className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
                    <div className="border-l-4 border-2 border-l-blue-500 m-8 pl-6 pr-52 py-2 flex flex-col items-start h-max bg-slate-100 rounded-lg shadow-lg relative">
                            <h1 className="font-medium text-3xl text-slate-500 m-0">Reviews</h1>
                            <h1 className="font-bold text-2xl text-slate-700 m-0">0</h1>
                            <FaStar className='absolute right-7 top-7 text-3xl text-slate-500'/>
                    </div>
               </div>
           </div>
        </>
    )

}

export default Homepage;