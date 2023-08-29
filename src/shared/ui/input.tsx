import React from "react";
import { styled } from "styled-components";
import circle from "../../libs/assets/svg/circle.svg";
import location from "../../libs/assets/svg/location.svg";
import calendar from "../../libs/assets/svg/calendar 1.svg";
import line from "../../libs/assets/svg/Line 1.svg";
import find from "../../libs/assets/svg/loupe 1.svg";
import { theme } from "src/styles/theme";

export const MainInput = () => {
  const ar = [
    {
      name: "Выберите направление",
      icon: location,
    },
    {
      name: "Дата",
      icon: calendar,
    },
  ];

  return (
    <Wrapper>
      <Left>
        {ar.map((i, index) => (
          <React.Fragment key={i.name}>
            <ItemBlock>
              <Circle>
                <img src={i.icon} alt="" />
              </Circle>
              <input type="text" placeholder={i.name} style={{ width: "190px" }}  />
            </ItemBlock>
            {index !== ar.length - 1 && <LineImage src={line} alt="line" />}
          </React.Fragment>
        ))}
      </Left>
      <InputFind>
        <img src={find} alt="" width={15} height={15} />
        Найти
      </InputFind>
    </Wrapper>
  );
};
const InputFind = styled.div`
  width: 134px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #ffd600;
  color: #000;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* padding: 19px 30px 18px 30px; */
  column-gap: 9px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  display: flex;
`;
const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  input {
    color: #7b7b7b;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${circle});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineImage = styled.img`
  width: 1px;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  column-gap: 28px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 9px 11px 10px 23px;
  width: 779px;
  height: 75px;
  border-radius: 100px;
  background: #fff;
  box-shadow: 0px 42px 80px 0px rgba(0, 0, 0, 0.25);
  ${theme.mqMax("lg")} {
    max-width: 560px;
  }
`;
