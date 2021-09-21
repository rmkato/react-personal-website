import React from 'react';
import './DataStickers.css';
import { Row, Col, Carousel } from 'react-bootstrap';


const DataStickers = () => {

  return (
    <Row className="mt-4 pt-4 px-4">
      <Col className="pe-4 pb-4" xs="12" md="6">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-75 px-4 dataStickersImage"
              src="/Images/Projects/DataStickers/DataStickers1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 px-4 dataStickersImage"
              src="/Images/Projects/DataStickers/DataStickers2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 px-4 dataStickersImage"
              src="/Images/Projects/DataStickers/DataStickers3.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 px-4 dataStickersImage"
              src="/Images/Projects/DataStickers/DataStickers4.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 px-4 dataStickersImage"
              src="/Images/Projects/DataStickers/DataStickers5.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col xs="12" md="6" className="px-4">
        <h4 className="mb-2 text-center">Snapchat Informatics Data Stickers Application</h4>
        <div className="mb-4 text-center">
          <a href="https://github.com/depstein/sticker-app" target="_blank" className="me-3 general-link">GitHub</a>
          <a href="https://dl.acm.org/doi/pdf/10.1145/3415166" target="_blank" className="general-link">Research Paper</a>
        </div>
        <hr />
        <p>
          I worked with a team of undergraduate CS students on a cross-platform application that allows users to create and 
          customize data-driven stickers that can be exported to Snapchat in order to provide more context for stories and snaps. 
        </p>
        <p>
          Data can be drawn from the user's Spotify and Google Fit/Apple Health applications.
        </p>
        <p>
          Research was led by UC Irvine Informatics professor <a href="https://www.informatics.uci.edu/explore/faculty-profiles/daniel-epstein/" target="_blank" className="general-link">Daniel Epstein</a>
        </p>
      </Col>
    </Row>
  )
};

export default DataStickers;