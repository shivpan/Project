import React, { Component } from "react";
import { Footer } from "../GeneralComponents/Footer";
import { FreelancerNav } from "./FreelancerNav";

export default class GeneralDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      // fname: "",
      // lname: "",
      // email: "",
      // contact: "",
      city: "",
      headline: "",
      description: "",
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
          city: this.state.userData.city,
          headline: this.state.userData.headline,
          description: this.state.userData.description
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { city, headline, description } = this.state;
    // const _id = this.state.userData._id;
    const fname = this.state.userData.fname;
    const lname = this.state.userData.lname;
    const email = this.state.userData.email;
    const contact = this.state.userData.contact

    console.log(fname, lname, email, contact, city, headline, description);
    fetch("http://localhost:5000/general-details", {
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
        headline,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        window.location.href = "./profile";
      });
  }
  render() {
    return (
      <div >
        <FreelancerNav />
        <div className="edit-details">
          <form className="form-edit" onSubmit={this.handleSubmit}>
            <div className="form-box ">
              <h3>Edit User Profile</h3>
              <div className="mb-3">
                <label>Choose Profile Image</label><br />
                <label for="file" className="custom-file-label">Choose File</label>
                <input type="file" name="file" id="file" className="custom-file-input" />
                <input type="submit" value="Submit" class="btn btn-primary" />
              </div>
              <div className="mb-3">
                <label>Name</label>
                <h4>{this.state.userData.fname} {this.state.userData.lname}</h4>
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <h4>{this.state.userData.email}</h4>
              </div>
              <div className="mb-3">
                <label>Contact No.</label>
                {/* <h4>{this.state.userData.contact}</h4> */}
                <input
                  type="number"
                  className="form-control"
                  placeholder={this.state.userData.contact}
                  onChange={(e) => this.setState({ contact: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>City</label>
                {/* <h4>{this.state.userData.city}</h4> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.userData.city}
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>Headline</label>
                {/* <h4>{this.state.userData.headline}</h4> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.userData.headline}
                  onChange={(e) => this.setState({ headline: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label>Decription</label>
                {/* <h4>{this.state.userData.description}</h4> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.userData.description}
                  onChange={(e) => this.setState({ description: e.target.value })}
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