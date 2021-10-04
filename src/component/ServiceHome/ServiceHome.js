import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../Hook/useService';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceHome = () => {
    const [services] = useService();
    console.log(services)
    return (
        <div className="my-5">
            <Container>
                <h1 className="text-center fw-bold">Services</h1>
                <div className="line"></div>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.slice(4).map(service => <ServiceCard
                            service={service}
                            key={service.id}></ServiceCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ServiceHome;