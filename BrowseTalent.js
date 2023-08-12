import React from 'react'
import { Row, Col} from "react-bootstrap";
import { AboutNav } from '../GeneralComponents/AboutNav';
// import "./BrowseTalentStyle.css"
import bulb from '../assets/images/bulb3.png'
import { Footer } from '../GeneralComponents/Footer';

const BrowseTalent = () => {
    const handleSubmit = () => {
        window.location.href = "./emp-sign-up";
    }
    return (
        <div className='browse-form-container'>
            <AboutNav />
            <div className='browse-form'>
                    <div className='browse-form-box'>
                        <Row>
                            <Col xs={12} md={4} xl={4}>
                            <img className='bulb-img' src={bulb}/>
                            </Col>
                            <Col xs={10} md={8} xl={8}>
                            <br/>
                            <br/>
                            <label className='browse-form-label'>Fill the form below to find the domain-specific talent you want!</label>
                            </Col>
                        </Row>
                        
                        <div className='form-child'>
                            <label className='browse-form-label2'>Which domain would you like to hire for?</label>
                            <div className='form-options'>
                                <form >
                                    <p>
                                        <input type="radio" id="Option1" name="formName"  />
                                        <label for="Option1">Development & IT</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option2" name="formName" />
                                        <label for="Option2">Design & Creative</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option3" name="formName" />
                                        <label for="Option3">Business & Marketing</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option3" name="formName" />
                                        <label for="Option3">Writing & Translations</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option3" name="formName" />
                                        <label for="Option3">Finance & Accounting</label>
                                    </p>
                                </form>
                            </div>
                        </div>



                        <div className='form-child'>
                            <label className='browse-form-label2'>Which role would you like to hire for?</label>
                            <div className='form-options'>
                                <form >
                                    <p>
                                        <input type="radio" id="Option11" name="formName"  />
                                        <label for="Option11">Web Developer</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option22" name="formName" />
                                        <label for="Option22">App Developer</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option33" name="formName" />
                                        <label for="Option33">UI/UX Designer</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option44" name="formName" />
                                        <label for="Option44">Project Manager</label>
                                    </p>
                                </form>

                            </div>
                        </div>



                        <div className='form-child'>
                            <label className='browse-form-label2'>What type of project are you hiring for?</label>
                            <div className='form-options'>
                                <form >
                                    <p>
                                        <input type="radio" id="Option111" name="formName"  />
                                        <label for="Option111">Personal Project</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option222" name="formName" />
                                        <label for="Option222">New idea / project</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option333" name="formName" />
                                        <label for="Option333">Existing project that needs more resources</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="Option444" name="formName" />
                                        <label for="Option444">Ongoing project assistance</label>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className='b1'>
                            <button className='btn-search-talent' onClick={handleSubmit}>Search Talent</button>
                        </div>
                        
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default BrowseTalent;