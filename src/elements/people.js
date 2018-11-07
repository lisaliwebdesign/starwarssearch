import styled, { css } from "styled-components";
import * as variables from './variables.js';



const PeopleContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: ${variables.bg};
  color: rgb(245, 245, 245);
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;



export {PeopleContainer };
