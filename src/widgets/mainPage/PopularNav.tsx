import { theme } from "src/styles/theme";
import { styled } from "styled-components";
import dubai from "../../libs/assets/png/Mask group.png";
const Component = ({ i }: any) => {
  const ThisWrapper = styled.div`
    position: absolute;
    margin-top: 372px;
    margin-right: 246px;
    display: flex;
    flex-direction: column;
    row-gap: 22px;
  `;
  const Title = styled.div`
    color: #fff;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;

  const Button = styled.button`
    border-radius: 100px;
    background: #ffd600;
    height: 35px;
    color: #252525;
    text-align: center;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 131px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <ThisWrapper>
      <Title>{i?.name}</Title>
      <Button>{i?.ex}</Button>
    </ThisWrapper>
  );
};

export const PopularNav = () => {
  const items = [
    {
      name: "Дубай",
      ex: "15 экскурсий",
      image: dubai,
    },
    {
      name: "Стамбул",
      ex: "15 экскурсий",
      image: dubai,
    },
    {
      name: "Мурманск",
      ex: "15 экскурсий",
      image: dubai,
    },
    {
      name: "Мурманск",
      ex: "15 экскурсий",
      image: dubai,
    },
    {
      name: "Мурманск",
      ex: "15 экскурсий",
      image: dubai,
    },
    {
      name: "Мурманск",
      ex: "15 экскурсий",
      image: dubai,
    },
  ];

  return (
    <Container>
      <MainTitle>
        <h1>Популярные направления</h1>
        <p>Проводим индивидуальные и групповые экскурсии на русском языке</p>
      </MainTitle>
      <ListItems>
        {items.map((i, index) => (
          <MainBlock key={index}>
            <ItemImage src={i.image} />
            <Component i={i} />
          </MainBlock>
        ))}
      </ListItems>
    </Container>
  );
};

const { containers,mqMax } = theme;

const ListItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 45px;
`;

const MainBlock = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 38.4px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;
const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  margin-bottom: 63px;
  h1 {
    color: #252525;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  p {
    color: #252525;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Container = styled.div`
  padding-top: 93px;
  display: flex;
  flex-direction: column;
  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xxl")} {
    padding: 64px 20px 0 20px;
  }
`;
