import React from "react";
import styled from "styled-components";
import { TbBrandReactNative, TbCode } from "react-icons/tb";
import screenShot from "../../assets/imageme.png";
import screenShoot from "../../assets/Hostter.png";
import screenShooot from "../../assets/CountryInfo.png";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandBootstrap,
  TbBrandJavascript,
} from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
export default function ProjectCard() {
  return (
    <>
      {/* first project */}
      <ProjectCardContainer>
        <ImageLink>
          <a href="https://anime-time.vercel.app/" target="_blank">
            {" "}
            <img
              src={screenShot}
              alt="Site Image"
              title="screenshot from the site"
            />
          </a>
        </ImageLink>
        <Description>
          <TextDescription>
            <h4>Description :</h4>
            <p>
              The site showcase recent animes and episodes and much more its
              build using jikan api that being used by MyAnimeList. It doesn't
              support watching episodes due to Property rights.
            </p>
            <h4>What I used to build this site :</h4>
            <Span>
              <span>
                <TbBrandReactNative /> React Js
              </span>
              <span>
                <SiStyledcomponents /> Styled Components
              </span>
              <span>
                <IoLogoNpm /> Npm
              </span>
            </Span>
          </TextDescription>
          <Links>
            <button>
              <a
                href="https://github.com/Mohamed-Echbiy/AnimoTime"
                target="_blank"
              >
                Source Code <TbCode />
              </a>
            </button>
            <button>
              {" "}
              <a href="https://anime-time.vercel.app/" target="_blank">
                Website
              </a>{" "}
            </button>
          </Links>
        </Description>
      </ProjectCardContainer>
      {/* second project */}
      <ProjectCardContainer>
        <ImageLink>
          <a href="https://hostter.vercel.app/" target="_blank">
            {" "}
            <img
              src={screenShoot}
              alt="Site Image"
              title="screenshot from the site"
            />
          </a>
        </ImageLink>
        <Description>
          <TextDescription>
            <h4>Description :</h4>
            <p>A mobile responsive landing page</p>
            <h4>What I used to build this site :</h4>
            <Span>
              <span>
                <TbBrandHtml5 /> HTML5
              </span>
              <span>
                <TbBrandCss3 /> CSS3
              </span>
              <span>
                <TbBrandBootstrap /> Bootstrap
              </span>
            </Span>
          </TextDescription>
          <Links>
            <button>
              <a
                href="https://github.com/Mohamed-Echbiy/Hostter"
                target="_blank"
              >
                Source Code <TbCode />
              </a>
            </button>
            <button>
              <a href="https://hostter.vercel.app/" target="_blank">
                Website
              </a>
            </button>
          </Links>
        </Description>
      </ProjectCardContainer>
      {/* third project */}
      <ProjectCardContainer>
        <ImageLink>
          <a href="https://country-info-pi.vercel.app/" target="_blank">
            {" "}
            <img
              src={screenShooot}
              alt="Site Image"
              title="screenshot from the site"
            />
          </a>
        </ImageLink>
        <Description>
          <TextDescription>
            <h4>Description :</h4>
            <p>
              Country info is a site get the user information about a sepecfied
              country
            </p>
            <h4>What I used to build this site :</h4>
            <Span>
              <span>
                <TbBrandHtml5 /> Html5
              </span>
              <span>
                <TbBrandCss3 /> Css3
              </span>
              <span>
                <TbBrandJavascript /> Java script
              </span>
            </Span>
          </TextDescription>
          <Links>
            <button>
              <a
                href="https://github.com/Mohamed-Echbiy/Country-Info"
                target="_blank"
              >
                Source Code <TbCode />
              </a>
            </button>
            <button>
              <a href="https://country-info-pi.vercel.app/" target="_blank">
                Website
              </a>
            </button>
          </Links>
        </Description>
      </ProjectCardContainer>
    </>
  );
}
// styling
const ProjectCardContainer = styled.div`
  width: 95%;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0px 10px 10px 0px #141313e0;
  margin-bottom: 30px;
`;
const ImageLink = styled.div`
  width: 45%;
  min-width: 300px;
  margin-bottom: 20px;
  margin-right: 20px;
  img {
    width: 100%;
    border-radius: 20px;
    opacity: 0.7;
  }
`;
const Description = styled.div`
  width: 50%;
  min-width: 280px;
  display: flex;
  flex-direction: column;
`;
const TextDescription = styled.div`
  h4 {
    color: Yellow;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  p {
    line-height: 1.7;
    font-size: 1.1rem;
    font-weight: 600;
  }
  span {
    color: #800080;
    font-weight: 600;
    min-width: fit-content;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    margin-bottom: 10px;
    margin-right: 10px;
    svg {
      height: 30px;
      width: 30px;
      margin-right: 10px;
    }
  }
`;
const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    color: #800080;
    display: block;
    padding: 10px;
    min-width: fit-content;
    border-radius: 5px;
    cursor: pointer;
    background-color: black;
    margin-top: 10px;
    margin-right: 10px;
    :hover {
      background-color: #14131394;
      a {
        color: #986a57;
      }
    }
    a {
      display: flex;
      align-items: center;
    }
    svg {
      width: 20px;
      height: 20px;
      margin-left: 5px;
    }
  }
`;
const Span = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
