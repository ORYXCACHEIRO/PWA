//import logo from './logo.svg';
import Header from "./components/Header/Header";
import HeaderAdmin from "./components/Header/HeaderAdmin";
import Footer from "./components/Footer/Footer";
import FooterAdmin from "./components/Footer/FooterAdmin";

import {Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";

import Homepage from "./pages/Homepage";
import SearchResPage from "./pages/SearchResult";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import Profile from "./pages/Profile";
import Hotel from "./pages/Hotel";



function App() {

  const [diffThenClient, setUserLogged] = useState(true);

  useEffect(() => {
    fetch('auth/me', {
        headers: {'Accept': 'application/json'}
    })
    .then((response) => response.json())
    .then((response) => {
        if(response.role!=0){
          setUserLogged(false);
        }
    }).catch(() => {
        setUserLogged(false);
    });
  }, []);

  return (
    <>
       {diffThenClient ? <HeaderAdmin/> : <Header/> }
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/search/:query" exact element={<SearchResPage/>}/>
          <Route path="/signin" exact element={<SignIn/>}/>
          <Route path="/signup" exact element={<SignUp/>}/>
          <Route path="/forgotpass" exact element={<ForgotPass/>}/>
          <Route path="/profile" exact element={<Profile/>}/>
          <Route path="/hotel/:id" exact element={<Hotel/>}/>
        </Routes>
      {diffThenClient ? <FooterAdmin/> : <Footer/>}
    </>
      
  );
}

export default App;
