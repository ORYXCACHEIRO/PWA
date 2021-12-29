import { starFilled, starNotFilled} from '../../utils/icons';
import teste from '../../assets/exterior.jpg';

const Review = () => {

    let arrayStar = [starFilled, starFilled, starFilled, starFilled, starNotFilled];

    const listItems = arrayStar.map((star, index) =>
        <div key={index}>{star}</div>
    );

    return(
        <>
            <div className='flex gap-5 sm:justify-center'>
                <div className='sm:hidden'>
                    <img src={teste} className='w-24 h-24  rounded-full' alt=''/>
                </div>
                <div className='w-3/4 '>
                    <div className=' p-2 flex flex-col gap-1 md:gap-4'>
                            <div className='flex md:flex-col h-max items-end md:items-baseline gap-2'>
                                <span className='font-bold text-xl'>Daniel Faria</span>
                                <span className='font-medium '>20-02-2021</span>
                            </div>
                            <div className='flex'>
                                {listItems}
                            </div>
                    </div>
                    <div >
                        <p className='font-medium text-2xl  break-words '>"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Review;