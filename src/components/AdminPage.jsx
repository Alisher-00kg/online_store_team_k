import React from "react";
import styled from "styled-components";
import Buttons from "./UI/Buttons";
import { NavLink } from "react-router-dom";
import { Icons } from "../assets";
import { useLocation } from "react-router-dom";

const AdminPage = () => {
  const { pathname } = useLocation();

  const titleByPaths = {
    "/admin/male": "Мужская",
    "/admin/female": "Женская",
    "/admin/children": "Детская",
  };
  const currentTitle = titleByPaths[pathname] || "Категория";

  return (
    <>
      <Container>
        <LeftTab>
          <BrandName>
            <Icons.BrandNameSecond />
          </BrandName>
          <ContainerButtons>
            <NavButtons to="/admin/male">
              <Icons.Man />
              Мужская
            </NavButtons>
            <NavButtons to="/admin/female">
              <Icons.Woman />
              Женская
            </NavButtons>
            <NavButtons to="/admin/children">
              <Icons.Kid />
              Детская
            </NavButtons>
          </ContainerButtons>
        </LeftTab>
        <Main>
          <Header>
            <CategoryHeader>{currentTitle}</CategoryHeader>
            <Buttons buttonVariant={"add"}>+Добавить</Buttons>
          </Header>
        </Main>
      </Container>
    </>
  );
};

export default AdminPage;

const ContainerButtons = styled.div``;

const BrandName = styled.div`
  border: none;
  padding: 10px;
  padding-top: 50px;
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f6f5f5;
`;

const LeftTab = styled.div`
  width: 218px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Main = styled.div`
  flex: 1;
  padding: 30px;
  background: #f6f5f5;
  overflow: auto;
`;

const NavButtons = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 16px;
  color: #7e8494;
  text-decoration: none;
  background: #ffffff;

  &.active {
    background: #5a8e6547;
    color: #5a8e65;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CategoryHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #343635;
`;
