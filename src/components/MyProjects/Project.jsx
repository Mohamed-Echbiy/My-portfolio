import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
export default function Project() {
  return (
    <ProjectContainer classNmae="container" id="MyWork">
      <H2>My Work</H2>
      <ProjectCard />
    </ProjectContainer>
  );
}
// styling
const ProjectContainer = styled.div`
  overflow-x: hidden;
`;
const H2 = styled.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  text-align: center;
  padding: 10px;
  background-color: #3c1a4afa;
  letter-spacing: 2px;
  font-size: 2rem;
`;
