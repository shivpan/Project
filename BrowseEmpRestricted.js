import React, { Component } from "react";
import { Footer } from '../GeneralComponents/Footer';
import { AboutNav } from './AboutNav';
// import Skills from '../FreelancerComponents/Skills';

export default class BrowseEmpRestricted extends Component {
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
        const goToEmpSignUp = ()=>{
            window.location.href = "./emp-sign-up";
        }
        return (


            <div>
                <AboutNav />
                <div className='browse-wrapper'>
                    <div class="browse-cards">
                        <div className='emp-search-cards-box'>
                            <h2 className="hand">Anne Smith</h2>
                            <p class="card-description">
                                anne@domain.com
                            </p>
                            <p class="card-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p class="card-description">
                                Cafe Clone, Mentee App, Spotify Clone
                            </p>
                            <button className='btn-explore-more-emp' onClick={goToEmpSignUp}>Explore More Employers</button>
                        </div>
                    </div>
                    <br />
                </div>

                <Footer />
            </div>

        )
    }
}
