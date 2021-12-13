//import logo from './logo.svg';
import Header from "./pages/Header";
import Homepage from "./pages/Homepage";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
      </Routes>
    </>
      
  );
}

export default App;
