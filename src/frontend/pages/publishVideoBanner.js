import React from 'react';
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const PublishVideoBanner = () => {
    return (
        <>
        <Header/>
            <section className="sidebar-input">
                <div className="form-container">
                    <div className="auth_container">

                        <div>
                            <h1>Publish Video Banner</h1>

                            <Form>
                            <Row>
                                <Col md={6}>
                               
                                    <Form.Control type="text" className="sidebar-input mb-4" name="businessname" placeholder="Name Of Business" />
                                
                                </Col>
                                <Col md={6}>                               
                               
                                  
                                    <Form.Control type="email" className="sidebar-input mb-4" name="Email" placeholder="Your Email Address" />
                                
                                </Col>
                                <Col md={6}>     
                               
                                    <Form.Control type="text" className="sidebar-input mb-4" name="websitelink" placeholder="Link Address For Business" />
                               
                                </Col>
                                <Col md={6}>     
                                
                                    <Form.Control type="text" className="sidebar-input mb-4" name="bannertitle" placeholder="Title For The Banner" />
                                
                                </Col>
                                <Col md={6}>     
                                
                                    <Form.Control type="file" className="sidebar-input mb-4" name="image" />
                              
                                </Col>
                                <Col md={6}>     
                              
                                    <Form.Control type="text" className="sidebar-input mb-4" name="youtubelink" placeholder="Youtube Video Link" />
                                
                                </Col>
                                <Col md={6}>     
                               
                                    <Form.Select className='select-id '>
                                        <option value="1">DIsplay For 1 Month</option>
                                    </Form.Select>
                                
                                </Col>
                                 <Col md={6}>     
                                
                                </Col>
                                <Col md={6} className=" py-5">     
                                <button type="submit" name="" className="w-50 auth_btn">Submit</button>
                                </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default PublishVideoBanner;
