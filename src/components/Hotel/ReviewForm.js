import ReactStars from "react-rating-stars-component";

import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import { Navigate } from 'react-router'
import { stringify } from "postcss";

const ReviewForm = ({ userData }) => {



    const { register, handleSubmit } = useForm();
    const submit = data => reviewFunc(data);
  
    const [ratingData, setRatingData] = useState(null)

    const ratingChanged = (newRating) => {
        var newRating = parseInt(newRating, 6);
        console.log(newRating)
        setRatingData(newRating);
    };

    const reviewFunc = (data) => {
        data.review = ratingData
        console.log(ratingData)
        fetch(`/hotel/${userData._id}/reviews/`, {
            headers: { 'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then((response) => {
            if (response) {
                console.log(response)
            }
            else {
                console.log(response)
            }
        });
    }

    return (
        <>
            <div>
                <h1 className="font-medium text-2xl p-2">Write your review here!</h1>
                <form onSubmit={handleSubmit(submit)} className=" p-2 flex flex-col gap-5 md:gap-8">
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
                        <label >Comment <span className="text-base font-bold">(optional)</span></label>
                        <textarea type="text" {...register('coment', { required: false })} className='border-2 border-purple-500 rounded-lg pl-2' rows={4} />
                    </div>
                    <div className="md:flex md:justify-center">
                        <button type="submit" className="bg-gray-800 md:w-3/4 px-14 py-2 rounded-lg text-white transition ease-out duration-100 hover:bg-gray-700">Send</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default ReviewForm;