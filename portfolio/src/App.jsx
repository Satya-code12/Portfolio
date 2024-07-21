import React from "react";
import { Contact } from "./Contact";
import { MainPage } from "./LandingPage";
import { Routes, Route } from "react-router-dom";

const App=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;