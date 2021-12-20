//import logo from './logo.svg';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage";
import SearchResPage from "./pages/SearchResult";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/search/:query" exact element={<SearchResPage/>}/>
          <Route path="/signin" exact element={<SignIn/>}/>
          <Route path="/signUP" exact element={<SignUp/>}/>
        </Routes>
      <Footer/>
    </>
      
  );
}

export default App;
