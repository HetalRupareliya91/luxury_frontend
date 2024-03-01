import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Col, Container, Row } from "react-bootstrap";
import KitdetailPDF from '../../assets/pdf/kitdetail.pdf';
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import { useParams } from "react-router-dom";
import API from "../../utils";
import axios from "axios";
function KitDetail() {
    const [postData, setPostData] = useState("");

    const { media_kit_id } = useParams();
    console.log("media_kit_id",media_kit_id)

   
    useEffect(() => {
      window.scrollTo(0, 0);
        const fetchData = async () => {
          // const token = localStorage.getItem("token");
          try {
            // Make a POST request with the id
            const response = await axios.post(
              `${API.BASE_URL}${API.ENDPOINTS.editMediaKit}`,
              { media_kit_id: media_kit_id },
              {
                headers: {
                  Authorization: "hXuRUGsEGuhGf6KM",
                },
              }
            );
    
            const data = response.data;
    
            if (data.status === true) {
              
              setPostData ( data.message);

              
            } else {
              console.error('Failed to fetch post data');
            }
          } catch (error) {
            console.error('Error:', error.message);
          }
        };
    
        if (media_kit_id) {
          fetchData();
        }
      }, [media_kit_id]);
    
     
    return (
        <>
            <Header />
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <center>
                            <iframe src={`${postData.file_pdf}#toolbar=1&navpanes=0&scrollbar=1`} width="100%" height={1200}></iframe>
                            </center>
                        </Col>
                        <Col md={12}>
                            <h4 className="py-3 text_yellow">
                                Media Kit for All Advertisers (accept Hotels) Luxury Hotels Digital &amp; Printed Editions 2024
                            </h4>
                        </Col>
                    </Row>

                </Container>
            </section>
            <CallToAction />
            <Footer />
        </>
    );
}
export default KitDetail;