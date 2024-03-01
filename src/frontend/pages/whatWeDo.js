import React, { useState, useRef, useEffect } from "react";
import { Carousel, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg"
import { FaBook, FaBookOpen, FaHandshake, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import ClientLogo from "../components/clientLogo";
import advimg1 from "../../assets/img/advertise/advertiseAustria.png"
import advimg2 from "../../assets/img/advertise/advertiseGreece.png"
import advimg3 from "../../assets/img/advertise/advertiseTasMania.png"
import advimg4 from "../../assets/img/advertise/advTaiwan.png"
import advimg5 from "../../assets/img/advertise/advbelize.png"
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News5 from '../../assets/img/news5.jpg'
import CallToAction from "../components/callToAction";
import Footer from "../components/footer";

import Magazines1 from "../../assets/img/magazines/magazines3.webp"
import Magazines2 from "../../assets/img/magazines/magazines2.webp"

import Header from "../components/header";
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import HeroImage3 from "../../assets/img/hero/hero-1.jpg"
import { Parallax } from "react-parallax";
import bg1 from "../../assets/img/magazines/BG7.jpg"
import WhatWeDoTop from "../components/whatWeDo/whatWeDoTop";
import WhatWeDoPrint from "../components/whatWeDo/WhatWeDoPrint";
import Collections from "../components/bestLuxuryHotels";
import axios from "axios";
import API from "../../utils";
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import VideoTabs from "../components/whatWeDo/Videotab";
import PayPalButton from "../components/paypal";
import NominateForm from "../components/nominateForm";
import HotelSubscribers from "../components/whatWeDo/hotelSubscribers";
// import { PayPalButtons } from "../components/paypal";
function WhatWeDo() {
    

    const magazineData = [
        {
          title: "LUXURY HOTEL MAGAZINE",
          description:  "In every Room of 40 Luxury Hotels across Europe Digital edition garners 4-5 million downloads per Edition Promotion extended to 89 countries Your Ads will be Promoted across our 13 Social Networks Your 2 Ads will be Promoted on Luxury Hotels Magazine Online Platform",
        subdescription:"LUXURY HOTEL’s six collectable double issues a year take its engaged readers on a journey all across the world. Covering everywhere from the far-flung, undiscovered corners of the world to hidden sides of well-known destinations, our award-winning magazine inspires our audience of super travellers through powerful photography and expert-written copy and gives them a real insight into diversity of cultures, histories, people and nature from across the globe.",
        },
        {
            title: "LUXURY HOTEL MAGAZINE",
            description:  "In every Room of 40 Luxury Hotels across Dubai & Abu Dhabi Digital edition garners 4-5 million downloads per Edition Promotion extended to 89 countries Your Ads will be Promoted across our 13 Social Networks Your 2 Ads will be Promoted on Luxury Hotels Magazine Online Platform",
            subdescription:"LUXURY HOTEL’s six collectable double issues a year take its engaged readers on a journey all across the world. Covering everywhere from the far-flung, undiscovered corners of the world to hidden sides of well-known destinations, our award-winning magazine inspires our audience of super travellers through powerful photography and expert-written copy and gives them a real insight into diversity of cultures, histories, people and nature from across the globe.",

            },
          
       
      ];
    
      const images = [
        Magazines2,
        Magazines1,
        
      ];

      const [activeIndex, setActiveIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
      };
         
      
    const sectionRef = useRef(null);
    const [hotels, sethotels] = useState([])
    const [apiData, setApiData] = useState([])

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        fetchBestLuxuryHotels();

    }, []);
    const fetchBestLuxuryHotels = async () => {

        try {
            const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.allVotingDetals}`,
                {
                    type: "1",
                },

                {
                    headers: {
                        Authorization: "hXuRUGsEGuhGf6KM",
                    }
                });
            const data = response.data;


            if (data.status === true) {
                setApiData(data.data)
                sethotels(data.data.hotels);


            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const sliderSettings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const deals = [
        {
            title: advimg1,
            stars: "\f149",
            description: "“LUXURY HOTEL are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! LUXURY HOTEL is the best avenue when presenting a new destination/experience/offer to the world!”",
        },
        {
            title: advimg2,
            stars: "*****",
            description: " “LUXURY HOTEL interpreted our ideas and suggestions brilliantly to come up with a very impactful piece of collateral that portrayed Tasmania’s adventure product in a way that had not been achieved in the UK before.”						",
        },
        {
            title: advimg3,
            stars: "*****",
            description: " “LUXURY HOTEL are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! LUXURY HOTEL is the best avenue when presenting a new destination/experience/offer to the world!”						",
        },
        {
            title: advimg4,
            stars: "*****",
            description: " “The Taiwan Tourism Board needed to find a UK media partner that is well respected, widely known and able to deliver campaigns that satisfy challenging briefs. LUXURY HOTEL was able to exceed expectations on all these points and we look forward to working with them again in the future.”	",
        },
        {
            title: advimg5,
            stars: "*****",
            description: "“Our campaign with LUXURY HOTEL exceeded all expectations (212% of proposed target engagement). We were incredibly pleased with the results and will continue to work with LUXURY HOTEL on other campaigns.”",
        },

    ]
    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
        setActiveTab(animName);
    }


    return (
        <>
            <Header />

            <WhatWeDoTop />

            <WhatWeDoPrint />

            <section className="print-campaign-options spad">
                {/* <div className="text-center">
                        <Image src={Logo} className="print-campaign-logo"></Image>
                    </div> */}
                <div className="page-headings ">
                    <div className="heading-section">
                        <h1>Print Campaign Options</h1>
                    </div>
                </div>
                <Container>

                    <div className="liner-continer mt-40">
                        <span className="left-line"></span>
                        <span className="woodmart-title-container title ">Hover over the options to see more information</span>
                        <span className="right-line"></span>
                    </div>


                    <Row className="image-flip-div">
                        <Slider {...sliderSettings1}>
                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Hotel Spread</h3>

                                </div>
                                <div className="flip-box" style={{ minHeight: "300px" }}>
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines1} />
                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">From bookazines and beautiful coffee table books to a ‘how to’ series and a quiz book, LUXURY HOTEL has numerous titles under its belt. We can work with you to publish content in book form. </p>
                                        </div>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Company Ads</h3> </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines2} />
                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">Sponsor one of our regular features to consistently get in serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers</p>
                                        </div>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Editorial</h3> </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines1} />
                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">LUXURY HOTEL can produce a bespoke,  you that gives you the space to showcase all that your brand has to offer in a long-form piece with expert-written copy and stunning visuals.</p>
                                        </div>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="p-2">
                                <div >
                                    <h3>Best Hotel Of The Year</h3> </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines2} />
                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">Where better to advertise your brand than in  higher design specification and even further distribution (including many of the top UK high street stores).</p>
                                        </div>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Hotel Spread</h3>

                                </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines1} />
                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">From bookazines and beautiful coffee table books to a ‘how to’ series and a quiz book, LUXURY HOTEL has numerous titles under its belt. We can work with you to publish content in book form. </p>
                                        </div>
                                    </div>

                                </div>

                            </Col>
                        </Slider>
                    </Row>

                    <div className="btn-div text-center mt-40">
                        <button className="more-info w-25" onClick={scrollToSection}><FaQuestionCircle /> MORE INFORMATION</button>
                    </div>

                </Container>
            </section>

            <Parallax blur={0} bgImage={bg1} bgImageAlt="the cat" strength={300}>
                <section className="what-we-do-digital-section" id="digital">

                    <Container>

                        <div className="main-div text-center ">
                            <div className="title-subtitle">DIGITAL</div>

                            <div className="liner-continer">
                                <span className="left-line"></span>
                                <span className="woodmart-title-container title ">Take a look at some of our digital options below</span>
                                <span className="right-line"></span>
                            </div>

                            <div>
                            <Row>
                                    <Col lg={6} md={6} className="">
                                    <Carousel activeIndex={activeIndex}
                    onSelect={handleSelect} interval={null}>
                  {images.map((image, index) => (
                    <Carousel.Item key={index}>
                                        <div >
                                            <Image src={image} className="what-we-do-digital-section-image "></Image>
                                        </div>
                                        </Carousel.Item>
                  ))}
                </Carousel>
                                    </Col>

                                    <Col lg={6} md={6} className="mt-5">
                                        
                                    <Carousel activeIndex={activeIndex}
                    onSelect={handleSelect}  controls={false}>
                  {magazineData.map((magazine, index) => (
                    <Carousel.Item key={index}>
                      <div className="vc_column-inner text-left">
                        <div className="mb-4">
                          <h3>{magazine.title}</h3>
                        </div>
                        <div className="mb-4">
                          <p>{magazine.description}</p>
                        </div>
                        <div className="mb-4">
                          <p>{magazine.subdescription}</p>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
                                    </Col>
                                </Row>
                            </div>
                            <VideoTabs></VideoTabs>                          
                        </div>

                    </Container>
                </section>
            </Parallax>


            <section className="digital-campaign-options">

                <div className="page-headings ">
                    <div className="heading-section">
                        <h1>Digital Campaign Options</h1>
                    </div>
                </div>
                <Container>
                    {/* <div className="text-center">
                        <Image src={Logo} className="digital-campaign-logo"></Image>
                    </div>
                    <div className="title-subtitle text-center ">

                        Digital  Campaign Options
                    </div> */}

                    <div className="liner-continer mt-40">
                        <span className="left-line"></span>
                        <span className="woodmart-title-container title ">Hover over the options to see more information</span>
                        <span className="right-line"></span>
                    </div>


                    <Row className="image-flip-div">
                        <Slider {...sliderSettings1}>
                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Video Campaign</h3>

                                </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines1} />


                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">From bookazines and beautiful coffee table books to a ‘how to’ series and a quiz book, luxury hotel has numerous titles under its belt. We can work with you to publish high-quality evergreen content in book form. </p>
                                        </div>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Luxury Hotel Clientele</h3> </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines2} />


                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers   Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity.</p>
                                        </div>
                                    </div>

                                </div>

                            </Col>


                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Partners & Ambassador</h3> </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines1} />
                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">LUXURY HOTEL can produce a bespoke, high-quality print supplement for you that gives you the space to showcase all that your brand has to offer in a long-form piece with expert-written copy and stunning visuals.</p>
                                        </div>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Luxury Hotel Clientele</h3> </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines2} />


                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers   Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="p-2">
                                <div className="text-center">
                                    <h3>Partners & Ambassador</h3> </div>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <Image src={Magazines1} />
                                        </div>
                                        <div className="flip-box-back">
                                            <p className="heading">LUXURY HOTEL can produce a bespoke, high-quality print supplement for you that gives you the space to showcase all that your brand has to offer in a long-form piece with expert-written copy and stunning visuals.</p>
                                        </div>
                                    </div>

                                </div>

                            </Col>
                        </Slider>
                    </Row>

                    <div className="btn-div text-center mt-40">
                        <button className="w-25 more-info" onClick={scrollToSection}><FaQuestionCircle /> MORE INFORMATION</button>
                    </div>
                </Container>
            </section>

          <HotelSubscribers/>

            <ClientLogo />

            <section className="what-we-do-slider-section ">
                <Container>
                    <AdvertiseTestimonial />
                </Container>
            </section>

        
           
<Collections/>
<NominateForm/>
            <section >
                <div className="rounddiv">
                    <Col lg={6} md={6} className="what-we-do p-0">
                        <div className="hovermaindiv">
                            <div className="inner-div">
                                <div className="text-center">
                                    <p>Continue Reading</p></div>
                                <div className="text-center">
                                    <h2><a href="about-us">ABOUT US</a></h2>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col lg={6} md={6} className="contact-us p-0">
                        <div className="hovermaindivtwo">
                            <div className="inner-div">
                                <div className="text-center">
                                    <p>Looks Great?</p></div>
                                <div className="text-center">
                                    <h2><a href="contact-us">CONTACT US</a></h2>
                                </div>
                            </div>
                        </div>

                    </Col>
                </div>

            </section>

            <CallToAction />
            <Footer />
        </>
    );
}
export default WhatWeDo;