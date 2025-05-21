import React, { useState } from "react";
import { Input } from "../components/UI/Input";
import styled from "styled-components";
import Buttons from "../components/UI/Buttons";

import { Icons } from "../assets";
import { Icon, IconButton, InputAdornment } from "@mui/material";
export const SingUp = () => {
  const [Password, setPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledWrapper>
      <StyledDiv>
        <h1>Регистрация</h1>
        <StyledInternalDivs>
          <p>Email</p>
          <Input label="Email" type="email" />
        </StyledInternalDivs>
        <div className="InternalSecondDiv">
          <Input />
        </div>
        <StyledInternalDivs>
          <p>Пароль</p>
          <Input
            label="Пароль"
            type={Password ? "text" : "password"}
            placeholder="Введите пароль "
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setPassword((prev) => !prev)}
                >
                  {Password ? <Icons.EyeOff /> : <Icons.Visibility />}
                </InputAdornment>
              ),
            }}
          />
        </StyledInternalDivs>
        <StyledInternalDivs>
          <p>Подтверждение пароля</p>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль "
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Icons.EyeOff /> : <Icons.Visibility />}
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
            <Buttons>Войти</Buttons>
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
  .InternalSecondDiv {
    width: 408px;
    height: 75px;
    display: flex;
    align-items: end;
  }
`;
const StyledInternalDivs = styled.div`
  width: 408px;
  height: 75px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const StyledContainerButtons = styled.div`
  width: 411px;
  height: 150px;
  display: flex;
  flex-direction: column;

  justify-content: end;
  gap: 20px;
`;

const StyledInternalContainer = styled.div`
  display: flex;

  align-items: center;
`;
