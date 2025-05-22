
import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const ModalGrid = ({ open, onClose, title, children }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <StyledModalBox>
        <ModalHeader>
          {title && (
            <Typography id="modal-title" variant="h6">
              {title}
            </Typography>
          )}
          <IconButton onClick={onClose}></IconButton>
        </ModalHeader>
        {children}
      </StyledModalBox>
    </Modal>
  );
};

export default ModalGrid;

const StyledModalBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1000,
  maxHeight: 500,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  outline: "none",
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));
