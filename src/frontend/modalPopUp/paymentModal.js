import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { FaEuroSign } from 'react-icons/fa';
import API from '../../utils';

const PaymentModal = ({ showModal, closeModal }) => {
    const [apiResponse, setApiResponse] = useState("");
    const [formData, setFormData] = useState({
        cardNumber: "",
        expiryMonth: "",
        exparyyear:"",
        cvc: ""
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleFormSubmit = async () => {
        const token = localStorage.getItem("token");
        const formDataObject = new FormData();
    
        formDataObject.append('amount', 199 );
        formDataObject.append('card_number', formData.cardNumber);
        formDataObject.append('exp_month', formData.expiryMonth);
        formDataObject.append('exp_year', formData.exparyyear);
        formDataObject.append('cvc', formData.cvc);
        formDataObject.append('product_id', 'price_1OaBX6H3z9jiRVAKQkQ9h7KE');
    
        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.stripeSubscriptionPayment}`,
                formDataObject,
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (response.data.success === true) {
                setApiResponse("Payment successful!");
                closeModal();
            } else {
                setApiResponse("An error occurred while processing the payment.");
                console.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
    


    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Payment Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='p-0'>
<Row>
    <Col lg={12}>
                    <Form.Control
                        type="number"
                        placeholder="Card Number"
                        className='mb-3'
                        value={formData.cardNumber}
                        onChange={(e) => handleChange('cardNumber', e.target.value)}
                    />
</Col>
<Col lg={6}>
                    <Form.Control
                        type="number"
                        placeholder="Month"
                        className='mb-3'
                        value={formData.expiryMonth}
                        onChange={(e) => handleChange('expiryMonth', e.target.value)}
                    />
                    </Col>

                    <Col lg={6}>
                    <Form.Control
                        type="number"
                        placeholder="Year"
                        className='mb-3'
                        value={formData.exparyyear}
                        onChange={(e) => handleChange('exparyyear', e.target.value)}
                    />
                    </Col>
                    <Col>
                    <Form.Control
                        type="number"
                        placeholder="CVV"
                        className='mb-3'
                        value={formData.cvc}
                        onChange={(e) => handleChange('cvc', e.target.value)}
                    />
                    </Col>

                    <div className='text-center mt-3 w-100'>
                        <button onClick={handleFormSubmit}> Pay <FaEuroSign />199</button>
                    </div>

                    {apiResponse && (
                            <div className="mt-3 text-center text-danger">{apiResponse}</div>
                        )}
                    </Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
              
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentModal;
