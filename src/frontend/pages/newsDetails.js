import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {  FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram, FaLinkedin, FaSnapchat, FaEye, FaHeart, FaMapMarker, FaBuilding, FaSpaceShuttle, FaHome, FaList, FaPencilAlt } from 'react-icons/fa';

import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import Logo from "../../assets/img/logo.svg"

import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import API from "../../utils";
import axios from "axios";
import CallToAction from "../components/callToAction";
import { GeoAltFill } from "react-bootstrap-icons";
import ShareThisButtons from "../components/shareButtons";
import NewsSlider from "../components/youMayAlsoLikeNews";
 function BlogDetails() {

    const { news_id } = useParams();
  console.log(news_id);

  const [postData, setPostData] = useState(null);

  const fetchData = async () => {
    try {
      // Make a POST request with the id
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.editNews}`,
        { news_id: 5 },
        {
          headers: {
            Authorization: 'hXuRUGsEGuhGf6KM',
          },
        }
      );

      const responseData = response.data;

      if (responseData.status === true) {
        setPostData(responseData.data);
      } else {
        console.error('Failed to fetch post data');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  useEffect(() => {
    
    if (news_id) {
      fetchData();
    }
  }, [news_id]);
    return(
        
        <><Header />
        <section className="room-details-section spad">
            <Container className="container">
          
                <Row >
                    <Col lg={8}>
                       
                        <Row className="mb-5">
                            <Col lg={12} >
                            <Image src={postData.news_image} alt="postData.news_image" />
                            </Col>

                            <div className="row">
                                <div className="col-lg-12 text-end ">
                                    <h4 className="mt-4">{postData.bussiness_name} </h4>
                                    <div className="d-flex justify-content-end"><GeoAltFill className="m-0 locaton-icon" />
                 </div>
                             
                                </div>
                            </div>
                        </Row>

                        <div className="rd-text">
                           
                           <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                               advantages and disadvantages of both, so you will be confident when purchasing an RV.
                               When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                               wheeler? The advantages and disadvantages of both are studied so that you can make your
                               choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                               achievement of a lifetime. It can be similar to sojourning with your residence as you
                               search the various sites of our great land, America.</p>

                       </div>
                       <div className="rd-text">
                        
                           <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                               advantages and disadvantages of both, so you will be confident when purchasing an RV.
                               When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                               wheeler? The advantages and disadvantages of both are studied so that you can make your
                               choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                               achievement of a lifetime. It can be similar to sojourning with your residence as you
                               search the various sites of our great land, America.</p>

                       </div>
                       <div className="rd-text">
                          
                           <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                               advantages and disadvantages of both, so you will be confident when purchasing an RV.
                               When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                               wheeler? The advantages and disadvantages of both are studied so that you can make your
                               choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                               achievement of a lifetime. It can be similar to sojourning with your residence as you
                               search the various sites of our great land, America.</p>

                       </div>
                       <div className="rd-text">
                        
                           <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                               advantages and disadvantages of both, so you will be confident when purchasing an RV.
                               When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                               wheeler? The advantages and disadvantages of both are studied so that you can make your
                               choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                               achievement of a lifetime. It can be similar to sojourning with your residence as you
                               search the various sites of our great land, America.</p>

                       </div>

                    </Col>
                    <Col lg={4} >

                        
                    <div className="youtube-video ">
                                <iframe width="100%" height="420" src="https://www.youtube.com/embed/D0UnqGm_miA?si=qnB4y7REmVnd-Lyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                  
                        <div className="hotel-logo mt-3">
                            <img src={Logo} alt="" className="w-50" />
                        </div>

                        <div className="text-center mt-4 ">
                                    <h4 className="mb-3">NEWS STATS </h4>

                                    <div className="d-flex justify-content-around">

                                    </div>

                                    <p className="f-para likeview mt-2 d-flex justify-content-around">
                                       <button><FaEye className="m-0"/> &nbsp;10 Views </button>
                                        <button><FaHeart className="m-0"/>&nbsp;5 Likes</button>
                                    </p>
                                  
                                    <p className="f-para likeview mt-2 d-flex justify-content-around">
                                        <button><FaEye /><NavLink>15 Website Visit</NavLink></button>

                                    </p>
                                </div>
                                <div className="row  ">
                                    <div className="col-lg-12 mt-3 text-center"><button className=" btn-default w-100"><FaHeart /><NavLink >Book Online </NavLink></button></div>
                                </div>
                    </Col> 
                </Row>
       
                <Row className=" mt-5">
                    <Col lg={8} >
                    
                        <div className="rd-text">
                            <div className="rd-title">
                                <i className="fa fa-share-alt" aria-hidden="true"></i> Share This
                            </div>
                            <ShareThisButtons />

                        </div> 

                    </Col>

                </Row >
                <NewsSlider/>
            </Container>
        
        </section>
        <CallToAction/>
        <Footer />
    </>
    );
    
 }
 export default BlogDetails;