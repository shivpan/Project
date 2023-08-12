
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EmpNav } from "./EmpNav";
import React, { Component, useEffect, useState } from "react";
import { Footer } from '../GeneralComponents/Footer';
// import Skills from '../FreelancerComponents/Skills';

export default class EmployerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empsearch: "",
      domain: "",
      skills: "",
      data: [],
      fname: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("COMPONENT MOUNTING");
    fetch("http://localhost:5000/empsearch", {
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
        console.log(data, "empsearch");
        this.setState({ data: data.data })
        this.setState({ empsearch: data.data });
        this.setState({
          domain: this.state.empsearch.domain,
          skills: this.state.empsearch.skills,
          fname: this.state.empsearch.fname,

        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { domain, skills } = this.state;
    console.log(domain, skills);
    fetch("http://localhost:5000/empsearch", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        domain,
        skills,

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "empSearch");
        this.setState({ data: data.data })
        console.log("setting", this.data)
        //   if (data.status == "ok") {
        //     alert("user found");
        //     window.localStorage.setItem("token", data.data);

        //     this.setState({data:data.data})
        //     console.log("setting",this.data)
        //   //window.location.href = "emp-sign-in";
        // }
        if (data.status == "error") {
          alert("user not found")
        }
      });
  }
  // getUser(e,id){
  //   fetch('http://localhost:5000/empData'+id).then(res => res.json()).then(result =>{
  //     this.setState({

  //     })
  //   }


  render() {
    return (

      <div className='emp-search'>
        <EmpNav />
        <div className='emp-search-form-wrapper'>
          <form className="emp-search-form" onSubmit={this.handleSubmit}>
            <div className='emp-search-form-box'>
              <div className="child">
                <div className="search-details">
                  <label>Domain: </label>
                  <Form.Control as="select" name="domain" id="domain"
                    custom
                    onChange={(e) => this.setState({ domain: e.target.value })}
                    aria-label="Default select example">
                    <option>Select Domain</option>
                    <option name="domain" value="Development and IT">Development & IT</option>
                    <option name="domain" value="Design and Creative">Design & Creative</option>
                    <option name="domain" value="Business and Marketing">Business & Marketing</option>
                    <option name="domain" value="Writing and Translation">Writing & Translation</option>
                    <option name="domain" value="Finance and Accounting">Finance & Accounting</option>
                  </Form.Control>
                </div>

                <div >
                  <Button type="submit" className='btn-emp-search-freelancers'>Search</Button>{' '}
                </div>
              </div>
            </div>
          </form>
          <div >
            {/* <h1 >DOMAIN:</h1> */}
            {this.state.data.length > 0 ? this.state.data.map((data, i) => {
              return (
                // <div className='emp-search-cards'>
                //   <p key={`${i}`}></p>
                //   <h1 className='emp-search-form-box'>{data.fname} {data.lname}</h1>
                // </div>
                <div class="emp-search-cards">
                  <div>
                    <div class="card__image-holder">
                      {/* <img class="card__image" src={p} alt="wave" /> */}
                    </div>
                    <div className='emp-search-cards-box'>
                      <p key={`${i}`}></p>
                      <h2 className='hand'>
                      {data.fname} {data.lname}
                      </h2>
                      <p class="card-description">
                        {data.headline}
                      </p>
                      <p class="card-description">
                        {data.description}
                      </p>
                      <p class="card-description">
                        {data.skills}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }) : ""}
            <br/>
          </div>
        </div>
        <Footer/>
      </div>
          )
  }
}
