import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";


import Home from "./pages/Home";
import Page from "./pages/Page";

import PageStore from "./stores/PageStore";

export default class App extends Component {
  render() {
    return (
      <Provider PageStore={PageStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/people/:people" exact component={Page} />
            <Route path="/planets/:planets" exact component={Page} />
            <Route path="/films/:films" exact component={Page} />
            <Route path="/films/:films" exact component={Page} />
            <Route path="/species/:species" exact component={Page} />
            <Route path="/vehicles/:vehicles" exact component={Page} />
            <Route path="/starships/:starships" exact component={Page} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
