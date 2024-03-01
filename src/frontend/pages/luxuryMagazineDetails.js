import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import pdf from '../../assets/pdf/lodge.pdf'
import pdf2 from '../../assets/pdf/kashbah.pdf'
import { Link, useParams } from "react-router-dom";
// import { FaEnvelope, FaFacebook, FaFacebookMessenger, FaLinkedin, FaShareAlt, FaSnapchat, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ShareThisButtons from "../components/shareButtons";
import axios from "axios";
import API from "../../utils";
function MagazineDetails (){
    const { hotel_magazine_id } = useParams();
    const [postData, setPostData] = useState([]);
    const [filePdf, setFilePdf] = useState([]);

    useEffect(() => {

      window.scrollTo(0, 0);

        const fetchData = async () => {
          // const token = localStorage.getItem("token");
          try {
            // Make a POST request with the id
            const response = await axios.post(
              `${API.BASE_URL}${API.ENDPOINTS.editHotelMagazine}`,
              { hotel_magazine_id: hotel_magazine_id },
              {
                headers: {
                  Authorization: "hXuRUGsEGuhGf6KM",
                },
              }
            );
    
            const data = response.data;
    
            if (data.status === true) {
              
              setPostData ( data.message);

              setFilePdf(data.message.file_pdf)
            } else {
              console.error('Failed to fetch post data');
            }
          } catch (error) {
            console.error('Error:', error.message);
          }
        };
    
        if (hotel_magazine_id) {
          fetchData();
        }
      }, [hotel_magazine_id]);
    
     

    return(

        <>
        
        <Header/>
<section className="spad">
<div className="page-headings mb-4 ">
<div className="heading-section">
<h1 className="">
    LUXURY MAGAZINES - DETAIL
    </h1></div>
</div>
          
    <Container>
<div className="text-center">



    <div className="mb-3 text-end">
        <button>
        <Link to="/luxury-hotels-magazines">
            Back To Magazine
        </Link>
        </button>
    </div>

</div>
<Row>
            {filePdf.map((post ,index) => (
              <Col md={12} key={index}>
                <center>
                  <iframe
                    src={post}
                    frameBorder="0"
                    width="100%"
                    height="750px"
                    allowFullScreen
                  ></iframe>
                </center>
              </Col>
            ))}
          </Row>

<ShareThisButtons/>
 
    </Container>
</section>

<Footer/>
</>


    );
}

export default MagazineDetails;