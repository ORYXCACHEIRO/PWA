import {Route, Routes, useLocation, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

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
import HotelCreate from "../pages/admin/HotelCreate";
import HotelEdit from "../pages/admin/HotelEdit";
import HotelReviews from "../pages/admin/HotelReviews";
import HotelComs from "../pages/admin/HotelComs";
import HotelLangs from "../pages/admin/HotelLangs";
import HotelGallery from "../pages/admin/HotelGallery";

const Admin = () => {

    const [valid, setValid] = useState(true);
    const [roleResponse, setRoleRespose] = useState(2);
    var location = useLocation().pathname;
    
    useEffect(() => {
        fetch('/auth/me', {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.auth===false || (response.auth===true && response.decoded.role!=2)){
                setValid(false);
                if(response.auth===true){
                    switch(response.decoded.role){
                        case 0:
                           setRoleRespose(0)
                        case 1:
                            setRoleRespose(1)
                    }
                }
            }
        }).catch((err) => {
            if(err) setValid(false);
        });
    }, [location]);

    if(valid===false){
        switch(roleResponse){
            case 0:
                return <Navigate to="/"/>
            case 1:
                return <Navigate to="/employee/"/>
            default:
                return <Navigate to="/"/>
 
        }
    }

    return(
        <>
            <HeaderAdmin logStatus={setValid}/>
                <Routes>
                    <Route path="/" exact  element={<Homepage/>}/>
                    <Route path="/users" exact  element={<Users/>}/>
                    <Route path="/users/:userid" exact  element={<UsersDet/>}/>
                    <Route path="/users/:userid/reviews" exact  element={<UserReviews/>}/>
                    <Route path="/users/:userid/favs" exact  element={<UserFavs/>}/>
                    <Route path="/users/:userid/reservations" exact  element={<UserReservations/>}/>
                    <Route path="/languages" exact  element={<Languages/>}/>
                    <Route path="/languages/create" exact  element={<LanguageCreate/>}/>
                    <Route path="/languages/:langid" exact  element={<LanguageEdit/>}/>
                    <Route path="/comodities" exact  element={<Comodities/>}/>
                    <Route path="/comodities/create" exact  element={<ComodityCreate/>}/>
                    <Route path="/comodities/:comid" exact  element={<ComodityEdit/>}/>
                    <Route path="/hotels" exact  element={<Hotels/>}/>
                    <Route path="/hotels/create" exact  element={<HotelCreate/>}/>
                    <Route path="/hotels/:hotelid" exact  element={<HotelEdit/>}/>
                    <Route path="/hotels/:hotelid/reviews" exact  element={<HotelReviews/>}/>
                    <Route path="/hotels/:hotelid/comodities" exact  element={<HotelComs/>}/>
                    <Route path="/hotels/:hotelid/languages" exact  element={<HotelLangs/>}/>
                    <Route path="/hotels/:hotelid/gallery" exact  element={<HotelGallery/>}/>
                </Routes>
            <FooterAdmin/>
        </>
    )

}

export default Admin;