//import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Destination from "./components/Destination";
import Navbar from "./components/appbar/Navbar";


function App() {
  return (
    <div className="bg-destination-mobile bg-cover bg-fixed bg-no-repeat w-full h-screen">
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='destination' element={<Destination />} />

        {/* <Route path='crew' element={<Crew />}></Route> */}
        
      </Routes>
    </div>
  );
}

export default App;
