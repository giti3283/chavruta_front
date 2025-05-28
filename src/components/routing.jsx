import { Route, Routes } from "react-router-dom"
import { Login } from "./login/login"
import { Logon } from "./logon/logon"
import { Offer } from "./offers/offer"
import { Home } from "./home/home"
import { Request } from "./request/request"
import { Schedule } from "./schedule/schedule"
import {ChavrutaSearchPage} from "./chavrutaSearch/chavrutaSearchPage"
import { ChavrutaSuccess } from "./chavrutaSearch/chavrutaSuccess"
import NavBar from "./navBar/navBar"

export const Routing = () => {
    
    return  <Routes>
     {/* <NavBar> */}
   
       
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logon/:id/:firstName/:lastName" element={<Logon></Logon>}></Route>
        <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        <Route path="/request/:id" element={<Request></Request>}></Route>
        <Route path="/schedule" element={<Schedule></Schedule>}></Route>
        <Route path="/schedule/:id" element={<Schedule></Schedule>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/chavruta" element={<ChavrutaSearchPage/>} />
        <Route path="/chavruta/:requestCode" element={<ChavrutaSearchPage/>} />
        <Route path="/chavruta-success/:requestCode/:chavrutaCode/:scheduleCode" element={<ChavrutaSuccess />} />
    </Routes>
     {/* </NavBar> */}
}