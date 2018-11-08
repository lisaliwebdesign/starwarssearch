import styled, { css } from "styled-components";
import * as variables from "./variables.js";

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: ${variables.bg};
  color: rgb(245, 245, 245);
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const DataContainer = styled.ul`
  width: 60%;
  border: none;
  outline-color: rgb(255, 255, 0);
  padding: 20px;
  position: absolute;
  top: 150px;
  background-color: #000000;
  border-radius: 25px;
  box-shadow: 0 0 50px #ffff00, inset 0 0 50px #ffff00;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const DataContainerItem = styled.li`
  padding: 10px;
  width: 100%;
`;
const ItemDivLabel = styled.div`
  display: inline-block;
  width: 30%;
  vertical-align: top;
  text-transform: capitalize;
  text-shadow: 0 0 10px #ff0000;
`;
const ItemDiv = styled.div`
  display: inline-block;
  text-shadow: 0 0 10px #1d388a;
  width: 65%;
  font-size: 1.5rem;
`;
const Link = styled.a`
  color: #1d388a !important;
  text-decoration: underline;
  padding: 5px;
  cursor: pointer;
  display: inherit;
`;

export {
  PageContainer,
  DataContainer,
  DataContainerItem,
  ItemDivLabel,
  ItemDiv,
  Link
};
