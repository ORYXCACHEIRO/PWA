//import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";
import Admin from "./paths/admin";
import Frontend from "./paths/frontend";

function App() {

  return (
    <>
      <Routes>
        <Route path="/*"  element={<Frontend/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;
