import React from "react";
import { theme } from "src/styles/theme";
import { styled } from "styled-components";

import insta from "../../libs/assets/svg/insta.svg";
import tg from "../../libs/assets/svg/tg.svg";
import vk from "../../libs/assets/svg/vk.svg";

export const Subscribe = () => {
  const bt = [
    {
      inst: insta,
    },
    {
      inst: tg,
    },
    {
      inst: vk,
    },
  ];
  return (
    <Container>
      <Wrapper>
        <InfoBlock>
          <Title>
            Подпишитесь <br /> на нашу рассылку
          </Title>
          <p>Подписывайтесь на удобный для Вас мессенджер</p>
        </InfoBlock>
        <Buttons>
          {bt.map((i) => (
            <img src={i.inst} alt="" />
          ))}
        </Buttons>
        <div style={{marginTop:'112px'}}>
          <LineText>
            При переходе в одну из указанных социальных сетей, вы автоматически
            соглашаетесь <br /> с &nbsp;
          </LineText>
          <Policty>
          политикой конфидециальности
          </Policty>
        </div>
      </Wrapper>
    </Container>
  );
};

const { containers, mqMax } = theme;
const Policty = styled.span`
  color: #7a7a7a;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-decoration-line: underline;
`;
const LineText = styled.span`
  color: #7a7a7a;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px; /* 158.333% */
`;
const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  column-gap: 21px;
  img {
    cursor: pointer;
  }
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 20px;
`;
const Title = styled.div`
  color: #252525;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 133.333% */
`;
const Wrapper = styled.div`
  padding-top: 91px;
  padding-left: 106px;
  margin: 0 auto;
  background-image: url(${require("../../libs/assets/png/bannerSubs.png")});
  background-position: center;
  object-fit: cover;
  width: 100%;
  height: 527px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  ${mqMax("xxl")} {
    margin: 0 20px;
  }
`;
const Container = styled.div`
  display: flex;
  padding-top: 105px;
  padding-bottom: 91px;

  max-width: ${containers.main};
  margin: 0 auto;
  p {
    color: #252525;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }
`;
