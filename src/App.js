//import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Destination from "./components/Destination";
//import Crew from "./components/Crew";
import Navbar from "./components/appbar/Navbar";


function App() {
  return (
    <div className="bg-home-mobile bg-cover bg-fixed bg-no-repeat w-full h-screen">
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='destination' element={<Destination />}></Route>

        {/* <Route path='crew' element={<Crew />}></Route> */}
        
      </Routes>
    </div>
  );
}

export default App;
