const HotelCreate = () => {

    return(
        <>
            <div className="flex flex-col items-center justify-center  pb-10">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Create Hotel</h1>
                        <form className="mx-20 flex-col flex gap-7 ">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Name</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Short Description</label>
                            <textarea className="border-2 p-2 rounded" rows={2}></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">About Hotel</label>
                            <textarea className="border-2 p-2 rounded" rows={2}></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Adress</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder="street name..."/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Postal Code</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder="0000-000"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">City</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Google Maps Iframe</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Main Image</label>
                            <input className="border-2 p-2 rounded" type="file"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Create</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HotelCreate;