import React ,{useEffect, useState} from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';
import News1 from '../../../assets/img/news1.jpg'
import News2 from '../../../assets/img/news2.jpg'
import axios from "axios";
import API from "../../../utils";
import { useNavigate } from "react-router-dom";

function AllHotels( { onEditClick }){
  const userId = localStorage.getItem("userId");

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const navigate = useNavigate();
  const [apiData, setApiData] = useState("");
  const [postsPerPage] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const[hotel_id, setHotelId]=useState("")



  

  const fetchAllHotels = async () => {
    // const token = localStorage.getItem("token");
    // console.log(token);
    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.userHotel}`, 
      {
        user_id:userId,
      },
      {
        headers: {
          // "Authorization": "Bearer " + token,
          Authorization: "hXuRUGsEGuhGf6KM",
        }
      });
      const data = response.data;
      if (data.status === true) {
        setApiData(data.data);
        // console.log(data)
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchAllHotels();
  }, []);



  // const handleViewClick = async (hotel) => {
  //   try {
  //     // Make an API call using the hotel id
  //     const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS}}`, {
  //       headers: {
  //         Authorization: "hXuRUGsEGuhGf6KM",
  //       },
  //     });
  
  //     const roomData = response.data;
  
  //     if (roomData.status === true) {
       
  //       history.push(`/hotel-details/${hotel.id}`);
  //     } else {
  //       console.error("Failed to fetch room details");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };
  const handleViewButtonClick = (hotel) => {
    // Navigate to the room-details page with the news id in the URL
    navigate(`/hotel-details/${hotel.id}/${hotel.country}/${hotel.hotel_title}`);
  };


  
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  
  
  const handleEditButtonClick = (hotel) => {
    setSelectedHotel(hotel);
    setHotelId(hotel.id)
    setShowEditForm(true);
    onEditClick(hotel.id);

    
  };

  const closeEditForm = () => {
    setSelectedHotel(null);
    setShowEditForm(false);
  };
    return(
       <>
      <Row className='hotel-profile-div mt-4'>
        {apiData ? (
          <>
            <Col lg={4}>
              <div className='image-div'>
                <Image src={apiData.hotel_images[0]} alt={`Hotel `} />
              </div>
            </Col>

            <Col lg={8}>
              <div className='details-div mt-4'>
                <div className='mb-3'>
                  <h4>{apiData.hotel_title}</h4>
                  <h6>Created at: {formatDate(apiData.created_at)}</h6>
                  <h5>Package expiry: {formatDate(apiData.created_at)}</h5>
                </div>
                <Row className='mt-5'>
                  <Col lg={8} className='mt-2'>
                    <div className='time-left '>
                      <span>Time Left: {formatDate(apiData.created_at)}</span>
                    </div>
                  </Col>
                  <Col lg={4} className='mt-2'>
                    <div className='d-flex all-hotel-btns'>
                      <button className='me-1 btn-default' onClick={() => handleViewButtonClick(apiData)}>View</button>
                      <button className='me-1 btn-default' onClick={() => handleEditButtonClick(apiData)} >Edit</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </>
        ) : (
          <Col lg={12} className='text-center'>
            <p>No hotel added</p>
          </Col>
        )}
      </Row>
    </>
    );
}
export default AllHotels;