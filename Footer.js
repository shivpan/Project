import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row>
                <Row className="align-items-center">
                    <Col sm>
                        <h1>HIRE-UP</h1>
                    </Col>
                    <Col sm className="text-start text-sm-start">
                        About Us
                    </Col>
                    <Col sm className="text-start text-sm-start">
                        Contact Us
                    </Col>
                    <Col sm >
                    Terms & Condition
                </Col>
                </Row><br/><br/>
                <Row>
                <Col sm>
                    <p className="footer-p">Copyright@2022. All Rights Reserved</p>
                </Col>
                </Row>
                </Row>
            </Container>
        </footer>
    );
}