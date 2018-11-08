import React, { Component, Fragment } from "react";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { Motion, spring } from "react-motion";
import Nav from "../components/Nav";
import PageItem from "../components/PageItem";
import {
  PageContainer //Set div tag for page
} from "../elements/page";

@inject("PageStore")
@observer
export default class Page extends React.Component {
  //Page onload
  componentDidMount() {
    let isSearch = !this.props.location.state;
    this.props.PageStore.loadData(
      isSearch,
      this.props.location.pathname,
      this.props.match.params.people
    );
  }
  //Update comopment when received new data
  componentWillReceiveProps(nextProps) {
    let isSearch = !nextProps.location.state;
    nextProps.PageStore.loadData(isSearch, nextProps.location.pathname);
  }

  render() {
    const PageStore = this.props.PageStore;
    if (PageStore.loadDataError) {
      return <PageContainer>Sorry... very embarassing</PageContainer>;
    }
    if (!PageStore.pageData) {
      return <PageContainer>Loading...</PageContainer>;
    }
    return (
      <PageContainer>
        <Nav
          name={
            PageStore.pageName +
            (PageStore.pageData.name
              ? PageStore.pageData.name
              : PageStore.pageData.title)
          }
        />
        <PageItem
          data={PageStore.pageData}
          onSelect={(path, location) => {
            this.props.history.push({
              pathname: path,
              state: location
            });
          }}
        />
      </PageContainer>
    );
  }
}
