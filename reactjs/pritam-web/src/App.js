// import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponant/Header";
import About from "./Mycomponant/About";
import Learn from "./Mycomponant/Learn";
import Home from "./Mycomponant/Home";
import Measure from "./Mycomponant/Measure";
import Blog from "./Mycomponant/Blog";
import Case from "./Mycomponant/Case";




import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/learn">
          <Learn />

        </Route>
        <Route path="/measure">
          <Measure />
        </Route>
        <Route path="/about">
          <About />

        </Route>
        <Route path="/blog">
          <Blog />
          
        </Route>
        <Route path="/case">
          <Case />
          
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
