import React from 'react';
import { ButtonGroup, Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import img from '../../Images/services/flexibility.jpg'
import './ServiceCard.css'


const ServiceCard = (props) => {
    // console.log(props.service)
    const { title, price, imgTag, rating, lesson, catagory } = props.service;
    // console.log(imgTag)
    return (
        <Col>
            <Card className="custom-card">
                <Card.Img className="card-image" variant="top" src={imgTag} />
                <Card.Body className="bg-custom">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <h6>Price: ${price}</h6>
                        <p>Total Lesson: {lesson}</p>
                        <p>Catagory: {catagory}</p>
                        <p> Rating: <Rating
                            className="text-warning"
                            initialRating={rating}
                            readonly
                            emptySymbol="fa fa-star-o fa-1x "
                            fullSymbol="fa fa-star fa-1x r"
                        />  ({rating})
                        </p>
                        <div className="d-flex justify-content-between">
                            <NavLink to="/"><Button variant="primary" size="sm">Enroll</Button></NavLink>
                            <NavLink to="/services"><Button variant="primary" size="sm">See More</Button></NavLink>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;