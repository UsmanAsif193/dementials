import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import './Explore.css'

function Explore() {
    return (
        <section className='demo-height' id="EXPLORE">
            <Container >
                <Row>
                    <Col md={12}>
                        <h1 className='expl-heading text-center'>EXPLORE</h1>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Explore