
import './Banner.css'
import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid>
            <br />
            <Row>
                <Col xs={12} md={12} lg={6}>
                    <h1 className='text-primary'>Welcome to <span className='text-secondary' >SAK Assiocation</span> </h1>
                    <br />
                    <div className='d-flex align-items-center justify-content-center banner'>
                        <img src="https://i.ibb.co/gJtnGdB/Logo-of-SAK-removebg-preview.png" alt="logo" className='w-50 text-center' />
                    </div>
                    <br />

                </Col>
                <Col xs={12} md={12} lg={6} className='ps-2'>


                    <Carousel variant='dark'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/tYd18qR/banner-2.png"
                                alt="First slide"
                            />
                            <Carousel.Caption className='carsol-bg'>
                                <h3>Collaboration</h3>
                                <p>We belive collabroation makes a thought complete in reality</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/64tz6DP/banner-1.png"
                                alt="Second slide"
                            />

                            <Carousel.Caption className='carsol-bg'>
                                <h3>Co-operation</h3>
                                <p>One of our theme is co-operation each other and win the goal. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/PMdLCXs/banner-3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption className='carsol-bg'>
                                <h3>Unity</h3>
                                <p>Many drops make light work</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;