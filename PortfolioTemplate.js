import React, { Component } from "react";
import { EmpNav } from "./EmpNav";

export default class PortfolioTemplate extends Component {
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
    const Scroll = () => {
      document.getElementById('container02').scrollIntoView(true);
    }
    return (
        <div className="portfolio">
            <EmpNav />
            
            <div id="container01" className="emp-float-container profile">
                {/* <h2>Profile</h2> */}
                
                <div className="emp-float-child">
                    <div className="intro">
                        <img src='' className='img-fluid rounded-square portfolio-img'/>
                    </div>
                </div>
                <div className="emp-float-child">
                    <label className="salutation">
                            hi, i am <br/>
                            {this.state.userData.fname} {this.state.userData.lname}
                    </label>
                </div>
                <div className="emp-float-child">
                    <h3 className="emp-content">Branch: {this.state.userData.branch}</h3>
                    <h3 className="emp-content">Current Year: {this.state.userData.year}</h3>
                </div>
                <div className="emp-float-child">
                    <h3 className="emp-content">CGPA: {this.state.userData.cgpa}</h3>
                    <h3 className="emp-content">No. of Live KTs: {this.state.userData.kt}</h3>
                </div>
                <div className="emp-float-child">
                    <h3 className="emp-content">Clubs: {this.state.userData.clubs}</h3>
                </div>
                <div className="emp-float-child">
                  <input type="button" onClick={Scroll} value="Learn More"/>
                </div>
                <div className="emp-float-child">
                {/* <label>Rating</label> */}
                </div>
            </div>
            <div id="container02" className="emp-float-container02">
                <div>
                <label className="headings">About</label>
                </div>
                <div className="emp-float-child about">
                    <h3 className="about-content">{this.state.userData.description}</h3>
                </div>
            </div>
        </div>      
    );
  }
}