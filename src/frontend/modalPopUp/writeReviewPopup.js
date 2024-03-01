    import React, { useState } from "react";
    import Logo from "../../assets/img/logo.svg";
    import { Col, Container, Modal,Row, Image, Form } from "react-bootstrap";
    
    import { FaArrowUp,FaComment,FaHeart,FaList, FaPlus, FaTimes} from "react-icons/fa";
    import { NavLink } from "react-router-dom";
    function WriteReviewPopup() {
      const [showModal, setShowModal] = useState(true);
      const [categoryProgress, setCategoryProgress] = useState({
        staff: 50,
        facilities: 70,
        cleanliness: 60,
        comfort: 80,
        valueForMoney: 40,
        anotherCategory: 60,
      });
    
      const handleCloseModal = () => setShowModal(false);
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        setShowModal(false);
      };
    
      const handleMouseDown = () => {
        // Implement your logic for mouse down
      };
    
      const handleMouseUp = () => {
        // Implement your logic for mouse up
      };
    
      const handleMouseMove = (event, category) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const width = rect.width;
    
        const calculatedValue = Math.round((x / width) * 100);
        setCategoryProgress((prevProgress) => ({
          ...prevProgress,
          [category]: Math.min(100, Math.max(0, calculatedValue)),
        }));
      };
    
      const renderProgressBar = (width) => {
        return (
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${width}%` }}
            aria-valuenow={width}
            aria-valuemin="0"
            aria-valuemax="100"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          ></div>
        );
      };
    
        return(
            <Modal show={showModal} onHide={handleCloseModal} className="modalpopup">
            <Modal.Header closeButton>
            {/* <Modal.Title>Newsletter Popup</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
            <div className="text-center">
                <Image src={Logo} />
            </div>


            <div >
          <div>

            <Row>

            {Object.keys(categoryProgress).map((category) => (
                <Col lg={6} key={category}>
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      {category} <FaArrowUp className="view_icon" />{" "}
                    </div>
                    <div>{categoryProgress[category]}</div>
                  </div>

                  <div
                    className="progress mb-4"
                    onMouseMove={(e) => handleMouseMove(e, category)}
                  >
                    {renderProgressBar(categoryProgress[category])}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
    
            <div className="">
                                <Form action="#" className="contact-form">
                                    <Row >
                                        <Col lg={12} >
                                            <input type="text" placeholder="Your Name" />
                                        </Col>
                                        <Col lg={12}>
                                            <input type="text" placeholder="Your Email" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea placeholder="Describe Your Experience"></textarea>
                                            <button type="submit" className=" btn-default-submit ">Submit Now</button>
                                        </Col>
                                    </Row>
                                </Form>

                            </div>
            </Modal.Body>
        </Modal>

        )
    }
    export default WriteReviewPopup