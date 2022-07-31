import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header/Header";
import Skills from "./components/MySkills/Skills";
import Project from "./components/MyProjects/Project";
import Aboutme from "./components/AboutMe/Aboutme";
import Footer from "./components/Footer/Footer";
import { TbMessageCircle } from "react-icons/tb";
function App() {
  const [animationState, setAnimationState] = useState(0);

  window.onscroll = function Animation() {
    setAnimationState(1);
  };

  return (
    <Appo>
      <Header />
      <Skills />
      <Project />
      <Aboutme />
      <Footer />
    </Appo>
  );
}

export default App;
//  styling

const Appo = styled.div``;
