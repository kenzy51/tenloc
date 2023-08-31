import { theme } from "src/styles/theme";
import { useState } from "react";
import { styled } from "styled-components";
import logo from "../../libs/assets/svg/Логотип.svg";
import fav from "../../libs/assets/svg/Избранные.svg";
import { ButtonNavigation } from "src/shared/ui/button";
import arrow from "../../libs/assets/svg/arrow-down-sign-to-navigate 1.svg";
import telegram from "../../libs/assets/svg/TelegramButton.svg";
import whatsapp from "../../libs/assets/svg/WhatsAppButton.svg";
import phone from "../../libs/assets/svg/Телефон.svg";
import mail from "../../libs/assets/svg/Почта.svg";
import { SwiperSlide } from "swiper/react";
export const Header = () => {
  const [hover, setHovered] = useState(false);
  const data = [
    {
      name: "О сервисе",
    },
    {
      name: "Блог",
    },
    {
      name: "Помощь клиентам",
      icon: arrow,
    },
  ];
  return (
    <Wrapper>
      <Container>
        <LogoWithButton>
          <img src={logo} alt="some name" />
          <ButtonNavigation />
        </LogoWithButton>
        <InfoBlock>
          {data.map((item) => (
            <>
              <LinkItem>
                <p>{item.name}</p>
                {item.icon && (
                  <img
                    src={item.icon}
                    alt=""
                    onClick={() => {
                      console.log("Mouse entered");
                      setHovered((prev) => !prev);
                    }}
                  />
                )}
              </LinkItem>
            </>
          ))}
          {hover && (
            <Card>
              <p>Мы на связи с 09:00 до 21:00 мск</p>
              <Buttons>
                <button>
                  <img src={whatsapp} alt="" />
                </button>
                <button>
                  <img src={telegram} alt="" />
                </button>
              </Buttons>{" "}
              <Buttons2>
                <button>
                  <img src={phone} alt="" />
                </button>
                <button>
                  <img src={mail} alt="" />
                </button>
              </Buttons2>
            </Card>
          )}
        </InfoBlock>

        <RightBlock>
          <img src={fav} alt="favorites" />
          <JoinIn>Войти</JoinIn>
        </RightBlock>
      </Container>
    </Wrapper>
  );
};
const { containers, mqMax } = theme;

const Buttons = styled.div`
  margin-top: 15px;
  display: flex;
  column-gap: 14px;
`;
const Buttons2 = styled.div`
  margin-top: 15px;
  display: flex;
  column-gap: 31px;
`;
const Card = styled.div`
  padding: 17px 23px 22px 27px;
  margin-top: 220px;
  margin-left: 230px;
  position: absolute;
  width: 388.078px;
  height: 170px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 7px 100px 0px rgba(0, 0, 0, 0.15);
  p {
    color: #000;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
`;
const LinkItem = styled.div`
  display: flex;
  column-gap: 9px;
  cursor: pointer;
`;
const RightBlock = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;
`;
const JoinIn = styled.button`
  padding: 13px 32px;
  border-radius: 100px;
  background: #f5f5f5;
  color: #252525;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 49.92px;
  column-gap: 55px;
  align-items: center;
  color: #252525;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;
const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 36px;
  max-height: 114px;
`;
const Container = styled.div`
  display: flex;
  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xxl")} {
    padding: 0 20px;
  }
`;
const LogoWithButton = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;
