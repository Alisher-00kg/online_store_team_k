import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Top from "../assets/images/top.png";
import styled from "styled-components";
import IconButtons from "../components/UI/IconButtons";
import { Icons } from "../assets";

export const InnerPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginLeft: "140px",
          fontFamily: "Arial",
          fontWeight: "400",
        }}
      >
        <h3>Каталог товаров</h3>
        <Icons.ArrowRight />
        <h3 style={{ color: "#30723F" }}>Подробнее про товар</h3>
      </div>
      <Container>
        <StyledColumnSwiper>
          <Swiper
            spaceBetween={-40}
            slidesPerView={4}
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            speed={1200}
            direction="vertical"
            modules={[Autoplay, Navigation]}
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <img src={Top} alt={`slide-${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledColumnSwiper>
        <StyledSwiper>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <img src={Top} alt={`slide-${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSwiper>
        <Conatiner2>
          <StyledBox>
            <StyledDivPrice>
              <h4>
                Трикотажный топ
                <br /> в полоску
              </h4>
              <span>KGS 4 290,00</span>
            </StyledDivPrice>
            <StyledDivBTN>
              <div>
                <IconButtons>
                  <Icons.Blue />
                </IconButtons>
                <IconButtons>
                  <Icons.Beige />
                </IconButtons>
              </div>
              <h5>Светло-синий</h5>
            </StyledDivBTN>
          </StyledBox>
          <StyledSizeDiv>
            <p>Таблица размеров</p>
            <div>
              <span>XXS</span>
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <p>Товар будет доставлен в течении 10 дней</p>
          </StyledSizeDiv>
          <IconButtons>Добавить корзину</IconButtons>
        </Conatiner2>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 25px auto;
  gap: 20px;
`;

const StyledSwiper = styled.div`
  width: 581px;
  height: 650px;
  border-radius: 8px;
  border: 1px solid #6a6a6a;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-prev {
    top: 45%;
    left: 10px;
    transform: translateY(-50%);
    color: black;
    width: 30px;
    height: 30px;
  }
  .swiper-button-next {
    top: 45%;
    right: 10px;
    transform: translateY(-50%);
    color: black;
    width: 30px;
    height: 30px;
  }
`;

const StyledColumnSwiper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 85px;
  height: 612px;
  overflow: hidden;
  position: relative;
  img {
    width: 85px;
    height: 87px;
    border-radius: 8px;
    border: 1px solid #7c7c7c;
    object-fit: cover;
    margin-top: 40px;
  }
  .swiper-button-prev {
    top: 20px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    right: auto;
    bottom: auto;
    width: 30px;
    height: 30px;
    color: black;
  }
  .swiper-button-next {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    top: auto;
    right: auto;
    width: 30px;
    height: 30px;
    color: black;
  }
`;

const Conatiner2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  h4,
  h5 {
    font-weight: 400;
    font-family: Arial;
  }
`;

const StyledBox = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledDivPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDivBTN = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
  }
`;

const StyledSizeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border-width: 1px 0px 1px 0px;
    border-style: solid;
    border-color: #1e314480;
  }
  p {
    text-decoration: underline;
  }
`;
