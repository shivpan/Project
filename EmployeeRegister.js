import React, { Component } from "react";
import { AboutNav } from "../GeneralComponents/AboutNav";
import { Footer } from "../GeneralComponents/Footer";
import { Row, Col } from "react-bootstrap";

export default class EmpSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      contact: "",
      Occupation: "",
      Purpose: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password, contact, Occupation, Purpose } = this.state;
    console.log(fname, lname, email, password, contact, Occupation, Purpose);
    fetch("http://localhost:5000/register-emp", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
        contact,
        Occupation,
        Purpose
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "empRegister");
        window.location.href = "pay";
      });
    // navigate('/sing-in');
  }
  render() {
    return (
      <div>
        <AboutNav />
        <Row className="emp-sign-up">
          {/* <Col xs={12} md={5} xl={5} >
            <img className="sign-up-bg-img" src={signUpImg}/>
          </Col> */}
          <Col xs={12} md={12} xl={12}>
            <div>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="emp-form-box">
                  <h3>Registration Form</h3>
                  <div className="mb-3">
                    <label>First name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={(e) => this.setState({ fname: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      onChange={(e) => this.setState({ lname: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Contact</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter contact no"
                      onChange={(e) => this.setState({ contact: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Occupation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Occupation"
                      onChange={(e) => this.setState({ Occupation: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Purpose</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Purpose"
                      onChange={(e) => this.setState({ Purpose: e.target.value })}
                    />
                  </div>


                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                  <p className="forgot-password text-right">
                    Already registered <a href="/emp-sign-in">sign in?</a>
                  </p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}