
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import { FreelancerNav } from './FreelancerNav';
import { Footer } from '../GeneralComponents/Footer';
// import Skills from '../FreelancerComponents/Skills';

export default class BrowseEmp extends Component {
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
        fetch("http://localhost:5000/empBrowse", {
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
                console.log(data, "empbrowse");
                this.setState({ data: data.data })
                this.setState({ empsearch: data.data });
                this.setState({


                });
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { domain, skills } = this.state;
        console.log(domain, skills);
        fetch("http://localhost:5000/empBrowse", {
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
                console.log(data, "empBrowse");
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


            <div>
                <FreelancerNav />
                <div className='browse-wrapper'>
                    <div class="browse-cards">
                        {this.state.data.length > 0 ? this.state.data.map((data, i) => {
                            return (
                                <div className='emp-search-cards-box'>
                                    <p key={`${i}`}></p>
                                    <h2 className='hand'>
                                        {data.fname} {data.lname}
                                    </h2>
                                    <p class="card-description">
                                        {data.email}
                                    </p>
                                    <p class="card-description">
                                        {data.contact}
                                    </p>
                                    <p class="card-description">
                                        {data.description}
                                    </p>
                                    <p class="card-description">
                                        {data.projects}
                                    </p>
                                </div>
                            );
                        }) : ""}
                    </div>
                    <br />
                </div>

                <Footer />
            </div>

        )
    }
}
