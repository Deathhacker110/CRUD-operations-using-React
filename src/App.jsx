import React from "react";
import {Adduser} from "./pages/Adduser";
import Getusers from "./pages/Getusers";
import Removeuser from "./pages/Removeuser";
import Error from "./pages/Error";
import Edituser from "./pages/Edituser";
import { Routes,Route, BrowserRouter,Navigate } from "react-router-dom";
let App=()=> {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Getusers />} />
          <Route path="/add" element={<Adduser/>}/>
          {/* <Route path="/remove" element={<Removeuser/>}/> */}
          <Route path="/edit/:id" element={<Edituser/>}/>
          <Route path="/pagenotfound" element={<Error/>}/>
          <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
