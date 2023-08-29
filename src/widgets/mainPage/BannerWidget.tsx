import React from "react";
import { styled } from "styled-components";
import yellow from "../../libs/assets/svg/swoosh.svg";
import { theme } from "src/styles/theme";
import { MainInput } from "src/shared/ui/input";

export const BannerWidget = () => {
  const cities = [
    {
      name: "Дубай",
    },
    {
      name: "Стамбул",
    },
    {
      name: "Санкт-петербург",
    },
    {
      name: "Казань",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <MainTitle>
          Поиск и бронирование
          <br />
          экскурсий
          <br />
          <img src={yellow} alt="swoosh" />
        </MainTitle>
        <Desc>Экскурсии и частные гиды в России и за рубежом</Desc>
        <MainInput />
        <BottomBlock>
          Часто ищут:
          {cities.map((c) => (
            <CityButton><p>{c.name}</p></CityButton>
          ))}
        </BottomBlock>
      </Wrapper>
    </Container>
  );
};

const { mqMax, containers } = theme;
const CityButton = styled.div`
  padding: 6.5px 14px 9px;
  height: 32.5px;
  flex-shrink: 0;
  border-radius: 30px;
  opacity: 0.15;
  

  background: #252525;
  p{
    opacity: 100%;
    color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
`;
const BottomBlock = styled.div`
  margin-top: 133px;
  color: #252525;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
  display: flex;
  column-gap: 16px;
  align-items: center;
`;
const Desc = styled.p`
  color: #252525;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 47.85px;
`;
const MainTitle = styled.h1`
  color: #252525;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 900;
  line-height: 52px; /* 123.81% */
`;
const Wrapper = styled.div`
  padding-top: 110px;
  margin: 0 auto;
  background-image: url(${require("../../libs/assets/png/bannerMain.png")});
  background-position: center;
  object-fit: cover;
  width: 100%;
  height: 639px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  ${mqMax("xxl")} {
    margin: 0 20px;
  }
`;
const Container = styled.div`
  display: flex;
  max-width: ${containers.main};
  margin: 0 auto;
`;
