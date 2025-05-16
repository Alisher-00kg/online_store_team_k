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

const StyledButtons = styled(IconButton)({
  "&.MuiButtonBase-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#000000",
    svg: {
      width: "24px",
      height: "24px",
    },
    fontSize: "12px",
    fontWeight: "400",
  },
  "&:hover": {
    background: "rgba(0,0,0,0.1)",
  },
});
