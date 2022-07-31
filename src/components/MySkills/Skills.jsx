import React, { useRef, useState } from "react";
import styled from "styled-components";
import Language from "./Language";
import Libraries from "./Libraries";
export default function Skills() {
  const [isActive, setIsACtive] = useState(0);
  console.log(isActive);
  return (
    <>
      <H2>My Skills</H2>
      <SkillsContaier id="MySkills" className="container">
        <ChooseBox>
          <p
            onClick={() => setIsACtive(0)}
            className={isActive === 0 ? "Active" : "notActive"}
          >
            Languages
          </p>
          <p
            onClick={() => setIsACtive(1)}
            className={isActive === 1 ? "Active" : "notActive"}
          >
            Tools
          </p>
        </ChooseBox>
        <ContentSkills>
          {isActive === 0 ? (
            <h3>I do know :</h3>
          ) : (
            <h3>I have Experience using :</h3>
          )}
          {isActive === 0 ? <Language /> : <Libraries />}
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
const ChooseBox = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  padding: 0px 10px;
  border-radius: 10px;
  background-color: #14131394;
  margin: auto;
  p {
    color: inherite;
    padding: 10px;
    cursor: pointer;
    position: relative;
    font-weight: 600;
    :hover {
      color: #986a57;
      background-color: black;
    }
  }
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
