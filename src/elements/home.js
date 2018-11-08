import styled from "styled-components";
import { Link } from "react-router-dom";
import * as variables from './variables.js';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: #ff057c;
  background-image: ${variables.bg};
`;

const Form = styled.form`
  padding-top: 40vh;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 50px;

  @media (max-width: 810px) {
    width: 90%;
  }
`;

const Label = styled.label`
  display: block;
  padding-bottom: 1rem;
  font-size: 2rem;
  color: #ffffff;
`;


const Logo = styled.img`
  width: 300px;
  position: absolute;
  top: 25px;
  right: 50px;
`;

export {
  Container,
  Form,
  Label,
  Logo
};
