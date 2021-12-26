import Filter from "../components/SearchResult/Filter";
import Result from "../components/SearchResult/Results";

const SearchResPage = () => {

    return(
        <>
            <div className="mt-10">
                <h1 className="font-bold text-5xl text-center">Search result with <span className="text-purple-500">asfgahjsfggfsj</span>.</h1>
            </div>
            <div className="pt-10 flex md:flex-col">
                <div className=" w-1/4 xl:w-max md:w-full">
                    <Filter/>
                </div>
                <div className=" w-3/4 md:w-full">
                    <Result/>
                </div>
            </div>
        </>
    )

}

export default SearchResPage;