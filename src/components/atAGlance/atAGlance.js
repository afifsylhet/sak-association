

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AtAGlance = () => {
    const basicInfo = {
        totalPerson: 50,
        totalShare: 68,
        currentBalance: 1050000,
        expectedBalance: 1200000,
    }


    return (
        <div>

            <Container fluid >
                <Row>
                    <Col xs={6} md={6} lg={3}>
                        <div className='rounded border border-3 border-secondary bg-primary d-flex justify-content-center align-items-center shadow shadow-lg my-2' style={{ height: "100px" }}>
                            <div >
                                <h6 className='text-center pb-2 broder border-bottom text-white'>Total Share Holder</h6>
                                <h3 className='text-center text-white'>
                                    {basicInfo.totalPerson}
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <div className='p-2 rounded border border-3 border-secondary bg-primary d-flex justify-content-center align-items-center shadow shadow-lg my-2' style={{ height: "100px" }}>
                            <div >
                                <h6 className='text-center pb-2 broder border-bottom text-white'>Total Share</h6>
                                <h3 className='text-center text-white'>
                                    {basicInfo.totalShare}
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <div className='p-2 rounded border border-3 border-secondary bg-primary d-flex justify-content-center align-items-center shadow shadow-lg my-2' style={{ height: "100px" }}>
                            <div >
                                <h6 className='text-center pb-2 broder border-bottom text-white'>Current Balance</h6>
                                <h3 className='text-center text-white'>
                                    {basicInfo.currentBalance}
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <div className='p-2 rounded border border-3 border-secondary bg-primary d-flex justify-content-center align-items-center shadow shadow-lg my-2' style={{ height: "100px" }}>
                            <div >
                                <h6 className='text-center pb-2 broder border-bottom text-white'>Expected Balance</h6>
                                <h3 className='text-center text-white'>
                                    {basicInfo.expectedBalance}
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AtAGlance;