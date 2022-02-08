import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddDeposit from '../allForms/AddDeposit/AddDeposit';
import AddMember from '../allForms/AddMember/AddMember';

const Deshboard = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <AddMember></AddMember>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <AddDeposit></AddDeposit>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Deshboard;