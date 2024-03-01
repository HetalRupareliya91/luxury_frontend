import React, { useEffect, useState } from "react"

import { Col, Container, Form, Image, Row } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { FaSearch } from "react-icons/fa";
import API from "../../../utils";
import axios from "axios";

import Rooms4 from "../../../assets/img/room/room-4.jpg"
import Rooms5 from "../../../assets/img/room/room-5.jpg"
import Rooms6 from "../../../assets/img/room/room-6.jpg"
import { NavLink } from "react-router-dom";
function HotelNews (){

    const [apiData, setApiData] = useState([]);

    const fetchAllNewsData = async () => {
      // const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${ API.BASE_URL}${API.ENDPOINTS.allNews}`, {
            headers: {
              Authorization: "hXuRUGsEGuhGf6KM",
            }
          });
          const data = response.data;
          // console.log(data)
          if (data.status === true) {
            setApiData(data.data);
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      useEffect(() => {
        fetchAllNewsData();
        window.scrollTo(0, 0);

      }, []);

    return(
<>
<Header/>
 {/* <Hero/> */}


 <section className="rooms-section spad ">
    
 <div className="page-headings mb-4">
<div className="heading-section">
<h1 className="text-center">Hotel News</h1>
</div>
</div>
        <Container>
     
        <Row>
  {apiData.map((news) => (
    <Col key={news.id} lg={4} md={6}>
      <NavLink  to={`/news-details/${news.id}/${news.news_title}`} >
        <div className="news-item">
          <Image src={news.news_image[0]} alt="" />
         
        </div>
        
      </NavLink>
      <div className="ri-text mb-4">
            <h5>{news.news_title}</h5>
          </div>
    </Col>
  ))}
</Row>
        
        </Container>
    </section>
    <Footer/>
 </>
    );
}
export default HotelNews;