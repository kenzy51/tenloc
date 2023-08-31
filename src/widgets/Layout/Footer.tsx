import { theme } from "src/styles/theme";
import { styled } from "styled-components";
import logo from "../../libs/assets/svg/Логотип.svg";
import googl from "../../libs/assets/svg/google-play-badge-ru-0c7884782cc7574546d20a1456f0450c 1.svg";
import appl from "../../libs/assets/svg/app-store-badge-ru-e83429c850f6858d1a6f1e8d36f6991d 1.svg";
import what from "../../libs/assets/svg/whatsapp.svg";
import tg from "../../libs/assets/svg/telegram.svg";
import vk from "../../libs/assets/svg/smallvk.svg";
import insta from "../../libs/assets/svg/smallInsta.svg";
import phone from "../../libs/assets/svg/8665646_phone_communication_icon (1) 1.svg";
import email from "../../libs/assets/svg/8673621_ic_fluent_mail_filled_icon 1.svg";
import location from "../../libs/assets/svg/8665749_location_dot_icon 1.svg";
import line from "../../libs/assets/svg/Line 5.svg";
import tenloc from "../../libs/assets/svg/© 2023 «Tenloc»..svg";
import payment from "../../libs/assets/svg/payment-methods-0070bdcc50eb301a4b796768c16a7f37 1.svg";
import logoAdvans from "../../libs/assets/svg/logo-dark 1.svg";
export const Footer = () => {
  const social = [
    {
      icon: what,
    },
    {
      icon: tg,
    },
    {
      icon: vk,
    },
    {
      icon: insta,
    },
  ];
  const ar = [
    {
      title: "Сервис",
      about: "О сервисе",
      blog: "Блог",
      payment: "Часто задаваемые вопросы",
    },
    {
      title: "Гидам",
      about: "Стать гидом",
      blog: "Правила работы",
    },
    {
      title: "Документы",
      about: "Политика возврата билетов",
      neg: "Договор оферты",
      blog: "Условия использования сайта",
      payment: "Политика обработки персональных данных",
      req: "Реквизиты",
    },
  ];
  return (
    <Wrapper>
      <Container>
        <Logo>
          <img src={logo} alt="" />
          <p>
            Скачайте <br />
            наше приложение
          </p>
          <Buttons className="">
            <img src={googl} alt="" />
            <img src={appl} alt="" />
          </Buttons>
        </Logo>

        <ListItems>
          {ar.map((i) => (
            <ListBlock>
              <h3>{i.title}</h3>
              <p>{i.about}</p>
              <p>{i?.neg}</p>
              <p>{i.blog}</p>
              <p>{i?.payment}</p>
              <p>{i?.req}</p>
            </ListBlock>
          ))}
          <ListBlock>
            <h3>Поддержка клиентов</h3>
            <IconTitle>
              <img src={phone} alt="" />
              <h3>Телефон:</h3>
              <span> +7 (495) 123-45-67</span>
            </IconTitle>{" "}
            <IconTitle>
              <img src={email} alt="" />
              <h3>E-mail:</h3>
              <span> hello@trevelme.ru</span>
            </IconTitle>{" "}
            <IconTitle>
              <img src={location} alt="" />
              <h3>Офис:</h3>
              <span> Москва, ул. Название улицы 10, офис 11</span>
            </IconTitle>
            <SocialMedia>
              {social.map((i) => (
                <img src={i.icon} alt="" />
              ))}
            </SocialMedia>
          </ListBlock>
        </ListItems>
      </Container>
      <LineContainer>
        <img src={line} alt="" style={{ width: "100%" }} />
        <BottomItems>
          <img src={tenloc} alt="" />
                <Payment>
                  <img src={payment} alt="" style={{marginRight:'75px'}}/>
                  <p>Разработка сайта</p>
                  <img src={logoAdvans} alt="" />
                </Payment>
        </BottomItems>
      </LineContainer>

    </Wrapper>
  );
};
const { containers, mqMax } = theme;

const Payment = styled.div`
display: flex;
  p{
    color: #252525;
font-family: Montserrat;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 35px; /* 269.231% */
margin-right: 10px;
  }

`
const BottomItems = styled.div`
padding: 18px 0;
display: flex;
justify-content: space-between;

`

const LineContainer = styled.div`
  margin-top: 82px !important;
  margin: 0 auto;
  max-width: ${containers.main};
  ${mqMax("xl")} {
    padding: 0 20px;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  column-gap: 16px;
  margin-top: 30px;
`;
const IconTitle = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #252525;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h3 {
    color: #252525;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  img {
    margin-right: 10px;
  }
`;
const ListBlock = styled.div`
  max-width: 264px;
  display: flex;
  flex-direction: column;
  p {
    line-height: 35px; /* 250% */
  }
  h3 {
    margin-bottom: 19px;
  }
`;
const ListItems = styled.div`
  display: flex;
  column-gap: 74px;
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${containers.main};
  ${mqMax("xl")} {
    padding: 0 20px;
  }
`;

const Buttons = styled.div`
  margin-top: 18px;
  display: flex;
  column-gap: 8.5px;
`;
const Logo = styled.div`
  margin-right: 92px;
  p {
    margin-top: 45px;
    color: #252525;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
`;
const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 30px;
  max-height: 483px;
`;
