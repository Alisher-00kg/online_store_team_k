import React, { useState } from "react";
import { Input } from "../components/UI/Input";
import styled from "styled-components";
import Buttons from "../components/UI/Buttons";
import { styled as muistyled } from "@mui/material/styles";
import { Icons } from "../assets";
import { InputAdornment } from "@mui/material";
export const SignUp = () => {
  const [Password, setPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledWrapper>
      <StyledDiv>
        <h1>Регистрация</h1>
        <StyledInternalDivs>
          <p>Email</p>
          <StyledInput type="email" />
        </StyledInternalDivs>
        <StyledInternalDivs>
          <p>Пароль</p>
          <StyledInput
            type={Password ? "text" : "password"}
            placeholder="Введите пароль "
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setPassword((prev) => !prev)}
                >
                  {Password ? (
                    <Icons.EyeOff style={{ backgroundColor: "transparent" }} />
                  ) : (
                    <Icons.Visibility
                      style={{ backgroundColor: "transparent" }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </StyledInternalDivs>
        <StyledInternalDivs>
          <p>Подтверждение пароля</p>
          <StyledInput
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль "
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <Icons.EyeOff style={{ backgroundColor: "transparent" }} />
                  ) : (
                    <Icons.Visibility
                      style={{ backgroundColor: "transparent" }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </StyledInternalDivs>
        <StyledContainerButtons>
          <div>
            <Buttons buttonVariant="login">Зарегистрироваться</Buttons>
          </div>
          <StyledInternalContainer>
            <p>Уже зарегистрированы?</p>
            <Buttons className="lastButton">Войти</Buttons>
          </StyledInternalContainer>
        </StyledContainerButtons>
      </StyledDiv>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: 411px;
  height: 552px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    width: 188px;
    height: 37px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    font-weight: 400;
  }

  p {
    font-family: Spartan;
  }
`;
const StyledInternalDivs = styled.div`
  width: 408px;
  height: 75px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  .InputAdornment {
    background-color: transparent;
  }
`;

const StyledContainerButtons = styled.div`
  width: 411px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
`;

const StyledInternalContainer = styled.div`
  display: flex;
  align-items: center;
  .lastButton {
    color: #30723f;
  }
`;
const StyledInput = muistyled(Input)({
  "& .MuiInputBase-root": {
    backgroundColor: "#e7f0ff",
  },
});
