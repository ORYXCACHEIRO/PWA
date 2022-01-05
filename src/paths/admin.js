import {Route, Routes} from "react-router-dom";

import FooterAdmin from "../components/Footer/FooterAdmin";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import Homepage from "../pages/admin/Homepage";

import UserFavs from "../pages/admin/UserFavs";
import UserReviews from "../pages/admin/UserReviews";
import Users from "../pages/admin/Users";
import UsersDet from "../pages/admin/UserDet";
import UserReservations from "../pages/admin/UserReservations";

import Languages from "../pages/admin/Languages";
import LanguageCreate from "../pages/admin/LanguageCreate";
import LanguageEdit from "../pages/admin/LanguageEdit";

import Comodities from "../pages/admin/Comodities";
import ComodityCreate from "../pages/admin/ComodityCreate";
import ComodityEdit from "../pages/admin/ComodityEdit";

import Hotels from "../pages/admin/Hotels";

const Admin = () => {

    return(
        <>
            <HeaderAdmin/>
                <Routes>
                    <Route path="/" exact  element={<Homepage/>}/>
                    <Route path="/users" exact  element={<Users/>}/>
                    <Route path="/users/:userid" exact  element={<UsersDet/>}/>
                    <Route path="/users/:userid/reviews" exact  element={<UserReviews/>}/>
                    <Route path="/users/:userid/favs" exact  element={<UserFavs/>}/>
                    <Route path="/users/:userid/reservations" exact  element={<UserReservations/>}/>
                    <Route path="/languages" exact  element={<Languages/>}/>
                    <Route path="/languages/create" exact  element={<LanguageCreate/>}/>
                    <Route path="/languages/edit/:langid" exact  element={<LanguageEdit/>}/>
                    <Route path="/comodities" exact  element={<Comodities/>}/>
                    <Route path="/comodities/create" exact  element={<ComodityCreate/>}/>
                    <Route path="/comodities/edit/:comid" exact  element={<ComodityEdit/>}/>
                    <Route path="/hotels" exact  element={<Hotels/>}/>
                </Routes>
            <FooterAdmin/>
        </>
    )

}

export default Admin;