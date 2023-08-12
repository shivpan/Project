import { Row, Col} from "react-bootstrap";
import student from "../assets/images/student.png"
import student2 from "../assets/images/student2.png"
import studentGroup from "../assets/images/studentGroup.jpg"
export const Banner = () => {

    const getStarted=()=>{
        document.getElementById('banner2').scrollIntoView();
    }

    const browseEmpRestricted = ()=>{
        window.location.href = "./browseEmpRestricted";
    }
    const goToSignUp = ()=>{
        window.location.href = "./emp-sign-up";
    }
    

    return(
        <div className="banner" id="home">
            <Row className="banner1">
                <Col xs={12} md={5} xl={5}>
                    <h1 className="banner-label">TOP Freelance Talent  at S.I.E.S.</h1>
                    <h1 className="banner-label-small">Fill up your college life with expectation</h1>
                    <h1 className="banner-label-small">Get the chance to expand your résumé by doing projects</h1>
                    <button className="btn-get-started" onClick={getStarted}>Get Started</button>
                </Col>
                <Col xs={12} md={7} xl={7}>
                    <img className="banner-img" src={student} />
                </Col>
            </Row>
            <Row className="banner2" id="banner2">
                <Col xs={12} md={6} xl={6}>
                <img className="banner-img student2" src={student2} />
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <h1 className="banner2-label">Add experiences to your Résumé!!</h1>
                    {/* Hire the best talents at SIES 
                        and be sure of their performance by looking at their reviews 
                        and ratings given by previous employers! */}
                    <h1 className="banner2-label-small">
                        Add experiences to your résumé and demonstrate your capabilities 
                        by working as a freelancer in your own college
                    </h1>
                    {/* Hire at affordable cost!! */}
                    {/* <h1 className="banner2-label-small"></h1> */}
                    <button className="btn-explore-emp" onClick={browseEmpRestricted}>Explore Employers</button>
                </Col>
            </Row>
            <Row className="banner3">
                <Col xs={10} md={4} xl={4}>
                    <h1 className="banner-label">Find the best team for your Project!!</h1>
                    <h1 className="banner-label-small">
                        Review résumés and select the best team members for your projects
                    </h1>
                    <button className="btn-explore-freelancers" onClick={goToSignUp}>Explore Freelancers</button>
                </Col>
                <Col xs={12} md={8} xl={8}>
                    <img className="banner-img student-group-img" src={studentGroup}/>
                </Col>
            </Row>
        </div>
    );
}