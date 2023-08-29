import { styled } from "styled-components";
import arrow from "../../libs/assets/svg/arrow-down-sign-to-navigate 1.svg";
export const ButtonNavigation = () => {
  return (
    <Button>
      <InnerText>Направления</InnerText>
      <img src={arrow} alt="arrow" />
    </Button>
  );
};
const Button = styled.button`
    max-height: 50px;
  width: 186px;
  display: flex;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 13px;
  gap: 15px;
  padding-left: 27px;
  padding-right: 26px;
  border-radius: 100px;
  background: #ffd600;
`;
const InnerText = styled.h2`
  color: #252525;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px; /* 166.667% */
`;
