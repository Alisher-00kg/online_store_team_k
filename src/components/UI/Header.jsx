import styled from "styled-components";
import { Button } from "@mui/material";
import { Icons } from "../../assets";

export const Header = () => {
  return (
    <StyledHeader>
      <Icons.Logo />
      <nav>
        <Button>Войти</Button>
        <Button>Избранные</Button>
        <Button>Корзина</Button>
      </nav>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 20px;
  left: 120px;
  border-radius: 8px;
  background-color: #fff;
  padding: 0px 40px;
`;
const StyledLogo = styled(Icons.Logo)`
height:110px;
width:150px;`;
