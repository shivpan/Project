import React from "react";
import './PaymentStyle.css'
import subscribe from './images/images/subscribe.png'

const PaymentInform = () => {
    

  return (

    <div class="mainscreen">
    <label className="free-pay">Freelancer's Subscription</label>
      <div class="card">
      <div className="rightside">
        

      <div className='super'>
    <div className='back-screen'>
        <div className="row">
            <div className='column'>
            
            <img className='star' src={subscribe} ></img>
               <br /> <label>1 Month</label> <br />
                <label> Rs 500</label>
                <p>
                <li>Access to  all user Profiles</li>
                    <li>Cancel Anytime</li>
                    <li>500 MAUs</li>
                    <li>10 projects</li>
                    <li>Unlimited guides</li>
                    <li>Unlimited flows</li>
                    <li>Unlimited branded themes</li>
                    <li>Email support</li>
                </p>
            </div>
        </div>

</div>

    </div>



      </div>
        
        <div class="leftside">
          <form action="">
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" placeholder="Enter name as in card" class="inputbox" name="name" required />
            

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>

            <p>Card Number</p>
            <input type="number" placeholder="Enter your Card Number" class="inputbox" name="card_number" id="card_number" required />


<div class="expcvv">

            <p class="expcvv_text">Expiry</p>
            <input type="text" placeholder="MM/YY" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
        </div>
            <p></p>
            <button type="submit" class="button">CheckOut</button>
            <button type="submit" class="button">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  

  );
}

export default PaymentInform;