import React , { useEffect, useState }from "react";
import { Col, Container, Row, Image ,Carousel} from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg1 from "../../../assets/img/magazines/BG7.jpg"
import Magazines1 from "../../../assets/img/magazines/magazines2.webp"
import Magazines2 from "../../../assets/img/magazines/magazines3.webp"

import { FaBook, FaBookOpen, FaHandshake, FaLaptopMedical, FaLeaf, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import icons from "../../../assets/img/magazines/RETAILERS-LOGOS-4.png";
import { Link } from "react-router-dom";

function WhatWeDoPrint() {


    const magazineData = [
        {
          title: "LUXURY HOTELS EUROPE",
          description:  "In every Room of 40 Luxury Hotels across Europe Digital edition garners 4-5 million downloads per Edition Promotion extended to 89 countries Your Ads will be Promoted across our 13 Social Networks Six-months FREE Hotel profile with (Special offer) on Luxury Hotels Magazine Online Platform Each hotel will be nominated and voted on by our readers as “The Best & Most Luxury Hotel of the Year with access to data on the voting clients  Each Ad contains a QR code with direct access to your website Promotion extended to 89 countries",

        },
        {
            title: "LUXURY HOTELS DUBAI AND ABU DHABI",
            description: "In every Room of 40 Luxury Hotels across Dubai & Abu Dhabi Digital edition garners 4-5 million downloads per Edition  Promotion extended to 89 countries Digital copies with your Ads sent to our 1 million subscribers your Ads will be Promoted across our 13 Social Networks  reaching 13 Million Subscribers Your 2 Ads will be Promoted on Luxury Hotels Magazine Online Platform every month Each Ad contains a QR code with direct access to your website Wide distribution on Luxury Yachts in Cyprus, Greece, Monaco, Dubai, and Abu Dhabi Marinas." 

          },
          
        
      ];
    
      const images = [Magazines1, Magazines2];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };
      
    return (
        <Parallax blur={0} bgImage={bg1} bgImageAlt="the cat" strength={300}>
            <section className="what-we-do-print-section " id="print">

                <Container>

                    <div className="main-div text-center ">
                        <div className="title-subtitle">PRINT</div>

                        <div className="liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container title ">Take a look at some of our print options below</span>
                            <span className="right-line"></span>
                        </div>

                        <div>
                        <Row>
              <Col lg={6} md={6}>
                <Carousel  activeIndex={activeIndex}
                    onSelect={handleSelect} interval={null} >
                  {images.map((image, index) => (
                    <Carousel.Item key={index} >
                        <div className="print-image-div mt-4 mb-5">
                      <Image
                        src={image}
                        className="what-we-do-print-section-image"
                      />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>

              <Col lg={6} md={6}>
                <Carousel  activeIndex={activeIndex}
                    onSelect={handleSelect}  controls={false} interval={null} >
                  {magazineData.map((magazine, index) => (
                    <Carousel.Item key={index}>
                      <div className="vc_column-inner text-left">
                        <div className="mb-4">
                          <h3>{magazine.title}</h3>
                        </div>
                        <div className="mb-4">
                          <p>{magazine.description}</p>
                        </div>
                        
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>

                        </div>
                        <Row>
                            <Col lg={12} className="avail my-3">
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

                        <Row>
                            <Col lg={6} >
                                <div>
                                    <h2>Request your FREE digital sample to see why people love us.</h2>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Link to="/subscribe-digital-copy" >
                                    <button className="w-75">
                                        <FaBookOpen /> REQUEST FREE DIGITAL COPY
                                    </button>
                                </Link>
                            </Col>
                        </Row>

                        <div className="available-in">
                            <span className="right-line"></span>
                        </div>
                    </div>

                </Container>
            </section>
        </Parallax>




    );
}
export default WhatWeDoPrint;