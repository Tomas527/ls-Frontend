import React from "react";
import {
  TableBody,
  styled,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  Paper,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { formatDate } from "utils/helperFunctions";
import Spacer from "components/common/Spacer";
import { TextField } from "@material-ui/core";
import "./EmployeesTable.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey,
    color: blue[100],
    fontSize: 10,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const row = (
  emploee,
  index,
  handleRemove,
  startEditing,
  editIndex,
  handleRowSelection,
  highlightedId,
  handelChange,
  stopEditing,
  loggedInUserId,
  header
) => {
  const currentlyEditing = editIndex === index;
  return (
    <TableRow
      key={`rowId-${emploee._id}`}
      onClick={(e) => handleRowSelection(emploee._id, e)}
      selected={emploee._id === highlightedId}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      style={{ height: 80 }}
    >
      {header.map((y, k) =>
        y.prop !== "createdAt" ? (
          <StyledTableCell key={`trc-${k}`} align="left">
            {currentlyEditing && y.prop !== "createdAt" ? (
              <TextField
                name={y.prop}
                onChange={(e) => handelChange(e, y.prop, index)}
                value={emploee[y.prop]}
              />
            ) : y.prop === "firstName" ? (
              <div className="imageCellStyle">
                <img
                  src={`data:image/jpeg;base64,${
                    emploee.profileImage ? emploee.profileImage.image : ""
                  }`}
                  alt=""
                  className="userImageStyle"
                />
                <Spacer width={18} />
                {emploee[y.prop]}
              </div>
            ) : (
              emploee[y.prop]
            )}
          </StyledTableCell>
        ) : (
          <StyledTableCell align="left" key={`trc-${header.length}`}>
            {formatDate(emploee.createdAt)}
          </StyledTableCell>
        )
      )}
      <StyledTableCell align="left">
        {
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {loggedInUserId !== emploee._id ? (
              <button onClick={() => handleRemove(emploee._id)}>
                <i className="trash alternate icon"></i>
              </button>
            ) : null}

            <Spacer width={10} />
            {currentlyEditing ? (
              <button onClick={() => stopEditing()}>
                <i className="check icon"></i>
              </button>
            ) : emploee.isHired ? (
              <button onClick={() => startEditing(index)}>
                <i className="pencil alternate icon"></i>
              </button>
            ) : null}
          </div>
        }
      </StyledTableCell>
    </TableRow>
  );
};

const EmployeesTable = ({
  data,
  handleRemove,
  startEditing,
  editIndex,
  handleRowSelection,
  highlightedId,
  handelChange,
  stopEditing,
  loggedInUserId,
  header,
}) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440, minWidth: 1000, maxWidth: 1000 }}>
        <Table stickyHeader sx={{ maxHeight: 200 }}>
          <TableHead>
            <TableRow>
              {header.map((x, i) => (
                <StyledTableCell align="left" key={`thc-${i}`}>
                  {x.headerName}
                </StyledTableCell>
              ))}

              <StyledTableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((emploee, index) =>
              row(
                emploee,
                index,
                handleRemove,
                startEditing,
                editIndex,
                handleRowSelection,
                highlightedId,
                handelChange,
                stopEditing,
                loggedInUserId,
                header
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EmployeesTable;
