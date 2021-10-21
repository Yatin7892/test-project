import react from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Service from "../partials/Service";
import Portfolio from "../partials/Potfolio";

function Home() {
    return (
      <div className="page-wrapper">

        {/*  Site header */}
        <Header />

        {/*  Hero Banner */}
        <HeroHome />
        <Service />
        <Portfolio />
           
        
  
      </div>
    );
  }
  
export default Home;