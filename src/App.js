import "./App.css";
import { useState, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Home";
import Podcasts from "./Pages/Podcasts";
import Series from "./Pages/Series";
import BreakingNews from "./Pages/BreakingNews";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Success from "./Authentication/Success";
import ContactUs from "./Pages/ContactUs";
import Higlights from "./Components/Highlights/Higlights";
import Details from "./Components/Highlights/Details";



function App() {


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} >

        <Route path="" element={<Higlights/>}/>

        <Route path=":id" element={<Details/>}/>


    
          </Route>
        <Route path="/Podcasts" exact element={<Podcasts />} />
        <Route path="/Series" exact element={<Series />} />
        <Route path="/breakingnews" exact element={<BreakingNews />} />
        <Route path="/success" element={<Success />} />
        <Route path="/contact_us" exact element={<ContactUs />} />

        <Route path="/login" exact element={<Login />} />

        <Route path="/signup" exact element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
