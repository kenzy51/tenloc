import React from "react";
import { SelecTime, SelectCity, SelectDate } from "src/shared/selectors";
import { theme } from "src/styles/theme";
import { styled } from "styled-components";
import longLine from "../../libs/assets/svg/Line 4.svg";
import ermitage from "../../libs/assets/png/ermitage.png";
import addPlus from "../../libs/assets/svg/Добавить в заказ.svg";
import fav from "../../libs/assets/svg/В избранные.svg";
import { Reviews } from "./Reviews";

export const Excursion = () => {
  const arIts = [
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
    {
      name: "Коллекция Эрмитажа и парадная жизнь Зимнего дворца",
      desc: "Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.",
      price: "от 2750 ₽",
      image: ermitage,
    },
  ];
  return (
    <Wrapper>
      <Container>
        <MainTitle>
          Экскурсии
          <Selectors>
            <SelectCity />
            <SelectDate />
          </Selectors>
        </MainTitle>
        <ListItems>
          {arIts.map((item, index) => (
            <BlockItem>
              <Heart src={fav} />
              <img src={item.image} alt="" width={332} />
              <DescBlock>
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
              </DescBlock>
              <BottomBlock>
                <img src={longLine} />
                <Busket>
                  <PriceWithTime>
                    <Price>
                      <h2>{item.price}</h2>
                      <h3>/</h3>
                      <p>c чел</p>
                    </Price>
                    <SelecTime />
                  </PriceWithTime>
                  <img src={addPlus} alt="" />
                </Busket>
              </BottomBlock>
            </BlockItem>
          ))}
        </ListItems>
        <PrimaryButton>
          <p>Все экскурсии</p>
        </PrimaryButton>
      </Container>
    <Reviews/>

    </Wrapper>
  );
};
const { containers, mqMax } = theme;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 0 18px;
  height: 55px;
  max-width: 194px;
  margin-bottom: 104px;
  margin-top: 73px;
  border-radius: 100px;
  background: #ffd600;
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  p {
    width: 157.272px;
  }
`;
const Heart = styled.img`
  cursor: pointer;
  position: absolute;
  margin-top: 16px;
  margin-left: 267px;
`;
const PriceWithTime = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
const Busket = styled.div`
  width: 100%;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  img {
    align-self: flex-end;
  }
`;
const Price = styled.div`
  display: flex;
  column-gap: 2px;
`;
const BottomBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #252525;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 130% */
  }
  h3 {
    color: #252525;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
  p {
    color: #252525;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
const DescBlock = styled.div`
  padding: 21px 25px 16px 26.22px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  h1 {
    color: #252525;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
  }
  p {
    width: 281px;
    color: #6a6a6a;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }
`;
const BlockItem = styled.div`
  width: 333px;
  border-radius: 20px !important;
  border: 1px solid #dfdfdf;
  height: 476px;
  border-radius: 20px 20px 0px 0px;
`;
const ListItems = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 35px;
  flex-wrap: wrap;
  row-gap: 30px;
`;
const Selectors = styled.div`
  display: flex;
  column-gap: 29px;
`;
const MainTitle = styled.h1`
  color: #252525;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 54px;
  margin-bottom: 77px;
`;
const Wrapper = styled.div`
  margin-top: 108px;
  border-radius: 0px 0px 50px 50px;
  padding-bottom: 114px;
`;
const Container = styled.div`
  padding-top: 93px;
  display: flex;
  flex-direction: column;
  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xxl")} {
    padding: 0 20px;
  }
`;
