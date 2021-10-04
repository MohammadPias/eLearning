import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Images/logo-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div>
            <div className="row p-5 footer-container center">
                <div className="col-6 col-md-4">
                    <div className="d-flex flex-column justify-content-center align-items-center footer-nav ">
                        <img className="w-25 mb-3" src={logo} alt="" />
                        <p>eLesson is a worldwide <br /> online education platfrom.</p>
                        <div>
                            <Link to="/"><i className="fab fa-linkedin font-style"></i></Link>
                            <Link to="/"><i className="fab fa-twitter-square font-style"></i></Link>
                            <Link to="/"><i className="fab fa-facebook-square font-style"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="d-flex flex-column justify-content-center align-items-center footer-nav">
                        <h5>Platform</h5>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="d-flex flex-column justify-content-center align-items-center footer-nav">
                        <h5>Company</h5>
                        <NavLink to="/news">News & Blogs</NavLink>
                        <NavLink to="/faq">FAQs</NavLink>
                        <NavLink to="/tutorials">Tutorials</NavLink>
                        <NavLink to="/partnars">Partners</NavLink>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <p className="text-center py-3">All right reserved &copy; elearning.edu</p>
            </div>
        </div>
    );
};

export default Footer;