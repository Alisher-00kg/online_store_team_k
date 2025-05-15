import React from "react";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const variantStyles = {
  buttonIcons: {
    width: 24,
    height: 24,
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#e9e6e6",
    },
    "&:active": {
      backgroundColor: "#d4d1d1",
    },
  },
  buttonArrowicons: {
    width: 31,
    height: 32,
    backgroundColor: "#f6f8fb",
    borderRadius: "8px",
    border: "none",
    "&:hover": {
      backgroundColor: "#e9e6e6",
    },
    "&:active": {
      backgroundColor: "#d4d1d1",
    },
  },
  buttonChapter: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0%",
    fontWeight: 600,
    width: "218px",
    height: "48px",
    border: "none",
    backgroundColor: "#ffffff",
    color: "#7e8494",
    "&:hover": {
      color: "#5a8e65",
      backgroundColor: "#a0c8a9",
    },
  },
  buttonClose: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2efef",
    borderRadius: "50%",
    border: "none",
    "&:hover": {
      backgroundColor: "#e6e3e3",
    },
    "&:active": {
      backgroundColor: "#dfdada",
    },
  },
  plusMinus: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    backgroundColor: "#fafafa",
    border: "none",
    "&:hover": {
      backgroundColor: "#e6e3e3",
    },
    "&:active": {
      backgroundColor: "#dfdada",
    },
  },
  filter: {
    width: 24,
    height: 24,
    backgroundColor: "#fafafa",
    border: "none",
    "&:hover": {
      backgroundColor: "#e6e3e3",
    },
    "&:active": {
      backgroundColor: "#dfdada",
    },
  },
};

const IconButtons = ({
  icon: Icon,
  children,
  onClick,
  style,
  variant = "buttonIcons",
  ...rest
}) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        cursor: "pointer",
        transition: "0.1s",
        ...variantStyles[variant],
        ...style,
      }}
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </IconButton>
  );
};

IconButtons.propTypes = {
  icon: PropTypes.elementType,
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
  variant: PropTypes.oneOf(Object.keys(variantStyles)),
};

export default IconButtons;
