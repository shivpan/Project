import React, { Component } from "react";
import { Footer } from "../GeneralComponents/Footer";
import { FreelancerNav } from "./FreelancerNav";

export default class SkillDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
        this.setState({ skills: this.state.userData.skills })
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { skills } = this.state;
    console.log(skills);
    fetch("http://localhost:5000/skills-edit", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        skills,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        window.location.href = "profile";
      });
  }
  render() {
    return (
      <div>
        <FreelancerNav />
        <div className="edit-details">
          <form className="form-edit" onSubmit={this.handleSubmit}>
            <div className="form-box">
              <h1>SKILLS</h1>
              <div className="mb-3">
                <label>Add Skills</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.skills}
                  onChange={(e) => this.setState({ skills: e.target.value })}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>

    );
  }
}