//import logo from './logo.svg';
import Header from "./pages/Header";
import Homepage from "./pages/Homepage";

import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </>
      
  );
}

export default App;
