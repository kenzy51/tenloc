import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { styled } from "styled-components";
import arrow from "../../libs/assets/svg/arrow.svg";
import avatar from "../../libs/assets/png/Ellipse 6.png";
import longLine from "../../libs/assets/svg/Line 3.svg";
import star from "../../libs/assets/svg/star 1.svg";

export const SwiperComp = () => {

  const Stars = ()=> {
    return(
      <span style={{display:'flex', columnGap:'6px', marginLeft:'-39px'}}>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </span>
    )
  }
  const ar = [
    {
      desc: "  Хочу сказать огромное спасибо нашему гиду Катерине! гуляйте по крышам - не пожалеете не на секунду, город с высоты и с видом на центр настолько необычен что захватывает дух! И обязательно берите удобную обувь и фотоаппараты для полного погружения в романтику крыш!",
      name: "Александр",
      avatar: avatar,
    }, {
      desc: "  Хочу сказать огромное спасибо нашему гиду Катерине! гуляйте по крышам - не пожалеете не на секунду, город с высоты и с видом на центр настолько необычен что захватывает дух! И обязательно берите удобную обувь и фотоаппараты для полного погружения в романтику крыш!",
      name: "Александр",
      avatar: avatar,
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {ar.map((item) => (
          <SwiperSlide>
            <InnerSlideBlock>
              <img src={item.avatar} alt="" width={130} height={130}/>
              <RightBlock>
                <h1>{item.name}</h1>
                <img src={longLine} alt="" />
                <Review>
                <div style={{display:'flex', flexDirection:'row'}}>
                <h5>Тур: <span>Калининград</span> </h5>
                </div>
                <h5>Оценка </h5>
                <Stars/>
                </Review>
                <img src={longLine} alt="" />
                <h1>{item.desc}</h1>
              </RightBlock>
            </InnerSlideBlock>
          </SwiperSlide>

        ))}

        <Buttons>
          <div ref={prevRef}>
            <img src={arrow} alt="picture" width={46} height={46} />
          </div>
          <div>
            <ReversedArrow src={arrow} alt="picture" width={46} height={46} />
          </div>
        </Buttons>
      </Swiper>
    </SwiperWrapper>
  );
};

const Review = styled.div`
margin-top: 8px;
margin-bottom: 11px;
display: flex;
column-gap: 49px;
`
const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #252525;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-decoration-line: underline;
  }
  h5 {
    color: #7b7b7b;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 185.714% */
  }
  p {
    color: #252525;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }
  h1 {
    color: #252525;
    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 152.941% */
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;
const InnerSlideBlock = styled.div`
  display: flex;
  column-gap: 40px;

  height: 233px;
`;
const ReversedArrow = styled.img`
  transform: rotate(180deg);
`;
const Buttons = styled.div`
  justify-content: flex-end;
  display: flex;
  column-gap: 15px;
`;
const SwiperWrapper = styled.div`
  max-width: 730px;
`;
