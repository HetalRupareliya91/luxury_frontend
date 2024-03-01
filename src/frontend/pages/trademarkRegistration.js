import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import BrandingRegistrationPDF from '../../assets/pdf/Branding-Registration.pdf';
import TrademarkUKPDF from '../../assets/pdf/TradeMarkUK.pdf';
import CallToAction from "../components/callToAction";

function TrademarkRegistration() {
    useEffect(() => {
        window.scrollTo(0, 0);
    } , []);
    return (
        <>
            <Header />
            <section className="py-4">
            <div className="page-headings ">
<div className="heading-section">
<h1>Luxury Hotels Brand Recognition And Countries Coverage</h1>
</div>
</div>
                <Container>
                  
                    <Row>
                        <div className="text-center">
                        <h5 className="py-4" style={{textTransform:"uppercase",color:"#846316"}}>Trademark Registration Uk</h5></div>
                        <Col md={12}>
                            <center><embed type="application/pdf" src={TrademarkUKPDF + "#toolbar=0&navpanes=0&scrollbar=0"} width="500" height="500" />
                            </center>
                        </Col>
                        <div className="text-center">
                        <h5 className="py-4"style={{textTransform:"uppercase" ,color:"#846316"}}>Branding Registration</h5></div>
                        <Col md={12}>
                            <center><embed type="application/pdf" src={BrandingRegistrationPDF + "#toolbar=0&navpanes=0&scrollbar=0"} width="500" height="500" />
                            </center>
                        </Col>
                    </Row>

                </Container>
            </section>
            <CallToAction/>
            <Footer />
        </>

    );
}
export default TrademarkRegistration;