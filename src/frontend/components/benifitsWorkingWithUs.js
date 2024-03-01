import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAddressBook, FaChild, FaDatabase, FaEuroSign, FaFacebookSquare, FaGlobe, FaInternetExplorer, FaNewspaper, FaRecycle, FaRedoAlt, FaTrophy, FaWpexplorer } from "react-icons/fa";
import Header from "./header";
import CallToAction from "./callToAction";
import Footer from "./footer";
import CountUp from "react-countup";

function BenifitsWorkingWithUs(){
    useEffect(() => {
    window.scrollTo(0, 0);

}, []);
return(
    <>
    <Header/>


    <div className="page-headings mb-4">
          <div className="heading-section">
            <h1 className="text-center ">Luxury Hotels Magazines in numbers</h1>
          </div>
        </div>
    <section className="signup_numbers">
   
    <Container>

        <Row className="py-5">
            <Col lg={3}>
                <div>
                    <h1>
                    <CountUp start={0} end={570000} duration={2} separator="," />+
                    </h1>
                    <p>
                        Explore over 570,000 luxury hotel listings worldwide, with 50 new additions every day
                    </p>
                </div>
            </Col>
            <Col lg={3}>
                <div>
                    <h1>
                    <CountUp start={0} end={89} duration={2} />+
                    </h1>
                    <p>
                        We proudly serve 89 countries worldwide, and our presence continues to grow every day
                    </p>
                </div>
            </Col>
            <Col lg={3}>
                <div>
                    <h1>
                    <CountUp start={0} end={13000000} duration={2} separator="," />+
                    </h1>
                    <p>
                        Monthly users will see your Hotel Profile on our 13 Social Networks, ensuring unparalleled exposure and visibility for your Hotel
                    </p>
                </div>
            </Col>
            <Col lg={3}>
                <div>
                    <h1>
                    <CountUp start={0} end={1000000} duration={2} separator="," />+
                    </h1>
                    <p>
                        We will promote your hotel to our over 1 Million subscribers, allowing them to book directly without your hotel paying any commissions to us
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
</section>
<section className="signup_benefits spad">


<div className="page-headings mb-4">
          <div className="heading-section">
            <h1 className="text-center ">Benefits of working with us</h1>
          </div>
        </div>
    <Container>
        <Row className="pt30">
        <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaRedoAlt className="benefits-icon" />
                    <h4>
                        Each Edition Rotation Program
                    </h4>
                    <p>
                        Your hotel will be one of the top 40 most luxurious hotels which will guarantee the flow of bookings and occupancy ranging from 800,000 to 1 million tourists annually.
                    </p>
                </div>
            </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaRecycle className="benefits-icon" />
                    <h4>
                        Zero commission charges
                    </h4>
                    <p>
                        The hotel receives the full amount from all bookings made.
                    </p>
                </div>
            </Col>
                <Col lg={4} className="mb-5">
                    <div className="benefits-block">
                        <FaGlobe className="benefits-icon" />
                        <h4>
                            Global exposure
                        </h4>
                        <p>
                            Utilizing our AI technology, your hotel profile will be automatically shared with our extensive network of over 1 million subscribers.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="benefits-block">
                        <FaChild className="benefits-icon" />
                        <h4>
                            Global Reach
                        </h4>
                        <p>
                            Published & Promoted in 89 countries, integrating online (70%) and print (30%) components.
                        </p>
                    </div>
                </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaInternetExplorer className="benefits-icon" />
                    <h4>
                        Extensive Digital Presence
                    </h4>
                    <p>
                        Our magazines are available as free downloads on 5 independent digital platforms, attracting 4-5 million readers per edition.
                    </p>
                </div>
            </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaFacebookSquare className="benefits-icon" />
                    <h4>
                        Social Media Engagement
                    </h4>
                    <p>
                        We actively promote all of our hotels on 13 social networks, engaging with 13 million monthly users.
                    </p>
                </div>
            </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaNewspaper className="benefits-icon" />
                    <h4>
                        Flexibility to add Exclusive Offers
                    </h4>
                    <p>
                        Could be published & changed any time during the year.
                    </p>
                </div>
            </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaAddressBook className="benefits-icon" />
                    <h4>
                        Effortless Bookings
                    </h4>
                    <p>
                        Every hotel ad in the printed version is accompanied by QR codes with direct access to your website for easy bookings.
                    </p>
                </div>
            </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaDatabase className="benefits-icon" />
                    <h4>
                        Data Analysis
                    </h4>
                    <p>
                        Demonstrate that this program has increased direct bookings for each hotel by an impressive 60%.
                    </p>
                </div>
            </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaTrophy className="benefits-icon" />
                    <h4>
                        Recognition
                    </h4>
                    <p>
                        Each hotel could be nominated by our readers as "The Best Luxury Hotel of the Year," and Hotel could have access to data on the voting clients.
                    </p>
                </div>
            </Col>

            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaChild className="benefits-icon" />
                    <h4>
                        Global Reach
                    </h4>
                    <p>
                        Published & Promoted in 89 countries, integrating online (70%) and print (30%) components.
                    </p>
                </div>
            </Col>
            <Col lg={4} className="mb-5">
                <div className="benefits-block">
                    <FaGlobe className="benefits-icon" />
                    <h4>
                        Global exposure
                    </h4>
                    <p>
                        Utilizing our AI technology, your hotel profile will be automatically shared with our extensive network of over 1 million subscribers.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
</section>

<CallToAction/>
<Footer/>
</>
)
}
export default BenifitsWorkingWithUs;