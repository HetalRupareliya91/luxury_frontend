import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import VideoBackgrounds from '../../assets/videos/hotelvideo_km2KqTxn.mp4';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg"
import API from '../../utils';
import axios from 'axios';
const VideoBackground = () => {
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
   
    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.homeInfo}`,
      {
        type: "4", 
      },
      
      {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        }
      });
      const data = response.data;
     
     
      if (data.status === true) {
       setAboutData(data.data.details); 

      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
<section className="video-background p-0">
<div className="video-iframe">
          <iframe
            loading="lazy"
            style={{ width: "100%" }}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="700px"
            src={aboutData.you_tybe_link} 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
             <div className="text-overlay">
      <Row >
                  <Col lg={6}>
                     <div className="about-text">
                        <div className="section-title  ">
                        <p dangerouslySetInnerHTML={{ __html: aboutData.content }}></p>
                {/* <p className=''>Through our Printed Edition Rotation Program, your hotel will be featured as one of the top <b style={{color:"#b5191fff"}}>Luxury Hotels </b> and will ensure a continuous influx of bookings and a consistent occupancy rate of <b style={{color:"#b5191fff"}}> 800,000 to 1 million tourists </b> throughout the year, all without any commission fees.</p> */}
                        </div>
                     </div>
                  </Col>
                  <Col lg={6} >
                    
                       
                           <div className='videos-content-present text-center'>
                          <Image src={Logo}/>
                          <div className='mt-4'>
                          <h4 >PRESENTS</h4>
                          </div>
                           </div>
                         
              
                  </Col>
                  </Row>
               </div>
       
        </div>
   
          
    </section>

    </>
  );
};

export default VideoBackground;
