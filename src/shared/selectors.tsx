import React from "react";
import { styled } from "styled-components";
import arrow from "../libs/assets/svg/arrow-down-sign-to-navigate 1.svg";
import smallCalendar from "../libs/assets/svg/calendar 2.svg";

export const SelectCity = () => {
  return (
    <Wrapper>
      <p>Выберите город</p>
      <img src={arrow} alt="arrow" width={7} height={7} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 13px 22px 15px 22.75px;
  column-gap: 50px;
  p {
    color: #b7b7b7;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
`;

export const SelectDate = () => {
  return (
    <Wrapper>
      <p>Выберите дату</p>
      <img src={smallCalendar} alt="arrow" width={15} height={15} />
    </Wrapper>
  );
};

export const SelecTime = () => {
  return (
    <SelectTimeWrapper>
      <p>Выбрать время</p>
      <img src={arrow} alt="arrow" width={7} height={7} />
    </SelectTimeWrapper>
  );
};

const SelectTimeWrapper = styled.div`
display: flex;
cursor: pointer;
align-items: center !important;
img{
  align-self: center !important;
}
  border-radius: 1000px;
  column-gap: 5px;
  padding-right: 13px;
  padding-left: 11px;
  border: 1px solid #e9e9e9;
`;
