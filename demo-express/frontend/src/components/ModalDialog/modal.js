import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./modal.css";
import $ from "jquery";

class ModalDialog extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      teamid: "",
    };
  }

  componentDidMount() {
    fetch("/teams")
      .then((res) => res.json())
      .then((teams) =>
        this.setState({ teams }, () => console.log("Teams fatched..", teams))
      );
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));

    fetch("/teams", {
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
    const { teamid } = this.state;
    return (
      <div className="di">
        <div className="sec1">
          <h1> Intern info</h1>
          <form onSubmit={this.submitHandler}>
            <input
              className="form-control m-2  w-100"
              typeName="text"
              placeholder="firstname"
              name="firstname"
              value={this.props.firstname}
              onChange={this.changeHandler}
            ></input>

            <input
              className="form-control m-2  w-100"
              typeName="text"
              placeholder="lastname"
              name="lastname"
              value={this.props.lastname}
              onChange={this.changeHandler}
            ></input>

            <input
              className="form-control m-2  w-100"
              typeName="text"
              placeholder="university"
              name="university"
              value={this.props.university}
              onChange={this.changeHandler}
            ></input>

            <select
              className="selectpicker"
              name="teamid"
              value={teamid}
              onChange={this.changeHandler}
            >
              <option>Select Team</option>
              {this.state.teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.teamname}
                </option>
              ))}
            </select>
            <div className="modal-footer">
              <button
                id="bttn"
                typeName="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button typeName="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
$(document).ready(function () {
  $("#bttn").click(function modal3() {
    $(".di").css({ display: "none", opacity: "0" });
  });
});
export default ModalDialog;
