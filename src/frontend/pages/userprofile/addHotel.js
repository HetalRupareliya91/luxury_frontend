import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col,  Form, Image, Nav, ProgressBar, Row } from 'react-bootstrap';
import API from "../../../utils";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CountryDropdown from "../../components/countryDropDown";
import { FaEuroSign } from "react-icons/fa";
import PaymentModal from "../../modalPopUp/paymentModal";
import PayPalButton from "../../components/paypal";
import PayPalSubscriptionButtons from "../../components/paypalSubscription";
function AddHotel() {
    const [showModal, setShowModal] = useState(false);
    const user_id = localStorage.getItem("userId");
    const [selectedCountry, setSelectedCountry] = useState('');
    const handleCountryChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
    };
    const [aminitesData, setAminitesData] = useState("")
    const [facilitiesData, setFacilitiesData] = useState("")

    const [currentStep, setCurrentStep] = useState(1);


    const [images, setImages] = useState([]);

    const [formData, setFormData] = useState({
        hotelName: "",
        hotelWebsite: "",
        youtubeLink: "",
        country: "",
        location: "",
        contactInformation: "",
        aboutHotel: "",
        roomsAndSuites: "",
        restaurantsAndBars: "",
        additionalInformation: "",
        spaAndWellness: "",
        otherFacilities: "",
        numberOfRooms: "",
        numberOfRestaurants: "",
        outdoorSwimmingPool: "",
        bars: "",
        amenitiesList: [],
        facilitiesList: [],
        facilityotherInformation1:"",
        facilityotherInformation2:"",
        facilityotherInformation3:"",
        facilityotherInformation4:"",
        otherInformation1: "",
        otherInformation2: "",
        otherInformation3: "",
        otherInformation4: "",
        contact1: { name: "", email: "", contactInformation: "" },
        contact2: { name: "", email: "", contactInformation: "" },
        contact3: { name: "", email: "", contactInformation: "" },
        addHotelToHomePageLatestNews: "",
        addHotelVideo: "",
        displayHotelVideoInNewLuxeGateWay: "",
        addHotelExclusiveOffers: "",
        addHotelNomination: ""
    });

    const handleImageChange = (e) => {
        const files = e.target.files;
      
        if (files.length + images.length > 10) {
          alert('You can only select up to 10 images.');
          e.target.value = null; 
          return;
        }
      
        setImages([...images, ...files]);
       
    };
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target || {};
        if (type === "checkbox") {
            const isAmenityCheckbox = formData.amenitiesList.map(amenity => amenity.title === name);
            if (isAmenityCheckbox) {
                setFormData((prevData) => ({
                    ...prevData,
                    amenitiesList: prevData.amenitiesList.map(amenity => ({
                        ...amenity,
                        checked: amenity.title === name ? checked : amenity.checked || false,
                    })),
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: checked,
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
                amenitiesList: prevData.amenitiesList.map(amenity => ({
                    ...amenity,
                    value: amenity.title === name ? value : amenity.value,
                })),
            }));
        }
        setValidationErrors({
            ...validationErrors,
            [name]: "",
          });
    };

    const handleChange = (contactNumber, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [contactNumber]: {
                ...prevData[contactNumber],
                [field]: value,
            },
        }));
        setValidationErrors({
            ...validationErrors,
            [field]: "",
          });
    };

    const handleCreateHotel = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();

        const facilityOtherInformationArray = [
            formData.facilityotherInformation1,
            formData.facilityotherInformation2,
            formData.facilityotherInformation3,
            formData.facilityotherInformation4,
        ].filter(value => value && typeof value === 'string');


        const amenitiesOtherInformationArray = [
            formData.otherInformation1,
            formData.otherInformation2,
            formData.otherInformation3,
            formData.otherInformation4,
        ].filter(value => value && typeof value === 'string');
        const formDataObject = new FormData();
        formDataObject.append('user_id', user_id);
        formDataObject.append('hotel_title', formData.hotelName);
        formDataObject.append('website', formData.hotelWebsite);
        formDataObject.append('youtube_link', formData.youtubeLink);
        formDataObject.append('country', selectedCountry);
        formDataObject.append('address', formData.location);
        formDataObject.append('contact_no', 956449494);
        images.forEach((image, index) => {
            formDataObject.append(`hotel_images[${index}]`, image);
          });
        formDataObject.append('about_hotel', formData.aboutHotel);
        formDataObject.append('rooms_and_suites', formData.roomsAndSuites);
        formDataObject.append('restaurent_bars', formData.restaurantsAndBars);
        formDataObject.append('spa_wellness', formData.spaAndWellness);
        formDataObject.append('other_facilities', formData.otherFacilities);
        formDataObject.append('additionalInformation', formData.additionalInformation);
        formDataObject.append('email', "rohit@gmail.com");
        formDataObject.append('otherInformation1', formData.amenitiesOtherInformationArray);
        formDataObject.append('otherInformation2', formData.facilityOtherInformationArray);
       
        
        formDataObject.append('type', 2);
        // Adding contact objects
        for (let i = 1; i <= 3; i++) {
            formDataObject.append(`name[${i}]`, formData[`contact${i}`].name);
            formDataObject.append(`email[${i}]`, formData[`contact${i}`].email);
            formDataObject.append(`contact[${i}]`, formData[`contact${i}`].contactInformation);
        }
        formDataObject.append('home_page_latest_news', formData.addHotelToHomePageLatestNews);
        formDataObject.append('hotel_latest_news', formData.addHotelVideo);
        formDataObject.append('special_offer_to_homepage', formData.displayHotelVideoInNewLuxeGateWay);
        formDataObject.append('home_page_spotlight', formData.addHotelExclusiveOffers);

        formDataObject.append('add_hotel_nomination', formData.addHotelNomination);


        const amenitiesArray = formData.amenitiesList.map((amenity) => ({
            [amenity.id]: amenity.checked || false,
        }));
        formDataObject.append('amities', JSON.stringify(amenitiesArray));


        const facilitiesArray = formData.facilitiesList.map((facility) => ({
            [facility.id]: facility.checked || false
        }));
        formDataObject.append('facilities', JSON.stringify(facilitiesArray));


        try {
            const response = await axios.post(

                `${API.BASE_URL}${API.ENDPOINTS.createHotel}`,
                formDataObject,
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (response.data.status === true) {
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
    const [validationErrors, setValidationErrors] = useState({
        hotelName: "",
        hotelWebsite: "",
        youtubeLink: "",
        country: "",
        location: "",
        contactInformation: "",
        aboutHotel: "",
        roomsAndSuites: "",
        restaurantsAndBars: "",
        additionalInformation: "",
        spaAndWellness: "",
        contact1: { name: "", email: "", contactInformation: "" },
        contact2: { name: "", email: "", contactInformation: "" },
        contact3: { name: "", email: "", contactInformation: "" },
      
      
    });

    const fetchAmenities = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotelAmenities}`, {
                headers: {
                    Authorization: "hXuRUGsEGuhGf6KM",
                },
            });
            const data = response.data;
            console.log('Amenities data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setAminitesData(data)
                setFormData((prevData) => ({
                    ...prevData,
                    amenitiesList: data.data,
                }));

            } else {
                console.error('Invalid format: Amenities data is not an array.');
            }
        } catch (error) {
            console.error('Error fetching amenities:', error);
        }
    };
    useEffect(() => {
        fetchAmenities();
    }, []);
    const fetchfacilities = async () => {
        const token = localStorage.getItem("token");
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
                setFormData((prevData) => ({
                    ...prevData,
                    facilitiesList: data.data,
                }));

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
    const [progress, setProgress] = useState(0);
 
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prevStep) => prevStep - 1);
            const newProgress = ((currentStep - 1) / 4) * 100;
            setProgress(newProgress);
        }
    };
    useEffect(() => {
        setProgress((currentStep / 4) * 100);
    }, []);


    const handlePayWithCard = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const renderAmenitiesInputs = () => {
        const numberInputs = [];
        const checkboxInputs = [];

        formData.amenitiesList.forEach((amenity, index) => {
            if (amenity.type === '2') {
                numberInputs.push(
                    <Col lg={3} md={4} key={index} className="mb-3">
                        <input
                            className="sidebar-input order-1"
                            type="number"
                            id={`amenityNumber_${index}`}
                            name={amenity.title}
                            placeholder={amenity.title}
                            value={formData[amenity.title] || ''}
                            onChange={handleInputChange}
                        />

                    </Col>
                );
            } else {
                checkboxInputs.push(
                    <Col lg={3} md={4} key={index} className="mb-3">
                        <Form.Group className='d-flex order-2'>
                            <Form.Check
                                type="checkbox"
                                id={`amenityCheckbox_${index}`}
                                label={amenity.title}
                                className='me-3'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                    </Col>
                );
            }
        });

        return [...numberInputs, ...checkboxInputs];
    };

    const renderFacilitiesInput = () => {
        const checkboxInputs = [];

        formData.facilitiesList.forEach((facility, index) => {
            checkboxInputs.push(
                <Col lg={3} md={4} key={index} className="mb-3">
                    <Form.Group className='d-flex order-2'>
                        <Form.Check
                            type="checkbox"
                            id={`facilityCheckbox_${index}`}
                            label={facility.title}
                            className='me-3'
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                </Col>
            );

        });

        return [...checkboxInputs];
    };

    const validateStep1 = () => {
        let isValid = true;
        const errors = {};
      
        if (!formData.hotelName.trim()) {
          errors.hotelName = "Hotel Name is required";
          isValid = false;
        }
      
        if (!formData.hotelWebsite.trim()) {
          errors.hotelWebsite = "Hotel Website is required";
          isValid = false;
        } else if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(formData.hotelWebsite)) {
          errors.hotelWebsite = "Invalid Hotel Website format";
          isValid = false;
        }
      
        if (!formData.youtubeLink.trim()) {
          errors.youtubeLink = "Youtube Link is required";
          isValid = false;
        } else if (!/^(https:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(formData.youtubeLink)) {
          errors.youtubeLink = "Invalid Youtube Link format";
          isValid = false;
        }
      

        if (selectedCountry=== "COUNTRY" || selectedCountry === "") {
          errors.selectedCountry = "Country is required";
          isValid = false;
        }
      
        if (images.length === 0) {
            errors.image = "Image is required";
            isValid = false;
          }

          if (!formData.aboutHotel.trim()) {
            errors.aboutHotel = "About Hotel is required";
            isValid = false;
          }

          if (!formData.location.trim()) {
            errors.location = "Location is required";
            isValid = false;
          }

          if (!formData.roomsAndSuites.trim()) {
            errors.roomsAndSuites = "Rooms And Suits is required";
            isValid = false;
          }

     
        setValidationErrors(errors);
        return isValid;
      };

      const validateStep2 = () => {
        let isValid = true;
        const errors = {};
      
        if (!formData.contact1.name.trim()) {
          errors.contact1Name = "Contact 1 Name is required";
          isValid = false;
        }
      
        if (!formData.contact1.email.trim()) {
          errors.contact1Email = "Contact 1 Email is required";
          isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.contact1.email)) {
          errors.contact1Email = "Invalid Contact 1 Email format";
          isValid = false;
        }
      
        if (!/^\d{1,10}$/.test(formData.contact1.contactInformation.trim())) {
            errors.contact1Information = "Contact Information must be a maximum of 10 digits";
            isValid = false;
          }
      
        // if (!formData.contact2.name.trim()) {
        //   errors.contact2Name = "Contact 2 Name is required";
        //   isValid = false;
        // }
      
        // if (!formData.contact2.email.trim()) {
        //   errors.contact2Email = "Contact 2 Email is required";
        //   isValid = false;
        // } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.contact2.email)) {
        //   errors.contact2Email = "Invalid Contact 2 Email format";
        //   isValid = false;
        // }
      
        // if (!formData.contact2.contactInformation.trim()) {
        //   errors.contact2ContactInformation = "Contact 2 Contact Information is required";
        //   isValid = false;
        // }
      
        // if (!formData.contact3.name.trim()) {
        //   errors.contact3Name = "Contact 3 Name is required";
        //   isValid = false;
        // }
      
        // if (!formData.contact3.email.trim()) {
        //   errors.contact3Email = "Contact 3 Email is required";
        //   isValid = false;
        // } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.contact3.email)) {
        //   errors.contact3Email = "Invalid Contact 3 Email format";
        //   isValid = false;
        // }
      
        // if (!formData.contact3.contactInformation.trim()) {
        //   errors.contact3ContactInformation = "Contact 3 Contact Information is required";
        //   isValid = false;
        // }
      
        setValidationErrors((prevState) => ({
          ...prevState,
          ...errors,
        }));
      
        return isValid;
      };


    //   const validateStep3 = () => {
    //     let isValid = true;
    //     const errors = {};

    //     if (!formData.addHotelToHomePageLatestNews.trim()) {
    //         errors.addHotelToHomePageLatestNews = "Add Hotel to The Home Page Latest News is required";
    //         isValid = false;
    //     }

    //     if (!formData.addHotelVideo.trim()) {
    //         errors.addHotelVideo = "Add Hotel Video is required";
    //         isValid = false;
    //     }

    //     if (!formData.displayHotelVideoInNewLuxeGateWay.trim()) {
    //         errors.displayHotelVideoInNewLuxeGateWay = "Display Hotel Video In New Luxe gateWay is required";
    //         isValid = false;
    //     }

    //     if (!formData.addHotelExclusiveOffers.trim()) {
    //         errors.addHotelExclusiveOffers = "Add Hotel Exclusive Offer is required";
    //         isValid = false;
    //     }

    //     if (!formData.addHotelNomination.trim()) {
    //         errors.addHotelNomination = "Add Hotel Nomination is required";
    //         isValid = false;
    //     }

    //     setValidationErrors((prevState) => ({
    //       ...prevState,
    //       ...errors,
    //     }));

    //     return isValid;
    //   };
      const nextStep = async (e) => {
        e.preventDefault();
      
        if (currentStep === 1) {
          const isValid = validateStep1();
          if (isValid) {
            setCurrentStep((prevStep) => prevStep + 1);
            const newProgress = ((currentStep + 1) / 4) * 100;
            setProgress(newProgress);
          }
        } else if (currentStep === 2) {
          const isValid = validateStep2();
          if (isValid) {
            setCurrentStep((prevStep) => prevStep + 1);
            const newProgress = ((currentStep + 1) / 4) * 100;
            setProgress(newProgress);
          }
        } else if (currentStep === 3) {
            // const isValid = validateStep3();
            // if (isValid) {
              setCurrentStep((prevStep) => prevStep + 1);
              const newProgress = ((currentStep + 1) / 4) * 100;
              setProgress(newProgress);
            // }
        }
      };
    return (
        <>
            <div className="mb-3">
                {currentStep === 1 && <h4 className="stepform-heading">Hotel Details</h4>}
                {currentStep === 2 && <h4 className="stepform-heading">Hotel Contacts</h4>}
                {currentStep === 3 && <h4 className="stepform-heading">Home Page Addon</h4>}
                {/* {currentStep === 4 && <h4 className="stepform-heading">Home Page Addon</h4>} */}
            </div>
            <ProgressBar now={progress} label={`${progress}%`} className="ProgressBar h-25 mb-3" />
            <Form>
                {currentStep === 1 && <div>
                    <Row className=" mb-3">
                        <Col lg={6}>
                            <Form.Label>  Hotel Name *</Form.Label>
                            <Form.Control className="sidebar-input"
                                type="text"
                                id="hotelName"
                                name="hotelName"
                                placeholder="Hotel Name"
                                required
                                value={formData.hotelName}
                                onChange={handleInputChange}
                                isInvalid={!!validationErrors.hotelName}
                            />
                            <Form.Control.Feedback type="invalid">
  {validationErrors.hotelName}
</Form.Control.Feedback>
                        </Col>
                        <Col lg={6}>
                            <Form.Label>  Hotel Website *</Form.Label>
                            <Form.Control className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required value={formData.hotelWebsite}
                                onChange={handleInputChange}   isInvalid={!!validationErrors.hotelWebsite}
                            />
                             <Form.Control.Feedback type="invalid">
  {validationErrors.hotelWebsite}
</Form.Control.Feedback>
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Youtube Link *</Form.Label>
                            <Form.Control className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube Link" value={formData.youtubeLink}
                                onChange={handleInputChange} isInvalid={!!validationErrors.youtubeLink}
                            />
                                  <Form.Control.Feedback type="invalid">
  {validationErrors.youtubeLink}
</Form.Control.Feedback>
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Name Of Country *</Form.Label>
                            <CountryDropdown  name="country" onCountryChange={handleCountryChange} isInvalid={!!validationErrors.selectedCountry}/>
                           
                            <Form.Control.Feedback type="invalid">
  {validationErrors.selectedCountry}
</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>Hotel Image *</label>
                            <Form.Control className="sidebar-input" type="file" id="hotelImage" accept="image/*" multiple name="hotelImage" placeholder="Hotel Image"
                                onChange={handleImageChange} isInvalid={!!validationErrors.image}
                            />
                            <Form.Control.Feedback type="invalid">
  {validationErrors.image}
</Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>About Hotel*</label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="aboutHotel"
                                onChange={handleInputChange}
                                value={formData.aboutHotel}
                                isInvalid={!!validationErrors.aboutHotel}
                            />
                               <Form.Control.Feedback type="invalid">
  {validationErrors.aboutHotel}
</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>Location *</label>
                            <Form.Control
                                as="textarea"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                rows={3}
                                isInvalid={!!validationErrors.location}
                            />
                             <Form.Control.Feedback type="invalid">
  {validationErrors.location}
</Form.Control.Feedback>
                        </Col>
                    </Row>
                   
                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>Rooms And Suites  *</label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="roomsAndSuites"
                                onChange={handleInputChange}
                                value={formData.roomsAndSuites}
                                isInvalid={!!validationErrors.roomsAndSuites}
                            />
 <Form.Control.Feedback type="invalid">
  {validationErrors.roomsAndSuites}
</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>Restaurents And Bars (Optional)</label>
                            <Form.Control
                                as="textarea"
                                name="restaurantsAndBars"
                                rows={3}
                                value={formData.restaurantsAndBars}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>Spa And Wellness (Optional)</label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="spaAndWellness"
                                value={formData.spaAndWellness}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            <label>Other Facilities (Optional)</label>
                            <Form.Control
                                as="textarea"
                                name="otherFacilities"
                                rows={3}
                                value={formData.otherFacilities}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>

                            <label>Additional information (Optional)</label>
                            <h6>If left empty it wont show on hotel page</h6>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="additionalInformation"
                                value={formData.additionalInformation}
                                onChange={handleInputChange}


                            />
                        </Col>
                    </Row>
                    <label>Room Amenities</label>

                    <Row className="mb-3">
                        {renderAmenitiesInputs()}
                    </Row>

                    <Row className="mb-3">
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="otherInformation1" name="otherInformation1" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation1}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="otherInformation3" name="otherInformation3" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation3}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="otherInformation4" name="otherInformation4" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation4}
                                onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row>

                        <label>Hotel Facilities</label>
                        {renderFacilitiesInput()}
                    </Row>

                    <Row className="mb-3">
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="facilityotherInformation1" name="facilityotherInformation1" placeholder="Other Information (40 Characters Maximum)" value={formData.facilityotherInformation1}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="facilityotherInformation2" name="facilityotherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.facilityotherInformation2}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="facilityotherInformation3" name="facilityotherInformation3" placeholder="Other Information (40 Characters Maximum)" value={formData.facilityotherInformation3}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="facilityotherInformation4" name="facilityotherInformation4" placeholder="Other Information (40 Characters Maximum)" value={formData.facilityotherInformation4}
                                onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <div className="text-end">
                        <button onClick={nextStep} >
                            next
                        </button>
                    </div>


                </div>}
                {currentStep === 2 && <div>
                    <Row className="mb-3">
                        <h5>Contact 1 </h5>
                        <Col lg={4}>
                            <Form.Control
                                className="sidebar-input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" Name"
                                value={formData.contact1.name}
                                onChange={(e) => handleChange("contact1", "name", e.target.value)}
                                isInvalid={!!validationErrors.contact1Name}
                                onFocus={() => setValidationErrors((prevState) => ({ ...prevState, contact1Name: "" }))}
                                
                            />
                            <Form.Control.Feedback type="invalid">
  {validationErrors.contact1Name}
</Form.Control.Feedback>
                        </Col>
                        <Col lg={4}>
                            <Form.Control className="sidebar-input"
                                type="text"
                                id="email"
                                name="email"
                                placeholder=" Email"
                                value={formData.contact1.email}
                                onChange={(e) => handleChange("contact1", "email", e.target.value)}
                                isInvalid={!!validationErrors.contact1Email}
                                onFocus={() => setValidationErrors((prevState) => ({ ...prevState, contact1Email: "" }))}
                                 />
                                     <Form.Control.Feedback type="invalid">
  {validationErrors.contact1Email}
</Form.Control.Feedback>
                        </Col>
                        <Col lg={4}>
                            <Form.Control className="sidebar-input"
                                type="number"
                                id="contactInformation"
                                name="contactInformation"
                                placeholder="Contact Information"
                                value={formData.contact1.contactInformation}
                                onChange={(e) => handleChange("contact1", "contactInformation", e.target.value)}
                                isInvalid={!!validationErrors.contact1Information}
                                onFocus={() => setValidationErrors((prevState) => ({ ...prevState, contact1Information: "" }))}
                                required />

<Form.Control.Feedback type="invalid">
  {validationErrors.contact1Information}
</Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <h5>Contact 2 </h5>
                        <Col lg={4}>
                            <Form.Control className="sidebar-input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" Name"
                                value={formData.contact2.name}
                                onChange={(e) => handleChange("contact2", "name", e.target.value)} />
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="text"
                                className="sidebar-input"
                                id="email"
                                name="email"
                                placeholder=" Email"
                                value={formData.contact2.email}
                                onChange={(e) => handleChange("contact2", "email", e.target.value)} />
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="number"
                                className="sidebar-input"
                                id="contactInformation"
                                name="contactInformation"
                                placeholder="Contact Information"
                                value={formData.contact2.contactInformation}
                                onChange={(e) => handleChange("contact2", "contactInformation", e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <h5 className="third-child">Contact 3 </h5>
                        <Col lg={4}>
                            <Form.Control className="sidebar-input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" Name"
                                value={formData.contact3.name}
                                onChange={(e) => handleChange("contact3", "name", e.target.value)} />
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="text"
                                className="sidebar-input"
                                id="email"
                                name="email"
                                placeholder=" Email"
                                value={formData.contact3.email}
                                onChange={(e) => handleChange("contact3", "email", e.target.value)} />
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="number"
                                className="sidebar-input"
                                id="contactInformation"
                                name="contactInformation"
                                placeholder="Contact Information"
                                value={formData.contact3.contactInformation}
                                onChange={(e) => handleChange("contact3", "contactInformation", e.target.value)} />
                        </Col>
                    </Row>
                    <div className="text-end">
                        <button onClick={prevStep} >
                            Previous
                        </button>
                        <button onClick={nextStep} >
                            next
                        </button>
                    </div>
                </div>}
                {currentStep === 3 && <div>
                    <Row className='mb-3'>
                        <Col>
                            <h6>1. Add Hotel to The Home Page Latest News [Home Page]?</h6>
                            <div className="select-option">
                                <select
                                    id="addHotelToHomePageLatestNews"
                                    className="sidebar-input"
                                    name="addHotelToHomePageLatestNews"
                                    value={formData.addHotelToHomePageLatestNews}
                                    onChange={handleInputChange}
                                >
                                    <option value="No">No</option>
                                    <option value="Display For 1 Week (+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                    <option value="Display For 1 Month (+25 Euro)">Display For 1 Month (+25 Euro)</option>
                                </select>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col>
                            <h6>
                                2. Add Hotel Video?
                            </h6>
                            <div className="select-option">
                                <select id="addHotelVideo" className="sidebar-input" name="addHotelVideo" value={formData.addHotelVideo}
                                    onChange={handleInputChange}
                                >
                                    <option value="No">No</option>
                                    <option value="homePageFor2Weeks">Home Page For 2 Weeks </option>
                                    <option value="secondaryPageFor2Weeks">Secondary Page For 2 Weeks </option>

                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <h6 className="third-child">
                                3. Display Hotel Video In New Luxe gateWay?
                            </h6>
                            <div className="select-option">
                                <select id="displayHotelVideoInNewLuxeGateWay" className="sidebar-input" name="displayHotelVideoInNewLuxeGateWay" value={formData.displayHotelVideoInNewLuxeGateWay}
                                    onChange={handleInputChange}>
                                    <option value="No">No</option>
                                    <option value="homePageFor2Weeks">Home Page For 2 Weeks</option>
                                    <option value="secondaryPageFor2Weeks">Secondary Page For 2 Weeks </option>

                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <h6>
                                4. Add Hotel Exclusive Offer?
                            </h6>
                            <div className="select-option">
                                <select id="addHotelExclusiveOffers" className="sidebar-input" name="addHotelExclusiveOffers" value={formData.addHotelExclusiveOffers}
                                    onChange={handleInputChange}
                                >
                                    <option value="No">No</option>
                                    <option value="homePageFor2Weeks">Home Page For 2 Weeks</option>
                                    <option value="secondaryPageFor2Weeks">Secondary Page For 2 Weeks </option>

                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <h6>
                                5. Submit Your Hotel For Nomination For Best Luxury Hotel Of The Year! We'll Share Your Profile With Our SubScriber And Ask Them To Vote For You?
                            </h6>
                            <div className="select-option">
                                <select id="addHotelNomination" className="sidebar-input" name="addHotelNomination" value={formData.addHotelNomination}
                                    onChange={handleInputChange}
                                >
                                    <option value="No">No</option>
                                    <option value="homePageFor2Weeks">$100</option>
                                    <option value="secondaryPageFor2Weeks">Secondary Page For 2 Weeks </option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-end">
                        <button onClick={prevStep} >
                            Previous
                        </button>
                        <button onClick={nextStep} >
                            next
                        </button>
                    </div>
                </div>}
                {currentStep === 4 && <div>
                    <section>
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="pricingTable">
                                            <div className="pricingTable-header">
                                                <span className="heading">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                                                </span>
                                            </div>
                                            <div className="pricing-plans">
                                                <span className="price-value"><i className="fa fa-eur" aria-hidden="true"><FaEuroSign /></i><span>199</span></span>
                                                <span className="subtitle">Duration : 6 Months</span>
                                                <h4>Package : Hotel Profile</h4>
                                            </div>
                                            <div className="pricingContent">
                                            </div>
                                            <div className="pricingTable-sign-up">
                                                <a href="#" className="btn btn-block btn-default"  onClick={handlePayWithCard}>Pay With Card </a>
                                            </div>
                                            <div>
                                                <span>OR</span>
                                               
                                            </div>
                                            <PayPalSubscriptionButtons/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="pricingTable">
                                            <div className="pricingTable-header">
                                                <span className="heading">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                                                </span>
                                            </div>
                                            <div className="pricing-plans">
                                                <span className="price-value"><i aria-hidden="true"><FaEuroSign /></i><span>399</span></span>
                                                <span className="subtitle">Duration : 12 Months</span>
                                                <h4>Package : Hotel Profile</h4>
                                            </div>
                                            <div className="pricingContent">

                                            </div>

                                            <div className="pricingTable-sign-up">
                                                <a href="#" className="btn btn-block btn-default"  onClick={handlePayWithCard}>Pay With Card </a>
                                            </div>

                                            <div>
                                                <span>OR</span>
                                               
                                            </div>
                                            <PayPalSubscriptionButtons/>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-end">
                        <button onClick={prevStep} >
                            Previous
                        </button>
                        <button onClick={handleCreateHotel}>
                            Submit
                        </button>
                    </div>
                </div>}
            </Form>
            <PaymentModal showModal={showModal} closeModal={closeModal} />
        </>

    );
};
export default AddHotel;