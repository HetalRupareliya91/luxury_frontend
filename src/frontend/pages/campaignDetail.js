import React from "react";
import Header from "../components/header";
import { Col, Container, Row } from "react-bootstrap";
import DigitalDetailPDF from '../../assets/pdf/Digitalcampaign.pdf';
import PrintDetailPDF from '../../assets/pdf/Printcampaign.pdf';
import Footer from "../components/footer";
import { useParams } from "react-router-dom";

function CampaignDetail() {
    const { campaignName } = useParams();
    const pdfMap = {
        "digital-campaign": DigitalDetailPDF,
        "print-campaign": PrintDetailPDF
    };
debugger
    const selectedPdf = pdfMap[campaignName];

    return (
        <>
            <Header />
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <center>
                                {selectedPdf && (
                                    <iframe src={`${selectedPdf}#toolbar=1&navpanes=0&scrollbar=1`} width="100%" height={1200}></iframe>
                                )}
                            </center>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Footer />
        </>
    );
}
export default CampaignDetail;