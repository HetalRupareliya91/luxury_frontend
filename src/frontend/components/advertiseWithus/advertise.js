import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Hero3 from "../../../assets/img/hero/hero-3.jpg";
import VideoBanner from '../../../assets/packages/VIDEO.mp4'
import AnnimatedBanner from '../../../assets/packages/ANIMATED.mp4'
import Hotel6 from '../../../assets/packages/HOTEL6.mp4'
import Hotel12 from '../../../assets/packages/HOTEL12.mp4'
import PUBLISHNEWS from '../../../assets/packages/PUBLISHNEWS.mp4'
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Magazines1 from "../../../assets/img/magazines/magazines.webp"
import Magazines2 from "../../../assets/img/magazines/magazines2.webp"
import Magazines3 from "../../../assets/img/magazines/magazines3.webp"
import textureimage from "../../../assets/img/redtexure.jpg"
import { NavLink } from "react-router-dom";


function Advertise() {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    return (
        <>
            <Parallax blur={8} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
                <section className="spad">
                    <h1 className="text-center text-white mb-4">Our Packages</h1>
                    <Container className="adv-container">
                        <Slider {...sliderSettings}>
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="card-inner-section flip-box-front">
                                        <video autoPlay muted loop>
                                            <source src={VideoBanner} type="video/mp4" />
                                        </video>
                                        {/* <div className="text-center ">
                                                <p className="heading1">Video Banner (Home Page)</p>
                                                <p className="heading">(Minimum Term 3 months)</p>
                                            </div> */}
                                            
                                    </div>

                                    <div className="flip-box-back">
                                        <div className="card-inner-section-textarea ">
                                            <div className="text-center package" >
                                                <h3>What included</h3>
                                            </div>
                                            <ul>
                                                <li>Video Banner exposure to approximately 1 million subscribers</li>
                                                <li>Reach 1.5 million monthly website visitors</li>
                                                <li>Sharing of your banner on 13 Social Networks &amp; 550 Groups</li>
                                                <li>A direct hyperlink from Video Banner to your website</li>
                                                <li>A hyperlink from the Video to your YouTube channel</li>
                                                <li>Seamless direct bookings on your website</li>
                                                <li>Detailed Google Analytics reports</li>
                                                <li>A remarkable increase in sales by 225%</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="heading">€150/month <span>with re-direction to your Website+YouTube </span> </p>
                                    <button className="w-50"> <NavLink className="subscribe_text" to="/contact-us">CONTACT US</NavLink></button>
                                </div>
                            </div>
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="card-inner-section flip-box-front">
                                        <video autoPlay muted loop>
                                            <source src={AnnimatedBanner} type="video/mp4" />
                                        </video>
                                        {/* <div className="text-end">
                                        <p className="heading">€80/month </p>
                                    </div> */}
                                    </div>

                                    <div className="flip-box-back">
                                        <div className="card-inner-section-textarea ">
                                            <div className="text-center package" >
                                                <h3>What included</h3>
                                            </div>
                                            <ul>
                                                <li>Video Banner exposure to approximately 1 million subscribers</li>
                                                <li>Reach 1.5 million monthly website visitors</li>
                                                <li>Extensive sharing of your banner on 13 Social Networks &amp; 550 Groups</li>
                                                <li>A direct hyperlink from Video Banner to your website</li>
                                                <li>A hyperlink from the Video to your YouTube channel</li>
                                                <li>Seamless direct bookings on your website</li>
                                                <li>Detailed Google Analytics reports</li>
                                                <li>A remarkable increase in sales by 225%</li>
                                            </ul>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="heading">€80/month </p>
                                    <button className="w-50"> <a className="subscribe_text" href="/contact-us">CONTACT US</a></button>
                                </div>
                            </div>
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="card-inner-section flip-box-front">
                                        <video autoPlay muted loop>
                                            <source src={Hotel6} type="video/mp4" />
                                        </video>
                                        {/* <div className="text-end">
                                        <p className="heading">€80/month </p>
                                    </div> */}
                                    </div>

                                    <div className="flip-box-back">
                                        <div className="card-inner-section-textarea ">
                                            <div className="text-center package" >
                                                <h3>What included</h3>
                                            </div>
                                            <ul>
                                                <li>Sharing Hotel Profile with 1 million subscribers</li>
                                                <li>Adjust Hotel profile at any time within a 6-months term</li>
                                                <li>Share your profile on the 5 Partners Program</li>
                                                <li>Share your profile on our 13 Social Networks &amp; 550 Groups</li>
                                                <li>The profile contains: pictures, content, a list of amenities, and a video&nbsp;</li>
                                                <li>Ability to add Exclusive Offers to the profile at any time</li>
                                                <li>Links to the Hotel website for convenient bookings</li>
                                                <li>No commission is charged&nbsp;</li>
                                                <li>Nomination for voting in "The Best Luxury Hotel of the Year" award</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="heading">€99 for 6 Months! </p>
                                    <button className="w-50"> <a className="subscribe_text" href="/userprofile">Subscribe</a></button>
                                </div>
                            </div>
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="card-inner-section flip-box-front">
                                        <video autoPlay muted loop>
                                            <source src={Hotel12} type="video/mp4" />
                                        </video>
                                        {/* <div className="text-end">
                                        <p className="heading">€80/month </p>
                                    </div> */}
                                    </div>

                                    <div className="flip-box-back">
                                        <div className="card-inner-section-textarea ">
                                            <div className="text-center package" >
                                                <h3>What included</h3>
                                            </div>
                                            <ul>
                                                <li>Sharing Hotel Profile with 1 million subscribers</li>
                                                <li>Adjust Hotel profile at any time within a 12-months term</li>
                                                <li>Share profile on the 5 Partners Program</li>
                                                <li>Share profile on 13 Social Networks &amp; 550 Groups</li>
                                                <li>The profile contains: pictures, content, a list of amenities, and a video</li>
                                                <li>Ability to add special offers to the profile at any time</li>
                                                <li>Links to the Hotel website for convenient bookings</li>
                                                <li>No commission is charged</li>
                                                <li>Nomination for voting in "The Best Luxury Hotel of the Year" award</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="heading">€199 per Year </p>
                                    <button className="w-50"> <a className="subscribe_text" href="/userprofile">Subscribe</a></button>
                                </div>
                            </div>
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="card-inner-section flip-box-front">
                                        <video autoPlay muted loop>
                                            <source src={PUBLISHNEWS} type="video/mp4" />
                                        </video>
                                        {/* <div className="text-end">
                                        <p className="heading">€80/month </p>
                                    </div> */}
                                    </div>

                                    <div className="flip-box-back">
                                        <div className="card-inner-section-textarea ">
                                            <div className="text-center package" >
                                                <h3>What included</h3>
                                            </div>
                                            <ul>
                                                <li>Effective promotion of your News/PR/Event/Special Deal</li>
                                                <li>Publish Special Offers within your Hotel News</li>
                                                <li>Distribution of your News to approx. 1 million subscribers</li>
                                                <li>Sharing your News on our 13 Social Networks &amp; 550 Groups</li>
                                                <li>Your PR/News staying Permanently, with no time limit</li>
                                                <li>Links to your Website and Social Media&nbsp;</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="heading">€15 per News or PR!  </p>
                                    <button className="w-50"> <a className="subscribe_text" href="/publish-hotel-news">Subscribe</a></button>
                                </div>
                            </div>
                        </Slider>
                    </Container>
                </section>

            </Parallax>

        </>
    );
}
export default Advertise;