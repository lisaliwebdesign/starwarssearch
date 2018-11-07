import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: #ff057c;
  background-image: linear-gradient(
    -225deg,
    #000000 0%,
    #000103 19%,
    #5A79A1 50%,
    #EEF8FC 67%,
    #2E3546 100%
  );
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
  width: 200px;
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
