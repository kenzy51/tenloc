import { theme } from "src/styles/theme";
import { styled } from "styled-components";
import logo from "../../libs/assets/svg/logo.svg";
import fav from "../../libs/assets/svg/Избранные.svg";
import { ButtonNavigation } from "src/shared/ui/button";
import arrow from "../../libs/assets/svg/arrow-down-sign-to-navigate 1.svg";
export const Header = () => {
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
                <img src={item.icon} alt="" />
              )}
              </LinkItem>
            </>
          ))}
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

const LinkItem = styled.div`
  display: flex;
  column-gap: 9px;
  cursor: pointer;

`
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
