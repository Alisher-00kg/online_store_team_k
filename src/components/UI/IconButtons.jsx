import React from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";

const IconButtons = ({ icon: Icon, children, onClick, style, ...rest }) => {
  return (
    <StyledButtons onClick={onClick} {...rest}>
      {Icon && <Icon />}
      {children}
    </StyledButtons>
  );
};

export default IconButtons;

const StyledButtons = styled(IconButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
