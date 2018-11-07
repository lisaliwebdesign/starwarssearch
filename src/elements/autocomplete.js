import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  width: 100%;  
  border: none; 
  outline-color: rgb(255, 255, 0);  
  background-color: #ffffff; 
  border: 1px solid #000000;
`;

const ListItem = styled.li`
  padding:10px;
  &:hover {
    background-color: #000000; 
    color: #ffffff; 
    cursor:pointer;
  }
`;

const NoDataContainer = styled.div`
  color: #ffffff;
`;


const AutoSuggest = styled.input`
  display: "inline-block";
    width: 100%;
    padding: 15px;
    height: 50px;
    border: none;
    outline-color: #ffff00;
    font-family: Barlow Condensed, sans-serif;
    font-size: 1.5rem;
    color:#866667
`;

export {
  List,
  ListItem,
  NoDataContainer,
  AutoSuggest
};
