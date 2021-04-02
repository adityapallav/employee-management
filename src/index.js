import React from "react";
import { render } from "react-dom";
import DeleteEmp from "./deleteEmployee";
import AddEmp from "./addEmployee";
import "./style.css";

const employeeData = [
  {
    name: "Ruchi Kodkany",
    companyName: "Atos",
    email_id: "rkodkany@gmail.com",
    salary: 30000,
    designation: "Associate Consultant"
  },
  {
    name: "Aditya Gupta",
    companyName: "Syntel",
    email_id: "aditya@gmail.com",
    salary: 40000,
    designation: "Consultant"
  },
  {
    name: "Will Smith",
    companyName: "Mindtree",
    email_id: "will@gmail.com",
    salary: 80000,
    designation: "Senior Consultant"
  }
];
localStorage.setItem("employeeData", JSON.stringify(employeeData));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: JSON.parse(localStorage.getItem("employeeData"))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const employeeData = this.getEmployeeDetails();
    this.setState({ employeeData });
  }

  getEmployeeDetails() {
    return this.state.employeeData;
  }
  onAdd(name, companyName, email_id, salary, designation) {
    const employeeData = this.getEmployeeDetails();
    employeeData.push({
      name,
      companyName,
      email_id,
      salary,
      designation
    });
    this.setState({ employeeData });
  }
  onDelete(name) {
    const employeeData = this.getEmployeeDetails();
    const filteredEmployees = employeeData.filter(employee => {
      return employee.name !== name;
    });
    this.setState({ employeeData: filteredEmployees });
  }
  onEditSubmit(name, companyName, email_id, salary, designation, originalName) {
    let employeeData = this.getEmployeeDetails();
    employeeData = employeeData.map(employee => {
      if (employee.name === originalName) {
        employee.name = name;
        employee.companyName = companyName;
        employee.email_id = email_id;
        employee.salary = salary;
        employee.designation = designation;
      }
      return employee;
    });
    this.setState({ employeeData });
  }
  render() {
    return (
      <div>
        <h1>Employee Management</h1>
        <AddEmp onAdd={this.onAdd} />
        {this.state.employeeData.map(employee => {
          return (
            <DeleteEmp
              key={employee.name}
              {...employee}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          );
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
