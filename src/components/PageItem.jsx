import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import {
  DataContainer, //Set List ul for data section
  DataContainerItem, //Set List item li for data display
  ItemDivLabel, // Set div list item for data title
  ItemDiv, // Set div list item for data value
  Link // Set a link tag
} from "../elements/page";

export default class PageItem extends React.Component {
  static propTypes = {
    data: PropTypes.object
  };

  //Filter 'created','edited','url' data out for displaying
  filterData = data => {
    const deleteKey = ["created", "edited", "url"];
    Object.keys(data)
      .filter(key => deleteKey.includes(key))
      .forEach(key => delete data[key]);
    return data;
  };
  //Click function for data
  onClick = e => {
    if (this.props.onSelect) {
      this.props.onSelect(
        `/${e.currentTarget.getAttribute("value")}/${parseInt(
          e.currentTarget.text.trim()
        )}`,
        { prePage: this.props.location }
      );
    }
  };

  //Clear data item data for display
  singleItem = (item, val) => {
    //Replace'_' with space
    item = item.replace("_", " ");
    //Change val null value to empty string
    val = val === null ? "n/a" : val;
    //Build Link element
    const setLink = val => {
      let linkString = val.split("/");
      let linkType = linkString[linkString.length - 3];
      let linkUrl = linkString[linkString.length - 2];
      return (
        <Link key={linkType + linkUrl} value={linkType} onClick={this.onClick}>
          {linkUrl}
        </Link>
      );
    };
    //Check if value is a array of links
    if (val.$mobx !== undefined) {
      if (val.length === 0) {
        val = "n/a";
      } else {
        let allStrings = [];
        val.forEach(function(entry, index) {
          allStrings.push(setLink(entry));
        });
        val = allStrings;
      }
    }
    //Check if value is a link
    if (String(val).includes("https")) {
      val = setLink(val);
    }
    return (
      <Fragment>
        <ItemDivLabel>{item}</ItemDivLabel>
        <ItemDiv>{val}</ItemDiv>
      </Fragment>
    );
  };

  //Display data list
  displayItem = data => {
    return Object.keys(this.filterData(data)).map((item, i) => (
      <DataContainerItem key={i}>
        {this.singleItem(item, data[item])}
      </DataContainerItem>
    ));
  };
  render() {
    return <DataContainer>{this.displayItem(this.props.data)}</DataContainer>;
  }
}
