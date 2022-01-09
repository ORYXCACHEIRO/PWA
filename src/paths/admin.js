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
import LanguageEdit from "../pages/admin/LanguageEdit";

import Comodities from "../pages/admin/Comodities";
import ComodityEdit from "../pages/admin/ComodityEdit";

import Hotels from "../pages/admin/Hotels";
import HotelCreate from "../pages/admin/HotelCreate";
import HotelEdit from "../pages/admin/HotelEdit";
import HotelReviews from "../pages/admin/HotelReviews";
import HotelComs from "../pages/admin/HotelComs";
import HotelLangs from "../pages/admin/HotelLangs";
import HotelGallery from "../pages/admin/HotelGallery";
import HotelRooms from "../pages/admin/HotelRooms";
import HotelWorkStation from "../pages/admin/HotelWorkStation";

import RoomsEdit from "../pages/admin/RoomsEdit";
import RoomCreate from "../pages/admin/RoomCreate";
import RoomsReservations from "../pages/admin/RoomsReservations";
import RoomsComodity from "../pages/admin/RoomsComodity";
import RoomsGallery from "../pages/admin/RoomsGallery";


const Admin = () => {

    const [valid, setValid] = useState(true);
    const [roleResponse, setRoleRespose] = useState(2);
    const [userId, setUserId] = useState("");
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
                setRoleRespose(response.decoded.role);
                setUserId(response.decoded.id);
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
            <HeaderAdmin logStatus={setValid} role={roleResponse} />
                <Routes>
                    {roleResponse===2 ? <Route path="/" element={<Homepage role={roleResponse}/>}/> : <Route path="/" element={<Hotels role={roleResponse}/>}/>}
                    <Route path="/profile"  element={<Profile/>} userid={userId}/>
                    {roleResponse===2 && <Route path="/users" element={<Users/>}/> }
                    {roleResponse===2 && <Route path="/users/:userid" element={<UsersDet />}/> }
                    {roleResponse===2 && <Route path="/users/:userid/reviews"  element={<UserReviews />}/>}
                    {roleResponse===2 && <Route path="/users/:userid/favs"  element={<UserFavs />}/>}
                    {roleResponse===2 && <Route path="/users/:userid/reservations"  element={<UserReservations />}/>}
                    {roleResponse===2 && <Route path="/languages"  element={<Languages />}/>}
                    {roleResponse===2 && <Route path="/languages/:langid" element={<LanguageEdit />}/>}
                    {roleResponse===2 && <Route path="/comodities" element={<Comodities />}/>}
                    {roleResponse===2 && <Route path="/comodities/:comid" element={<ComodityEdit />}/>}
                    { roleResponse===2 && <Route path="/hotels" element={<Hotels role={roleResponse}/>}/>}
                    <Route path="/hotels/create" element={<HotelCreate role={roleResponse}/>}/>
                    {roleResponse===2 && <Route path="/hotels/:hotelid/workstation" element={<HotelWorkStation/>}/>}
                    <Route path="/hotels/:hotelid" element={<HotelEdit role={roleResponse}/>}/>
                    <Route path="/hotels/:hotelid/reviews" element={<HotelReviews/>}/>
                    <Route path="/hotels/:hotelid/comodities" element={<HotelComs/>}/>
                    <Route path="/hotels/:hotelid/languages" element={<HotelLangs/>}/>
                    <Route path="/hotels/:hotelid/gallery" element={<HotelGallery/>}/>
                    <Route path="/hotels/:hotelid/rooms" element={<HotelRooms/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid" element={<RoomsEdit/>}/>
                    <Route path="/hotels/:hotelid/rooms/create" element={<RoomCreate/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid/reservations" element={<RoomsReservations/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid/comodities" element={<RoomsComodity/>}/>
                    <Route path="/hotels/:hotelid/rooms/:roomid/gallery" element={<RoomsGallery/>}/>
                </Routes>
            <FooterAdmin/>
        </>
    )

}

export default Admin;