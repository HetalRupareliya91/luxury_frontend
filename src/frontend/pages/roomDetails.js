import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram, FaLinkedin, FaSnapchat, FaEye, FaHeart, FaMapMarker, FaBuilding, FaSpaceShuttle, FaHome, FaList, FaPencilAlt, FaWifi, FaSwimmingPool, FaBars, FaWineBottle, FaCloudMeatball, FaTableTennis, FaRedRiver, FaRestroom, FaFootballBall, FaConciergeBell, FaFileSignature, FaGlasses, FaRProject, FaPhone, FaPhoneSquare, FaWeight, FaMeetup, FaCloudsmith, FaIntercom } from 'react-icons/fa';

import Slider from 'react-slick';

import Logo from "../../assets/img/logo.svg"
// import video from "../../assets/videos/hotelVideo.mp4"
import API from "../../utils";
import axios from "axios";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { FileEarmarkCheckFill, GeoAltFill } from "react-bootstrap-icons";
import Review from "../components/hotelReview";
import HotelSlider from "../components/youMayLikeHotel";
import VotingForm from "../components/votingForm";
import ShareThisButtons from "../components/shareButtons";
function RoomDetails() {
   const [sepcialOffersData, setSpecialOffersData]=useState("")

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
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

    const [aminitesData, setAminitesData] = useState([])
    const [facilitiesData, setFacilitiesData] = useState([])

    const location = useLocation();
    const showOfferSection = location.state ? location.state.showOfferSection : false;
        console.log("showOfferSection",showOfferSection)

        const showOfferId =location.state?location.state.specialOffersId:false
        console.log("specialOffersId",showOfferId)

        const fetchSpecialOffer = async () => {
            try {
                const response = await axios.post(
                    `${API.BASE_URL}${API.ENDPOINTS.editSpecialOffer}`,
                    { special_offer_id: showOfferId },
                    {
                        headers: {
                            Authorization: "hXuRUGsEGuhGf6KM",
                        },
                    }
                );

                const data = response.data;

                if (data.status === true) {

                  setSpecialOffersData(data.data)

                } else {
                    console.error('Failed to fetch post data');
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };


    const { hotelId } = useParams();
    const [hotelImages, setImages] = useState([])
    const [postData, setPostData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            //   const token = localStorage.getItem("token");
            try {
                // Make a POST request with the id
                const response = await axios.post(
                    `${API.BASE_URL}${API.ENDPOINTS.editHotel}`,
                    { hotel_id: hotelId },
                    {
                        headers: {
                            Authorization: "hXuRUGsEGuhGf6KM",
                        },
                    }
                );

                const data = response.data;

                if (data.status === true) {

                    setPostData(data.data);
                    setImages(data.data.hotel_images)


                } else {
                    console.error('Failed to fetch post data');
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        if (hotelId) {
            fetchData();
        }
    }, [hotelId]);


    const fetchAmenities = async () => {
        // const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotelAmenities}`, {
                headers: {
                    Authorization: "hXuRUGsEGuhGf6KM",
                },
            });
            const data = response.data;
            console.log('Amenities data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setAminitesData(data.data)

            } else {
                console.error('Invalid format: Amenities data is not an array.');
            }
        } catch (error) {
            console.error('Error fetching amenities:', error);
        }
    };

    useEffect(() => {
        fetchAmenities();
        fetchSpecialOffer();
        window.scrollTo(0, 0);

    }, []);


    const fetchfacilities = async () => {
        // const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allhotelfacilities}`, {
                headers: {
                    Authorization: "hXuRUGsEGuhGf6KM",
                },
            });
            const data = response.data;
            console.log('facilites data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setFacilitiesData(data)

            } else {
                console.error('Invalid format: Facilities data is not an array.');
            }
        } catch (error) {
            console.error('Error fetching Facilities:', error);
        }
    };

    useEffect(() => {
        fetchfacilities();
    }, []);




    return (
        <><Header />
            <section className="room-details-section spad">
                <div className="container">
                    <Row >
                        <Col lg={8} className="">

                            <Slider {...settings}>
                                {hotelImages.map((hotel, index) => (
                                    <div key={index}>
                                        <img src={hotel} alt="" className="room-details-section-image" />
                                    </div>
                                ))}
                            </Slider>

                            <div className="row">
                                <div className="col-lg-12 text-end ">
                                    <h4 className="mt-4">{postData.hotel_title} </h4>
                                    <div className="d-flex justify-content-end"><GeoAltFill className="m-0 locaton-icon" />
                                        <p>{postData.country}</p></div>

                                </div>
                            </div>

                        </Col>

                        {/* <Row >
                                <Col lg={4}>
                                    <div className="row">
                                        <div className="col-lg-12 col-6"><img src={News5} alt="" className="mb-2" /></div>
                                        <div className="col-lg-12 col-6"><img src={News5} alt="" /></div>
                                    </div>
                                </Col>
                                <div className="col-lg-8">
                                    <img src={News5} alt="" />
                                </div>
                            </Row> */}


                        <div className="col-lg-4 ">
                            <iframe width="100%" height="600" src={postData.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </Row>

                    <div className="row mt-5">

                        <div className="col-lg-8">
                            
                            <div className="rd-text">


                                <p dangerouslySetInnerHTML={{ __html: postData.about_hotel }} />
                            </div>

                            {postData.address ?(

                            <div className="rd-text">
                                <div className="rd-title mb-3">
                                    <GeoAltFill className="m-0 locaton-icon" /> Location
                                </div>


                                <p dangerouslySetInnerHTML={{ __html: postData.address }} />

                            </div>
                            ):(

                                <div></div>
                            )}
                            <div className="rd-text">
                                <div className="rd-title mb-3">
                                    <i aria-hidden="true"><FaBuilding className="m-0 locaton-icon" /></i> Rooms & Suites
                                </div>


                                <p dangerouslySetInnerHTML={{ __html: postData.rooms_and_suites }} />

                            </div>
                            {postData.restaurent_bars ?(
                            <div className="rd-text">
                                <div className="rd-title mb-3">
                                    <i className="fa fa-cutlery" aria-hidden="true"><FaSpaceShuttle className="m-0 locaton-icon" /></i>  Restaurants & Bars
                                </div>


                                <p dangerouslySetInnerHTML={{ __html: postData.restaurent_bars }} />
                            </div>

) : ( 
    <div></div>
    
    )}

{postData.spa_wellness ?(
                            <div className="rd-text">
                                <div className="rd-title mb-3">
                                    <i aria-hidden="true"><FaHome className="m-0 locaton-icon" /></i> Spa & Wellness
                                </div>


                                <p dangerouslySetInnerHTML={{ __html: postData.spa_wellness }} />

                            </div>

):(
    <div></div>

)}

{postData.other_facilities ?(
                            <div className="rd-text">
                                <div className="rd-title mb-3">
                                    <i aria-hidden="true"><FaList className="m-0 locaton-icon" /></i> Other Facilities
                                </div>

                                <p dangerouslySetInnerHTML={{ __html: postData.other_facilities }} />

                            </div>
):(

    <div></div>
)}

{postData.aditional_information ?(
                         <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaPencilAlt /></i>  Additional information
                                </div>
                                

                                <p dangerouslySetInnerHTML={{ __html: postData.aditional_information }} />

                            </div> 

                            ):(

                                <div></div>
                            )}
                            <div className="rd-text">
                                <div className="rd-title mb-3">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i> Share This
                                </div>

                                <ShareThisButtons />


                            </div>

                            <div className="room-details-aminites">
                                <div className="text-center m-4">
                                    <h1>Room Amenities</h1>

                                </div>
                                <div>
                                    <ul className="amenity_ul">

                                        {/* <Row className="room-details-aminites-row"> */}
                                        {aminitesData.map((amenity) => (
                                            // <Col lg={3} md={6} className="col-section" key={amenity.id}>

                                            <li className="aminites d-flex">
                                                <img src={amenity.fullImagePath} alt={amenity.title} className="aminites-icon m-0" />

                                                <p>{amenity.title}</p>
                                            </li>

                                            // </Col>
                                        ))}
                                        {/* </Row> */}
                                    </ul>

                                </div>
                            </div>


                            <div className="most-popular-facilites">
                                <div className="text-center m-4">
                                    <h1>Hotel Facilites</h1>

                                </div>
                                <div>


                                    <ul className="most-popular-facilites-row">
                                        <li className="col-section">
                                            <div className="facilites d-flex">
                                                <FaSwimmingPool className="aminites-icon m-0" />
                                                <p>Outdoor swimming pool</p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">

                                                <FaWifi className="aminites-icon m-0" />
                                                <p>Free Wifi</p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">
                                                <FaWineBottle className="aminites-icon m-0" />
                                                <p>Airport Shuttul</p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">
                                                <FaCloudMeatball className="aminites-icon m-0" />
                                                <p>Family Rooms</p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">
                                                <FaTableTennis className="aminites-icon m-0" />
                                                <p>Fitness Center</p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">
                                                <FaRedRiver className="aminites-icon m-0" />
                                                <p>Free Parking</p>
                                            </div>
                                        </li>

                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">
                                                <FaRestroom className="aminites-icon m-0" />
                                                <p>Spa And Wellness Center</p>
                                            </div>
                                        </li>

                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">
                                                <FaFootballBall className="aminites-icon m-0" />
                                                <p>Pool</p>
                                            </div>
                                        </li>

                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">

                                                <FaWineBottle className="aminites-icon m-0" />
                                                <p>
                                                    Bars
                                                </p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">

                                                <FaConciergeBell className="aminites-icon m-0" />
                                                <p>Cooking Classes</p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">

                                                <FaWeight className="aminites-icon m-0" />
                                                <p>
                                                   Fitness Center
                                                </p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">

                                                <FaMeetup className="aminites-icon m-0" />
                                                <p>
                                                  Meeting Rooms
                                                </p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">

                                                <FaCloudsmith className="aminites-icon m-0" />
                                                <p>
                                                 Laundry service
                                                </p>
                                            </div>
                                        </li>
                                        <li lg={3} className="col-section">
                                            <div className="facilites d-flex">

                                                <FaIntercom className="aminites-icon m-0" />
                                                <p>
                                                InterNet
                                                </p>
                                            </div>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hotel-logo">
                                <img src={Logo} alt="" className="w-50" />
                            </div>
                            <div className=" ">

                                <VotingForm hotelId={hotelId} />


                              
                                <div className="text-center mt-4">
                                    <h4>HOTEL PROFILE STATS </h4>

                                    <div className="d-flex justify-content-around">

                                    </div>

                                    <p className="f-para likeview mt-2 d-flex justify-content-around">
                                       <button><FaEye className="m-0"/> &nbsp;10 Views </button>
                                        <button><FaHeart className="m-0"/>&nbsp;5 Likes</button>
                                    </p>
                                    <p className="f-para likeview mt-2 d-flex justify-content-around">
                                        
                                        <button><FaRProject />&nbsp;8 Reviews </button>
                                        <button><FileEarmarkCheckFill />&nbsp;2 votes </button>
                                    </p>
                                    <p className="f-para likeview mt-2 d-flex justify-content-around">
                                        <button><FaEye /><NavLink to={postData.website}>15 Website Visit</NavLink></button>

                                    </p>
                                </div>
                                <div className="row  ">
                                    <div className="col-lg-12 mt-3 text-center"><button className=" btn-default w-100"><FaHeart /><NavLink to={postData.website}>Book Online </NavLink></button></div>
                                </div>
{showOfferSection && (
<div className="text-center mt-3 hotel-details-exclusive-offer">
<div >
    <h4>EXCLUSIVE OFFER</h4>
</div>
<div><FaPhoneSquare className="phone-icon m-0"/></div>
<div><a className="contact">{sepcialOffersData.contact_no}</a></div>
<div><p>{sepcialOffersData.offer_title}</p></div>
<div className="valid"> Valid from <span>{sepcialOffersData.from_date} </span> to <span>{sepcialOffersData.to_date}</span></div>
<hr className="m-0" />
<div className="span-div"><span >{sepcialOffersData.description}</span>
</div>
<hr className="m-0" />
<button className="mt-3"><NavLink to={sepcialOffersData.reedem_link}>Reedem</NavLink></button>
</div>
 )}

                            </div>
                        </div>



                        <Review />

                    </div>

                    <HotelSlider />
                </div>
            </section>
            <Footer />
        </>

    );
}
export default RoomDetails;