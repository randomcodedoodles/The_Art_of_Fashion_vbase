import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import { Header } from './components/Header';
import { Home } from "./components/homeComp/Home";
import { ContactUs } from "./components/contactUsComp/ContactUs";
import { AboutUs } from "./components/aboutUsComp/AboutUs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
