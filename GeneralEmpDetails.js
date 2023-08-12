import React, { Component } from "react";
import { Footer } from "../GeneralComponents/Footer";
import { EmpNav } from "./EmpNav";

export default class GeneralEmpDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: "",
      city: "",
      description: "",
      projects: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/empData", {
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
        console.log(data, "empData");
        this.setState({ empData: data.data });
        this.setState({
          city: this.state.empData.city,
          headline: this.state.empData.headline,
          description: this.state.empData.description,
          projects: this.state.empData.projects
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { city, description, projects } = this.state;
    // const _id = this.state.userData._id;
    const fname = this.state.empData.fname;
    const lname = this.state.empData.lname;
    const email = this.state.empData.email;
    const contact = this.state.empData.contact;

    console.log("All fields", fname, lname, email, contact, city, description, projects);
    fetch("http://localhost:5000/emp-general-details", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        city,
        description,
        projects,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "empRegister");
        window.location.href = "./emp-home";
      });
  }
  render() {
    return (
      <div>
        <EmpNav />
        <div className="edit-emp-details">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="edit-emp-form-box">
              <h3>Edit User Profile</h3>
              {/* <div className="mb-3">
                  <label>Choose Profile Image</label><br/>
                  <label for="file" className="custom-file-label">Choose File</label>
                  <input type="file" name="file" id="file" className="custom-file-input"/>
                  <input type="submit" value="Submit" class="btn btn-primary" />
                </div> */}
              <div className="mb-3">
                <label>Name</label>
                <h4>{this.state.empData.fname} {this.state.empData.lname}</h4>
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <h4>{this.state.empData.email}</h4>
              </div>
              <div className="mb-3">
                <label>Contact No.</label>
                {/* <h4>{this.state.userData.contact}</h4> */}
                <input
                  type="number"
                  className="form-control"
                  placeholder={this.state.empData.contact}
                  onChange={(e) => this.setState({ contact: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>City</label>
                {/* <h4>{this.state.userData.city}</h4> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.empData.city}
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
              </div>
              {/* <div className="mb-3">
                  <label>Headline</label>
                  {/* <h4>{this.state.userData.headline}</h4> */}
              {/* <input
                    type="text"
                    // className="form-control"
                    // placeholder={this.state.empData.headline}
                    // onChange={(e) => this.setState({ headline: e.target.value })}
                  />
                </div> */}
              <div className="mb-3">
                <label>Decription</label>
                {/* <h4>{this.state.userData.description}</h4> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.empData.description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>Projects Worked On</label>
                {/* <h4>{this.state.userData.description}</h4> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.empData.projects}
                  onChange={(e) => this.setState({ projects: e.target.value })}
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