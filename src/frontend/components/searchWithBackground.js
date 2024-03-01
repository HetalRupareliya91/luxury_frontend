import React ,{ useEffect, useState }from "react";
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import API from '../../utils';
import { FaSearch } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";
import CountryDropdown from "./countryDropDown";
function SearchWithBackground(){
  const navigate = useNavigate();  
  const [searchResults, setSearchResults] = useState([]);
  const [hotelName, setHotelName] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

      const handleSearch = async () => {

        try {
          const response = await axios.post(
            `${API.BASE_URL}${API.ENDPOINTS.hotelSearch}`,
            {
              hotel_keyword: hotelName,
              country: selectedCountry,
            },
            {
              headers: {
                Authorization: "hXuRUGsEGuhGf6KM",
              },
            }
          );
    
          if (response.status === 200) {
            setSearchResults(response.data.hotel_data);

            if (!hotelName && selectedCountry) {
              navigate('/hotels-selection', { state: { filter: selectedCountry } });
            }
            if (hotelName && selectedCountry) {
              navigate('/hotels-selection', { state: { filter: selectedCountry } });
            }
            
          } else {
            console.error("Search failed:", response.status);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      const handleHotelNameChange = async (e) => {
        setHotelName(e.target.value);
             await handleSearch();
        setShowSearchResults(true);
      };

      
 const handleSearchResultClick = (selectedHotelName) => {
   setHotelName(selectedHotelName);
   setShowSearchResults(false);


 };

 
 const handleSearchButtonClick = async () => {
   await handleSearch();
   setShowSearchResults(true);

   if (searchResults.length > 0) {
    const selectedHotel = searchResults[0]; 
    navigate(`/hotel-details/${selectedHotel.id}/${selectedHotel.country}/${selectedHotel.hotel_title}`);

 };
} 
    return(
<div className='serch-div'>
 <div className="booking-form-rooms">
              <Form action="#" className='booking-form-rooms-form'>
                 <Row >
                    <Col lg={5} >
                       <div className="check-date">
                          <input type="text" placeholder="Enter Hotel Name" value={hotelName}
                   onChange={handleHotelNameChange}/>
                          <i className="fa fa-building" aria-hidden="true"></i>
                       </div>


                       {searchResults && searchResults.length > 0  && (
                   <div className="search-results autocom-box ">
                     {/* <h2>Search Results:</h2> */}
                     <ul>
                       {searchResults.map((result) => (
                        
                         <li  key={result.id}
                         onClick={() => handleSearchResultClick(result.hotel_title)}><NavLink to={(`/hotel-details/${result.id}/${result.country}/${result.hotel_title}`)}>{result.hotel_title}</NavLink></li>
                         // Add other properties as needed
                       ))}
                     </ul>
                   </div>
                 )}
                    </Col>
                    <Col lg={5} >
                    <CountryDropdown onCountryChange={handleCountryChange} />
                    </Col>
                    <Col lg={2} >
                       <button type="submit" className='serch-btn' onClick={handleSearchButtonClick}><i><FaSearch/></i></button>
                    </Col>
                 </Row>
              </Form>
           </div>
           </div>

    );
}
export default SearchWithBackground;