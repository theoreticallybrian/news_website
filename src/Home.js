import React from "react";
import Slider from "./Components/Slider";
import Ads from "./Components/Ads";
import Banner from "./Components/Banner";
import Newsletter from "./Components/Newsletter";
import Socials from "./Components/Socials";
import { Outlet } from "react-router-dom";
import SportsNews from "./Components/SportsNews/SportsNews";
function Home() {
 const user = JSON.parse(localStorage.getItem("user"));



 if (user){
  return ( 
  <div className="home">

<Slider />
<Banner />
<Newsletter />
<Outlet/>

<Ads />
<Socials />

<SportsNews/>
<Banner />


</div>

  
  
  


  );}
  else{
    window.location.href = "/login";
  }
}

export default Home;
