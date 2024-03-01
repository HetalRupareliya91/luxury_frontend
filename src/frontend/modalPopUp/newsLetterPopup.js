// ModalComponent.js
import React, { useState } from "react";
import { Image, Modal, Form, Button } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg";
import axios from "axios";
import API from "../../utils";

function ModalComponent() {
  const [showModal, setShowModal] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleCloseModal = () => setShowModal(false);

  const handleFormSubmit = async (e) => {
    // const token = localStorage.getItem("token");
    e.preventDefault();
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameError("Please enter your name");
      isValid = false;
    } else {
      setFullNameError("");
    }

    if (!email.trim()) {
      setEmailError("Please enter your email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) {
      return;
    }

    const formDataObject = new FormData();

    formDataObject.append('name', fullName);
        formDataObject.append('email', email);
    
    try {
        const response = await axios.post(

            `${API.BASE_URL}${API.ENDPOINTS.newsLetter}`,
            formDataObject,
            {
                headers: {
                  "Authorization": "hXuRUGsEGuhGf6KM",
                },
            }
        );
        if (response.data.status === true) {

          setFullName("");
      setEmail("");
      setShowModal(false);
        } else {
            console.error(response.data.message);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }



};

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="modalpopup">
      <Modal.Header closeButton>
        {/* <Modal.Title>Newsletter Popup</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Image src={Logo} />
        </div>

        <div>
          <h2>Join Our Newsletter</h2>

          <p className="text-center">
            Get the very best of LuxuryHotelsMagazines by signing up to our
            newsletter, full of travel inspiration, fun quizzes, exciting
            competitions and exclusive offers.
          </p>

          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formFullName" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
               <div className="text-danger">{fullNameError}</div>
            </Form.Group>

            <Form.Group controlId="formEmail"   className="mb-4">
              <Form.Control
                type="email"
                placeholder="Enter your email"
              
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                <div className="text-danger">{emailError}</div>

            </Form.Group>

            <div className="text-center mt-3">
              <Button className="popup-submit" type="submit">
                Subscribe
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
