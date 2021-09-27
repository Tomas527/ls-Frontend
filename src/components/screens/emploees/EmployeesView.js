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

  handleSelection = (id) => {
    if (this.state.selectedId === id) {
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
    if (this.state.selectedId === id) {
      this.setState({
        disableAddEmployeeButton: true,
      });
    }
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
          handleRemove={(id) => this.handleDeletion(id)}
          startEditing={(id) => this.setState({ editIndex: id })}
          editIndex={this.state.editIndex}
          handleRowSelection={(selectedRowId) =>
            this.handleSelection(selectedRowId)
          }
          highlightedId={this.state.selectedId}
          handelChange={this.handleChange}
          stopEditing={this.stopEditing}
          loggedInUserId={this.props.loggedInUserId}
          header={[
            {
              headerName: "First Name",
              prop: "firstName",
            },
            {
              headerName: "Last Name",
              prop: "lastName",
            },
            {
              headerName: "Phone",
              prop: "phone",
            },
            {
              headerName: "Address",
              prop: "address",
            },
            {
              headerName: "Roll",
              prop: "roll",
            },
            {
              headerName: "Start Date",
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
