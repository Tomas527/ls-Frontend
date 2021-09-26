import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import BasicButton from "components/common/Button/BasicButton";
import BasicInput from "components/common/Input/BasicInput";

const AddEmployeeDialog = ({ isOpened, onSubmit, onDismiss }) => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roll, setRoll] = useState("");
  return (
    <Dialog open={isOpened} onClose={onDismiss}>
      <DialogTitle>Add Employee</DialogTitle>
      <DialogContent>
        <BasicInput placeholder="Phone" onChange={(value) => setPhone(value)} />
        <BasicInput
          placeholder="Address"
          onChange={(value) => setAddress(value)}
        />
        <BasicInput placeholder="Roll" onChange={(value) => setRoll(value)} />
      </DialogContent>
      <DialogActions>
        <BasicButton
          onClick={() => onSubmit(phone, address, roll)}
          text="Add"
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeDialog;
