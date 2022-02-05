
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <br />
            <Container>
                <div className='text-center mb-3'>
                    <h2 className='text-primary d-inline border-bottom pb-2 mb-4 '>Have Some <span className='text-secondary'>Qestion?</span></h2>
                </div>
                <br />

                <Row>
                    <Col className='d-flex justify-content-center align-items-center' style={{ transform: "scale(.6)" }} md={12} lg={6}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </Col>
                    <Col className='bg-light rounded p-4' md={12} lg={6}>
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control rounded-pill" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control rounded-pill" placeholder="Cell Number" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control rounded-pill" placeholder="Subject" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "160px" }}></textarea>
                                <label htmlFor="floatingTextarea2">Your Question</label>
                            </div>
                            <div className="mb-3">
                                <button className='btn btn-secondary p-2 text-white w-100 rounded-pill' type='submit'> SEND MASSAGE</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <br />
        </div >
    );
};

export default Contact;