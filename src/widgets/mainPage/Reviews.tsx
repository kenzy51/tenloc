import React from "react";
import { SwiperComp } from "src/shared/ui/Swiper";
import { theme } from "src/styles/theme";
import { styled } from "styled-components";

export const Reviews = () => {
    
  return (
    <Container>
      <InnerBlock>
        <ReviewsBlock>
          <Title>Отзывы</Title>
          <p>
            Lorem Ipsum is simply dummy text
            <br />
            of the printing and typesetting industry
          </p>
          <Button>Оставить отзыв</Button>
        </ReviewsBlock>
        <SwiperComp />
      </InnerBlock>
    </Container>
  );
};

const { containers, mqMax } = theme;

const Title = styled.div`
  color: #252525;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
const ReviewsBlock = styled.div`
  max-width: 318px;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 21px;
    color: #252525;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  height: 55px;
  max-width: 194px;
  margin-bottom: 104px;
  margin-top: 68.34px;
  border-radius: 100px;
  background: #ffd600;
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const InnerBlock = styled.div`
  display: flex;
  column-gap: 194px;
  ${mqMax("xxl")} {
    column-gap: 94px;
  }
  width: 100%;
  height: 485px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 27px 31px 0px rgba(0, 0, 0, 0.02);
  padding: 70px 91px 81px 100px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xxl")} {
    padding: 0 20px;
  }
`;
