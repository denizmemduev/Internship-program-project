import "./teams.css";
import React, { Component } from "react";
class Teams extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      id: "",
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
    const { id } = this.state;
    return (
      <div className="teams">
        <h2>Teams</h2>
        <br></br>
        <ul>
          {this.state.teams.map((team) => (
            <li key={team.id}> {team.teamname} </li>
          ))}
        </ul>

        <form onSubmit={this.submitHandler}>
          <select name="id" value={id} onChange={this.changeHandler}>
            <option>Select Team</option>
            {this.state.teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.teamname}
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
        </form>
      </div>
    );
  }
}

export default Teams;
