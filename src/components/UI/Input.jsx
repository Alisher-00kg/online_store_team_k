import React from "react";
import { TextField, styled } from "@mui/material";

const Input = ({
  value,
  onChange,
  name,
  placeholder = "",
  type = "text",
  icon = null,
  InputProps,
  ...rest
}) => {
  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      fullWidth
      InputProps={InputProps}
      variant="outlined"
      {...rest}
    />
  );
};
export default Input;
const StyledInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  "& .MuiInputBase-input": {
    height: "15px",
  },
}));
