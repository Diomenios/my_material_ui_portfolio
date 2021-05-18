import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import WorkingExperience from "./components/WorkingExperience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/working-experience" component={WorkingExperience} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about-me" component={AboutMe} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
