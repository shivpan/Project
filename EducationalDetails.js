import React, { Component } from "react";
import { Footer } from "../GeneralComponents/Footer";
import { FreelancerNav } from "./FreelancerNav";

export default class GeneralDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: "",
      year: "",
      cgpa: "",
      clubs: "",
      kt: "",
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
        this.setState({
          branch: this.state.userData.branch,
          year: this.state.userData.year,
          cgpa: this.state.userData.cgpa,
          clubs: this.state.userData.clubs,
          kt: this.state.userData.kt,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { branch, year, cgpa, clubs, kt } = this.state;
    console.log(branch, year, cgpa, clubs, kt);
    fetch("http://localhost:5000/educational-details", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        branch,
        year,
        cgpa,
        clubs,
        kt,
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
              <h1>EDUCATIONAL DETAILS</h1>
              <div className="mb-3">
                <label>Branch</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.branch}
                  onChange={(e) => this.setState({ branch: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>Current Year</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.year}
                  onChange={(e) => this.setState({ year: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>CGPA</label>
                <input
                  type="number" step="0.01"
                  className="form-control"
                  placeholder={this.state.cgpa}
                  onChange={(e) => this.setState({ cgpa: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>Clubs</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.clubs}
                  onChange={(e) => this.setState({ clubs: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>No of Live KTs</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder={this.state.kt}
                  onChange={(e) => this.setState({ kt: e.target.value })}
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
        <Footer/>
      </div>
    );
  }
}