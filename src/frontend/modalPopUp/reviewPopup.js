import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import { FaArrowUp,FaComment,FaHeart,FaList, FaPlus, FaTimes} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import WriteReviewPopup from "./writeReviewPopup";

function ReviewPopup({ onClose, children }){


    const [isWriteReviewPopupOpen, setWriteReviewPopupOpen] = useState(false);

    const handleWriteReviewClick = () => {
      setWriteReviewPopupOpen(true);
    };
  
    const handleCloseWriteReviewPopup = () => {
      setWriteReviewPopupOpen(false);
    };
  
    return( 
<>

{/* <div >
          <h1 className="text-center mt-5">Guest Review</h1>
          <div>
            <h3 className="rd-title"><FaList /> Categories:</h3>

            <Row>

              <Col lg={4}>
                <div className="d-flex justify-content-between " ><div>   Staff <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>

                <div className="progress">

                  <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Facilities <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress mb-4">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>

              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Cleanliness <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4} >

                <div className="d-flex justify-content-between " ><div>   Comfort <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Value for money <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Another Category <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </div>
        </div> */}


<div className="popup-container">
      <div className="popup">
     
     
<div className="d-flex justify-content-between ">
<button onClick={onClose}>
            <FaTimes />
            
          </button>

        <div >
            <button onClick={handleWriteReviewClick}><NavLink >Write a Review</NavLink></button>
        </div>

        </div>

         <div >
          <div>
            <h3 className="rd-title"><FaList /> Categories:</h3>

            <Row>

              <Col lg={4}>
                <div className="d-flex justify-content-between " ><div>   Staff <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>

                <div className="progress">

                  <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Facilities <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress mb-4">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>

              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Cleanliness <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4} >

                <div className="d-flex justify-content-between " ><div>   Comfort <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Value for money <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg={4}>

                <div className="d-flex justify-content-between " ><div>   Another Category <FaArrowUp className="view_icon" />   </div><div>70.5</div></div>
                <div className="progress">

                  <div
                    className="progress-bar  "
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <Row className="mt-5 mb-4">
          <h3 className="mb-4 rd-title"><FaComment /> Select topics to read reviews:</h3>
          <div className="topics">
            <span className="readreview Breakfast" ><FaTimes />Breakfast</span>
            <span className="readreview Dinner" ><FaTimes />Dinner</span><span className="readreview" ><FaPlus />Room</span><span className="readreview" ><FaPlus />Location</span><span className="readreview" ><FaPlus />Pool</span></div>
        </Row>


        <Row>
          <div>
            <h3 className="rd-title"><FaHeart /> See what guests loved the most:</h3>
          </div>
          <Col lg={12}>
          <div className="review-slider ">
               
                  <div>
                    <a>
                      <h6>Prasanna</h6>
                    </a>
                  </div>
                  <div>
                    <span className="valid">Everything from the room, the view, the space to the food the service and the ambience- everything was delightful.,</span>
                  </div>
                  {/* <div>
                    <a></a>
                  </div> */}
                </div>
          </Col>
          </Row>
       
        <div className="popup-content">{children}</div>
      </div>
    </div>

    {isWriteReviewPopupOpen && (
        <WriteReviewPopup onClose={handleCloseWriteReviewPopup} />
      )}

</>

    );
}
export default ReviewPopup;