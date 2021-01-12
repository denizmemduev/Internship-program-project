import React, { Component } from "react";
import "./newteam.css";

function refreshPage() {
  window.location.reload(false);
}
class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamname: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    fetch("/teams", {
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
    const { teamname } = this.state;
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h2>Create new team</h2>
        <br></br>
        <input
          className="form-control m-1  w-75"
          type="text"
          placeholder="teamname"
          name="teamname"
          value={teamname}
          onChange={this.changeHandler}
        ></input>

        <br></br>
        <button className="btn btn-dark btn-lg m-2" type="submit">
          {" "}
          Create new
        </button>
      </form>
    );
  }
}

export default Form2;
