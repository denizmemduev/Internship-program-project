import React, { Component } from "react";
import "./newintern.css";
function refreshPage() {
  window.location.reload(false);
}
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      university: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    fetch("/interns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(this.state),
    });
    refreshPage();
  };

  render() {
    const { firstname, lastname, university } = this.state;
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h2>Create new intern</h2>
        <br></br>
        <input
          className="form-control m-1  w-75"
          type="text"
          placeholder="firstname"
          name="firstname"
          value={firstname}
          onChange={this.changeHandler}
        ></input>

        <input
          className="form-control m-1  w-75"
          type="text"
          placeholder="lastname"
          name="lastname"
          value={lastname}
          onChange={this.changeHandler}
        ></input>

        <input
          className="form-control m-1  w-75"
          type="text"
          placeholder="university"
          name="university"
          value={university}
          onChange={this.changeHandler}
        ></input>

        <button className="btn btn-dark btn-lg m-2" type="submit">
          {" "}
          Create new
        </button>
      </form>
    );
  }
}

export default Form;
