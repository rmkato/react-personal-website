import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';


function App() {
  const [ page, setPage ] = useState("home");

  return (
    <div className="app">
      
      <Header />
      <Navigation page={page} setPage={setPage} />
      
      {/*
      <Switch>
        <Route path="/about" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route component={Home} />
      </Switch>
      */}

      {
        page === "home" ? 
          <Home />
        : page === "projects" ?
          <Projects />
        :
          <Home />
      }

      <Footer />

    </div>
  );
}

export default withRouter(App);
