import React from "react";
import { TextField, styled } from "@mui/material";

export const Input = ({
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

const StyledInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    borderRadius: 4,
  },
}));
