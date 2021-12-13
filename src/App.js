//import logo from './logo.svg';
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";

import {Route, Routes} from "react-router-dom";



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
