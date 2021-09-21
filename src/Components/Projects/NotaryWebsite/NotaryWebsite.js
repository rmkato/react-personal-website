import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';


const NotaryWebsite = () => {

  return (
    <Row className="mt-4 pt-4 px-4">
      <Col className="pe-4 pb-4" xs="12" md="6">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/NotaryWebsite/NotaryWebsite.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/NotaryWebsite/NotaryWebsite2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/NotaryWebsite/NotaryWebsite3.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/NotaryWebsite/NotaryWebsite4.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Projects/NotaryWebsite/NotaryWebsite5.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col xs="12" md="6" className="px-4">
        <h4 className="mb-4">Notary Website</h4>
        <hr />
        <p>
          Using Angular and Javascript I created an interactive webpage for a recent UC Irvine Business major graduate to advertise 
          her notary services online. 
        </p>
        <p>
          The website has successfully stimulated business opportunities for the client and allowed 
          people to utilize her services.
        </p>
        {/*
        <div className="mt-4">
          <a href="http://otsmobilenotary.com/" target="_blank" style={{ textDecoration: "none"}}>otsmobilenotary.com</a> 
        </div>
        */}
      </Col>
    </Row>
  );
};

export default NotaryWebsite;