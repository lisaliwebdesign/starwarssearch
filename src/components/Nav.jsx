import React from "react";
import PropTypes from "prop-types";
import {
  NavBar, // The wrapper for the entire nav (nav element)
  HomeLink, // A link (a tag) which will take the user home
  HomeImage, // Image of a house
  CharName // The name of the Character
} from "../elements/nav";
import homeImage from "../images/home.png";

export default class Nav extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <NavBar>
        <HomeLink to="/">
          <HomeImage src={homeImage} />
        </HomeLink>
        <CharName>{this.props.name}</CharName>
      </NavBar>
    );
  }
}
