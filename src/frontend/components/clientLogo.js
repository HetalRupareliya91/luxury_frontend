import React, { useEffect, useState } from "react";
import AdamsBeach from "../../assets/img/whowithwork/Adams Beach.png";
import AlionBeach from "../../assets/img/whowithwork/Alion Beach.png";
import Amathus from "../../assets/img/whowithwork/Amathus.png";
import Aphrodite from "../../assets/img/whowithwork/Aphrodite Hills.png";
import Atlantica from "../../assets/img/whowithwork/Atlantica Aeneas.png";
import Ayii from "../../assets/img/whowithwork/Ayii Anargyri.png";
import Columbia from "../../assets/img/whowithwork/Columbia Beach.png";
import Coral from "../../assets/img/whowithwork/Coral Beach.png";
import Elysium from "../../assets/img/whowithwork/Elysium.png";
import FourSeasion from "../../assets/img/whowithwork/Four Seasons.png";
import Londa from "../../assets/img/whowithwork/Londa.png";
import Mediterranean from "../../assets/img/whowithwork/Mediterranean.png";
import Napa from "../../assets/img/whowithwork/Napa Mermaid.png";
import Nissi from "../../assets/img/whowithwork/Nissi Beach Resort.png";
import StRaphael from "../../assets/img/whowithwork/St Raphael.png";
import Apollonia from "../../assets/img/whowithwork/The Royal Apollonia.png";
import axios from "axios";
import API from "../../utils";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";


function ClientLogo() {
    const [apiData, setApiData] = useState([]);
  
    useEffect(() => {
      handleFetchLogos();
    }, []);
  
    const handleFetchLogos = async () => {
      try {
        const response = await axios.post(
          `${API.BASE_URL}${API.ENDPOINTS.homeInfo}`,
          {
            type: "3",
          },
          {
            headers: {
              Authorization: "hXuRUGsEGuhGf6KM",
            },
          }
        );
        const data = response.data;
        if (data.status === true) {
            setApiData(data.data.details.map((item) => item.image));
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
  
    return (
        <section className="spad clientlogosection">
    <div className="page-headings mb-4">
<div className="heading-section">
<h1 className="">Who Are We Working With</h1>
</div>
</div>
          
        <div className="slider">
        {apiData.map((logo, index) => (
          <div className="item" key={index}>
            <NavLink to="">
              <Image alt={`logo-${index}`} src={logo} />
            </NavLink>
          </div>
        ))}
        </div>
      </section>
    );
  }
  
  export default ClientLogo;

