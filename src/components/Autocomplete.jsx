import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  List, //Suggestion List
  ListItem, //Suggestion List item
  NoDataContainer, //No data wrapper (div) 
  AutoSuggest // User enter input

} from "../elements/autocomplete";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }
  
  // Load data from user input 
    getData =(val)=>{
      // Get requet url
      const { serverUrl } = this.props;
      const filteredSuggestions = [];
      // Add url parameters
      let filePath = serverUrl+val;
       axios.get(filePath)
            .then((response) => {
                const data = response.data.results;
                data.map((item, index) => (     
                        filteredSuggestions.push(item)
                    ));
                this.setState({filteredSuggestions});
                
            })
            .catch((error) => {
            });
    return filteredSuggestions;
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    let filteredData = this.getData(userInput);
    this.setState({
      activeSuggestion: 0,
      filteredData,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    if (this.props.onSelect){
        this.props.onSelect(e.currentTarget.innerText, e.target.getAttribute('value'));
    }
 
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
  
onFocus = e => {
    // List all when user not entered anything    
    if (e.currentTarget.value === '') {
        const {suggestions} = this.props;
        const userInput = e.currentTarget.value;
        // Display all data
        const filteredSuggestions = suggestions;
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: ''
        });
    }
};


  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onFocus,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
            <List>
            {filteredSuggestions.map((suggestion, index) => {
              return (                        
                <ListItem key={suggestion.name} value={suggestion.url} onClick={onClick}>
                   {suggestion.name}  
                </ListItem>

              );
            })}
           </List>
        );
      } else {
        suggestionsListComponent = (
  
          <NoDataContainer>
                  No suggestions
          </NoDataContainer>
          
        );
      }
    }

    return (
      <Fragment>
          <AutoSuggest type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          onFocus={onFocus}
          ></AutoSuggest>       
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;