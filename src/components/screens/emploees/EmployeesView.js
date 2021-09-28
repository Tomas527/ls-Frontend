import React, { Component } from "react";
import {
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
} from "actions/emploee.action";
import { getAllProfileImages, deleteImage } from "actions/image.action";
import { connect } from "react-redux";
import EmployeesTable from "./components/EmployeesTable";
import "./EmployeesViewStyle.css";
import EmploeeHeader from "./components/EmploeeysHeader";
import Spacer from "components/common/Spacer";
import translate from "i18n/translate";

class EmployeesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: -1,
      editIndex: -1,
      employees: [],
      disableAddEmployeeButton: true,
    };
  }
  componentDidMount() {
    this.props.getAllEmployees().then(() => {
      this.props.getAllProfileImages().then(() => {
        const employees = this.props.employees;
        const images = this.props.employeesProfileImages;
        var mergedList = employees.map((emp) => ({
          ...emp,
          profileImage: images.find((image) => image._id === emp._id),
        }));
        this.setState({
          employees: mergedList,
        });
      });
    });
  }

  stopEditing = () => {
    const { employees, editIndex } = this.state;
    this.props.updateEmployee(employees[editIndex]._id, employees[editIndex]);
    this.setState({ editIndex: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState((state) => ({
      employees: state.employees.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      ),
    }));
  };

  handleSelection = (id, e) => {
    const tagName = e.target.tagName;
    //when the delete icon is press the row is also selected (trash icon is on top of the row), we don't want to select a deleted row
    if (this.state.selectedId === id || tagName === "I") {
      return;
    }
    this.setState({
      selectedId: id,
    });
    const selectedEmploee = this.state.employees.find(
      (employee) => employee._id === id
    );

    this.setState({
      disableAddEmployeeButton: selectedEmploee.isHired,
    });
  };

  handleDeletion = (id) => {
    this.props.deleteEmployee(id);
    this.props.deleteImage(id);
    const updatedArr = this.state.employees.filter((emp) => {
      return emp._id !== id;
    });
    this.setState({
      employees: updatedArr,
    });
  };

  handleHiring = (id, phone, address, roll) => {
    var data = {
      _id: id,
      phone,
      address,
      roll,
      isHired: true,
    };
    const currentArr = this.state.employees;
    this.props.updateEmployee(id, data).then(() => {
      const empToUpdate = currentArr.find((emp) => emp._id === id);
      empToUpdate.phone = phone;
      empToUpdate.address = address;
      empToUpdate.roll = roll;
      empToUpdate.isHired = true;
      let foundIndex = currentArr.findIndex(
        (emp) => emp._id === empToUpdate._id
      );
      currentArr[foundIndex] = empToUpdate;
      this.setState({
        employees: currentArr,
        disableAddEmployeeButton: true,
      });
    });
  };

  render() {
    return (
      <div className="employeesViewStyle">
        <EmploeeHeader
          buttonIsDisabled={this.state.disableAddEmployeeButton}
          selectedEmployeeId={this.state.selectedId}
          employeeFormSubmitted={this.handleHiring}
        />
        <Spacer height={45} />
        <EmployeesTable
          data={this.state.employees ? this.state.employees : []}
          handleRemove={this.handleDeletion}
          startEditing={(id) => this.setState({ editIndex: id })}
          editIndex={this.state.editIndex}
          handleRowSelection={this.handleSelection}
          highlightedId={this.state.selectedId}
          handelChange={this.handleChange}
          stopEditing={this.stopEditing}
          loggedInUserId={this.props.loggedInUserId}
          header={[
            {
              headerName: translate("FIRST NAME"),
              prop: "firstName",
            },
            {
              headerName: translate("LAST NAME"),
              prop: "lastName",
            },
            {
              headerName: translate("PHONE"),
              prop: "phone",
            },
            {
              headerName: translate("ADDRESS"),
              prop: "address",
            },
            {
              headerName: translate("ROLL"),
              prop: "roll",
            },
            {
              headerName: translate("START DATA"),
              prop: "createdAt",
            },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUserId: state.authReducer.user.id,
    employees: state.emploeesReducer,
    employeesProfileImages: state.profileImagesReducer,
  };
};

export default connect(mapStateToProps, {
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
  getAllProfileImages,
  deleteImage,
})(EmployeesView);
