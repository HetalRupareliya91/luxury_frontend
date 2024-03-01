import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneSquare } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from "react-parallax";
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../utils";
function KnoledgeTest() {
  const[hotels, sethotels]=useState([])
  const[apiData, setApiData]=useState([])
      useEffect(() => {
        allSpecialOffers();
      
        }, []);
        const allSpecialOffers = async () => {
      
          try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allSpecialOffers}`,
          
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
      

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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

  const handleClaimClick = (deal) => {
    navigate( `/hotel-details/${deal.hotel_id}/${deal.hotels.country}/${deal.hotels.hotel_title}`, { state: { showOfferSection: true,specialOffersId: deal.id } });
  };
  

  return (
    <Parallax blur={10} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
      <section>
        <div className="page-headings mb-4">
          <div className="heading-section">
            <h1 className="">Exclusive Deals </h1>
          </div>
        </div>
        <Container>

          <Slider {...sliderSettings} ref={sliderRef}>
            {apiData.map((deal, index) => (

              <div key={index} className="text-center exclusive-deals">
                 {deal.hotels ? (
                <div className="mb-2 flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <div className="banner">
                        <a>
                        <h6 className="title">{deal.hotels?.hotel_title ?? "Hotel Title Not Available"}</h6>
                        </a> 
                      </div>
                      <div className="mt-2"><button  onClick={() => handleClaimClick(deal)}  className="my-3 btn_nav">CLAIM</button></div>
                    </div>

                    <div className="flip-box-back">
                      <div>
                        <FaPhoneSquare className="phone-icon m-0" />
                      </div>
                      <div>
                        <a>
                          <span>{deal.phone}</span>
                        </a>
                      </div>
                      <div>
                        <a>
                          <h6 className="subtitle">{deal.offer_title}</h6>
                        </a>
                      </div>
                      <div>
                        <span className="valid">Valid from {deal.from_date} to {deal.to_date}</span>
                      </div>
                      <hr className="m-0" />
                      <div>
                        <a>
                          <h6>{deal.description}</h6>
                        </a>
                      </div>
                      <div className="mt-2"><button className="my-3 btn_nav" onClick={() => handleClaimClick(deal)} >CLAIM</button></div>
                    </div>                  
                  </div>
                </div>
                ) : (
                  // Handle the case where deal.hotels is null or undefined
                  <p>Hotel information not available</p>
                )}
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </Parallax>
  );
}

export default KnoledgeTest;