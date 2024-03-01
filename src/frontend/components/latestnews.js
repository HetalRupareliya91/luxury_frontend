import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import News4 from '../../assets/img/news4.jpg';
import News5 from '../../assets/img/news5.jpg';
import News6 from '../../assets/img/news6.jpg';
import News7 from '../../assets/img/news7.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import API from '../../utils';

function LatestNews() {
    const [newsData,setNewsData]=useState([])
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
 

    const fetchLatestNews = async () => {
   
        try {
          const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.homeApi}`,
          {
            Hotel_count: 0, 
            magazine_count: 0, 
            News_count:7,
          },
          
          {
            headers: {
              Authorization: "hXuRUGsEGuhGf6KM",
            }
          });
          const responseData = response.data;
         
         console.log("",responseData)
          if (responseData.status === true) {
          setNewsData(responseData.data.news );
    
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };

      useEffect(() => {
        fetchLatestNews();
        
      }, []);
    
    return (
        <section className="spad">
              <div className="page-headings mb-4">
<div className="heading-section">
<h1 className="">HOTEL'S LATEST NEWS</h1>
</div>
</div>
            <Container>

                <Slider {...sliderSettings}>
                {newsData.map((news, index) => (
                        <div key={index}>
                            <figure>
                            {/* <div className="img-dec"><span className="img-dec-country">{hotel.country}</span><div className="coutryname">{hotel.hotel_title}</div></div> */}

                                <div className="img-dec"><div className="latestNewscoutryname">{news.bussiness_name}</div></div>
                                <div className="thumbnail" style={{backgroundImage: `url(${news.news_image})`}}>
                                    <div>
                                        <NavLink to="/news-details/9/Grand Opening ceremony" className="readmore">
                                            Read More
                                        </NavLink>
                                    </div>
                                    {/* <Image src={news.news_image} alt="" /> */}
                                </div>
                            </figure>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
}

export default LatestNews;
