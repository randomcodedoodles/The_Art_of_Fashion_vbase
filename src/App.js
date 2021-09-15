import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import { Header } from './components/Header';
import { Home } from "./components/homeComp/Home";
import { ContactUs } from "./components/contactUsComp/ContactUs";
import { AboutUs } from "./components/aboutUsComp/AboutUs";
import { Footer } from "./components/Footer";

function App() {
  //useEffect(()=>{window.scroll(150, 0);},[]) //window.scrollTo(150, 0);
  useEffect(()=>{
    console.log(document.body.clientWidth, window.innerWidth, document.documentElement.clientWidth, window.screen.width)
    console.log(document.body.scrollWidth, window.innerWidth);
    //const handleHorizontalScrollBarWhenLoaded = () => window.scrollTo((window.innerWidth - document.body.clientWidth)*10, 0);
    const handleHorizontalScrollBarWhenLoaded = () => window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, 0);
    window.addEventListener("load", handleHorizontalScrollBarWhenLoaded);

    return () => window.removeEventListener("load", handleHorizontalScrollBarWhenLoaded);
  },[]) 
  
  //useEffect(()=>{window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, 0);},[])
  //useEffect(()=>{console.log(document.body.scrollWidth, document.body.clientWidth, window.innerWidth)},[])

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
