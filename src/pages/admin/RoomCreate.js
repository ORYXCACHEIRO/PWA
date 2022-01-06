const RoomCreate = () => {

    return(
        <>
            <div className="flex flex-col items-center justify-center  pb-10">
                <div className=" border-2 flex w-3/4 lg:flex-col h-max mt-5 justify-center py-10">
                    <div className=" w-2/4  lg:w-full h-max lg:pb-10 pb-3">
                        <h1 className="text-center text-3xl text-bold p-4">Create Room</h1>
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
                                <label className="font-medium text-lg">Adults</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..."/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Children</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..."/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-lg">Price per night</label>
                                <input className="border-2 p-2 rounded" type="number" placeholder="street name..."/>
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

export default RoomCreate;