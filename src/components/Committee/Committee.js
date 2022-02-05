import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Committee = () => {
    const committees = [
        {
            Name: "Kamil Ahmed",
            Role: "Chairparson",
            img: "https://i.ibb.co/stNW2yb/New-Project-3.jpg",
            ShareNumber: 1,
            ShareQuantity: 3,
            address: "Zakigonj, Sylhet"
        },
        {
            Name: "Sadikur Rahman Chowdhury",
            Role: "Vice-Chairman",
            img: "https://i.ibb.co/0KVJsxX/sadik.jpg",
            ShareNumber: 11,
            ShareQuantity: 1,
            address: "Zakigonj, Sylhet"
        },
        {
            Name: "Afif Ahmed",
            Role: "Vice-Chairman",
            img: "https://i.ibb.co/KWvbrdd/afif.jpg",
            ShareNumber: 27,
            ShareQuantity: 2,
            address: "Zakigonj, Sylhet"
        },
        {
            Name: "Md. Halim Ahmed",
            Role: "Maniging Director",
            img: "https://i.ibb.co/xLYM4xs/halim.jpg",
            ShareNumber: 27,
            ShareQuantity: 1,
            address: "Zakigonj, Sylhet"
        },
        {
            Name: "Md. Abu Sufian",
            Role: "Treasure",
            img: "https://i.ibb.co/qJyJcHh/sufan.jpg",
            ShareNumber: 27,
            ShareQuantity: 1,
            address: "Beanibazar, Sylhet"
        },
        {
            Name: "Shah Mohammad Imran",
            Role: "Excutive Member",
            img: "https://i.ibb.co/vXBYP25/imran.jpg",
            ShareNumber: 27,
            ShareQuantity: 1,
            address: "Beanibazar, Sylhet"
        },
        {
            Name: "Mashud Ahmed",
            Role: "Excutive Member",
            img: "https://i.ibb.co/Wthd9qd/Masud.jpg",
            ShareNumber: 27,
            ShareQuantity: 1,
            address: "Beanibazar, Sylhet"
        },
        {
            Name: "Jashim Uddin",
            Role: "Excutive Member",
            img: "https://i.ibb.co/KGqFGTF/jasim.jpg",
            ShareNumber: 27,
            ShareQuantity: 1,
            address: "Khanaighat, Sylhet"
        },
        {
            Name: "Md. Maruf Ahmed",
            Role: "Excutive Member",
            img: "https://i.ibb.co/BySvqvh/maruf.jpg",
            ShareNumber: 27,
            ShareQuantity: 1,
            address: "Zakigonj, Sylhet"
        },
        {
            Name: "Mst. Jasmin Sultana",
            Role: "Excutive Member",
            img: "https://i.ibb.co/stNW2yb/New-Project-3.jpg",
            ShareNumber: 27,
            ShareQuantity: 1,
            address: "Moulovi Bazar"
        }
    ]
    return (
        <div className='container-fluid'>
            <br />
            <div className='text-center mb-3'>
                <h2 className='text-primary d-inline border-bottom pb-2 mb-4 '>Lets introduce our <span className='text-secondary'>Excutive Members</span></h2>
            </div>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {committees.map(comittee =>
                    <Col>
                        <Card style={{ marginTop: "120px" }}>
                            <div className='d-flex justify-content-center'>
                                <div className='mt-2 d-flex justify-content-center' style={{
                                    position: "relative", zIndex: "1"
                                }}>
                                    <Card.Img className='rounded-circle border p-2 ' style={{ position: "absolute", top: "-120px", width: "220px" }} variant="top" src={comittee.img} />
                                </div>
                            </div>
                            <Card.Body>
                                <div style={{ height: "120px" }}></div>
                                <Card.Title>{comittee.Name}</Card.Title>
                                <Card.Text>
                                    <p className='p-0 m-0'>Role: {comittee.Role}</p>
                                    <p className='p-0 m-0'>Share Number: {comittee.ShareNumber}</p>
                                    <p className='p-0 m-0'>Share Quantity: {comittee.ShareQuantity}</p>
                                    <p className='my-2 p-2 bg-light'>Address: {comittee.address}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div >
    );
};

export default Committee;