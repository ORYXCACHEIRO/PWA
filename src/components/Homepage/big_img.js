import bigimg from '../../assets/roll.jpg';
import Search from '../Header/Search';

const BigImg = () => {

    return(
        <>
            <div className='ml-4 mr-4  relative aspect-[10/5] md:aspect-[10/6] sm:aspect-[9/13] flex items-start flex-col justify-center '>
                <div className='  relative ml-10 lg:ml-0'>
                    <h1 className=' font-bold text-gray-900  text-9xl  md:text-8xl'>Looking for a place?</h1>
                    <h1 className='font-bold text-gray-900  text-9xl  md:text-8xl'>Start <span className='text-purple-500'>now.</span></h1>
                </div>
                
                
                <div className='  h-max w-2/4 sm:w-full xl:w-3/4 mt-10 '>
                    <Search/>
                </div>
            </div>
        </>
    )

}

export default BigImg;