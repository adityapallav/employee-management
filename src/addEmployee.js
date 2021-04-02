import React from "react";

class AddEmp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(
      this.nameInput.value,
      this.companyInput.value,
      this.email.value,
      this.salaryInput.value,
      this.desgn.value
    );
    this.nameInput.value = "";
    this.companyInput.value = "";
    this.email.value = "";
    this.salaryInput.value = "";
    this.desgn.value = "";
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Employee</h3>
        <input
          placeholder="Employee Name"
          ref={nameInput => (this.nameInput = nameInput)}
        />
        <br />
        <input
          placeholder="Company Name"
          ref={companyInput => (this.companyInput = companyInput)}
        />
        <br />
        <input placeholder="Email ID" ref={email => (this.email = email)} />
        <br />
        <input
          placeholder="Salary"
          ref={salaryInput => (this.salaryInput = salaryInput)}
        />
        <br />
        <input placeholder="Designation" ref={desgn => (this.desgn = desgn)} />
        <br />
        <button>Add</button>
        <hr />
      </form>
    );
  }
}

export default AddEmp;
