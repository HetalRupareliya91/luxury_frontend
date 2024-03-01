import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg"
import icons from "../../../assets/img/magazines/RETAILERS-LOGOS-4.png";
import CountUp from "react-countup";
function OurStory() {
    return (
        <section className="our-story-section spad">
            <Container className="">
                <div className="our-story-section-container">
                    <Row>
                        <Col lg={6} className="vc_custom_16234106116-col">
                            <div className="vc_custom_16234106116">
                                <div>
                                    <h1 className="mb-3">OUR STORY</h1>
                                    <div className="my-3">
                                        <Image src={Logo} />
                                    </div>
                                    <div>
                                        <p className="mb-4">Unlock global exposure for your luxury hotel on our online platform. Targeted marketing, stunning visuals, and seamless booking ensure your property stands out.</p>
                                        <p className="mb-4">Elevate brand prestige, offer personalized service, and access valuable analytics for strategic decisions. Reach discerning travelers worldwide and maximize bookings effortlessly.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="numbers-div">
                                <div>
                                    <p className="numbersp"> <CountUp end={215} /></p>
                                    <p className="contentp">ISSUES</p>
                                </div>
                                <div>
                                    <p className="numbersp"><CountUp end={100000} /></p>
                                    <p className="contentp">READERS PER ISSUE</p>
                                </div>
                                <div>
                                    <p className="numbersp"><CountUp end={163000} /></p>
                                    <p className="contentp">SOCIAL FOLLOWERS</p>
                                </div>
                                <div>
                                    <p className="numbersp"><CountUp end={1500000} /></p>
                                    <p className="contentp">PAGE VIEWS PER MONTH</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="w-100">
                        <Col lg={12} className="avail py-3">
                            <div>
                                <h1 >AVAILABLE IN</h1>
                            </div>
                            <div>
                                <span className="sep_line">
                                </span>
                            </div>
                            <div className="box_text">
                            Waitrose
                            </div>
                            <div className="box_text">
                           MARKES&
                           SPENCER
                            </div>
                            <div className="box_text">
                            Sainsbury's
                            </div>
                            <div className="box_text">
                            BARNES
                            &NOBEL
                            </div>
                            <div className="box_text">
                            TESCO
                            </div>
                            <div className="box_text">
                            WHSmith
                            </div>

                            {/* <div className="logos">
                                <Image src={icons}></Image>
                            </div> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default OurStory;