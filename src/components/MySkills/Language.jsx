import React from "react";
import styled from "styled-components";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
export default function Language() {
  return (
    <CardContainer>
      <Card>
        <Image>
          <TbBrandHtml5 />
        </Image>
        <Name>
          <h3>HTML5</h3>
        </Name>
      </Card>
      <Card>
        <Image>
          <TbBrandCss3 />
        </Image>
        <Name>
          <h3>CSS3</h3>
        </Name>
      </Card>
      <Card>
        <Image>
          <TbBrandJavascript />
        </Image>
        <Name>
          <h3>JS</h3>
        </Name>
      </Card>
    </CardContainer>
  );
}
// styling
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;
const Card = styled.div`
  max-width: 300px;
  border-radius: 25px 0px 15px 5px;
  padding: 20px 10px;
  background-color: #ffffff5;
  box-shadow: 0px 10px 10px 0px #141313e0;
  transition: ease 0.5s;
  margin-right: 20px;
  :hover {
    box-shadow: 0px 14px 16px 2px #000000e8;
  }
`;
const Image = styled.div`
  svg {
    width: 200px;
    height: 200px;
    margin: auto;
    display: block;
    @media (max-width: 765px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 992px) {
      width: 150px;
      height: 150px;
    }
  }
`;
const Name = styled.div`
  h3 {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;
