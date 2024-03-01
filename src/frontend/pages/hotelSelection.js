import React,{useState,useEffect}  from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import { GeoAltFill } from 'react-bootstrap-icons';
import SearchWithBackground from "../components/searchWithBackground";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import axios from "axios";
import API from "../../utils";
import { useLocation } from "react-router-dom";
import Search from "../components/search";
function HotelSelection(){

  const { state } = useLocation();
const countryFilter = state?.filter || '';



  const [apiData,setApiData]=useState("")
  const [hotelData,setHotelData]=useState([])
  const  type="hotelselection"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDetails = async (e) => {
        if (e) e.preventDefault();

        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.singlePageDetails}`,
                {
                    type: type,
                },
                {
                    headers: {
                        Authorization: "hXuRUGsEGuhGf6KM",
                    },
                }
            );

            const data = response.data;
            if (data.status === true) {
                setApiData(data.data.details);
            } else {
                console.error("signup failed:");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const fetchHotelsByCountry = async () => {
        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.hotelSearch}`,
                {
                    country: countryFilter,
                },
                {
                    headers: {
                        Authorization: "hXuRUGsEGuhGf6KM",
                    },
                }
            );

            const data = response.data;
            if (data) {
                setHotelData(data.hotel_data);
            } else {
                console.error("Failed to fetch hotels by country");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    fetchDetails();

    // Check if countryFilter is present, then fetch hotels by country
    if (countryFilter) {
        fetchHotelsByCountry();
    } else {
        // Fetch all hotels if no country filter is present
        fetchAllHotels();
    }
}, [countryFilter]); // Add countryFilter to the dependency array

  
  const fetchAllHotels = async () => {
    // const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotels}`, {
          headers: {
            Authorization: "hXuRUGsEGuhGf6KM",
          }
        });
        const data = response.data;
        // console.log(data)
        if (data.status === true) {
          setHotelData(data.data);
          // console.log(data)
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
    return(
        <>
<Header/>
<section className="spad hotel-selection-section">
<div className="page-headings mb-4 ">
<div className="heading-section">
{apiData && (
          <>
            <h1 className="">{apiData.title}</h1>
          </>
        )}</div>
</div>
   
    </section>

<Search selectedCountrys={countryFilter}/>
<section className="spad">
  <Container>
    
<Row >
{hotelData &&  hotelData.length > 0 ? (
hotelData.slice(startIndex, endIndex).map((hotel, index) => (
              <Col lg={4} md={6} key={index}>
                <a href={`/hotel-details/${hotel.id}/${hotel.country}/${hotel.hotel_title}`}>
                  <div className="room-item selection-img-div">
                    <Image
                    src={hotel.hotel_images[0]} 
                      className="hotel-selection-image"
                      alt="image"
                    />
              
                  </div>
                  <div className="hotel-section-title px-3">
                      <h5 className="mt-3">{hotel.hotel_title}</h5>
                      <div className="d-flex">
                        <GeoAltFill className="m-0 locaton-icon" />
                        <p>{hotel.country}</p>
                      </div>
                    </div>
                </a>
              </Col>
   ))
   ) : (
     <div className="text-center mt-4">
       <p>No hotels found for the selected country.</p>
     </div>
   )}
          </Row>


          </Container>
          {/* <div className="col-lg-12">
  <div className="room-pagination">
  {[...Array(Math.ceil((hotelData && hotelData.length) || 0 / itemsPerPage)).keys()].map(
  (page) => (
    <a
      key={page}
      onClick={() => handlePageChange(page + 1)}
      className={currentPage === page + 1 ? "active" : ""}
    >
      {page + 1}
    </a>
  )
)}
  </div>
</div> */}
</section>


<CallToAction/>
<Footer/>

</>
    );
}
export default HotelSelection;