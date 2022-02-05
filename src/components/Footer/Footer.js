

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='w-100 bg-secondary '>
            <Container fluid>
                <Row>
                    <Col className='text-dark py-3' md={12} lg={4} >
                        <h6>Office Address : </h6>
                        <p className='p-0 m-0'>Doctor's House</p>
                        <p className='p-0 m-0'>House # 103, Road # 18</p>
                        <p className='p-0 m-0'>Madical Road, BagBari, Sylhet.</p>
                    </Col>
                    <Col className='text-dark py-3' md={12} lg={4} >
                        <h6>Communication : </h6>
                        <p className='p-0 m-0'>Email: sakassiotion@yahoo.com</p>
                        <p className='p-0 m-0'>Cell Phone: +880-1739-945***</p>
                        <p className='p-0 m-0'>What's App: +880-1739-945*** </p>
                    </Col >
                    <Col className='text-dark py-3' md={12} lg={4} >
                        <h6>App Design and Developed by : </h6>
                        <p className='p-0 m-0'>Afif Ahmed</p>
                        <p className='p-0 m-0'>Email: afif.ahmed@yahoo.com</p>
                        <p className='p-0 m-0'>What's App: +880-1739-945728</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;