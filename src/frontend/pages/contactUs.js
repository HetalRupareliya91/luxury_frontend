import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg2 from "../../assets/img/magazines/bg4.jpg"
import { Parallax } from "react-parallax";
import Header from "../components/header";
import Footer from "../components/footer";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import ConnectWithUS from "../components/connectwithus";
import video from "../../assets/video/video.webm"

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    } , []);
    return (
        <>
            <Header />
           
        

                
                <div className="bg-video-wrap">
    <video src={video} loop muted autoPlay >
    </video>
    
    <div className="bg_Video">
    <div className="page-headings">
                        <div className="heading-section">
                            <h1>Contact Us</h1></div>
                    </div>
                    <Container>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <Form >

                                    <Form.Label>
                                        Full Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="mb-3"
                                        placeholder="Enter Your Full Name"
                                    >

                                    </Form.Control>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="mb-3"
                                        placeholder="Enter Your Email"
                                    >

                                    </Form.Control>

                                    <Form.Label>
                                        Message
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        className="mb-3"
                                        placeholder="Type your Message here..."
                                    >

                                    </Form.Control>
                                    <div className="text-center">
                                        <ReCAPTCHA
                                            sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                                        //   onChange={handleVerification}
                                        />
                                    </div>
                                    <div className="text-center" >
                                        <button className="mt-4 w-25">SUBMIT</button>

                                    </div>
                                    <hr></hr>
                                    <div className="text-center mb-3"><h1>Connect With Us </h1></div>
                {/* <div className="fa-social">

                <div className="d-flex text-center">
                        <a href="mailto:info@luxuryhotelsmagazines.com" target="_blank" className="fa-link">
                            <FaEnvelope /></a>
                        <a href="mailto:info@luxuryhotelsmagazines.com" target="_blank"> info@luxuryhotelsmagazines.com</a>
                    </div>
                    <div className="d-flex text-center">
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank" className="fa-link">
                            <FaFacebook />
                        </a>
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank">@LuxuryHotelsMagazines </a>
                    </div>
                 
                    <div className="d-flex">
                        <a href="https://www.instagram.com/luxuryhotelsbrand/" target="_blank" className="fa-link">
                            <FaInstagram />
                        </a>
                        <a href="https://www.instagram.com/luxuryhotelsbrand/" target="_blank">@LuxuryHotelsBrand</a>
                    </div>
                    {/* <div>
                        <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg' target="_blank" className="fa-link">
                            <FaYoutube />
                        </a>
                        <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg' target="_blank">Youtube</a>
                    </div> */}
                    {/* <div className="d-flex">
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank" className="fa-link">
                        <FaPhone />
                        </a>
                        <a href="tel:1234567890" target="_blank">(12)34567890</a>
                    </div>
                </div>  */}

                <div className="row">
                  <ul className="text-center">
                     <li><a className=" contact-us-buttons " href="mailto:info@luxuryhotelsmagazines.com"> <FaEnvelope/> <span className="network-name">info@LuxuryHotelsMagazines.com  </span></a></li>
                 
                  </ul>
                    {/* <ul className="text-center">
                    <li><a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank" className="contact-us-buttons "><FaFacebook/><span className="network-name">@LuxuryHotelsMagazines</span></a></li>
                  </ul>
           
                    <ul className="text-center">
                    <li><a href="https://www.instagram.com/luxuryhotelsbrand/" target="_blank" className=" contact-us-buttons "><FaInstagram/> <span className="network-name">@LuxuryHotelsBrand</span></a></li>
                  </ul>
                  <ul className="text-center">
                    <li><a href="https://wa.me/+35799799388"  target="_blank" className=" contact-us-buttons "><FaPhone/> <span className="network-name">+35799799388</span></a></li>
                  </ul>  */}
                  </div>
                <hr></hr>

                                </Form>

                            </Col>
                            <Col lg={2}></Col>
                        </Row>



                    </Container>
                    </div>
  </div>


            <Footer />
        </>

    );


}
export default ContactUs;
