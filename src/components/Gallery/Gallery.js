import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css'

const Gallery = () => {
    const images = [
        {
            url: 'https://i.ibb.co/yNQsPG9/New-Project-8.jpg', cap: 'Meeting with Jagulul Pasha sir'
        },
        { url: 'https://i.ibb.co/5swWfgc/New-Project-7.jpg', cap: 'Progress analysis meeting' },
        { url: 'https://i.ibb.co/LgLKDZV/New-Project-6.jpg', cap: 'Outing and hangouts...' },
        { url: 'https://i.ibb.co/Byghnxj/New-Project-5.jpg', cap: 'Tree plantation activites' },
        { url: 'https://i.ibb.co/Z8DxkGC/New}-Project-4.jpg', cap: 'Monthly Executive Meeting' },
        { url: 'https://i.ibb.co/WG44sG5/New-Project-3.jpg', cap: 'Tree plantation activities' }
    ]

    return (
        <div>
            <div className='my-3 text-center'>
                <h2 className='text-primary d-inline border-bottom pb-2'> Let's Look at Our Few <span className='text-secondary'>Beautifull Moments....</span> </h2>
            </div>
            <Container fluid>
                <Row>

                    {images.map(img => <Col xs={12} md={6} lg={4}>
                        <div className='py-1 px-2 overflow-hidden border rounded my-2' style={{ position: "relative" }}>
                            <img src={img.url} alt="gallery-img" className=' p-1 img-fluid gallery-item my-2' key={img} />
                            <h4 className='caption'>{img.cap}</h4>
                        </div>
                    </Col>)}

                </Row>
            </Container>

        </div >
    );
};

export default Gallery;