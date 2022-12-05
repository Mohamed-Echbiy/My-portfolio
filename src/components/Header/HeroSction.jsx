import React from "react";
import styled from "styled-components";
import { BsArrowDownShort } from "react-icons/bs";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import image from "../../assets/Me.png";
export default function HeroSction() {
  return (
    <HeroSection_Container>
      <Content>
        <h1 className="focus-in-expand-fwd ">
          <span>Hello,</span>
          <p>
            <span>I am</span>
            {["M", "O", "H", "A", "M", "E", "D"].map((letter, index) => (
              <span key={index + 1233}>{letter}</span>
            ))}
          </p>
          {` a Front End Web  Developer.`}
        </h1>
        <Button className="pulsate-bck">
          <a href="#ContactMe">Contact Me 😄</a>
        </Button>
        <Button>
          <a href="/resume.pdf">Download 👇</a>
        </Button>
        <Icon>
          <a
            href="https://www.linkedin.com/in/mohamed-echbiy-442aa9244/"
            target="_blank"
          >
            <BsLinkedin className="contact me" />
          </a>
          <a href="https://github.com/Mohamed-Echbiy" target="_blank">
            <BsGithub className="contact me" />
          </a>
        </Icon>
      </Content>
      <a href="#MyWork">
        <BsArrowDownShort className="Icon shake-vertical" />
      </a>
      <Image>
        <img src={image} alt="me" />
      </Image>
    </HeroSection_Container>
  );
}

// styling

const HeroSection_Container = styled.div`
  background-color: #202125;
  height: 92vh;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  position: relative;
  justify-content: space-around;
  svg {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    :hover {
      filter: invert(13%) sepia(99%) saturate(6033%) hue-rotate(296deg)
        brightness(62%) contrast(106%);
    }
  }
`;
const Content = styled.div`
  padding: 30px 20px;
  border-radius: 5px;
  h1 {
    font-size: 2rem;
    letter-spacing: 2px;
    > span {
      color: #800080;
      text-shadow: 1px 8px 5px black;
      display: block;
    }
    p {
      color: crimson;
      display: flex;
      & + span {
        margin-left: 10px;
      }
      span {
        margin-right: 2px;
        color: crimson;
        transition: ease 0.3s;
        cursor: pointer;
        :hover {
          transform: translateY(-10px);
          text-shadow: 1px 8px 5px black;
        }
      }
    }
  }
`;
const Button = styled.div`
  padding: 10px 20px;
  display: inline-block;
  margin-top: 20px;
  margin-right: 20px;
  background-color: black;
  border-radius: 10px;
  color: #800080;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: #14131394;
    animation-play-state: paused;
    color: #986a57;
  }
`;
const Image = styled.div`
  width: 40%;
  min-width: 200px;
  min-height: 200px;
  overflow: hidden;
  position: relative;
  img {
    max-width: 100%;
    opacity: 0.7;
  }
  @media (max-width: 620px) {
    display: none;
  }
`;
const Icon = styled.div`
  margin-top: 30px;
`;
