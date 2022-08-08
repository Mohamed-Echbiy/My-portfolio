import React from "react";
import styled from "styled-components";

export default function Aboutme() {
  return (
    <AboutmeContainer id="AboutMe">
      <H2>About me</H2>

      <AboutMe className="container">
        <p>
          A <span>FrontEnd Developer</span> can create responsive and dynamic
          Websites and also love learning new things every day and enjoying the
          process of solving problems.
        </p>
      </AboutMe>
    </AboutmeContainer>
  );
}
// styling
const AboutmeContainer = styled.div``;
const H2 = styled.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  text-align: center;
  padding: 10px;
  background-color: #3c1a4afa;
  letter-spacing: 2px;
  font-size: 2rem;
`;

const AboutMe = styled.div`
  padding: 30px;
  box-shadow: 6px 9px 8px 7px #00000069;
  max-width: 500px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 0px 45px 90px 0px;
  p {
    width: fit-content;
    font-size: 1.2rem;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 700;
    span {
      color: Yellow;
    }
  }
`;
