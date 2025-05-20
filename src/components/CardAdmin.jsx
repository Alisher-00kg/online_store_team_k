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
            <div>
              <img src={i.image} alt={i.title} />
              <span>Размеры в наличий {i.size}</span>
            </div>
            <div>
              <span>{i.stock}</span>
              <span>{i.price}</span>
            </div>
          </StyledDiv>
        </StyledWrapper>
      ))}
    </div>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
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
  }
`;

const StyledImg = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  width: 108;
  height: 136;
  top: 220px;
  left: 268px;
  border-radius: 10px;
`;
