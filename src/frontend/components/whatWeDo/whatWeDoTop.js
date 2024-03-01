import React from "react";
import { Parallax } from "react-parallax";
import HeroImage3 from "../../../assets/img/hero/hero-3.jpg"
import Logo from "../../../assets/img/logo.svg"
import { Col, Container, Row, Image } from "react-bootstrap";
import { FaBook, FaBookOpen, FaHandshake, FaLaptopMedical, FaLeaf, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";


function WhatWeDoTop() {

    return (
        <>
            <section className="video-background p-0">

                <div className="video-iframe">
                    <iframe
                        loading="lazy"
                        style={{ width: "100%" }}
                        id="ytplayer"
                        type="text/html"
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/Sa0RY7Q5WVw?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;color=white&amp;controls=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;enablejsapi=1&amp;playlist=Sa0RY7Q5WVw"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowfullscreen
                    >
                    </iframe>
                    <Container>
                        <div className="text-overlay">
                            <Row >
                                <Col lg={6} >
                                    <div className="advertise_text">
                                        <div className="section-title ">
                                            {/* <span className="text-white">About Us</span> */}
                                            <div className="my-3"> <Image src={Logo} />
                                            </div>
                                            <div className="text-center title-subtitle pt-0">
                                                Leading the way in authentic
                                            </div>

                                            <div className="text-center liner-continer">
                                                <span className="left-line"></span>
                                                <span className="woodmart-title-container ">Since 1993</span>
                                                <span className="right-line"></span>
                                            </div>
                                            <div className="text-center wpb_wrapper">
                                                <p>Whether you are looking to reach LUXURY HOTEL’s audience of active, engaged travellers or want to find out how targeted, inspirational travel content can support your brand, we’re the perfect partner to work with.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} className="advertise_overlay">
                                    <div className="text-center">
                                        <Image src={Logo} />
                                    </div>

                                    <div className='text-center mt-4'>
                                        <h4 >PRESENTS</h4>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

            </section>
            <Parallax blur={0} bgImage={HeroImage3} bgImageAlt="the cat" strength={300}>
                <section className="what-we-do-section" >
                    <Container>

                        <div className="main-div">
                            <div className="w-100">
                                <div className="title-subtitle text-center">
                                    Learn about our campaign options
                                </div>
                                <div className="liner-continer">
                                    <span className="left-line"></span>
                                    <span className="woodmart-title-container title  woodmart-font-weight-">Choose your interest</span>
                                    <span className="right-line"></span>
                                </div>

                                <div className="d-flex justify-content-around mb-5">
                                <Link className="bk-btn w-25" to="/campaign-detail/print-campaign">PRINT CAMPAIGNS</Link>
                                <Link className="bk-btn w-25" to="/campaign-detail/digital-campaign">DIGITAL CAMPAIGNS</Link>
                                </div>
                            </div>

                        </div>

                    </Container>

                </section>
            </Parallax>
        </>
    );
}
export default WhatWeDoTop;