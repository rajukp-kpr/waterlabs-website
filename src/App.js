import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home";

import HealthPage from "./verticalsComponents/HealthPage";
import BankingPage from "./verticalsComponents/BankingPage";
import InsurancePage from "./verticalsComponents/InsurancePage";
import RetailPage from "./verticalsComponents/RetailPage";
import UtilitiesPage from "./verticalsComponents/UtilitiesPage";
import LogisticsPage from "./verticalsComponents/LogisticsPage";
import FinancialPage from "./verticalsComponents/FinancialPage";
import ScrollToTop from "./verticalsComponents/Scrollup";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
    

        <Switch>

        
          <Route path="/" exact component={Home} />

          

          <Route path="/healthcare" component={HealthPage} />
          <Route path="/banking" component={BankingPage} />
          <Route path="/insurance" component={InsurancePage} />
          <Route path="/retail-space" component={RetailPage} />
          <Route path="/utilities" component={UtilitiesPage} />
          <Route path="/logistics" component={LogisticsPage} />
          <Route path="/financial-services" component={FinancialPage} />
          


        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
