import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Route, Routes} from "react-router-dom";

import Homepage from "../pages/Homepage";
import SearchResPage from "../pages/SearchResult";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPass from "../pages/ForgotPass";
import Profile from "../pages/Profile";
import Hotel from "../pages/Hotel";

const Frontend = () => {

    return(
        <>
            <Header/>
                <Routes>
                    <Route path="/" exact element={<Homepage/>}/>
                    <Route path="/search/:query" exact element={<SearchResPage/>}/>
                    <Route path="/signin" exact element={<SignIn/>}/>
                    <Route path="/signup" exact element={<SignUp/>}/>
                    <Route path="/forgotpass" exact element={<ForgotPass/>}/>
                    <Route path="/profile" exact element={<Profile/>}/>
                    <Route path="/hotel/:id" exact element={<Hotel/>}/>
                </Routes>
            <Footer/>
        </>
    )

}

export default Frontend;