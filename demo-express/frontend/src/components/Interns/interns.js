import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../ModalDialog/modal";
import "./interns.css";
import $ from "jquery";

class Interns extends Component {
  constructor() {
    super();
    this.state = {
      interns: [],
      id: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    fetch("/interns")
      .then((res) => res.json())
      .then((interns) =>
        this.setState({ interns }, () =>
          console.log("Interns fatched..", interns)
        )
      );
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));

    fetch("/interns", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(this.state),
    });
    this.componentDidMount();

    console.log(JSON.stringify(this.state.id));
  };

  render() {
    const { id } = this.state;
    return (
      <div className="interns">
        <h2>Interns</h2>
        <br></br>
        <ul>
          {this.state.interns.map((intern) => (
            <li key={intern.id} value={intern.id}>
              {intern.firstname} {intern.lastname} | {intern.university}
            </li>
          ))}
        </ul>

        <form onSubmit={this.submitHandler}>
          <select name="id" value={id} onChange={this.changeHandler}>
            <option>Select Intern</option>
            {this.state.interns.map((intern) => (
              <option key={intern.id} value={intern.id}>
                {intern.firstname} {intern.lastname}
              </option>
            ))}
          </select>

          <button
            className="btn btn-danger m-1"
            value="Delete"
            typeName="submit"
          >
            Delete
          </button>

          <button
            id="button"
            type="button"
            className="btn btn-success m-1"
            value="Update"
          >
            Edit
          </button>
        </form>
      </div>
    );
  }
}

$(document).ready(function () {
  $("#button").click(function modal() {
    $(".di").css({
      display: "block",
      opacity: "1",
      transition: "0.5s",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
      position: "absolute",
    });
  });
});
export default Interns;
