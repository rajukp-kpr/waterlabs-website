import React from "react";
import "./App.css";

import DesignMeetsAI from "./components/DesignMeetsAI";
import WhoAreWe from "./components/WhoAreWe";
import Features from "./components/Features";
import Verticals from "./components/Verticals";
import Approach from "./components/Approach";



function Home() {
  return (
    <div className="App">
      <DesignMeetsAI />
      <WhoAreWe />
      <Features />
      <Verticals />
      <Approach />
    </div>
  );
}

export default Home;
