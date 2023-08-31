import { theme } from "src/styles/theme";
import { styled } from "styled-components";
import arrow from "../../libs/assets/svg/arrow.svg";

//
import bannerCar from "../../libs/assets/png/entrepreneur-593371_1920 1.png";
import rome from "../../libs/assets/png/11045509092021_181cbb31e4238c1c11b385d01e6dcc075479973d 1.png";
import calendar from "../../libs/assets/svg/115762_calendar_date_event_month_icon (2) 1.svg";
import more from "../../libs/assets/svg/more 1.svg";
export const Blog = () => {
  const ar = [
    {
      image: rome,
      date: "Сегодня 15:25",
      desc: "10 лучших экскурсий в городе античной культуры Риме",
    },
    {
      image: rome,
      date: "Сегодня 15:25",
      desc: "10 лучших экскурсий в городе античной культуры Риме",
    }, {
      image: rome,
      date: "Сегодня 15:25",
      desc: "10 лучших экскурсий в городе античной культуры Риме",
    }, {
      image: rome,
      date: "Сегодня 15:25",
      desc: "10 лучших экскурсий в городе античной культуры Риме",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <TopBlock>
          <ArrowBlog>
            <Title>Блог</Title>
            <Selectors>
              <div className="">
                <img src={arrow} />
              </div>
              <div className="">
                <ReversedArrow src={arrow} />
              </div>
            </Selectors>
          </ArrowBlog>
          <InBlog>В блог</InBlog>
        </TopBlock>
        <BlocksList>
          {ar.map((item) => (
            <BlockItem>
              <img src={item.image} />
              <div
                className=""
                style={{
                  display: "flex",
                  columnGap: "9.74px",
                  marginTop: "24px",
                }}
              >
                <img src={calendar} alt="" />
                <p>{item.date}</p>
              </div>
              <h3>{item.desc}</h3>
              <Read>
                Читать <img src={more} alt="" />
              </Read>
            </BlockItem>
          ))}
        </BlocksList>
      </Container>
    </Wrapper>
  );
};

const { containers, mqMax } = theme;
const Read = styled.button`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 110px;
  padding-top: 8px;
  padding-bottom: 9px;
  border-radius: 1000px;
  border: 1px solid #e2e2e2;
  color: #252525;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  img {
    margin-top: 3px;
  }
`;
const BlockItem = styled.div`
  height: 394px;
  width: 324px;
  display: flex;
  flex-direction: column;
  h3 {
    color: #252525;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 156.25% */
    margin-top: 16px;
  }
  p {
    color: #828282;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const BlocksList = styled.div`
justify-content: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 46px;
  margin-top: 61px;
`;
const InBlog = styled.button`
  margin-left: auto;
  border-radius: 1000px;
  background: #fff;
  color: #454545;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 21.5px 12px 23.5px;
`;
const Wrapper = styled.div`
  padding-top: 93px;
padding-bottom: 106px;
  background: #f5f5f5;
`;

const TopBlock = styled.div`
  display: flex;
  align-items: center;
`;

const ReversedArrow = styled.img`
  transform: rotate(180deg);
`;
const Selectors = styled.div`
  display: flex;
  column-gap: 15px;
  img {
    cursor: pointer;
  }
`;
const Title = styled.h1`
  color: #252525;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
const ArrowBlog = styled.div`
  display: flex;
  column-gap: 59px;
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

const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 46px;
`;

const SmallBlock = () => {
  const arr = [
    {
      image: bannerCar,
      date: "Сегодня 15:25",
      desc: "Программа автобусной экскурсии из Петербурга в Выборг",
    },
  ];
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return <div className=""></div>;
};
