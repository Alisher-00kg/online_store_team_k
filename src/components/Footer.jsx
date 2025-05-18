import React from "react";
import { Icons } from "../assets";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyleFooter>
      <StyledDiv style={{ width: "100%", height: "246px" }}>
        <h1>BRANDNAME</h1>
        <StyledText>
          <p>О нас</p>
          <p>Контакты</p>
        </StyledText>
        <StyledText>
          <p>Способы оплаты</p>
          <p>Условия доставки</p>
        </StyledText>
        <StyledText>
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
        </StyledText>
      </StyledDiv>
      <StyledDiv style={{ gap: "15px", padding: "10px" }}>
        <p>brandname.com</p>
        <Icons.IconFooter />
        <span>2023</span>
        <p>Все права защищены</p>
      </StyledDiv>
      <StyledDiv style={{ gap: "0px" }}>
        <StyledDiv
          style={{
            gap: "154px",
            backgroundColor: "#F2ED72",
            height: "82px",
            width: "100%",
            borderWidth: "4px 2px 0px 0px",
            borderStyle: "solid",
            borderColor: "#2E2E2E",
          }}
        >
          <h2>WELCOME TO OUR PROJECT</h2>
          <h2>ONLINESHOP</h2>
        </StyledDiv>
        <StyledDiv
          style={{
            gap: "40px",
            backgroundColor: "#30723F",
            height: "82px",
            width: "100%",
            borderWidth: "4px 0px 0px 2px",
            borderStyle: "solid",
            borderColor: "#2E2E2E",
          }}
        >
          <h2>JS-5 SILA</h2>
          <h2>SALAM JS-5</h2>
          <h2>GET OUT</h2>
        </StyledDiv>
      </StyledDiv>
    </StyleFooter>
  );
};

const StyleFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 146px;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
