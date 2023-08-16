//import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Destination from "../src/components/destination/Destination";




function App() {
  return (
    <div className="bg-destination-mobile bg-cover bg-fixed bg-no-repeat w-full h-screen">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />}>
          
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
