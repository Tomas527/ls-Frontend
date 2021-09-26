import BasicButton from "components/common/Button/BasicButton";
import React, { useState } from "react";
import AddEmployeeDialog from "./AddEmployeeDialog";

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
      <h1>Manageing Employees</h1>
      <BasicButton
        text="+ Add Emploee"
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
