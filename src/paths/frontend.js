import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Route, Routes, useLocation, Navigate} from "react-router-dom";

import Homepage from "../pages/Homepage";
import SearchResPage from "../pages/SearchResult";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPass from "../pages/ForgotPass";
import RecoverPass from "../pages/RecoverPass"
import Profile from "../pages/Profile";
import Hotel from "../pages/Hotel";
import { useEffect, useState } from "react";

const Frontend = () => {

    var location = useLocation().pathname;


    const [roleResponse, setRoleRespose] = useState(0);
    
    useEffect(() => {
        fetch('/auth/me', {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.auth===true){
                switch(response.decoded.role){
                    case 1:
                       setRoleRespose(1)
                    case 2:
                        setRoleRespose(2)
                }
            }
        }).catch((err) => {
            
        });
    }, [location]);

    if(roleResponse){
        switch(roleResponse){
            case 1:
                return <Navigate to="/employee/"/>
            case 2:
                return <Navigate to="/admin/"/>
 
        }
    }

    

    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" exact element={<Homepage/>}/>
                    <Route path="/search/:query" exact element={<SearchResPage/>}/>
                    <Route path="/signin" exact element={<SignIn/>}/>
                    <Route path="/signup" exact element={<SignUp/>}/>
                    <Route path="/forgotpass" exact element={<ForgotPass/>}/>
                    <Route path="/auth/recover/:key" exact element={<RecoverPass/>}/>
                    <Route path="/profile" exact element={<Profile/>}/>
                    <Route path="/hotel/:id" exact element={<Hotel/>}/>
                </Routes>
            <Footer/>
        </>
    )

}

export default Frontend;