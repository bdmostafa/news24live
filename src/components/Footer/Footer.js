import React from 'react';
import { Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
};

export default Footer;