import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/employee/Homepage";


const Employee = () => {

    return(
        <>
            <Routes>
                <Route path="/" exact  element={<Homepage/>}/>
            </Routes>
        </>
    )

}

export default Employee;