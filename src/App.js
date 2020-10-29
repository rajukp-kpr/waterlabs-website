import React from "react";
import "./App.css";
import Header from "./components/Header";
import DesignMeetsAI from "./components/DesignMeetsAI";
import WhoAreWe from "./components/WhoAreWe";
import Features from "./components/Features";
import Verticals from "./components/Verticals";
import Approach from "./components/Approach";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <DesignMeetsAI />
      <WhoAreWe />
      <Features />
      <Verticals />
      <Approach />
      <Footer />
    </div>
  );
}

export default App;
