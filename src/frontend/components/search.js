import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import API from '../../utils';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import CountryDropdown from './countryDropDown';

function Search({selectedCountrys}) {
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
              setShowSearchResults(false); 
            } else if (hotelName && selectedCountry) {
              navigate('/hotels-selection', { state: { filter: selectedCountry } });
              setShowSearchResults(true); 
            } else {
              setShowSearchResults(true); 
            }
      
            
          } else {
            console.error("Search failed:", response.status);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      const handleHotelNameChange = async (e) => {
        const inputText = e.target.value;
        setHotelName(inputText);
      
        if ( inputText === '' ) {
          setShowSearchResults(false);
        } else {
          await handleSearch();
          setShowSearchResults(true);
        }
      };  
 const handleSearchResultClick = (selectedHotelName) => {
   setHotelName(selectedHotelName);
   setShowSearchResults(false);
 };
 const handleSearchButtonClick = async () => {
  if (!hotelName && !selectedCountry) {
    navigate('/hotels-selection');
    setShowSearchResults(false);
  } else {
    await handleSearch();
    setShowSearchResults(true);

    if (searchResults.length > 0) {
      const selectedHotel = hotelName
        ? searchResults.find(result => result.hotel_title === hotelName)
        : searchResults[0];
      navigate(`/hotel-details/${selectedHotel.id}/${selectedHotel.country}/${selectedHotel.hotel_title}`);
    }
  }
};

   return (
     <section>
       <Container>
         <div className="booking-form">
           <Form action="#">
             <Row>
               <Col lg={5}>
                 <div className="check-date">
                   <input
                     type="text"
                     placeholder="Enter Hotel Name"
                     value={hotelName}
                     onChange={handleHotelNameChange}
                   />
                   <i className="fa fa-building" aria-hidden="true"></i>
                 </div>
                 {searchResults && searchResults.length > 0 && showSearchResults && showSearchResults !==undefined && (
                  <div className="search-results autocom-box">
                    <ul>
                      {searchResults.map((result) => (
                        <li key={result.id} onClick={() => handleSearchResultClick(result.hotel_title)}>
                          <NavLink to={`/hotel-details/${result.id}/${result.country}/${result.hotel_title}`}>
                            {result.hotel_title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
               </Col>
 
               <Col lg={5}>
                <CountryDropdown onCountryChange={handleCountryChange}  selectedCountry={selectedCountrys}/>
                    </Col>
                    <Col lg={2}>
                <button type="button"  onClick={handleSearchButtonClick}>
                  Check Availability
                </button>
              </Col>
                 </Row>
              </Form>
           </div>
         
        </Container>
     </section>
    );
 }
 export default Search;