import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { Parallax } from "react-parallax";
import PayPalButton from "../components/paypal";
import Collections from "./bestLuxuryHotels";
import Header from "./header";
import Footer from "./footer";

function HotelNominate() {

    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      hotelName: "",
      youtubeLink: "",
      message: "",
      photos: null,
    });

    const validateForm = () => {
        let errors = {};
        let isValid = true;
    
        if (!formData.name.trim()) {
          errors.name = "Name is required";
          isValid = false;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
          errors.email = "Valid email is required";
          isValid = false;
        }
    
        if (!formData.hotelName.trim()) {
          errors.hotelName = "Hotel name is required";
          isValid = false;
        }
    
      
        
          if (!formData.youtubeLink ) {
            errors.youtubeLink = "Youtube Link Feild is Required";
            isValid = false;
          }

          if (!formData.message ) {
            errors.message = "Message Feild is Required";
            isValid = false;
          }
          if (!formData.photos) {
            errors.photos = "Please upload a  photo ";
            isValid = false;
          }
        
       
        setFormErrors(errors);
        return isValid;
      };
  
      const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
      
        if (type === "file") {
          setFormData({
            ...formData,
            [name]: files[0],
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      
        // Clear error for the current field when it's being edited
        setFormErrors({
          ...formErrors,
          [name]: undefined,
        });
      };
      
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Add your form submission logic here
          console.log("Form submitted:", formData);
        } else {
          console.log("Form validation failed");
        }
      };


    return (
        <>
<Header/>
        <Collections/>
            <Parallax blur={0} bgImage={Hero3} bgImageAlt="the cat" strength={300}>
                <section className="what-are-you-intersted-in spad">
                    <Container>
                        <div>
                            <div className="title-subtitle mt-0 text-center">
                                Submit Your Hotel As the LUXURY HOTEL of the Year
                            </div>
                            <div className="woodmart-title-container text-center">
                                You can submit your hotel as the Luxury hotel of the Year
                            </div>
                            <Form>

                                <Form.Label>
                                    Your Name
                                </Form.Label>
                                <Form.Control
                                 name="name"
                                    type="text"
                                    className={`mb-3 ${formErrors.name ? 'border border-danger' : ''}`}
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                >

                                </Form.Control>
                                {formErrors.name && (
                <div className="text-danger">{formErrors.name}</div>
              )}
                                <Form.Label>
                                    Your Email
                                </Form.Label>
                                <Form.Control
                                name="email"
                                    type="text"
                                    className={`mb-3 ${formErrors.email ? 'border border-danger' : ''}`}
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                >

                                </Form.Control>
                                {formErrors.email && (
                <div className="text-danger">{formErrors.email}</div>
              )}
                                <Form.Label>
                                    What Hotel Are You Representing?
                                </Form.Label>
                                <Form.Control
                                name="hotelName"
                                    as="textarea"
                                    rows={3} // You can adjust the number of rows as needed
                                    className={`mb-3 ${formErrors.hotelName ? 'border border-danger' : ''}`}
                                    placeholder="Hotel Name"
                                    value={formData.hotelName}
                                    onChange={handleInputChange}
                                />
                                {formErrors.hotelName && (
                <div className="text-danger">{formErrors.hotelName}</div>
              )}

                                <Form.Label>
                                    Attach Photos
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    className={`mb-3 ${formErrors.photos ? 'border border-danger' : ''}`}

                                    value={formData.photos}
                                    onChange={handleInputChange}
                                >
                                </Form.Control>
                                {formErrors.photos && (
                <div className="text-danger">{formErrors.photos}</div>
              )}

                                <Form.Label>
                                    YouTube Link
                                </Form.Label>
                                <Form.Control
                                name="youtubeLink"
                                    type="text"
                                    className={`mb-3 ${formErrors.youtubeLink ? 'border border-danger' : ''}`}
                                    placeholder="YouTube Link Here"
                                    value={formData.youtubeLink}
                                    onChange={handleInputChange}
                                >
                                </Form.Control>
                                {formErrors.youtubeLink && (
                <div className="text-danger">{formErrors.youtubeLink}</div>
              )}
                                <div className=" w-25">
                                    <PayPalButton />
                                </div>
                                <button className="mt-4 w-25"  onClick={handleSubmit}>SUBMIT</button>
                            </Form>

                        </div>

                    </Container>

                </section>
            </Parallax>

            <Footer/>
        </>
    );
}

export default HotelNominate;
