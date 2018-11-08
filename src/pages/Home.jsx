import React from "react";
import { inject, observer } from "mobx-react";
import axios from "axios";
import Autocomplete from "../components/Autocomplete";
import {
  Container, // Wrapper (div) for all the content in this component
  Logo, // The logo image (img)
  Form, // Form wrapping the search
  Label // Label for the search input

} from "../elements/home";

import logo from "../images/star-wars-seeklogo.svg";

import PageStore from "../stores/PageStore"


export default class Home extends React.Component {
  state = {
    value: "",
    People: []
  };

  componentDidMount() {
      this.loadData()
  }
  //Get data on page load
  loadData = () => {
      const filePath = "https://swapi.co/api/people/"
      axios.get(filePath)
            .then((response) => {
                const data = response.data.results;
                const People = [];
                 data.map((item, index) => (     
                        People.push(item)
                    ))
                this.setState({People});
                
            })
            .catch((error) => {
            });
    }

  render() {
    return (
      <Container>
        <Logo src={logo} />
        <Form>
          <Label>Search for Character</Label>
             <Autocomplete
                suggestions={this.state.People}  
                serverUrl ="https://swapi.co/api/people/?search="
                onSelect={selectedValue => {
                this.props.history.push(`/people/${selectedValue}`);
                }}
            />
        </Form>

      </Container>
    );
  }
}
