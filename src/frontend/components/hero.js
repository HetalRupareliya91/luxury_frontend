import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel, Image } from "react-bootstrap";
import axios from "axios";
import API from "../../utils";

function Hero() {
  const [sliderData, setSliderData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Parent carousel's active index
  const [activeFileImages, setActiveFileImages] = useState([]);
  const [activeFileIndex, setActiveFileIndex] = useState(0); // Child carousel's active index
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMagazines();
  }, []);

  const fetchMagazines = async () => {
    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allMagazines}`, {
        headers: {
          Authorization: "hXuRUGsEGuhGf6KM",
        },
      });
      const data = response.data;
      if (data.status === true) {
        setSliderData(data.data);
        setActiveFileImages(data.data[0]?.file_image || []); // Initialize activeFileImages with the first item's images
        setLoading(false);
      } else {
        setError("Failed to fetch data");
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    setActiveFileIndex(0);
    const newActiveFileImages = sliderData[selectedIndex]?.file_image;
    if (newActiveFileImages !== null && newActiveFileImages !== undefined) {
      setActiveFileImages(newActiveFileImages);
    } else {
      // Handle the case when file_image is null or undefined
      // You can set it to an empty array or take appropriate action
      setActiveFileImages([]);
    }
  };
  

  const handleFileSelect = (selectedIndex) => {
    setActiveFileIndex(selectedIndex); // Update child carousel's active index
  };

  return (
    <section className="hero-section">
      <Container>
        <div className="hero-slider">
          <Row>
            <Col lg={4} md={4} className="mt-3">             
              <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null} id="carousel-parent">
                {sliderData.map((magazine, index) => (
                  <Carousel.Item key={index} >
                    <img
                      src={magazine.thumbnail}
                      alt={`Slide ${index + 1}`}
                      className="slider-img"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col lg={8} md={8} className="mt-3">
              {activeFileImages.length > 0 && (
                <Carousel id="carousel-child" activeIndex={activeFileIndex} onSelect={handleFileSelect} interval={null}>
                  {activeFileImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="pdf-img"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Hero;