import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import API from "../../utils";

function VotingForm({ hotelId }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        description: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCreateHotel = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        setIsLoading(true);
        const formDataObject = new FormData();
        formDataObject.append("name", formData.fullName);
        formDataObject.append("email", formData.email);
        formDataObject.append("description", formData.description);
        formDataObject.append("type", 1);
        formDataObject.append("hotel_id", hotelId);

        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.addVotingDetails}`,
                formDataObject,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.data.status === true) {
                setResponseMessage(response.data.message);
                setFormData({
                    fullName: "",
                    email: "",
                    description: "",
                });
                setTimeout(() => {
                    setResponseMessage("");
                }, 2000);
                } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form onSubmit={handleCreateHotel} className="contact-form">
            <Row className="row">
                <Col lg={12}>
                    <h5 className="text-center px-4 mt-0">
                        VOTE FOR THE BEST LUXURY HOTELS OF THE YEAR
                    </h5>
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col lg={12}>
                    <input
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col lg={12}>
                    <textarea
                        placeholder="Describe Your Experience"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit" className="btn-default-submit" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit Now"}
                    </button>

                    {responseMessage && <p className="text-center">{responseMessage}</p>}
                </Col>
            </Row>
        </Form>
    );
}

export default VotingForm;
