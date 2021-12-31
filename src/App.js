//import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";
import Admin from "./paths/admin";
import Employee from "./paths/employee";
import Frontend from "./paths/frontend";


function App() {

  return (
    <>
      <Routes>
        <Route path="*"  element={<Frontend/>}/>
        <Route path="/admin" exact  element={<Admin/>}/>
        <Route path="/employee" exact  element={<Employee/>}/>
      </Routes>
    </>
      
  );
}

export default App;
