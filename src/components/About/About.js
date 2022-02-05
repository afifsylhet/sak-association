import { Col, Container, Row } from 'react-bootstrap';
import AtAGlance from '../atAGlance/atAGlance';

const About = () => {
    return (
        <div>
            <section className='p-5 bg-primary'>
                <p className='text-center fs-1 fw-bolder p-5 my-2 text-white'>About Us</p>
            </section>
            <br />
            <section>
                <Container fluid>
                    <Row>
                        <Col sx={12} lg={6}>
                            <h2 className='fw-bold py-2'> Learn About Our Companyre </h2>
                            <p className='text-muted mb-3'>There are many variations of passages of available but the majoritandomised words the majority have suffered alteration in some form, by injected humou or randomised words.</p>
                            <h5 className='mt-3 fw-bold'>Highest Success Rates</h5>
                            <p className='text-muted'> Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum</p>
                            <h5 className='mt-3 fw-bold'>
                                Millions in Funding</h5>
                            <p className='text-muted'> Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum</p>

                        </Col>
                        <Col sx={12} lg={6}>
                            <img className='img-fluid' src="https://www.ourworld.co/wp-content/uploads/2020/12/OW-AI-34.jpg" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <br />
            <AtAGlance></AtAGlance>
            <br></br>
        </div>
    );
};

export default About;