import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Row, Col, Image } from 'react-bootstrap';  // Assuming you are using react-bootstrap for Row, Col, and Image

import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News5 from '../../assets/img/news5.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import API from '../../utils';

const HotelSlider = () => {

  const [apiData ,setApiData]=useState([])
  const userId = localStorage.getItem("userId");


  const fetchAllHotels = async () => {
    // const token = localStorage.getItem("token");
    // console.log(token);
    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotels}`, 
      {
        headers: {
          // "Authorization": "Bearer " + token,
          Authorization: "hXuRUGsEGuhGf6KM",
        }
      });
      const data = response.data;
      if (data.status === true) {
        setApiData(data.data);
        // console.log(data)
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchAllHotels();
  }, []);


 

  const settings = {
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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <div className="alternate-hotels mt-3">
      <div className="text-center mt-4">
        <h1>You May Also Like</h1>
      </div>
      <Slider {...settings}>
        {apiData.map((hotel, index) => (
          <NavLink to ={`/hotel-details/${hotel.id}/${hotel.country}/${hotel.hotel_title}`}>
          <div key={index} className="card ">
          <Image className="card-img-top" src={hotel.hotel_images[0]} alt="Card image cap" />
              </div>
            <div className="card-body mt-3">
            <h5 className="card-title">{hotel.hotel_title}</h5>
              <h6 className="card-title mt-2">{formatDate(hotel.created_at)}</h6>  
            </div>
          </NavLink>
        ))}



      </Slider>
    </div>

    
  );
};

export default HotelSlider;
