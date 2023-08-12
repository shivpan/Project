import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const PaymentInfo =()=>{
    const[card,setCard]= useState();

    return (
<div className="container">
    <form>
    <div className="child">
        <div className="pay-content">
            <div className="pay1">
                <h2>Payment Information</h2>
            </div>
            <div className="choice">
                <input type="radio" value="Debit Card" onChange={e=> setCard(e.target.value)} />Debit Card
                <input type="radio" value="Credit Card" onChange={e=> setCard(e.target.value)} />Credit Card            
                </div>
                <div className="card-details">
                    <label>Card Number</label>
                    <input type="text" placeholder="Enter only numbers"></input>
                </div>


                <div className="card-details">
                    <label>Month</label>
                    <Form.Select aria-label="Default select example">
      <option> Select Month</option>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">00</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </Form.Select>
                </div>

                <div className="card-details">
                    <label>Year</label>
                    <Form.Select aria-label="Default select example">
      <option>Select Year</option>
      
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
      <option value="2028">2028</option>
      <option value="2029">2029</option>
      <option value="2030">2030</option>
      <option value="2031">2031</option>
      <option value="2032">2032</option>
      <option value="2033">2033</option>
      <option value="2034">2034</option>
      <option value="2035">2035</option>
      
    </Form.Select>
                </div>

                <div className="card-details">
                    <label>CVV </label>
                    <input type="text" placeholder="Enter only numbers"></input>
                </div>

                <div className="btn">
                <Button variant="primary">Pay Now</Button>{' '}
                <Button variant="primary">Cancel</Button>{' '}
                </div>
            </div>
        </div>
    </form>
</div>
   )
}

export default PaymentInfo;