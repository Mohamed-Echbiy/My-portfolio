import React from "react";
import styled from "styled-components";
export default function NavBar() {
  return (
    <Navbar className="container">
      <Links>
        <li>
          <a href="#MySkills">My Skills</a>
        </li>
        <li>
          <a href="#MyWork">My Work</a>
        </li>{" "}
        <li>
          <a href="#AboutMe">About Me</a>
        </li>{" "}
        <li>
          <a href="#ContactMe">Contact Me</a>
        </li>
      </Links>
      <Burgger></Burgger>
    </Navbar>
  );
}
//styling

const Navbar = styled.div`
  height: 8vh;
  background-color: #fffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202125;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    margin-right: 20px;
  }
  a {
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 600;
    :hover {
      border-bottom: 3px solid purple;
      color: #986a57;
    }
    @media (max-width: 360px) {
      font-size: 0.8rem;
    }
  }
`;
const Burgger = styled.div``;
