import React from "react";
import { inject, observer } from "mobx-react";
import axios from "axios";
import Autocomplete from "../components/Autocomplete";
import {
  Container, // Wrapper (div) for all the content in this component
  Logo, // The logo image (img)
  Form, // Form wrapping the search
  Label, // Label for the search input
  Loading // Dive for loading content
} from "../elements/home";

import logo from "../images/star-wars-seeklogo.svg";

import PageStore from "../stores/PageStore";

export default class Home extends React.Component {
  state = {
    People: [],
    status: "initial"
  };

  componentDidMount() {
    this.loadData();
  }
  //Get data on page load
  loadData = async () => {
    this.setState({
      status: "searching",
      People: []
    });

    PageStore.loadDefaultData()
      .then(data =>
        this.setState({
          status: "done",
          People: data
        })
      )
      .catch(err => {
        this.setState({
          status: "error"
        });
      });
  };

  render() {
    const { People, status } = this.state;
    return (
      <Container>
        <Logo src={logo} />
        {status === "searching" && (
          <Loading>
            <Label>Loading</Label>
          </Loading>
        )}
        {status === "done" && (
          <Form>
            <Label>Search for Character</Label>
            <Autocomplete
              suggestions={this.state.People}
              serverUrl="https://swapi.co/api/people/?search="
              onSelect={selectedValue => {
                this.props.history.push(`/people/${selectedValue}`);
              }}
            />
          </Form>
        )}
        {status === "error" && (
          <Loading>
            <Label>Oops... error in getting data!</Label>
          </Loading>
        )}
      </Container>
    );
  }
}
