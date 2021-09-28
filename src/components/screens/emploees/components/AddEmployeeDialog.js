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
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import RollPicker from "./RollPicker";

const AddEmployeeDialog = ({ isOpened, onSubmit, handleClose }) => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roll, setRoll] = useState("");

  return (
    <Dialog open={isOpened}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle>{translate("ADD EMPLOYEE HEADER")}</DialogTitle>
        <IconButton onClick={() => handleClose()}>
          <Close />
        </IconButton>
      </div>

      <DialogContent>
        <BasicInput
          placeholder={translate("PHONE")}
          onChange={(value) => setPhone(value)}
        />
        <BasicInput
          placeholder={translate("ADDRESS")}
          onChange={(value) => setAddress(value)}
        />
        <RollPicker onValueChanged={(value) => setRoll(value)} value={roll} />
      </DialogContent>
      <DialogActions>
        <BasicButton
          isDisabled={!formIsValid()}
          onClick={() => onSubmit(phone, address, roll)}
          text={translate("ADD BUTTON")}
        />
      </DialogActions>
    </Dialog>
  );

  function formIsValid() {
    if (phone !== "" && address !== "" && roll !== "") return true;
    else return false;
  }
};

export default AddEmployeeDialog;
