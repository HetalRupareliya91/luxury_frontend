import React, { useState, useRef, useEffect } from "react";
import Hotel from "../../assets/img/hotel1.jpg";
import { Col, Container, Image, Row, Form, ProgressBar } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaAddressBook, FaChild, FaDatabase, FaEuroSign, FaFacebookSquare, FaGlobe, FaInternetExplorer, FaNewspaper, FaRecycle, FaRedoAlt, FaTrophy, FaWpexplorer } from "react-icons/fa";
import MultiStep from "react-multistep";

import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../../utils";

function Signup() {
    const [otpApiResponse,setOtpApiResponse]=useState("")
    const newsLogin=localStorage.getItem("newsLogin")
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [responseMessage , setResponseMessgae] = useState("");
    const [userId, setUserId] = useState(null);

    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    const [otpError, setOtpError] = useState("");

    const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
    const otpRefs = useRef(Array(6).fill(null).map(() => React.createRef()));
    const nextStep = () => {
        setStep(step + 1);
        // updateProgress(); 
    };

    const handleOTPSubmit = async () => {
        try {
          const formDataObject = new FormData();
          formDataObject.append('user_id', userId);
          formDataObject.append('new_otp', otpInputs.join(""));
          const response = await axios.post(
            `${API.BASE_URL}${API.ENDPOINTS.varifyOtp}`,
            formDataObject,
            {
              headers: {
                Authorization: "hXuRUGsEGuhGf6KM",
              },
            }
          );
      
          if (response.data.status == true) {
           navigate("/login")
          } else {
            setOtpApiResponse(response.data.message)
            console.error("API call failed:", response.data.message);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
      

    const handleOtpInputChange = (index, value) => {
        const newOtpInputs = [...otpInputs];
        newOtpInputs[index] = value;
        setOtpInputs(newOtpInputs);
    
        
        if (index < 5 && value !== "") {
          otpRefs.current[index + 1].current.focus();
        }
      };
    const prevStep = (e) => {
        if (e) e.preventDefault();
        setStep(step - 1);
        updateProgress(); 
    };


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        if (e) e.preventDefault();

        try {
            let postData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                confirm_password: formData.confirm_password,
            };
    
            if (newsLogin === "true") {
                postData.role = "5";
            }
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.signup}`,
                JSON.stringify(postData),
                {
                    headers: {
                        Authorization: "hXuRUGsEGuhGf6KM",
                    },
                }
            );

            if (response.data.status === true) {
                setResponseMessgae(response.data.message)
                setUserId(response.data.data.id);
                
                    nextStep();
               

            } else {
                setErrorMessage(response.data.message || "Signup failed");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...validationErrors };

        // Validate Name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
            isValid = false;
        } else {
            newErrors.email = "";
        }

        // Validate Password
        if (formData.password.length < 6) {
            newErrors.password = "Password do not match";
            isValid = false;
        } else {
            newErrors.password = "";
        }

        // Validate Confirm Password
        if (formData.confirm_password !== formData.password) {
            newErrors.confirm_password = "Passwords do not match";
            isValid = false;
        } else {
            newErrors.confirm_password = "";
        }

        setValidationErrors(newErrors);
        return isValid;
    };

    const handleSignupClick = (e) => {
        if (e) e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            handleSignup();
            // nextStep();
        }
    };


    const handleOtpClick = (e) => {
        if (e) e.preventDefault();
      handleOTPSubmit();
    };
    
    const updateProgress = () => {
        const totalSteps = 3; // Assuming there are two steps in the form
        const newProgress = (step / totalSteps) * 100;
        setProgress(newProgress);
    };

   
        useEffect(() => {
        window.scrollTo(0, 0);
    
    }, []);

    return (
        <>
            <Header />
            <Container className="container py-5">
                <Row>
                    <Col lg={12}>
                        <h2> List Your Luxury Hotel On</h2>
                        <h2> LuxuryHotelsMagazines.com & receive direct commission-free bookings </h2>
                        <p className="text-center py-1">
                            Swift 4-step process in under 5 minutes, with instant visibility and exclusive promotion of your Hotel to our over 1 million high-end subscribers
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="image-container">
                            <Image src={Hotel} alt="Login Image" />
                        </div></Col>
                    <Col lg={6}>  <div className="">

                        <div id="Log_in">
                            {/* <h2>Signup</h2> */}
                            <form
                                className={`user_login authsection active step-${step}`}
                                id="userlogin"
                            >
                                {step === 1 &&
                                    <>
                                        <Form method="POST">
                                            <Row className="row ">
                                                <div className=" col-lg-6 mt-3">
                                                    <input type="text" className="" name="name" placeholder="Name" value={formData.name}
                                                        onChange={handleInputChange} style={{ borderColor: validationErrors.name ? "red" : "" }} />
                                                    {validationErrors.name && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.name}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="col-lg-6 mt-3">
                                                    <input type="email" className="" id="email" name="email" placeholder="Email " value={formData.email}
                                                        onChange={handleInputChange} style={{ borderColor: validationErrors.email ? "red" : "" }} />
                                                    {validationErrors.email && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </Row>

                                            <Row >
                                                <Col md={6} className="mt-3">
                                                    <input
                                                        type="password"
                                                        className=""
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                    />
                                                    {validationErrors.password && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.password}
                                                        </div>
                                                    )}
                                                </Col>
                                                <Col md={6} className="mt-3">
                                                    <input
                                                        type="password"
                                                        className=""
                                                        id="confirm_password"
                                                        name="confirm_password"
                                                        placeholder="Confirm Password"
                                                        value={formData.confirm_password}
                                                        onChange={handleInputChange}
                                                    />
                                                    {validationErrors.confirm_password && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.confirm_password}
                                                        </div>
                                                    )}
                                                </Col>
                                            </Row>
                                            <Row className="re-captcha mt-3 ">
                                                <Col lg={12}>
                                                    <ReCAPTCHA
                                                        sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                                                    //   onChange={handleVerification}
                                                    />
                                                </Col>
                                            </Row>


                                            <div className="footer_line mt-3">
                                                <h6>Already have an account? <NavLink className="page_move_btn" to="/login">Login</NavLink></h6>
                                            </div>
                                            <div className="float-center">

                                            <button onClick={(e) =>handleSignupClick(e)} >
                                        Signup
                                    </button>
                                    {errorMessage && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                        {errorMessage}

                        
                    </div>
                )}
                   {responseMessage && (
                    <div style={{ color: "green", marginTop: "10px" }}>
                        {responseMessage}
                    </div>
                )}
                                            </div>
                                        </Form>
                                    </>}
                                {step === 2 &&
                                    <Form>
                                    <div className="text-center mb-4">
                                      <h1>Enter OTP</h1>
                                    </div>
                                    {/* Display all 6 input fields for OTP in a single row */}
                                    <Row className="">
                                      {otpInputs.map((value, index) => (
                                        <Col key={index} xs={2}>
                                          <Form.Control
                                            ref={otpRefs.current[index]}
                                            type="text"
                                          className="otp-feild"
                                            value={value}
                                            onChange={(e) =>
                                              handleOtpInputChange(index, e.target.value)
                                            }
                                          />
                                        </Col>
                                      ))}
                                    </Row>
                                  <div className="float-end">
                                            <button onClick={(e) => prevStep(e)} className="me-3" >
                                                Previous
                                            </button>
                                            <button onClick={(e) =>handleOtpClick(e)}  >
                                                Submit
                                            </button>
                                        </div>
                                        {otpApiResponse && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                        {otpApiResponse}
                    </div>
                )}
                                  </Form>
                                    }
                            </form>


                        </div>


                    </div></Col>
                </Row>
            </Container>
          
            <Footer />
        </>

    );
}
export default Signup;