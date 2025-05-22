import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../components/UI/Input";
import { InputAdornment } from "@mui/material";
import styled from "styled-components";
import validationSchema from "../utils/errorComponents";
import Buttons from "../components/UI/Buttons";
import IconButtons from "../components/UI/IconButtons";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Форма отправлена: ", values);
    },
  });

  return (
    <StyledWrapper>
      <StyledDivCon>
        <h1>Вход</h1>
      </StyledDivCon>
      <StyledForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input
            label="Логин"
            name="Логин"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.email && formik.errors.email)}
          />
          <ErrorText>{formik.touched.email && formik.errors.email}</ErrorText>
        </InputWrapper>

        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль"
            label="Пароль"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.password && formik.errors.password)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButtons
                    onClick={() => setShowPassword((prev) => !prev)}
                  ></IconButtons>
                </InputAdornment>
              ),
            }}
          />
          <ErrorText>
            {formik.touched.password && formik.errors.password}
          </ErrorText>
        </InputWrapper>

        <StyledContainerButtton>
          <Buttons type="submit">Войти</Buttons>
        </StyledContainerButtton>
        <Continer>
          <span>или</span>
          <p>зарегистрироваться</p>
          <p>Забыли пароль?</p>
        </Continer>
      </StyledForm>
    </StyledWrapper>
  );
};

export default SignIn;
const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
  display: flex;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 20px;
`;

const StyledDivCon = styled.div`
  width: 100%;
  max-width: 441px;
  display: flex;
  justify-content: start;
  padding: 30px 1px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 441px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledContainerButtton = styled.div`
  margin-top: 32px;
  color: #fafafa;
  button {
    width: 100%;
    max-width: 445px;
    height: 52px;
    font-size: 16px;
    background-color: #121314;
    color: #fafafa;
  }
`;

const Continer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  color: #6a6a6a;
  p {
    margin: 0;
    cursor: pointer;
    color: #121314;
    text-decoration: underline;
    text-decoration: none;
    display: flex;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  row-gap: 20px;
`;
