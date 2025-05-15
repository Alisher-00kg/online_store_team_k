import React from "react";
import { TextField, InputAdornment } from "@mui/material";

export const Input = ({
  value,
  onChange,
  name,
  placeholder = "",
  type = "text",
  icon = null,
  ...rest
}) => {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">{icon}</InputAdornment>
        ) : undefined,
        sx: {
          borderRadius: "12px",
          backgroundColor: "#f9f9f9",
        },
      }}
      {...rest}
    />
  );
};
