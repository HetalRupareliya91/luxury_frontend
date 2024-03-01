import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import News4 from '../../assets/img/news4.jpg';
import News5 from '../../assets/img/news5.jpg';
import News6 from '../../assets/img/news6.jpg';
import News7 from '../../assets/img/news7.jpg';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Parallax } from "react-parallax";
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import API from '../../utils';
import axios from 'axios';
function Collections() {
const[hotels, sethotels]=useState([])
const[apiData, setApiData]=useState([])
    useEffect(() => {
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

   
    return (
        <Parallax blur={8} bgImage={Hero3} bgImageAlt="the cat" strength={100} >
        <section className="services-section ">
              <div className="page-headings mb-5">
<div className="heading-section">
<h1 className="">Best Luxury Hotels Of The Year</h1>
</div>
</div>
            <Container>

                <Slider {...sliderSettings}>
                {apiData.map((hotel, index) => (
  <div key={index}>
    <figure>
      <div className="img-dec">
        {hotel.hotels && (
          <>
            <span className="img-dec-country">{hotel.hotels.country}</span>
            <div className="coutryname">{hotel.hotels.hotel_title}</div>
          </>
        )}
      </div>
      <div className="thumbnail" style={{backgroundImage: `url(${hotel.hotel_images[0]})`}}>
        <div>
          <NavLink
            to={`/hotel-details/${hotel.hotel_id}/${hotel.hotels.country}/${hotel.hotels.hotel_title}`}
            className="readmore"
          >
            Read More
          </NavLink>
        </div>
        {/* <Image src={hotel.hotel_images[0]} /> */}
      </div>
    </figure>
  </div>
))}
                </Slider>
            </Container>
        </section>
        </Parallax>
    );
}

export default Collections;
