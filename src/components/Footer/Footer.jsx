import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { SiStyledcomponents, SiVite } from "react-icons/si";
import FormModule from "../FormModule";
export default function Footer() {
  return (
    <FooterContainer id="ContactMe" className="container">
      <FooterMe>
        <Info>
          <h3>Reach me :</h3>
          <Social>
            <a
              href="https://www.linkedin.com/in/mohamed-echbiy-442aa9244/"
              target="_blank"
            >
              <BsLinkedin className="contactme" />
            </a>
            <a href="https://github.com/Mohamed-Echbiy" target="_blank">
              <BsGithub className="contactme" />
            </a>
          </Social>
          <BuildWith>
            <h3>This site builed using :</h3>
            <ul>
              <li>
                <TbBrandReactNative /> <span>React Js</span>
              </li>
              <li>
                <SiStyledcomponents /> <span>Styled Components</span>
              </li>
              <li>
                <SiVite /> <span>Vite</span>
              </li>
              <li>
                <p>Designed by me </p>
              </li>
            </ul>
          </BuildWith>
        </Info>
        <ContactMe>
          <FormModule />
        </ContactMe>
      </FooterMe>
    </FooterContainer>
  );
}
// styling
const FooterContainer = styled.div`
  margin-top: 80px;
  background-color: #1413132b;
  box-shadow: 0px 0px 0px 0px black;
  box-shadow: 0px 7px 20px 12px #00000094;
  h3 {
    font-size: 1.1rem;
    position: relative;
    width: fit-content;
    height: fit-content;
    color: #986a57;
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-bottom: 2px solid #800080;
      bottom: -5px;
      left: 0;
    }
  }
  svg {
    width: 30px;
    height: 30px;
  }
  form {
    width: 100%;
  }
`;
const FooterMe = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px 0px;
`;
const Info = styled.div`
  width: calc(50% - 15px);
  min-width: 300px;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Social = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
`;
const BuildWith = styled.div`
  h3 {
    margin-bottom: 15px;
  }
  ul li {
    margin-bottom: 15px;
    display: flex;
    amign-itmes: center;
    gap: 15px;
    span {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.7rem;
      color: crimson;
      font-weight: 700;
      padding: 5px 0px;
      border-top: solid 1px #800080;
    }
  }
`;
const ContactMe = styled.div`
  width: calc(50% - 15px);
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
