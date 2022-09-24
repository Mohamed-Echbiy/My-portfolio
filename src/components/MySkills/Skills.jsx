import React from "react";
import styled from "styled-components";
import Language from "./Language";
export default function Skills() {
  return (
    <>
      <H2>My Skills</H2>
      <SkillsContaier id="MySkills" className="container">
        <ContentSkills>
          <Language />
        </ContentSkills>
      </SkillsContaier>
    </>
  );
}
// styling
const H2 = styled.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  text-align: center;
  padding: 10px;
  background-color: #3c1a4afa;
  letter-spacing: 2px;
  font-size: 2rem;
`;
const SkillsContaier = styled.div`
  width: 100%;
`;
const ContentSkills = styled.div`
  > h3 {
    margin: auto;
    font-size: 1.3rem;
    margin-top: 30px;
    padding: 5px;
    border-bottom: 3px solid #800080;
    width: fit-content;
  }
`;
