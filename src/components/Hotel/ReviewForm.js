import ReactStars from "react-rating-stars-component";

const ReviewForm = () => {

    const ratingChanged = (newRating) => {
        //console.log(newRating);
    };

    return(
        <>
            <div>
                <h1 className="font-medium text-2xl p-2">Write your review here!</h1>
                <form className=" p-2 flex flex-col gap-5 md:gap-8">
                    <div>
                        <label className="font-semibold text-xl">Review <span className="text-red-500 font-bold">*</span></label>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={30}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-xl flex items-center gap-2">Comment <span className="text-base font-bold">(optional)</span></label>
                        <textarea className="border-2 border-purple-500 rounded-lg pl-2" rows={4}/>
                    </div>
                    <div className="md:flex md:justify-center">
                        <button className="bg-gray-800 md:w-3/4 px-14 py-2 rounded-lg text-white transition ease-out duration-100 hover:bg-gray-700">Send</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default ReviewForm;