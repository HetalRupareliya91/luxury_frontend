import React, { useRef, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { FaArrowUp, FaComment, FaCross, FaHeart, FaList, FaPlug, FaPlus, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import images from "../../assets/img/hero/hero-3.jpg"
import ReviewPopup from "../modalPopUp/reviewPopup";
function Review() {
  const [activeTopic, setActiveTopic] = useState("");

  const sliderRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");


  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setShowPopup(true);
    setActiveTopic(topic); // Set the active topic here
  };

  const reviews = [
    {
      img: images,
      author: "Prasanna",
      
      comment:
        "Everything from the room, the view, the space to the food the service and the ambience- everything was delightful.",
      link: "Read More"
    },
    {
      img: images,
      author: "Kaushal",
      
      comment:
        "location is fantastic Reception team is good . however they are expecting guest to reach out.Breakfast spread and varieties are good.",
      link: "Read More"
    },
    {
      img: images,
      author: "Prasanna",
      
      comment:
        "Everything from the room, the view, the space to the food the service and the ambience- everything was delightful.",
      link: "Read More"
    },
    {
      img: images,
      author: "Prasanna",
      
      comment:
        "Everything from the room, the view, the space to the food the service and the ambience- everything was delightful.",
      link: "Read More"
    },

  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section>
      <Container>
        <div >
          <h1 className="text-center mt-5">Guest Reviews</h1>
          <div>
            <h3 className="rd-title"><FaList className="m-0 locaton-icon"/> Categories:</h3>

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
          <h3 className="mb-4 rd-title"><FaComment className="m-0 locaton-icon"/> Select topics to read reviews:</h3>
          <ul className="topics">
  <li className={`readreview ${activeTopic === 'Breakfast' ? 'active' : ''}`}  onClick={() => handleTopicClick("Breakfast")}>{activeTopic === 'Breakfast' ? <FaTimes /> : <FaPlus />} Breakfast</li>
  <li className={`readreview ${activeTopic === 'Dinner' ? 'active' : ''}`} onClick={() => handleTopicClick("Dinner")}>{activeTopic === 'Dinner' ? <FaTimes /> : <FaPlus />} Dinner</li>
  <li className={`readreview ${activeTopic === 'Room' ? 'active' : ''}`} onClick={() => handleTopicClick("Room")}>{activeTopic === 'Room' ? <FaTimes /> : <FaPlus />} Room</li>
  <li className={`readreview ${activeTopic === 'Location' ? 'active' : ''}`} onClick={() => handleTopicClick("Location")}>{activeTopic === 'Location' ? <FaTimes /> : <FaPlus />} Location</li>
  <li className={`readreview ${activeTopic === 'Pool' ? 'active' : ''}`} onClick={() => handleTopicClick("Pool")}>{activeTopic === 'Pool' ? <FaTimes /> : <FaPlus />} Pool</li>
</ul>


        </Row>
        <Row>
          <div>
            <h3 className="rd-title"><FaHeart className="m-0 locaton-icon"/> See what guests loved the most:</h3>
          </div>
          <Col>
            <Slider {...sliderSettings} ref={sliderRef}>
              {reviews.map((deal, index) => (
                <div key={index} className="review-slider ">
                  <a className="d-flex">
                    {/* <Image src={deal.img}></Image> */}
                    <h6>{deal.author}</h6>
                  </a>
                
                  <div>
                    <span className="valid">{deal.comment}</span>
                  </div>
                  <div>
                    <a>{deal.link}</a>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>

      </Container>
      {showPopup && (
        <ReviewPopup onClose={() => setShowPopup(false)}>
         
        </ReviewPopup>
      )}
    </section>
  );
}

export default Review;
