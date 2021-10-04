import React from 'react';
import Life from '../../Images/life-couching.jpg'
import Credit from '../../Images/credit.jpg'
import Skill from '../../Images/skill.jpg'
import Study from '../../Images/study.jpg'
import './Catagories.css'
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Catagories = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="title">
                    <h1 className="text-center inline-block pt-3 fw-bold">Catagory</h1>
                    <div className="line"></div>
                </div>
                <div className="catagory-container">
                    <div className="card">
                        <div className="image-container">
                            <img src={Life} alt="" />
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                            <h5>Life Couching</h5>
                            <Button variant="primary">Details</Button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <img src={Credit} alt="" />
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                            <h5>Credit Repair</h5>
                            <Button variant="primary">Details</Button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <img src={Skill} alt="" />
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                            <h5>Soft Skills</h5>
                            <NavLink to="/services"><Button variant="primary">Details</Button></NavLink>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <img src={Study} alt="" />
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                            <h5>Academic Couching</h5>
                            <Button variant="primary">Details</Button>
                        </div>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Catagories;