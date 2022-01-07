import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

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
    const [userName, setUserName] = useState("");
    const [login, setLoginStatus] = useState(false);

    useEffect(() => {
        fetch('/auth/me', {
            headers: { 'Accept': 'application/json' }
        })
        .then((response) => response.json())
        .then((response) => {
        if (response.auth === true) {
            
            setLoginStatus(true);
            setUserName(response.decoded.name)
            switch(response.decoded.role){
                case 0:
                    setRoleRespose(response.decoded.role);
                    break;
                case 1:
                    setRoleRespose(response.decoded.role);
                    break;
                case 2:
                    setRoleRespose(response.decoded.role);
                    break;
                default:
                    setRoleRespose(0);
                    break;
            }           
        }
        }).catch((err) => {
            console.log(err);
        });
    }, [location]);

    if (roleResponse) {
        switch (roleResponse) {
            case 0:
                return <Navigate to="/" />
            case 1:
                return <Navigate to="/admin/" />
            case 2:
                return <Navigate to="/admin/" />
            default:
                break;

        }
    }



    return (
        <>
            {login ? <Header userName={userName} loginStatus={login} setLoginStatus={setLoginStatus} /> : <Header  />}
            <Routes>
                <Route path="/" exact element={<Homepage loginStatus={login}/>} />
                <Route path="/search/:query" exact element={<SearchResPage />} />
                <Route path="/signin" exact element={<SignIn />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/forgotpass" exact element={<ForgotPass />} />
                <Route path="/recoverpass/:key" exact element={<RecoverPass />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="/hotel/:id" exact element={<Hotel />} />
            </Routes>
            <Footer />
        </>
    )

}

export default Frontend;