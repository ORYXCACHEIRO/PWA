import {Route, Routes} from "react-router-dom";

import FooterAdmin from "../components/Footer/FooterAdmin";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import Homepage from "../pages/admin/Homepage";
import UserReviews from "../pages/admin/UserReviews";
import Users from "../pages/admin/Users";
import UsersDet from "../pages/admin/UsersDet";




const Admin = () => {



    return(
        <>
            <HeaderAdmin/>
                <Routes>
                    <Route path="/" exact  element={<Homepage/>}/>
                    <Route path="/users" exact  element={<Users/>}/>
                    <Route path="/users/:id" exact  element={<UsersDet/>}/>
                    <Route path="/users/:id/reviews" exact  element={<UserReviews/>}/>
                </Routes>
            <FooterAdmin/>
        </>
    )

}

export default Admin;