import React, { useEffect, useState } from "react";
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import News7 from '../../assets/img/news7.jpg'
import about1 from '../../assets/img/about/about-1.jpg'
import about2 from '../../assets/img/about/about-2.jpg'
import HeroImage from '../../assets/img/hero/hero-2.jpg'
import { Container, Row, Col, Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
// import VideoBackgrounds from '../../assets/videos/hotelvideo_km2KqTxn.mp4';
// import ReactPlayer from "react-player";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../../utils";
function AboutUs() {
  const [aboutData, setAboutData] = useState("");
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetchAboutDetails();
    fetchRecentHotels();

  }, []);
  const fetchAboutDetails = async () => {

    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.homeInfo}`,
        {
          type: "2",
        },

        {
          headers: {
            Authorization: "hXuRUGsEGuhGf6KM",
          }
        });
      const data = response.data;


      if (data.status === true) {
        setAboutData(data.data);
        const content = convertHtmlToText(data.data.details.content);
        data.data.details.content = content;

      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const convertHtmlToText = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  };


  const fetchRecentHotels = async () => {

    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.homeApi}`,
        {
          Hotel_count: 7,
          magazine_count: 0,
          News_count: 0,
        },

        {
          headers: {
            Authorization: "hXuRUGsEGuhGf6KM",
          }
        });
      const responseData = response.data;

      //  console.log("fdhfdihgihgfiu",responseData)
      if (responseData.status === true) {
        setHotels(responseData.data.hotels);

      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };



  return (
    <>
      <section className="aboutus-section spad">
        <div className="page-headings mb-4">
          <div className="heading-section">
            <h1 className="text-center ">Recently Added Hotels</h1>
          </div>
        </div>
        <Container>
          <div className="hp-room-items">

            <Row>
              {hotels.map((hotel, index) => (
                <React.Fragment key={index}>
                  {index === 1 ? (
                    <Col lg={6}>
                      {/* Render the larger image for index 1 */}
                      <figure>

                        <div className="img-dec"><span className="img-dec-country">{hotel.country}</span><div className="coutryname">{hotel.hotel_title}</div></div>
                        <div className="thumbnail" style={{backgroundImage: `url(${hotel.hotel_images[0]})`}}>

                          <div>
                            <Link
                              to={`/hotel-details/${hotel.id}/${hotel.country}/${hotel.hotel_title}`}
                              className="readmore"
                            >
                              Read More
                            </Link>
                          </div>
                          {/* {hotel.hotel_images && hotel.hotel_images[0] && (
                            <Image src={hotel.hotel_images[0]} alt={hotel.hotel_title} />
                          )} */}
                        </div>
                      </figure>
                    </Col>
                  ) : (
                    <Col key={index} lg={3}>
                      {/* Render smaller images for other indices */}
                      <figure>

                        <div className="img-dec"><span className="img-dec-country">{hotel.country}</span><div className="coutryname">{hotel.hotel_title}</div></div>
                        <div className="thumbnail" style={{backgroundImage: `url(${hotel.hotel_images[0]})`}}>
                          <div>
                            <Link
                              to={`/hotel-details/${hotel.id}/${hotel.country}/${hotel.hotel_title}`}
                              className="readmore"
                            >
                              Read More
                            </Link>
                          </div>
                          {/* {hotel.hotel_images && hotel.hotel_images[0] && (
                            <Image src={hotel.hotel_images[0]} alt={hotel.hotel_title}  style={{ width: "100%", height: "100%" }}/>
                          )} */}
                        </div>
                      </figure>
                    </Col>
                  )}
                </React.Fragment>
              ))}
            </Row>

          </div>

        </Container>
      </section>

      <section className="video-background p-0">

        <div className="video-iframe">
          <iframe
            loading="lazy"
            style={{ width: "100%" }}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="700px"
            src={aboutData?.details?.background} 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Container>
            <div className="text-overlay">
              <Row >
                <Col lg={6} >
                  <div className="about-text">
                    <div className="section-title ">
                      <span className="text-white">About Us</span>
                      <div className="my-3"> <Image src={Logo} />
                      </div>
                      <p className="f-para text-white">{aboutData?.details?.content}</p>

                      <a href="about-us" className="primary-btn about-btn text-white">Read More</a>

                    </div>

                  </div>
                </Col>
                <Col lg={6} className="aboutus-section-present">
                  <div className="text-center">
                    <Image src={Logo} />
                  </div>

                  <div className='text-center mt-4'>
                    <h4 >PRESENTS</h4>
                  </div>
                </Col>
              </Row>


              {/* <Row className=" aboutus-section-present mobile-view">
                           <Col className='videos-content-present text-center'>
                          <Image src={Logo}/>
                          <div className='mt-4'>
                          <h4 >PRESENTS</h4>
                          </div>
                           </Col>
                         
                       
                     </Row> */}
              {/* <Row>
            <Col lg={6}>
              <div className='text-div'>
                <span className=''>Luxury Hotels, a renowned global brand founded in England 17 years ago, is currently present in 89 countries. We provide Luxury Hotels for affluent travellers through our online platform and in print and digital formats. Each Edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.</span>
                <span className=''>Through our Printed Edition Rotation Program, your hotel will be featured as one of the top Luxury Hotels and will ensure a continuous influx of bookings and a consistent occupancy rate of 800,000 to 1 million tourists throughout the year, all without any commission fees.</span>
              </div>
            </Col>
            <Col lg={6} >
              <div className='text-center hotel-present-div'>
                <h1>Luxury Hotels</h1>
                <h4>PRESENTS</h4>
              </div>
            </Col>
          </Row> */}
            </div>
          </Container>
        </div>

      </section>

      {/* <Parallax blur={5} bgImage={HeroImage} bgImageAlt="the cat" strength={350}>

     <section className="special spad" >
         <div className="content">
            <div className="container">
              
            </div>
         </div>
        
      </section>
      </Parallax> */}

    </>
  );
}
export default AboutUs;