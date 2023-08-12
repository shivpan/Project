
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EmpNav } from "./EmpNav";


const EmployerSearch = () => {
    

  return (

    <div> 
    <EmpNav />
    <form className="form">
    <div className="child">    
                <div className="search-details">
                    <label>Domain: </label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Domain</option>
                      <option value="1">Development & IT</option>
                      <option value="2">Design & Creative</option>
                      <option value="3">Business & Marketing</option>
                      <option value="4">Writing & Translation</option>
                      <option value="5">Finance & Accounting</option>
                    </Form.Select>
                </div>


                <div className="search-details">
                    <label>Skills</label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Skills</option>
                      <option value="1">Information Technology</option>
                      <option value="2">Website Development</option>
                      <option value="3"> Graphic Design</option>
                      <option value="4">Website Design</option>
                      <option value="5">Accounting & Bookkeeping</option>
                      <option value="5">Artificial Intelligence</option>
                      <option value="5">Social media marketing</option>
                      
                    </Form.Select>
                </div>

            
                {/* <div className="search-details">
                    <label>Ratings </label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Domain</option>
                      <option value="a">Five</option>
                      <option value="b">Less than 4</option>
                      <option value="c">Less than 3</option>
                      <option value="d">Less than 2</option>
                      <option value="e">Less than 1</option>
                    </Form.Select>
                </div> */}

                {/* <div className="search-details">
                    <label>Additional Request</label>
                    <input type="text" placeholder="What do you have in mind"></input>
                </div> */}

                <div className="button">
                <Button variant="primary">Search</Button>{' '}
                </div>

            </div>
    </form>
</div>

  );
}

export default EmployerSearch;