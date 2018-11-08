import React, { Component, Fragment } from "react";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { Motion, spring } from "react-motion";
import Nav from "../components/Nav";
import {
  PageContainer,
  DataContainer,
  DataContainerItem,
  ItemDivLabel,
  ItemDiv,
  Link
 
} from "../elements/page";

@inject( "PageStore")
@observer
export default class Page extends React.Component {
   componentDidMount() {
        let isSearch = !this.props.location.state
        this.props.PageStore.loadData(isSearch,this.props.location.pathname,this.props.match.params.people);  
    }
    
    componentWillReceiveProps(nextProps) { 
        let isSearch = !nextProps.location.state
        nextProps.PageStore.loadData(isSearch, nextProps.location.pathname);
    }
    
    //Filter 'created','edited','url' data out for displaying
    filterData = (data) =>{
        const deleteKey =['created','edited','url'];
        Object.keys(data)
              .filter(key => deleteKey.includes(key))
              .forEach(key => delete data[key]);
        return data
    }
    getItemData =(item,val)=>{
        return this.props.CharacterStore.loadCharacterData(item,val);
    }
    onClick = e => {
       this.props.history.push({ 
          pathname:`/${e.currentTarget.getAttribute('value')}/${parseInt(e.currentTarget.text.trim())}`,
          state: {prePage:this.props.location}
      });
    };
    singleItem =(item,val)=>{
        item =item.replace("_", " ");
        const setLink = (val)=>{
            let linkString = val.split("/");
            let linkType =linkString[linkString.length-3];
            let linkUrl = linkString[linkString.length-2];
            return <Link key={linkType+linkUrl}  value={linkType} onClick={this.onClick}> {linkUrl}</Link>
        }
        //Check if value is a array of links
        if(val.$mobx !== undefined){
            if (val.length === 0){
                val = 'n/a'
            }else{
                let allStrings =[];
                val.forEach(function(entry, index) { 
                    allStrings.push(setLink(entry));
                });
                val = allStrings;
            }
 
        }
        //Check if value is a link
        if (String(val).includes('https')){
              val = setLink(val);
        }
        return (
                <Fragment>
                    <ItemDivLabel>{item}</ItemDivLabel>
                    <ItemDiv>{val}</ItemDiv>
                </Fragment>
                )         
    }
    displayItem =(data)=>{
     return Object.keys(this.filterData(data)).map((item, i) => (             
                    <DataContainerItem key={i}>
                    {this.singleItem(item,data[item] )}
                    </DataContainerItem>  
        ))

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
                    <Nav name={PageStore.pageData.name?PageStore.pageData.name:PageStore.pageData.title}/>
                    <DataContainer>    
                    {this.displayItem(PageStore.pageData)}
                    </DataContainer>
                </PageContainer>
                 
             )

    }
}