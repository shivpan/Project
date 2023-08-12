import React from "react";

const EmployerRegister =()=>{
    return (
        <>
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <h2 className="form-title">Registration Form</h2>
                        <div className="signup-details">
                            <label className="labell">FullName:
                            <i class="zmdi zmdi-account"></i></label>
                            
                            <input className="input" type="text" placeholder="Naam daal apna"/>
                        </div>
                        <div className="signup-details">
                            <label className="labell">E-mail address:
                            <i class="zmdi zmdi-mall"></i></label>
                            
                            <input className="input" type="text" placeholder="Naam daal apna"/>
                        </div>
                        <div className="signup-details">
                            <label className="labell">Contact Number:
                            <i class="zmdi zmdi-phone"></i></label>
                            
                            <input className="input" type="text" placeholder="Naam daal apna"/>
                        </div>
                        <div className="signup-details">
                            <label className="labell">Username:
                            </label>
                            
                            <input className="input" type="text"/>
                        </div>
                        <div className="signup-details">
                            <label className="labell">Password:
                            <i class="zmdi zmdi-shield-security"></i>
                            </label>
                            
                            <input className="input" type="password" placeholder="Naam daal apna"/>
                        </div>
                        <div className="signup-details">
                            <label className="labell">Occupation:
                            </label>
                            
                            <input className="input" type="text" placeholder="Naam daal apna"/>
                        </div>
                        <div className="signup-details">
                            <label className="labell">Purpose:
                            </label>
                            
                            <input className="input" type="text" placeholder="Naam daal apna"/>
                        </div>
                        <button className="SubmitFormBtn" variant="custom" type="submit">
        Submit
      </button>
                    </div>
                </div>
            
        </section>
        </>
    )
}

export default EmployerRegister;