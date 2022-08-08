import React from "react";
import styled from "styled-components";
import {
  TbBrandSass,
  TbBrandReactNative,
  TbBrandBootstrap,
} from "react-icons/tb";
import {
  SiMaterialui,
  SiChakraui,
  SiVite,
  SiFigma,
  SiStyledcomponents,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
import { DiGit } from "react-icons/di";

// import swiperJs

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

export default function Libraries() {
  return (
    <CardContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
        className="MySwiper"
        breakpoints={{
          200: {
            width: 200,
            slidesPerView: 1,
          },
          765: {
            width: 765,
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <TbBrandSass />
            </Image>
            <Name>
              <h3>SASS</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <TbBrandReactNative />
            </Image>
            <Name>
              <h3>REACT JS</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <SiStyledcomponents />
            </Image>
            <Name>
              <h3>STYLED COMPONENTS</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <SiTailwindcss />
            </Image>
            <Name>
              <h3>TILWINDCSS</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <TbBrandBootstrap />
            </Image>
            <Name>
              <h3>BOOTSTRAP</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <SiMaterialui />
            </Image>
            <Name>
              <h3>MATERIAL UI</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <SiChakraui />
            </Image>
            <Name>
              <h3>CHAKRA UI</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <IoLogoNpm />
            </Image>
            <Name>
              <h3>NPM</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <SiVite />
            </Image>
            <Name>
              <h3>VITE</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <SiFigma />
            </Image>
            <Name>
              <h3>FIGMA</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <DiGit />
            </Image>
            <Name>
              <h3>GIT</h3>
            </Name>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Card">
            <Image>
              <SiGithub />
            </Image>
            <Name>
              <h3>GITHUB</h3>
            </Name>
          </Card>
        </SwiperSlide>
      </Swiper>
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
  & .MySwiper {
    padding: 50px 20px;
  }
`;
const Card = styled.div`
  max-width: 300px;
  border-radius: 25px 0px 15px 5px;
  padding: 20px 10px;
  background-color: #ffffff5;
  box-shadow: 0px 10px 10px 0px #141313e0;
  transition: ease 0.5s;
  margin-right: 10px;
  margin: auto;
  :hover {
    box-shadow: 0px 14px 16px 2px #000000e8;
  }
  @media (min-width: 1990px) {
    width: 350px;
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
    @media (min-width: 766px) and (max-width: 992px) {
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
