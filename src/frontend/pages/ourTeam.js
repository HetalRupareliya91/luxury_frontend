import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import Team1 from "../../assets/img/team/65402_TanyaCEO.webp";
import Team2 from "../../assets/img/team/team1.jpg";
import Team3 from "../../assets/img/team/team2.jpg";
import Team4 from "../../assets/img/team/28566_ChrisCameraman.webp";
import Team5 from "../../assets/img/team/28660_ConstantinosOnlineDeveloper.webp";
import Team6 from "../../assets/img/team/team3.jpg";
import Team7 from "../../assets/img/team/3808_Team.webp";
import Team8 from "../../assets/img/team/26217_Alex.webp";
import Team9 from "../../assets/img/team/45294_Kim.webp";
import Team10 from "../../assets/img/team/12765_Ina.webp";
import Team11 from "../../assets/img/team/25843_Kate.webp";
import Team12 from "../../assets/img/team/235443_team2.webp";


import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import axios from "axios";
import API from "../../utils";
import { NavLink } from "react-router-dom";
function OurTeam() {
    const [apiData,setApiData]=useState("")
    const [teamData, setTeamData] = useState([]);
 
          const  type="team"
       
        useEffect(() => {
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
                    // console.log("myData", data);
                    if (data.status === true) {
                        setApiData(data.data.details);
                    } else {
                        console.error("signup failed:");
                    }
                } catch (error) {
                    console.error("Error:", error.message);
                }
            };
        
            fetchDetails();
            fetchTeam()
            window.scrollTo(0, 0);

        }, []);


        const fetchTeam = async (e) => {
            const token = localStorage.getItem("token");
            if (e) e.preventDefault();
    
            try {
                const response = await axios.get(
                    `${API.BASE_URL}${API.ENDPOINTS.allTeam}`,
                    
                    {
                        headers: {

                            // "Authorization": "Bearer " + token,
                            Authorization: "hXuRUGsEGuhGf6KM",
                        },
                    }
                );
    
                const data = response.data;
                // console.log("myData", data);
                if (data.status === true) {
                    setTeamData(data.data);
                } else {
                    console.error("signup failed:");
                }
            } catch (error) {
                console.error("Error:", error.message);
            }
        };
    
    return (
        <>
            <Header />
            <section className="my-3">
            <div className="page-headings mb-4 ">
<div className="heading-section">
<h1>{apiData.title}</h1>
</div>
</div>
                
    <Container>

        <div className="text-center ">

        </div>
        <Row>
            {teamData.map((member, index) => (
                <Col lg={4} md={6} key={index}>
                    <NavLink to="">
                        <div className="team-member" >
                            <Image src={member.image} alt="image" />
                            <div className="px-3">
                                <h5 className="mt-3">{member.name}</h5>
                                <div className="d-flex">
                                    <p>{member.position}</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </Col>
            ))}
        </Row>
    </Container>
</section>

            <CallToAction />
            <Footer />

        </>
    );
}
export default OurTeam;