import React from 'react';
import './Header.css';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';


const Header = () => {
  let history = useHistory();

  return (
    <>
      <Row className="header py-4 me-0">
        <Col sm="8">
          <span className="logoContainer ms-4" onClick={() => history.push('/about')}>
            <i class="fab fa-ravelry fa-4x d-inline-block ms-4"></i>
          </span>
          <div className="d-inline-block">
            <h3 className="ms-4">Ryan Kato</h3>
            <h5 className="headerJobTitle ms-4">Software Engineer</h5>
          </div>         
        </Col>

        <Col sm="4">
          <div className="d-inline-block" style={{ float: "right", marginTop: "20px", marginRight: "30px"}}>
            <div className="d-inline-block me-3">
              <img
                src="/Images/linkedin-logo.png"
                alt="linkedin-logo"
                className="iconLink"
                onClick={() => window.open("https://www.linkedin.com/in/ryan-kato-8b5702b9/", "_blank")}
              />
            </div>
            <div className="d-inline-block iconLink me-3">
              <img
                src="/Images/fb-logo.png"
                alt="fb-logo"
                className="iconLink"
                onClick={() => window.open("https://www.facebook.com/rkato1131/", "_blank")}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;