import React from "react";
import Logo from "../../assets/img/logo.svg";
import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram,FaTwitter,FaTripadvisor, FaAddressBook, FaBell} from 'react-icons/fa';
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function Footer(){
   const navigate = useNavigate();

   const handlePublishNewsClick = () => {
   
      localStorage.setItem("newsLogin", "true");
      navigate("/signup");
    };

    return(
        <>
        <footer className="footer-section">
         
        <Container >
           
           <div className="footer-text">
              <Row className="row">
                 <Col lg={3} >
                    <div className="ft-about">
                       <div className="logo">
                          <NavLink to="/">
                             <Image src={Logo} alt="" className="footer-logo"/>
                                                     </NavLink>
                                                     
                       </div>
                       <p><NavLink to="/hotels-selection" className="footer-links">Luxury Hotel And Resorts</NavLink></p>
                    <p><NavLink to="/luxury-hotels-magazines" className="footer-links">Luxury Hotels Magazines</NavLink></p>
                    <p><NavLink to="/nominee" className="footer-links">Nominate Your Hotel</NavLink></p>                      

                       {/* <p>BRAND RECOGNITION</p> */}
                      
                     
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-newslatter">
                       <h6>About Us</h6>
                       <p><NavLink to="/our-team" className="footer-links">Our Team</NavLink></p>
                       <p><NavLink to="/about-us" className="footer-links">About Us</NavLink></p>
                       <p><NavLink to="/what-we-do" className="footer-links">What We Do</NavLink></p>
                         <p> <NavLink to="/trademark-registration" className="footer-links">Trademark Registry</NavLink></p>
                       <p> <NavLink to="/trademark-registration" className="footer-links">Branding Registration</NavLink></p>
                       <p><NavLink to="/benifits-working-with-us" className="footer-links">Collaborative Advantages</NavLink></p>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-newslatter">
                       <h6>ADVERTISERS</h6>
                       <p><NavLink to="/distribution" className="footer-links">Distribution</NavLink></p>
                       <p><NavLink className="footer-links" to="/publish-news-pr" >Publish News </NavLink></p>
                       <p><NavLink to="/mediapack" className="footer-links">Media Pack</NavLink></p>
                       <p><NavLink to="/advertise-with-us" className="footer-links">Advertise With Us</NavLink></p>
                       <p><NavLink to="/signup" className="footer-links">List Your Hotel</NavLink></p>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-contact">
                       <h6>Connect with Us</h6>
                       <ul>
                          <li><FaAddressBook/><a href="contact-us">Contact Us </a></li>
                          {/* <li><FaPhone/><a href="tel:1234567890">(12) 345 67890</a></li> */}
                          <li><FaEnvelope/><a href="mailto:info@luxuryhotelsmagazines.com">info@luxuryhotelsmagazines.com</a></li>
                  
                       </ul>
                       <div className="fa-social">
                          <a href="https://www.facebook.com/LuxuryHotelsMagazines"><FaFacebook/></a>
                          <a href="https://www.instagram.com/luxuryhotelsbrand/"><FaInstagram/></a>
                          <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg'><FaYoutube/></a>
                       </div>
                    </div>
                    
                    
                 </Col>
                 
              </Row>
           </div>
        </Container>
        <div className="copyright-option">
           <div className="container">
              <Row >
                 <Col lg={7}>
                    <ul>
                       <li><a href="#">Terms of use</a></li>
                       <li><a href="#">Privacy</a></li>
                    </ul>
                 </Col>
                 <Col lg={5} >
                    <div >
                       <p className="co-text">
                          © 2023 Copyright: Luxury Hotels Magazines.
                       </p>
                    </div>
                 </Col>
              </Row>
           </div>
        </div>
     </footer>
   
     <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
           <div className="search-close-switch"><i className="icon_close"></i></div>
           <form className="search-model-form">
              <input type="text" id="search-input" placeholder="Search here....."/>
           </form>
        </div>
     </div>
     </>
    );
}
export default Footer;