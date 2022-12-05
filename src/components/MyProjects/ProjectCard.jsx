import React from "react";
import styled from "styled-components";
import { TbCode } from "react-icons/tb";
import screenShooot from "../../assets/CountryInfo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import {
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiInternetexplorer,
  SiReact,
} from "react-icons/si";

import "animate.css";
export default function ProjectCard() {
  return (
    <>
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOnce={true}
        offset={100}
      >
        <ProjectCardContainer>
          <ImageLink>
            <a href="https://zorinos-clone.vercel.app/" target="_blank">
              <img
                src="/zorinos.png"
                alt="Site Image"
                title="screenshot from the site"
              />
            </a>
          </ImageLink>
          <Description>
            <TextDescription>
              <h4>Description :</h4>
              <p>A clean clone of ZorinOs website</p>
              <h4>Tools :</h4>
              <Span>
                <span>
                  <SiNextdotjs /> NextJs
                </span>
                <span>
                  <SiReact /> ReactJs
                </span>
                <span>
                  <SiTailwindcss /> Tailwindcss
                </span>
              </Span>
            </TextDescription>
            <Links>
              <button>
                <a
                  href="https://github.com/Mohamed-Echbiy/ZorinOs_Website_Clone"
                  target="_blank"
                >
                  Source Code <TbCode />
                </a>
              </button>
              <button>
                <a href="https://zorinos-clone.vercel.app/" target="_blank">
                  Website <SiInternetexplorer />
                </a>
              </button>
            </Links>
          </Description>
        </ProjectCardContainer>
      </AnimationOnScroll>
      {/* zero project */}
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        animateOnce={true}
        offset={100}
      >
        <ProjectCardContainer>
          <ImageLink>
            <a href="https://animo-time-v2.vercel.app/" target="_blank">
              <img
                src="/screenShot_animeTime.png"
                alt="Site Image"
                title="screenshot from the site"
              />
            </a>
          </ImageLink>
          <Description>
            <TextDescription>
              <h4>Description :</h4>
              <p>
                Anime streaming site built using Typescript, Nextjs, TailwindCss
                and styled Components. the site not only offers episodes for
                animes but also display various information about them and make
                it a great place for anime lovers.
              </p>
              <h4>Tools :</h4>
              <Span>
                <span>
                  <SiNextdotjs /> NextJs
                </span>
                <span>
                  <SiReact /> ReactJs
                </span>
                <span>
                  <SiStyledcomponents /> Styled Components
                </span>
                <span>
                  <SiTailwindcss /> Tailwindcss
                </span>
                <span>
                  <SiTypescript /> Typescripts
                </span>
              </Span>
            </TextDescription>
            <Links>
              <button>
                <a
                  href="https://github.com/Mohamed-Echbiy/animo-tima-v2"
                  target="_blank"
                >
                  Source Code <TbCode />
                </a>
              </button>
              <button>
                <a href="https://animo-time-v2.vercel.app/" target="_blank">
                  Website <SiInternetexplorer />
                </a>
              </button>
            </Links>
          </Description>
        </ProjectCardContainer>
      </AnimationOnScroll>
      {/* first project */}
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOnce={true}
        offset={100}
      >
        <ProjectCardContainer>
          <ImageLink>
            <a href="https://minify-nasa.vercel.app/" target="_blank">
              <img
                src="/MinifyNasa.png"
                alt="Site Image"
                title="screenshot from the site"
              />
            </a>
          </ImageLink>
          <Description>
            <TextDescription>
              <h4>Description :</h4>
              <p>
                a Web application with beautiful animation that gives some basic
                info about planets and in the end provides a quick quiz for each
                planet.
              </p>
              <h4>Tools :</h4>
              <Span>
                <span>
                  <SiReact /> ReactJs
                </span>
                <span>
                  <SiStyledcomponents /> Styled Components
                </span>
                <span>
                  <SiTypescript /> Typescripts
                </span>
              </Span>
            </TextDescription>
            <Links>
              <button>
                <a
                  href="https://github.com/Mohamed-Echbiy/Minify-Nasa"
                  target="_blank"
                >
                  Source Code <TbCode />
                </a>
              </button>
              <button>
                <a href="https://minify-nasa.vercel.app/" target="_blank">
                  Website <SiInternetexplorer />
                </a>
              </button>
            </Links>
          </Description>
        </ProjectCardContainer>
      </AnimationOnScroll>
      {/* second project */}
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        animateOnce={true}
        offset={100}
      >
        <ProjectCardContainer>
          <ImageLink>
            <a href="https://tesla-clone-kappa-two.vercel.app/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/Mohamed-Echbiy/Tesla_Clone/main/ReadmeAssets/Screenshot%20Capture%20-%202022-07-26%20-%2015-05-59.png"
                alt="Site Image"
                title="screenshot from the site"
              />
            </a>
          </ImageLink>
          <Description>
            <TextDescription>
              <h4>Description :</h4>
              <p> a tesla homepage with some fancy animation</p>
              <h4>Tools :</h4>
              <Span>
                <span>
                  <SiReact /> ReactJs
                </span>
                <span>
                  <SiStyledcomponents /> Styled Components
                </span>
              </Span>
            </TextDescription>
            <Links>
              <button>
                <a
                  href="https://github.com/Mohamed-Echbiy/Tesla_Clone"
                  target="_blank"
                >
                  Source Code <TbCode />
                </a>
              </button>
              <button>
                <a
                  href="https://tesla-clone-kappa-two.vercel.app/"
                  target="_blank"
                >
                  Website <SiInternetexplorer />
                </a>
              </button>
            </Links>
          </Description>
        </ProjectCardContainer>
      </AnimationOnScroll>
      {/* third project */}
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        offset={100}
        animateOnce={true}
      >
        <ProjectCardContainer>
          <ImageLink>
            <a href="https://one-piece-eta.vercel.app/" target="_blank">
              <img
                src={"/onePiece.png"}
                alt="Site Image"
                title="screenshot from the site"
              />
            </a>
          </ImageLink>
          <Description>
            <TextDescription>
              <h4>Description :</h4>
              <p>
                a website for popular anime one piece with beautiful UI and a
                great performance and SEO and overall great score at lighthouse
              </p>
              <h4>Tools :</h4>
              <Span>
                <span>
                  <SiReact /> Reactjs
                </span>
                <span>
                  <SiStyledcomponents /> Styled components
                </span>
              </Span>
            </TextDescription>
            <Links>
              <button>
                <a
                  href="https://github.com/Mohamed-Echbiy/One_piece_minWiki"
                  target="_blank"
                >
                  Source Code <TbCode />
                </a>
              </button>
              <button>
                <a href="https://one-piece-eta.vercel.app/" target="_blank">
                  Website <SiInternetexplorer />
                </a>
              </button>
            </Links>
          </Description>
        </ProjectCardContainer>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        offset={100}
        animateOnce={true}
      >
        <ProjectCardContainer>
          <ImageLink>
            <a href="https://country-info-pi.vercel.app/" target="_blank">
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
              <p>An app that return country information</p>
              <h4>Tools :</h4>
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
                  Website <SiInternetexplorer />
                </a>
              </button>
            </Links>
          </Description>
        </ProjectCardContainer>
      </AnimationOnScroll>
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
  position: relative;
  a {
    img {
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
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
    font-size: 1rem;
    margin-bottom: 10px;
    margin-right: 15px;
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
