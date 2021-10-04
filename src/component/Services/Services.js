import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useService from '../../Hook/useService';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services] = useService();
    return (
        <div className="my-5">
            <Container>
                <h1 className="text-center fw-bold">Services</h1>
                <div className="line"></div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <ServiceCard
                            service ={service}
                            key={service.id}></ServiceCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;