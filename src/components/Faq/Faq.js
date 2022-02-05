

import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className="m-2">
            <br />
            <div className='text-center mb-3'>
                <h2 className='p-2 text-center d-inline border-bottom pb-2 mb-4'><span className='text-primary'>Frequently Asked </span><span className='text-secondary'>Questions</span></h2>
            </div>
            <br />

            <div>

                <Row>
                    <Col xs={12} md={12} lg={6} >
                        <img src="https://searchengineland.com/figz/wp-content/seloads/2015/06/question-ask-faq-raise-hand-ss-1920.jpg" className="img-fluid" alt="img" />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>When SAK Association started?</Accordion.Header>
                                <Accordion.Body>
                                    Our favorite overall treadmill for home use is the NordicTrack Commercial 1750. This treadmill is powerful, fun to use with iFit Coach, and priced right. Read our full review to see everything this treadmill has to offer!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is the core value of SAK Association?</Accordion.Header>
                                <Accordion.Body>
                                    There are many things to consider when purchasing a treadmill, such as your budget, your fitness goals, and how much space you have in your home. Some key features to look for when shopping for a treadmill are workout programs, speed settings, incline/decline settings, belt size, and folding options.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> Currently how many members in SAK Association?</Accordion.Header>
                                <Accordion.Body>
                                    Noise levels will vary by treadmill, but in general, treadmills are not too loud. You can certainly have a treadmill in an apartment without bothering your neighbors. If noise and vibration are a concern, you can place a shock-absorption mat underneath your treadmill to prevent vibration and sound from travelling.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Is SAK Association have any execute body?</Accordion.Header>
                                <Accordion.Body>
                                    Treadmill running may feel more taxing, but physiologically it’s actually a bit easier than running outdoors. In his book Treadmill Training for Runners, Rick Morris explains, “Running on the treadmill, you don’t have to overcome the effects of wind resistance and you also have that assistance of a moving belt doing part of the work for you.” To more closely simulate road running, set your treadmill’s incline at one or two percent.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is the primary goal of SAK Association?</Accordion.Header>
                                <Accordion.Body>
                                    You can train for a road race mostly on a treadmill, saysJenny Hadfield, coauthor of Running for Mortals and Marathoning for Mortals and a runnersworld.com columnist. But you’ll have to make a few tweaks. For starters, be sure to increase the incline and run “hills” on the treadmill once or twice a week. And because treadmill belts offer a relatively soft landing, take steps to prepare your body for racing on asphal
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Is SAK Association registered by government?</Accordion.Header>
                                <Accordion.Body>
                                    In general, running on a treadmill is less stressful on the body than running outdoors. John Post, the medical director for TrainingBible Coaching, explains that the treadmill absorbs a significant amount of impact, sparing your body. On the other hand, he says, “The downside is that it doesn’t condition the shock-absorbing musculature of the lower extremities like road running does.” Result: Over the long term, heavy treadmill use may actually leave you more prone to injuries like stress fractures.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>I am interested to join SAK Assiation, so what can I do?</Accordion.Header>
                                <Accordion.Body>
                                    You must do both for balanced fitness, says Morris. The slower uphill workouts build strength and power, while the faster flat workouts build stamina, endurance, and foot speed. Adjust both speed and incline during your workout, and you can better simulate the changing terrain of a road run.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Why I should joined in SAK Assiation?</Accordion.Header>
                                <Accordion.Body>
                                    Most treadmills offer both readings of miles per hour and minutes per mile. Manufacturers include mph because beginners or casual treadmill users may not be familiar with the concept of minutes per mile, which is the measure preferred by experienced runners.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default Faq;