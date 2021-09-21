import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';


const Evedent = () => {

  return (
    <Row className="mt-4 pt-4 px-4">
      <Col className="pe-4 pb-4" xs="12">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/Evedent/evedent1.PNG"
              alt="Evedent 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/Evedent/evedent2.PNG"
              alt="Evedent 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/Evedent/evedent3.PNG"
              alt="Evedent 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/Evedent/evedent4.PNG"
              alt="Evedent 4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/Evedent/evedent5.PNG"
              alt="Evedent 5"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col xs="12">
        <h4 className="mb-2 text-center">Evedent Case Management System</h4>
        <div className="mb-4 text-center">
          <a href="https://med-legal.com/evedent/" target="_blank" className="general-link">About</a>
        </div>
        <hr />
        <p>
          Evedent is Med-Legal's enterprise CMS (Case Management System) and is the company's flagship product. 
        </p>
        <p>
          I was part of the four member scrum team responsible for the end-to-end creation of Evedent to replacet he company's previous 
          CMS, getmedlegal.com. The Evedent portal provides law firms to manage all of their cases and related documents in a single 
          place in addition to automating the procedures for submitting legal filings and orders.
        </p>
        <p>
          Our rebuild revamped the old-school design of getmedlegal into a modernized, intuitive React web 
          application that is significantly easier for our users to navigate. 
        </p>
        <p>
          Additionally, the old back-end was completely rebuilt using .NET, which greatly reduced overall latency and significantly 
          reduced loading times.
        </p>
      </Col>
    </Row>
  );
};

export default Evedent;