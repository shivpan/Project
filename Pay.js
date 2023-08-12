import React, { useState } from 'react';
import subscribe from '../assets/images/subscribe.png'
import { Row, Col } from 'react-bootstrap'
import { AboutNav } from './AboutNav';
import {Footer} from './Footer'

function Pay() {
    const subPrice1 = 400;
    const subPrice2 = 600;

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    const displayRazorpay = async (amount) => {

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('You are offline... Failed to load Razorpay SDK')
            return
        }
        const options = {
            key: "rzp_test_JCEaGPXIb4AtBW",
            currency: "INR",
            amount: amount * 100,
            name: "HIRE-UP",
            description: "Subscription",
            key_secret: "XEANqXMhIL7FAxEdSYxlynaD",
            handler: function (response) {
                alert("Payment Success. Your Payment id is: "+response.razorpay_payment_id)
                if(amount==subPrice1){
                    window.location.href = "./sign-in";
                }
                else{
                    window.location.href = "./emp-sign-in";
                }
            },
            prefill: {
                name: "Aditi",
                email: "aditivnair@gmail.com",
                contact: "9145183474"
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open();
    }

    return (
        <div className="Pay" >
            <AboutNav/>
            <div className="mainscreen">
                <label className="free-pay">Subscribe To Proceed</label>
                <Row className="card-wrapper">
                    <Col className='card leftside'>
                        <img className='star' src={subscribe} ></img>
                        <label className='pay-label'>1 Month</label> 
                        <label className='pay-label'> Rs 400</label>
                        <label className='pay-label'> For Freelancer</label>
                        <p className='pay-p'>
                            <li>Access to  all user Profiles</li>
                            <li>Cancel Anytime</li>
                            <li>500 MAUs</li>
                            <li>10 projects</li>
                            <li>Unlimited guides</li>
                            <li>Unlimited flows</li>
                            <li>Unlimited branded themes</li>
                            <li>Email support</li>
                        </p>
                        <button onClick={() => displayRazorpay(subPrice1)} class="button">CheckOut</button>
                    </Col>
                    <Col className='card rightside'>
                        <img className='star' src={subscribe} ></img>
                        <label className='pay-label'>1 Month</label>
                        <label className='pay-label'> Rs 600</label>
                        <label className='pay-label'> For Employer</label>
                        <p className='pay-p'>
                            <li>Access to  all user Profiles</li>
                            <li>Cancel Anytime</li>
                            <li>500 MAUs</li>
                            <li>10 projects</li>
                            <li>Unlimited guides</li>
                            <li>Unlimited flows</li>
                            <li>Unlimited branded themes</li>
                            <li>Email support</li>
                        </p>
                        <button onClick={() => displayRazorpay(subPrice2)} class="button">CheckOut</button>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div >
    );
}

export default Pay;
