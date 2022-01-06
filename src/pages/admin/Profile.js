const Profile = () => {

    return(
        <>
            <div className="flex flex-col items-center pb-10">
                <div className=" border-2 flex w-3/4 flex-col h-max mt-5">
                    <div className=" w-full h-max pb-10 ">
                        <h1 className="text-center text-3xl text-bold p-4">Details</h1>
                        <form className="mx-20 flex-col flex gap-7 ">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">First Name</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Last Name</label>
                            <input className="border-2 p-2 rounded" type="text" placeholder="example"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Email</label>
                            <input className="border-2 p-2 rounded" type="email" placeholder="example@example.com"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
                        </div>
                        </form>
                    </div>
                    <div className=" w-full  pb-10 ">
                        <h1 className="text-center text-3xl text-bold p-4">Password</h1>
                        <form className="mx-20 flex-col flex gap-7 ">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">New password</label>
                            <input className="border-2 p-2 rounded" type="password" placeholder=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-lg">Repeat Password</label>
                            <input className="border-2 p-2 rounded" type="password" placeholder=""/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="bg-gray-800 mx-8 p-2 rounded-lg text-white font-medium transition ease-out duration-100 hover:bg-gray-600" type="submit">Edit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Profile;