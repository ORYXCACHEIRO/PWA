import {Route, Routes, useLocation, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

import FooterAdmin from "../components/Footer/FooterAdmin";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import Homepage from "../pages/admin/Homepage";
import Profile from "../pages/admin/Profile";

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
import HotelRooms from "../pages/admin/HotelRooms";

import RoomsEdit from "../pages/admin/RoomsEdit";
import RoomCreate from "../pages/admin/RoomCreate";
import RoomsReservations from "../pages/admin/RoomsReservations";
import RoomsComodity from "../pages/admin/RoomsComodity";
import RoomsGallery from "../pages/admin/RoomsGallery";


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
            if(response.auth===false || (response.auth===true && response.decoded.role===0)){
                setValid(false);
            } else {
                setRoleRespose(response.decoded.role)
            }
        }).catch((err) => {
            if(err) setValid(false);
        });
    }, [location]);

    if(valid===false){
        return <Navigate to="/"/>
    }

    return(
        <>
            <HeaderAdmin logStatus={setValid}/>
                <Routes>
                    <Route path="/" exact  element={<Homepage role={roleResponse}/>}/>
                    <Route path="/profile" exact  element={<Profile/>}/>
                    <Route path="/users" exact  element={<Users role={roleResponse}/>}/>
                    <Route path="/users/:userid" exact  element={<UsersDet role={roleResponse}/>}/>
                    <Route path="/users/:userid/reviews" exact  element={<UserReviews role={roleResponse}/>}/>
                    <Route path="/users/:userid/favs" exact  element={<UserFavs role={roleResponse}/>}/>
                    <Route path="/users/:userid/reservations" exact  element={<UserReservations role={roleResponse}/>}/>
                    <Route path="/languages" exact  element={<Languages role={roleResponse}/>}/>
                    <Route path="/languages/create" exact  element={<LanguageCreate role={roleResponse}/>}/>
                    <Route path="/languages/:langid" exact  element={<LanguageEdit role={roleResponse}/>}/>
                    <Route path="/comodities" exact  element={<Comodities role={roleResponse}/>}/>
                    <Route path="/comodities/create" exact  element={<ComodityCreate role={roleResponse}/>}/>
                    <Route path="/comodities/:comid" exact  element={<ComodityEdit role={roleResponse}/>}/>
                    <Route path="/hotels" exact  element={<Hotels role={roleResponse}/>}/>
                    <Route path="/hotels/create" exact  element={<HotelCreate role={roleResponse}/>}/>
                    <Route path="/hotels/:hotelid" exact  element={<HotelEdit role={roleResponse}/>}/>
                    <Route path="/hotels/:hotelid/reviews" exact  element={<HotelReviews/>}/>
                    <Route path="/hotels/:hotelid/comodities" exact  element={<HotelComs/>}/>
                    <Route path="/hotels/:hotelid/languages" exact  element={<HotelLangs/>}/>
                    <Route path="/hotels/:hotelid/gallery" exact  element={<HotelGallery/>}/>
                    <Route path="/hotels/:hotelid/rooms" exact  element={<HotelRooms/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid" exact  element={<RoomsEdit/>}/>
                    <Route path="/hotels/:hotelid/rooms/create" exact  element={<RoomCreate/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid/reservations" exact  element={<RoomsReservations/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid/comodities" exact  element={<RoomsComodity/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid/gallery" exact  element={<RoomsGallery/>}/>
                </Routes>
            <FooterAdmin/>
        </>
    )

}

export default Admin;