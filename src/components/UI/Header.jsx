import styled from "styled-components";
import { Icons } from "../../assets";
import IconButtons from "./IconButtons";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <Container>
        <IconButtons>
          <Icons.Login />
          Войти
        </IconButtons>
        <IconButtons>
          <Icons.Heart /> Избранные
        </IconButtons>
        <IconButtons>
          <Icons.Basket /> Корзина
        </IconButtons>
      </Container>
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
  height: 110px;
  width: 150px;
`;

const Container = styled("div")({
  display: "flex",
  gap: "30px",
});
