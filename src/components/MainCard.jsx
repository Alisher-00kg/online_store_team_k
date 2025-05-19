import React from "react";
import styled from "styled-components";
import Buttons from "./UI/Buttons";
import IconButtons from "./UI/IconButtons";
import { Icons } from "../assets";

const BottomBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCard = ({
  image,
  title,
  info,
  price,
  onAddToCart,
  onToggleLike,
}) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <Content>
        <InfoAndLike>
          <div>
            <Info>{info}</Info>
            <Title>{title}</Title>
          </div>

          <IconButtons onClick={onToggleLike}>
            <Icons.Heart />
          </IconButtons>
        </InfoAndLike>

        <Price>KGS {price.toLocaleString()}</Price>
        <br />
        <br />

        <BottomBtn>
          <Buttons onClick={onAddToCart} buttonVariant={"addToBasket"}>
            Добавить в корзину
          </Buttons>
        </BottomBtn>
      </Content>
    </Card>
  );
};

export default MainCard;


const InfoAndLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
    border: 2px solid #bbbec082;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4.2;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 1px;
  vertical-align: middle;
  color: #121314;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.3px;
  vertical-align: middle;
`;

const Price = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.3px;
  vertical-align: middle;
`;
