import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Logo from "../../../assets/img/logo.svg"
function AdvertiseTop() {


    const [videoIndex, setVideoIndex] = useState(0);
    const videos = [
        "https://www.youtube.com/embed/rhpaCOryaUQ",
        "https://www.youtube.com/embed/_m8DEQuQQcE",
        // Add more video URLs as needed
    ];


     const handleVideoEnded = () => {
        // Play the next video when the current video ends
        setVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
    };


 useEffect(() => {
        const player = document.getElementById("ytplayer");

        // Add event listener for video ended
        player.addEventListener("ended", handleVideoEnded());

        // Clean up event listener when component unmounts
        return () => {
            player.removeEventListener("ended", handleVideoEnded());
        };
    }, [videoIndex]);


    return (
        <><section className="video-background p-0">

            <div className="video-iframe">
            <iframe
          loading="lazy"
          style={{ width: "100%" }}
          id="ytplayer"
          type="text/html"
          width="100%"
          height="700px"
          src={
            videos[videoIndex] + "?&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
                <Container>
                    <div className="text-overlay">
                        <Row >
                            <Col lg={6} >
                                <div className="advertise_text">
                                    <div className="section-title ">
                                        {/* <span className="text-white">About Us</span> */}
                                        <div className="my-3"> <Image src={Logo} />
                                        </div>
                                        <p >Unlock global exposure for your luxury hotel on our online platform.
                                            Targeted marketing, stunning visuals, and seamless booking ensure your property stands out.
                                        </p>
                                        <p >Elevate brand prestige, offer personalized service, and access valuable analytics for strategic decisions.
                                        </p>
                                        <p >Reach discerning travelers worldwide and maximize bookings effortlessly.
                                        </p>
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
            {/* <section className="advertise-top-section" >
                <Container>
                    <div className="main-div">
                        <div className="w-100 " >
                            <div className="text-center title-subtitle">
                                The UK's Longest Running Hotel
                            </div>
                            <div className="text-center liner-continer">
                                <span className="left-line"></span>
                                <span className="woodmart-title-container ">Since 1993</span>
                                <span className="right-line"></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Row className="mb-5">
                            <Col lg={2} md={6} sm={6} >
                                <div className="what-we-do-col">
                                    <div className="text-center mb-3">
                                        <FaTrophy className="element-icon " />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="title">Adventurous  </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={6} sm={6}>
                                <div className="what-we-do-col">
                                    <div className="text-center mb-3">
                                        <FaHandshake className="element-icon " />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="title">Passionate</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={6} sm={6} >
                                <div className="what-we-do-col">
                                    <div className="text-center mb-3">
                                        <FaLaptopMedical className="element-icon " />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="title">AWARD-WINNING   </h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={2} md={6} sm={6}  >
                                <div className="what-we-do-col">
                                    <div className="text-center mb-3">
                                        <FaLeaf className="element-icon " />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="title">Collaborative </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={6} sm={6}>
                                <div className="what-we-do-col">
                                    <div className="text-center mb-3">
                                        <FaLeaf className="element-icon " />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="title">Omni_Channel </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={6} sm={6} >
                                <div className="what-we-do-col">
                                    <div className="text-center mb-3">
                                        <FaLeaf className="element-icon " />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="title">Responsible </h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section> */}
        </>
    );
}
export default AdvertiseTop;