import React from "react";
import { Icons } from "../assets";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyleFooter>
      <StyledDiv style={{ height: "246px" }}>
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
        <YellowBar>
          <h2>WELCOME TO OUR PROJECT</h2>
          <h2>ONLINESHOP</h2>
        </YellowBar>
        <GreenBar>
          <h2>JS-5 SILA</h2>
          <h2>SALAM JS-5</h2>
          <h2>GET OUT</h2>
        </GreenBar>
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
  border-top: 2px solid black;
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

const YellowBar = styled(StyledDiv)`
  gap: 154px;
  background-color: #f2ed72;
  height: 82px;
  width: 100%;
  border-width: 4px 2px 0px 0px;
  border-style: solid;
  border-color: #2e2e2e;
`;

const GreenBar = styled(StyledDiv)`
  gap: 40px;
  background-color: #30723f;
  height: 82px;
  width: 100%;
  border-width: 4px 0px 0px 2px;
  border-style: solid;
  border-color: #2e2e2e;
`;
