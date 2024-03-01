import React, { useEffect, useState } from "react";
import { FaBlog, FaDollarSign, FaHotel, FaPowerOff, FaUser } from 'react-icons/fa';
import News1 from '../../assets/img/news1.jpg'

import { Col, Image, Nav, NavItem, NavLink, Row ,Card,CardBody, Container} from 'react-bootstrap';
import API, { isUserLoggedIn } from "../../utils";
import { useNavigate } from "react-router-dom";
import AllHotels from "../pages/userprofile/allHotels";
import AllBlogs from "../pages/userprofile/allBlogs";
import AddBlogs from "../pages/userprofile/addNews";
import AddHotel from "../pages/userprofile/addHotel";
import axios from "axios";
import SpecialOffers from "../pages/userprofile/addHotelSpecialOffers";
import Header from "./header";
import Footer from "./footer";
import PersionalInformation from "../pages/userprofile/persionalInformation";
import EditHotel from "../pages/userprofile/editHotel";

function NewsSidebar(){
    const [showEditHotelForm, setShowEditHotelForm] = useState(false);
    const userName = localStorage.getItem("userName");
    const navigate = useNavigate()
    const [currentSection, setCurrentSection] = useState('myProfile');
    const showSection = (section) => {
        // console.log("dsidshihgfiugfuygfy")
        setCurrentSection(section);

        setShowEditHotelForm(false);
        // console.log(section)
      };

      const handleLogout = async (e) => {

        const token = localStorage.getItem("token");
    
        e.preventDefault();
    
        try {
           const response = await axios.post(
              `${API.BASE_URL}${API.ENDPOINTS.logout}`,
              null,
              {
                headers: {
                  "Authorization": "Bearer " + token,
                }
              }
           );
    
           if (response.data.status === true) {
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("newsLogin");
            navigate("/login")
              
              // console.log(response.data.message);
           } else {
              console.error("Logout failed:");
              const errorMessage = response.data.message || "Logout failed. Please try again.";
           document.getElementById("loginErrorMessage").innerText = errorMessage;
           }
        } catch (error) {
           console.error("Error:", error.message);
        }
     };

      useEffect(() => {
        if (!isUserLoggedIn()) {
          navigate("/login")
          return;
        }
      }, []);

      const handleEditButtonClick = () => {
        // Do something when the "Edit" button is clicked
        setShowEditHotelForm(true);
      };
    return(
<>
<Header/>
<section>
    <Container className="d-flex">
    <div id="sidebar" className="col-col-3 col-lg-2 d-col-block  sidebar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar-sticky desktopmenu">

          <div className="text-center">
            <Image id="userImage" src={News1} alt="User Image" />
            <h5 className="text-light">{userName}</h5>
            {/* <h6 className="text-light">Traveller</h6> */}
          </div>
          <hr className="sidebar-line" />
          <Nav className="flex-column">
            <NavItem className="nav-item">
              <NavLink
                className={`nav-link sidebar-list ${currentSection === 'myNews' ? 'active' : ''
                  }`}
                to="#"
                onClick={() => showSection('myNews')}
              >
                <FaHotel/>
                My News
              </NavLink>
            </NavItem><hr className="sidebar-line" />
           
            <NavItem >
              <a
                className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                  }`}
                href="#"
                onClick={() => showSection('myProfile')}
              >
                <FaUser/>
                My Profile
              </a>
            </NavItem><hr className="sidebar-line" />
            <NavItem >
              <a
                className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                  }`}
                onClick={handleLogout}
              ><FaPowerOff/>
                Logout
              </a>
            </NavItem>
          </Nav>
          <hr className="sidebar-line mb-5" />

        </div>
        <div className="sidebar-sticky mobile-menuone">
          <Row>
            <Col lg={8} >
              <Row>


                <Col lg={3} className='col-4'><Image id="userImage" src={News1} alt="User Image" className='ms-2' /></Col>
                <Col lg={9} className='col-8'><h5 className="text-light">{userName}</h5>
                  {/* <h6 className="text-light">Traveller</h6> */}
                  </Col>
              </Row>



            </Col>
            <Col lg={4} ><div className="text-center ">
              <div className='d-flex p-0'>
              <FaPowerOff/>
                Logout
              </div>
            </div></Col>
          </Row>
          <Row>
            <Col lg={12}>
              <ul className='d-flex'>
             
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myBlogs' ? 'active' : ''
                      }`}
                    href="/userprofile"
                    onClick={() => showSection('myBlogs')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f0f2f4" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" /></svg>
                    My News
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myProfile')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#e6e7ea" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    My Profile
                  </a>
                </li>
              </ul>
            </Col>
          </Row>


        </div>
      </div>


      <div id="content">
            <div id="welcomeMessage" >
            {currentSection === 'myNews' && !showEditHotelForm && (
              <div id="myNews" >
                <button className='userprofilebuttons' >All News</button>
                <button className='userprofilebuttons' onClick={() => showSection('addNews')} >Add News</button>
           
                  <AllBlogs onEditClick={handleEditButtonClick} />

              </div>
 )}
  {/* {currentSection === 'myBlogs' && !showEditHotelForm && (
              <div id="myBlogs" style={{ display: currentSection === 'myBlogs' ? 'block' : 'none' }}>
                <button className='userprofilebuttons'  >All Special Offers</button>
                <button className='userprofilebuttons' onClick={() => showSection('addBlogs')}>Add Special Offers</button>
                 <AllBlogs />
              </div>
              )} */}


{currentSection === 'myProfile' && !showEditHotelForm && (
              <div id="myProfile" >
              <PersionalInformation/>
              </div>

)}

{currentSection === 'addNews' && !showEditHotelForm && (
              <div id="addNews">
              <AddBlogs />

                
              </div>
               )}
          
          {/* {currentSection === 'addHotels' && !showEditHotelForm && (
              <div id="addHotels" style={{ display: currentSection === 'addHotels' ? 'block' : 'none' }}>
               
              <AddHotel/>
                
              </div>
              )} */}

              {showEditHotelForm && (
        <div id="editHotelForm" >
          <EditHotel onClose={() => setShowEditHotelForm(false)} />
        </div>
         )}
          
            </div>
          </div>
    </Container>
</section>

<Footer/>
</>
    );
}

export default NewsSidebar;