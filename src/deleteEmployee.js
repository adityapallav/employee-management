import React from "react";

class DeleteEmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, name } = this.props;
    onDelete(name);
  }
  onEdit() {
    this.setState({
      isEdit: true
    });
  }
  onEditSubmit(event) {
    event.preventDefault();
    this.props.onEditSubmit(
      this.nameInput.value,
      this.companyInput.value,
      this.email.value,
      this.salaryInput.value,
      this.desgn.value,
      this.props.name
    );
    this.setState({ isEdit: false });
  }
  render() {
    const { name, companyName, email_id, salary, designation } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <form onSubmit={this.onEditSubmit}>
            <input
              placeholder="Employee Name"
              ref={nameInput => (this.nameInput = nameInput)}
              defaultValue={name}
            />
            <br />
            <input
              placeholder="Company Name"
              ref={companyInput => (this.companyInput = companyInput)}
              defaultValue={companyName}
            />
            <br />
            <input
              placeholder="Email ID"
              ref={email => (this.email = email)}
              defaultValue={email_id}
            />
            <br />
            <input
              placeholder="Salary"
              ref={salaryInput => (this.salaryInput = salaryInput)}
              defaultValue={salary}
            />
            <br />
            <input
              placeholder="Designation"
              ref={desgn => (this.desgn = desgn)}
              defaultValue={designation}
            />
            <br />
            <button>Save</button>
          </form>
        ) : (
          <div>
            <span>{name}</span>
            <br />
            <span>{companyName}</span>
            <br />
            <span>{email_id}</span>
            <br />
            <span>{salary}</span>
            <br />
            <span>{designation}</span>
            <br />
            <button onClick={this.onEdit}>Edit</button>
            {" | "}
            <button onClick={this.onDelete}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default DeleteEmp;
