import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import BasicButton from "components/common/Button/BasicButton";
import BasicInput from "components/common/Input/BasicInput";
import translate from "i18n/translate";

const AddEmployeeDialog = ({ isOpened, onSubmit, onDismiss }) => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roll, setRoll] = useState("");
  return (
    <Dialog open={isOpened} onClose={onDismiss}>
      <DialogTitle>{translate("ADD EMPLOYEE HEADER")}</DialogTitle>
      <DialogContent>
        <BasicInput
          placeholder={translate("PHONE")}
          onChange={(value) => setPhone(value)}
        />
        <BasicInput
          placeholder={translate("ADDRESS")}
          onChange={(value) => setAddress(value)}
        />
        <BasicInput
          placeholder={translate("ROLL")}
          onChange={(value) => setRoll(value)}
        />
      </DialogContent>
      <DialogActions>
        <BasicButton
          onClick={() => onSubmit(phone, address, roll)}
          text={translate("ADD BUTTON")}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeDialog;
