import React, { useState } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Col, Form, Row } from "react-bootstrap";
import { stateToHTML } from 'draft-js-export-html';
import axios from "axios";  
import API from "../../../utils";
import PayPalButton from "../../components/paypal";
function AddBlogs() {
  const uid = localStorage.getItem("userId")
  const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
  const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());

  const [image, setImage] = useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target || {};;
    setFormData({
      ...formData,
      [name]: value,
    });
    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };
  const handleimageChange = (e) => {
    const files = e.target.files[0];
    setImage(files) ;
    setValidationErrors({
      ...validationErrors,
      image: "",
    });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target || {};
  //   setFormData({
  //     ...formData,
  //     [name]: files[0],
  //   });
  // };


  // const handleHotelEditorChange = (editorState) => {
  //   setHotelEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   setFormData({
  //     ...formData,
  //     hotelDescription: JSON.stringify(contentRaw),
  //   });
  // };

  // const handleOfferEditorChange = (editorState) => {
  //   setBlogEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   setFormData({
  //     ...formData,
  //     blogContent: JSON.stringify(contentRaw),
  //   });
  // };
  // const handleBlogEditorChange = (editorState) => {
  //   setBlogEditorState(editorState);
  // };

  const [formData, setFormData] = useState({
    newsType:'',
    businessName: '',
   fullName: '',
    email: '',
    blogTitle: '',
    youtubeLink: '',
    image: [],
    hotelDescription: '',
       user_id: uid,
    // status:"1",
    catagory:"",
    editor_choice:"ffggruygre",
    news_views:"",
    news_likes:"",
    hotelDescriptionHTML: '', 
  });

  const [validationErrors, setValidationErrors] = useState({
    newsType:'',
    businessName: "",
    country: "",
    fullName: "",
    email: "",
    blogTitle: "",
    youtubeLink: "",
   
    offerTitle: "",
    phoneNumber: "",
    contactPhoneNumber: "",
    link: "",
    offerValidFrom: "",
    offerValidTo: "",
    editor_choice:""
    
  });


  

 

  const handleAddBlogs = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const formDatas = new FormData();
    formDatas.append('news_type', formData.newsType);
    formDatas.append('bussiness_name', formData.businessName);
    formDatas.append('full_name', formData.fullName);
    formDatas.append('email_address', formData.email);
    formDatas.append('news_title', formData.blogTitle);
    formDatas.append('youtube_link', formData.youtubeLink);
    formDatas.append('news_type', "type");
    formDatas.append(`news_images`, image); 
    formDatas.append('news_desc', formData.hotelDescriptionHTML);
    formDatas.append('user_id', formData.user_id);
    // formDatas.append('status', formData.status);
    formDatas.append('catagory', formData.catagory);
    formDatas.append('editor_choice', formData.editor_choice);
    formDatas.append('news_likes', formData.news_likes);
    formDatas.append('news_views', formData.news_views);


    formDatas.append('contact_no', "ifghgi");
    formDatas.append('description',"dfdhbghb" );
    formDatas.append('from_date',"22-4-2024"  );
    formDatas.append('offer_title', "dfdhbghb");
    formDatas.append('phone_number',"dfdhbghb" );
    formDatas.append('redeem_link', "dfdhbghb");
    formDatas.append('special_offers',"dfdhbghb" );
    formDatas.append('to_date', "22-4-2024" );


    try {
      const response = await axios.post(
        `${API.BASE_URL}${API.ENDPOINTS.createNews}`,
        formDatas,
        {
          headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.status === true) {
        // console.log("news  added successfully");
      } else {
        console.error("Failed to add news");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    let isValid = true;
    const newErrors = { ...validationErrors };

    // Validate businessName
    if (!formData.businessName ) {
      newErrors.businessName = "Business Name is required";
      isValid = false;
    } else {
      newErrors.businessName = "";
    }

    // Validate fullName
    if (!formData.fullName) {
      newErrors.fullName = "Name is required";
      isValid = false;
    } else {
      newErrors.fullName = "";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate blogTitle
    if (!formData.blogTitle) {
      newErrors.blogTitle = "News Title is required";
      isValid = false;
    } else {
      newErrors.blogTitle = "";
    }

    if (image.length === 0) {
      newErrors.image = "Image is required";
      isValid = false;
    } else {
      newErrors.image = "";
    }

    // Validate email
    if (!formData.offerTitle) {
      newErrors.offerTitle = "offerTitle is required";
      isValid = false;
    } else {
      newErrors.offerTitle = "";
    }
    // Validate email
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "phoneNumber is required";
      isValid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!formData.offercountry) {
      newErrors.offercountry = "Offer Country is required";
      isValid = false;
    } else {
      newErrors.offercountry = "";
    }

    // Validate email
    if (!formData.link) {
      newErrors.link = "link is required";
      isValid = false;
    } else {
      newErrors.link = "";
    }
    // Validate email
    if (!formData.offerValidFrom) {
      newErrors.offerValidFrom = "offer ValidFrom is required";
      isValid = false;
    } else {
      newErrors.offerValidFrom = "";
    }
    if (formData.catagory === "select" || formData.catagory === "") {
      newErrors.catagory = "Please select a valid category";
      isValid = false;
    } else {
      newErrors.catagory = "";
    }

    // Validate email
    if (!formData.offerValidTo) {
      newErrors.offerValidTo = "Offer ValidTo is required";
      isValid = false;
    } else {
      newErrors.offerValidTo = "";
    }

    setValidationErrors(newErrors);
    return isValid;
  };

  return (
    <>
      {/* <h3 className="mb-4">Add A New Blog</h3> */}
      <Form id="addBlogForm" onSubmit={handleAddBlogs}>
        <Row className="mb-3">

          <Col lg={6} className="mb-3">
            <Form.Label>Name Of Business</Form.Label>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="businessName"
              name="businessName"
              placeholder='Name Of Business'
              value={formData.businessName}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.businessName ? "red" : "" }}
            />
            {validationErrors.businessName && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.businessName}
              </div>
            )}
          </Col>
        

          <Col lg={6} md={6} className="mb-3">
          <Form.Label>News Catagory</Form.Label>
              <select
               className="sidebar-input"
               id="catagory"
                name="catagory"
                placeholder='News Catagory '
                value={formData.catagory}
                onChange={handleInputChange}
                style={{ borderColor: validationErrors.catagory ? "red" : "" }}
              >
               <option value="select">Select Category</option>
                <option value="hotelNews">Hotel News</option>
                <option value="generalnews">General News</option>
                
              </select>
              {validationErrors.catagory && (
    <div style={{ color: "red", textAlign: "left" }}>
      {validationErrors.catagory}
    </div>
  )}
          </Col>
        
        
          <Col lg={6} className="mb-3">
          <Form.Label>Your Name</Form.Label>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder='Your Name'
              value={formData.fullName}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.fullName ? "red" : "" }}
            />
            {validationErrors.fullName && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.fullName}
              </div>
            )}
          </Col>
       

          <Col lg={6} className="mb-3">
          <Form.Label>News Title</Form.Label>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="blogTitle"
              name="blogTitle"
              placeholder='News Title'
              value={formData.blogTitle}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.blogTitle ? "red" : "" }}
            />
            {validationErrors.blogTitle && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.blogTitle}
              </div>
            )}
          </Col>

          <Col lg={6} className="mb-3">
          <Form.Label>Email Address</Form.Label>
            <Form.Control
              className="sidebar-input"
              type="email"
              id="email"
              name="email"
              placeholder='Your Email Address'
              value={formData.email}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.email ? "red" : "" }}
            />

            {validationErrors.email && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.email}
              </div>
            )}

          </Col>
          <Col lg={6} className="mb-3">
    
          <Form.Label>News Image</Form.Label>

<Form.Control
              className=" sidebar-input"
              id="image"
              name="image"
              type="file"
              placeholder="News Image"
              
              onChange={handleimageChange}
              style={{ borderColor: validationErrors.image ? "red" : "" }}
            />
            {validationErrors.image && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.image}
              </div>
            )}
          </Col>

          <Col lg={12} className="">
          <Form.Label>Youtube Link (optional)</Form.Label>
          <Form.Control
              className=" sidebar-input"
              type="text"
              id="youtubeLink"
              name="youtubeLink"
              placeholder='Youtube Link'
              value={formData.youtubeLink}
              onChange={handleInputChange}
            />

          </Col>
        </Row>
       
        <Row className=" mb-3">

          <Col lg={12}>
            
<Form.Label>Description</Form.Label>
            <Form.Control
            as="textarea"
            row="3"
            name="hotelDescriptionHTML"
            value={formData.hotelDescriptionHTML}
              onChange={handleInputChange}
            ></Form.Control>
          </Col>
        </Row>
        <Row className=" mb-3">
        
          <Col lg={6}>
            <button type="submit" >Add News</button>
          </Col>
        </Row>
        <div className="text-center">
          <p>Your article will stay on our Platform for unlimited period of time</p>
        </div>

        <div className="paypal_buttons">
                                        <PayPalButton />                                        
                                    </div>
      </Form>

     
    </>
  );
}
export default AddBlogs;