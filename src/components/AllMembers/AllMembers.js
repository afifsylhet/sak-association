import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAuth } from '../../utilities/useAuth'



const AllMembers = () => {
    const { members } = useAuth();

    return (
        <div className='container-fluid'>
            <br />
            <div className='text-center mb-3'>
                <h2 className='text-primary d-inline border-bottom pb-2 mb-4 '>Lets introduce our <span className='text-secondary'>valued members</span></h2>
            </div>
            <br />

            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {members.map(member =>
                    <Col>
                        <Card style={{ marginTop: "120px" }}>
                            <div className='d-flex justify-content-center'>
                                <div className='mt-2 d-flex justify-content-center' style={{
                                    position: "relative", zIndex: "1"
                                }}>
                                    <Card.Img className='rounded-circle border p-2 ' style={{ position: "absolute", top: "-120px", width: "220px" }} variant="top" src={member.img} />
                                </div>
                            </div>
                            <Card.Body>
                                <div style={{ height: "120px" }}></div>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>
                                    <p className='p-0 m-0'>Role: {member.role}</p>
                                    <p className='p-0 m-0'>Share Number: {member.shareNumber}</p>
                                    <p className='p-0 m-0'>Share Quantity: {member.shareQuantity}</p>
                                    <p className='my-2 py-2 bg-light'>Address: {member.address}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div >
    );
};

export default AllMembers;