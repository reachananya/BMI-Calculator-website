import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BMI from "../pages/BMI";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/bmi" component={BMI} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
