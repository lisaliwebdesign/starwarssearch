import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import People from "./pages/People";
import Home from "./pages/Home";

import CharacterStore from "./stores/CharacterStore";

export default class App extends Component {
  render() {
    return (
      <Provider CharacterStore={CharacterStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:people" exact component={People} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
