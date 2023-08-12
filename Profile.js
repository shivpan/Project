import React, { Component } from "react";
import avatar from "../assets/images/avatar.png"
import FooterSection from "../GeneralComponents/components/components/FooterSection/index";
import { Footer } from "../GeneralComponents/Footer";
import { FreelancerNav } from "./FreelancerNav";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
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
      });
  }
  render() {
    return (
      <div>
        <FreelancerNav/>
        <div className="float-container profile">
        {/* <h2>Profile</h2> */}
        <div className="float-child">
            <div className="profile-detail-box intro">
                <img src={avatar} className='img-fluid rounded-circle prof-img'/> 
                <a className="edit-option" href="/general-details">Edit</a>
                <br />
                {/* <h2>Name: </h2> */}
                <h3 className="profile-content-big">{this.state.userData.fname} {this.state.userData.lname}</h3>
                {/* <h2>Email</h2> */}
                <h3 className="profile-content">{this.state.userData.email}</h3>
                {/* <h2>Contact</h2> */}
                <h3 className="profile-content">{this.state.userData.contact}</h3>
                <h3 className="profile-content">{this.state.userData.city}</h3>
                {/* <h2>Headline</h2>  */}
                <h3 className="profile-content">{this.state.userData.headline}</h3>
                {/* <h2>Description</h2> */}
                <h3 className="profile-content">{this.state.userData.description}</h3>
            </div>
        </div>
        <div className="float-child">
            <div className="profile-detail-box2 educational details">
              <div>
              <h3 className="profile-content-big">Educational Details</h3>
              <a className="edit-option" href="/educational-details">Edit</a>
              </div>
              <div>
              <h3 className="profile-content">Branch: {this.state.userData.branch}</h3>
              <h3 className="profile-content">Current Year: {this.state.userData.year}</h3>
              <h3 className="profile-content">CGPA: {this.state.userData.cgpa}</h3>
              <h3 className="profile-content">Clubs: {this.state.userData.clubs}</h3>
              <h3 className="profile-content">No. of live KTs: {this.state.userData.kt}</h3>
              </div>
              
            </div>   
        </div>
        <div className="float-child">
            <div className="profile-detail-box2 skill details">
              <div>
                <h3 className="profile-content-big">Skils</h3>
                <a className="edit-option" href="/skillsEdit">Edit</a><br/>
              </div>
              <div>
                <h3 className="profile-content">{this.state.userData.skills}</h3>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}