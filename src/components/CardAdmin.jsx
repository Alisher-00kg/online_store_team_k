import React from "react";
import { Icons } from "../assets";
import { products } from "../utils/constants/products";
import styled from "styled-components";
import Buttons from "./UI/Buttons";

export const CardAdmin = () => {
  return (
    <div>
      {products.slice(0, 3).map((i) => (
        <StyledWrapper key={i.id}>
          <StyledText>
            <h2>{i.title}</h2>
            <StyledImg>
              <Buttons>
                <Icons.Copy />
              </Buttons>
              <Buttons>
                <Icons.Change />
              </Buttons>
              <Buttons>
                <Icons.Delete />
              </Buttons>
            </StyledImg>
          </StyledText>
          <StyledDiv>
            <StyledDiv style={{ gap: "24px" }}>
              <img src={i.image} alt={i.title} />
              <StyledDivSize>
                <div style={{ display: "flex", gap: "51px" }}>
                  <h3>Цвета в наличии</h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {i.color?.map((color, index) => (
                      <StyledColorCircle
                        key={index}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <StyledDiv style={{ gap: "31px" }}>
                  <h3>Размеры в наличии </h3>
                  <h3>{i.size}</h3>
                </StyledDiv>
              </StyledDivSize>
            </StyledDiv>
            <StyledPriceDiv>
              <div>
                <span>{i.stock} Шт</span>
                <p>Запас</p>
              </div>
              <div>
                <span>{i.price} Сом</span>
                <p>Цена</p>
              </div>
            </StyledPriceDiv>
          </StyledDiv>
        </StyledWrapper>
      ))}
    </div>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  h2 {
    color: #030229;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.3px;
    width: 252;
    height: 22;
    top: 158px;
    left: 273px;
    opacity: 0.7;
    color: #030229;
  }
`;

const StyledImg = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 108;
    height: 136;
    top: 220px;
    left: 268px;
    border-radius: 10px;
  }
`;

const StyledDivSize = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  h3 {
    width: 102;
    height: 20;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    text-align: right;
    vertical-align: middle;
    color: #121314;
  }
`;

const StyledColorCircle = styled.div`
  width: 20px;
  height: 20px;
`;

const StyledPriceDiv = styled.div`
  display: flex;
  gap: 64px;
  span {
    width: 68;
    height: 24;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #242833;
  }
  p {
    width: 39;
    height: 19;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color: #7e8494;
  }
`;
