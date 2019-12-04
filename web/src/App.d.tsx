import React from 'react';

import { Switch, Route } from "react-router-dom";
import Landing from './pages/Landing.d';
import Bubbles from "./pages/Bubbles.d";
import Feed from "./pages/Feed.d";

declare module "react";
declare module "react-router-dom";

const inline = {
  main: {
    minHeight: "100vh",
    overflow: "auto"
  }
}

const App: React.FC = () => {
  return (
    <main style={inline.main}>
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/bubbles" render={() => <Bubbles />} />
        <Route exact path="/feed/:category" render={props => <Feed {...props} />} />
      </Switch>
    </main>
  );
}

export default App;
