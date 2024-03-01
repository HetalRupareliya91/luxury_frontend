import React, { useState } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Col, Form, Row } from "react-bootstrap";
import { stateToHTML } from 'draft-js-export-html';
import axios from "axios";
import API from "../../../utils";
import PayPalButton from "../../components/paypal";
function SpecialOffers() {
  const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
  const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());

  const [image, setImage] = useState(null)
  const handleInputChange = (e) => {
    const { name, value } = e.target || {};;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleimageChange = (e) => {
    const file = e.target.files[0];
    // console.log("Selected File:", file);
    setImage(file);

  };


  const [formData, setFormData] = useState({
    
    offerTitle: '',
    country: '',
    phoneNumber: '',
    link: '',
    offerValidTo: '',
    offerValidFrom: '',
    HotelContent: '',
  
  });

  const [validationErrors, setValidationErrors] = useState({
    offerTitle: '',
    country: '',
    phoneNumber: '',
    link: '',
    offerValidTo: '',
    offerValidFrom: '',
    HotelContent: '',
  });

  const handleOfferEditorChange = (editorState) => {
    setBlogEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    setFormData({
      ...formData,
      specialOffersContentHTML: htmlContent,
    });
  };

  const handleAddBlogs = async (e) => {
    const token = localStorage.getItem("token");
    console.log(token)
    e.preventDefault();

    const formDatas = new FormData();
    formDatas.append('type', 2);
    formDatas.append('hotel_id', 3);
    formDatas.append('offer_title', formData.offerTitle);
    formDatas.append('contact_no', formData.country);
    formDatas.append('phone_number', formData.phoneNumber);
    formDatas.append('redeem_link', formData.link);
    formDatas.append('from_date', formData.offerValidFrom);
    formDatas.append('to_date', formData.offerValidTo);
    formDatas.append('description', formData.specialOffersContentHTML);
 
    try {
      const response = await axios.post(
        `${API.BASE_URL}${API.ENDPOINTS.addSpecialOffers}`,
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


    // Validate email
    if (!formData.offerTitle) {
      newErrors.offerTitle = "offerTitle is required";
      isValid = false;
    } else {
      newErrors.offerTitle = "";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "phoneNumber is required";
      isValid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!formData.country) {
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
      <Form id="addBlogForm" onSubmit={handleAddBlogs}>
      
        <div className='text-center mb-3'>
          <h5>YOU CAN ADD A EXCLUSIVE OFFER” HERE. (*non-obligatory)</h5>
        </div>
        <Row className="">
          <Col lg={6}>
            <Form.Label>Offer Title</Form.Label>
            <Form.Control className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder='Enter Offer Title' value={formData.offerTitle}
              onChange={handleInputChange}/>
          </Col>
                 
          <Col lg={6}>
          <Form.Label>Phone number</Form.Label>

            <Form.Control className="sidebar-input" type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber}
              onChange={handleInputChange}  />
            {/* {validationErrors.phoneNumber && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.phoneNumber}
              </div>
            )} */}
          </Col>
       
          <Col lg={6}>
          <Form.Label>Dates offer valid from date</Form.Label>
            <Form.Control className="sidebar-input" type="date" id="offerValidfrom" name="offerValidFrom" placeholder='Dates Offer Valid From' value={formData.offerValidFrom}
              onChange={handleInputChange} />
            {/* {validationErrors.offerValidFrom && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.offerValidFrom}
              </div>
            )} */}
          </Col>
          <Col lg={6}>
          <Form.Label>Dates offer to date</Form.Label>
            <Form.Control className="sidebar-input"
              type="date"
              id="offerValidTo"
              name="offerValidTo"
              placeholder='Dates Offer Valid To'
              value={formData.offerValidTo}
              onChange={handleInputChange} />
            {/* {validationErrors.offerValidTo && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.offerValidTo}
              </div>
            )} */}
          </Col>
      
          <Col lg={12}>
          <Form.Label>Redeem Link</Form.Label>
            <Form.Control className="sidebar-input" type="text" id="link" name="link" placeholder='Enter The Link Where Client Can Redeem Your Offer' value={formData.link}
              onChange={handleInputChange}  />
            {/* {validationErrors.link && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.link}
              </div>
            )} */}
          </Col>

          <Col lg={12}>
          <Form.Label>Description</Form.Label>
            {/* <Editor
              editorState={blogEditorState}
              onEditorStateChange={handleOfferEditorChange}
              value={formData.specialOffersContentHTML}
              onChange={handleInputChange}
            />        */}

            <Form.Control
            as="textarea"
            rows={2}
            value={formData.specialOffersContentHTML}
            onChange={handleInputChange}
            />
            </Col>
        </Row>
    
        <div className="paypal_buttons mt-3">
                                        <PayPalButton />                                        
                                    </div>
      </Form>

     
    </>
  );
}
export default SpecialOffers;