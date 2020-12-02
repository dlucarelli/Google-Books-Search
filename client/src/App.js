import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/savedBooks";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Search from "./pages/index";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/searched" component={Search} />
          <Route exaxt path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
      
        
        
    );
  }
}

export default App;