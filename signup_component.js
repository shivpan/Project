import React, { Component } from "react";
import { AboutNav } from "./GeneralComponents/AboutNav";
import { Row, Col } from "react-bootstrap";
import signUpImg from "./assets/images/signupBg.jpg"
import { Footer } from "./GeneralComponents/Footer";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      contact: "",
      domain:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password, contact } = this.state;
    console.log(fname, lname, email, password, contact);
    fetch("http://localhost:5000/register", {
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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        window.location.href = "pay";
      });
    // navigate('/sing-in');
  }
  render() {
    return (
      <div>
        <AboutNav />
        <Row className="freelancer-sign-up">
          {/* <Col xs={12} md={5} xl={5} >
            <img className="sign-up-bg-img" src={signUpImg}/>
          </Col> */}
          <Col   xs={12} md={12} xl={12}>
            <div>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-box">
                  <h3>Sign Up</h3>
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

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                  <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                  </p>
                </div>
              </form>
            </div>
        </Col>
      </Row>
      <Footer/>
      </div>
    );
  }
}