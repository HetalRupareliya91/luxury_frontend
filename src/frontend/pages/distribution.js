import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaAd, FaAward, FaCalendar, FaGlobe, FaNewspaper, FaShare, FaTrafficLight, FaUser } from "react-icons/fa";
import bgimg from "../../assets/img/news1.jpg"
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import magazineImage from "../../assets/img/magazines/magazines.webp"
import { FaPhoneSquare } from "react-icons/fa";
// import InstagramWidget from "../components/instagramWidget";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CallToAction from "../components/callToAction";
import Footer from "../components/footer";
import axios from "axios";
import API from "../../utils";
import { NavLink } from "react-router-dom";
function Distribution() {
  const [magazine, setMagazine] = useState([])
  const [data, setData] = useState("")
  const [distributorData, setDistributorData] = useState([])
  const sliderRef = useRef(null);

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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const fetchDistributionDetails = async () => {
    // const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.distributionDetails}`, {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        }
      });
      const data = response.data;
      //   console.log(data);
      if (data.status === true) {
        setData(data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const fetchDistributionMagazineDetails = async () => {
    // const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allDistribution}`, {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        }
      });
      const data = response.data;
      //   console.log(data);
      if (data.status === true) {
        setDistributorData(data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    window.scroll(0,0)

    fetchDistributionDetails();
    fetchDistributionMagazineDetails()
    fetchRecentMagazine()
  }, []);

  const fetchRecentMagazine = async () => {

    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.homeApi}`,
        {
          Hotel_count: 0,
          magazine_count: 5,
          News_count: 0,
        },

        {
          headers: {
            Authorization: "hXuRUGsEGuhGf6KM",
          }
        });
      const responseData = response.data;

      if (responseData.status === true) {
        setMagazine(responseData.data.magazines);

      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <Header />
      <section className="distribution-section spad">
        <div className="page-headings ">
          <div className="heading-section">
            <h1>{data.length > 0 ? data[0].main_page_title : ""}</h1>
          </div>
        </div>

      </section>
      {/* <InstagramWidget /> */}

      <section className="forthcoming-editions ">
        <Container>
          <div>
          
            {distributorData
           
            .map((edition,index) => (
              <div key={index}>
                <div className="text-center mb-5">
                  <h1 >{edition.title}</h1>
                </div>
                <div>

                  <Row >
                    <Col lg={6} md={12} className={`distribution-images-section mb-5 ${index % 2 !== 0 ? 'order-last' : 'order-first'}`}   style={{ backgroundImage: `url(${edition.hotel_image})` }}>
                   
                    </Col>
                    <Col lg={6} md={12} className="content-section mb-5">
                   
                      <div className="listing"   dangerouslySetInnerHTML={{ __html: edition.hotel_description }}>
                      </div>
                      

                            <NavLink to={edition.link} className=" mt-3 px-5">Click Here</NavLink>
                        
                     
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
          </div>
          <Row>
            <Col md={12} className="text-center py-5">
              <button> <a href="/mediapack">Download Our Full Media Pack</a></button>

            </Col>
          </Row>
        </Container>
      </section>

      <section className="recents-magazines py-5">
        <Container>

          <div className="text-center">
            <h1 className="mb-4">Recent Magazines</h1>
          </div>

          <Slider {...sliderSettings} ref={sliderRef}>
            {magazine.map((magazine, index) => (


              <NavLink to={`/magazine-details/${magazine.id}/${magazine.title}`} key={index} className="text-center  distribution-slider p-0">
                <div>              <a>
                  <Image src={magazine.thumbnail} />
                </a>
                </div>

                <div className="mt-3 mb-3">
                  <NavLink to={`/magazine-details/${magazine.id}/${magazine.title}`} className="valid">{magazine.title}</NavLink>
                </div>

              </NavLink>
            ))}
          </Slider>
        </Container>
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}
export default Distribution;