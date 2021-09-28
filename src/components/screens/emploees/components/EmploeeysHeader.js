import BasicButton from "components/common/Button/BasicButton";
import React, { useState } from "react";
import AddEmployeeDialog from "./AddEmployeeDialog";
import translate from "i18n/translate";

const EmployeesHeader = (props) => {
  const { buttonIsDisabled, selectedEmployeeId, employeeFormSubmitted } = props;
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minWidth: "850",
        justifyContent: "space-between",
      }}
    >
      <h1>{translate("EMPLOYEES HEADER")}</h1>
      <BasicButton
        text={translate("ADD AS EMPLOYEE BUTTON")}
        isDisabled={buttonIsDisabled}
        onClick={() => setOpen(true)}
      />
      <AddEmployeeDialog
        isOpened={open}
        handleClose={() => setOpen(false)}
        onSubmit={(phone, address, roll) => {
          setOpen(false);
          employeeFormSubmitted(selectedEmployeeId, phone, address, roll);
        }}
      />
    </div>
  );
};

export default EmployeesHeader;
