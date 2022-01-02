import {Route, Routes} from "react-router-dom";

import FooterAdmin from "../components/Footer/FooterAdmin";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import Homepage from "../pages/admin/Homepage";


const Admin = () => {



    return(
        <>
            <HeaderAdmin/>
                <Routes>
                    <Route path="/"  element={<Homepage/>}/>
                </Routes>
            <FooterAdmin/>
        </>
    )

}

export default Admin;