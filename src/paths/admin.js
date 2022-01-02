import {Route, Routes} from "react-router-dom";

import FooterAdmin from "../components/Footer/FooterAdmin";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import Homepage from "../pages/admin/Homepage";
import Users from "../pages/admin/Users";



const Admin = () => {



    return(
        <>
            <HeaderAdmin/>
                <Routes>
                    <Route path="/" exact  element={<Homepage/>}/>
                    <Route path="/users" exact  element={<Users/>}/>
                </Routes>
            <FooterAdmin/>
        </>
    )

}

export default Admin;