import React, { Component } from "react";
import FooterSection from "../GeneralComponents/components/components/FooterSection";
import { FreelancerNav } from "./FreelancerNav";
import Profile from "./Profile";

export default class ShowProfile extends Component{
    render(){
        return(
            <div>
                {/* <FreelancerNav /> */}
                <Profile />

            </div>
        );
    }
}