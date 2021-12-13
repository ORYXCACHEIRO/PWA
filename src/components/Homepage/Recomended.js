import teste from '../../assets/exterior.jpg';

const Recomended = () => {

    return (
        <>
            <div className="ml-4 mr-4">
                <div>
                    <h1 className="text-black m-5 ml-8 font-extrabold text-5xl text-center md:text-4xl">Recomendations.</h1>
                </div>
                <div className="inline-flex pt-12 mr-auto ml-auto flex-wrap w-full justify-center gap-16 pb-10"> 
                    <div className="sm:ml-0">
                        <div className="bg-purple-500 h-96 w-96 relative sm:right-2 rounded-lg">
                            <div className="bg-black h-96 w-96 absolute left-7 top-7 rounded-lg">
                                <div className="p-7">
                                    <img src={teste} alt="" className=" rounded-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:ml-0">
                        <div className="bg-purple-500 h-96 w-96 relative sm:right-2">
                            <div className="bg-black h-96 w-96 absolute  left-7 top-7">

                            </div>
                        </div>
                    </div>
                    <div className="sm:ml-0">
                        <div className="bg-purple-500 h-96 w-96 relative sm:right-2">
                            <div className="bg-black h-96 w-96 absolute  left-7 top-7">

                            </div>
                        </div>
                    </div>
                    <div className="sm:ml-0">
                        <div className="bg-purple-500 h-96 w-96 relative sm:right-2">
                            <div className="bg-black h-96 w-96 absolute  left-7 top-7">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default Recomended;