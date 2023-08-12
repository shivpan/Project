import React, { Component } from "react";
import { EmpNav } from "./EmpNav";
import empAvatar from "../assets/images/empAvatar.png"
import { Footer } from "../GeneralComponents/Footer";

export default class EmpProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: "",
    };
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
        console.log("Emp Component Mounted");
        this.setState({ empData: data.data });
        console.log(data, "empData");
      });
  }
  render() {
    return (
      <div>
        <EmpNav />
        <div className="float-container emp-profile">
          <div className="emp-float-child">
            <div className="profile-detail-box intro">
              <a className="emp-edit-option" href="/emp-general-details">Edit</a>
              <img src={empAvatar} className='img-fluid rounded-circle prof-img' />
              {/* <a className=" -option" href="/emp-general-details">Edit</a> */}
              <br />
              {/* <h2>Name: </h2> */}
              <h3 className="profile-content-big">{this.state.empData.fname} {this.state.empData.lname}</h3>
              {/* <h2>Email</h2> */}
              <h3 className="profile-content">{this.state.empData.email}</h3>
              {/* <h2>Contact</h2> */}
              <h3 className="profile-content">{this.state.empData.contact}</h3>
              {/* <h3 className="profile-content">{this.state.empData.city}</h3>
                {/* <h2>Headline</h2>  */}
              <h3 className="profile-content">{this.state.empData.city}</h3>
            </div>
          </div>
          <div className="emp2-float-child">
            <div className="profile-detail-box2 about-emp">
              <div>
                <h3 className="profile-content-big">Description</h3>
              </div>
              <div>
                <h3 className="profile-content">{this.state.empData.description}</h3>
              </div>

            </div>
          </div>
          <div className="emp2-float-child">
            <div className="profile-detail-box2 skill details">
              <div>
                <h3 className="profile-content-big">Projects Worked On</h3>
              </div>
              <div>
                {/* {this.state.empData.projects} */}
                <h3 id="showProjects" className="profile-detail-box3 profile-content">{ this.state.empData.projects}</h3>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}