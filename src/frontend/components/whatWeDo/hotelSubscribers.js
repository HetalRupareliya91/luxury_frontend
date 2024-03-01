import React, { useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg2 from "../../../assets/img/hero/hero-3.jpg"

function HotelSubscribers() {
  const [showAddress, setShowAddress] = useState(false);
  const [sampleRequest, setSampleRequest] = useState("");
  const [printRequest, setPrintRequest] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hotelName: "",
    // photos: null,
    // pdf: null,
    // youtubeLink: "",
    message: "",
    address: "",
    campaignOptions: [],
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = "Valid email is required";
      isValid = false;
    }

    if (!formData.hotelName.trim()) {
      errors.hotelName = "Hotel name is required";
      isValid = false;
    }

    // if (!formData.photos) {
    //   errors.photos = "Please upload a  photo ";
    //   isValid = false;
    // }

    // if (!formData.youtubeLink) {
    //   errors.youtubeLink = "Youtube Link Feild is Required";
    //   isValid = false;
    // }

    if (!formData.message) {
      errors.message = "Message Feild is Required";
      isValid = false;
    }
    // if (!formData.pdf) {
    //   errors.pdf = "Please upload a  PDF file";
    //   isValid = false;
    // }


    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          campaignOptions: [...formData.campaignOptions, value],
        });
      } else {
        setFormData({
          ...formData,
          campaignOptions: formData.campaignOptions.filter(
            (option) => option !== value
          ),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setFormErrors({
      ...formErrors,
      [name]: undefined,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };



  return (
    <Parallax blur={0} bgImage={bg2} bgImageAlt="the cat" strength={300}>
      <section ref={sectionRef} className="what-are-you-intersted-in spad">
        <Container>
          <div>
            <div className="title-subtitle mt-0 text-center">
              What are you interpreted in ?
            </div>
            <div className="woodmart-title-container text-center">
              Submit the form below and we'll get back to you
            </div>
            <Form >

              <Form.Label>
                Your Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mb-3"
                placeholder="Your Name"
              >

              </Form.Control>
              {formErrors.name && (
                <div className="text-danger">{formErrors.name}</div>
              )}
              <Form.Label>
                Your Email
              </Form.Label>
              <Form.Control
                type="text"
                name="email"
                className="mb-3"
                placeholder="Your Email"
                value={formData.email}
              >

              </Form.Control>
              {formErrors.email && (
                <div className="text-danger">{formErrors.email}</div>
              )}
              <Form.Label>
                Hotel Name
              </Form.Label>
              <Form.Control

                type="text"
                className="mb-3"
                placeholder="Hotel Name"
                name="hotelName"
                value={formData.hotelName}
              />
              {formErrors.hotelName && (
                <div className="text-danger">{formErrors.hotelName}</div>
              )}

              {/* <Form.Label>
                Attach Photos
              </Form.Label>
              <Form.Control
                type="file"
                className="mb-3"
                name="photos"
                value={formData.photos}
              >

              </Form.Control>
              {formErrors.photos && (
                <div className="text-danger">{formErrors.photos}</div>
              )}

              <Form.Label>
                Attach PDF
              </Form.Label>
              <Form.Control
                type="file"
                className="mb-3"
                name="pdf"
                value={formData.pdf}
              >
              </Form.Control>
              {formErrors.pdf && (
                <div className="text-danger">{formErrors.pdf}</div>
              )}
              <Form.Label>
                YouTube Link
              </Form.Label>
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="YouTube Link Here"
                name="youtubeLink"
                value={formData.youtubeLink}
              >
              </Form.Control>
              {formErrors.youtubeLink && (
                <div className="text-danger">{formErrors.youtubeLink}</div>
              )} */}
              <Form.Label>
                Your Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3} // You can adjust the number of rows as needed
                className="mb-3"
                placeholder="Your Message"
                name="message"
                value={formData.message}
              />

              {formErrors.message && (
                <div className="text-danger">{formErrors.message}</div>
              )}
              <Form.Label>
                Would you like to request a sample of our Digital Copy ?
              </Form.Label>
              <div className="d-flex mb-3">
                <Form.Check
                  type="radio"
                  name="sampleRequest"
                  id="sampleRequestYes"
                  className="pe-3"
                  label="Yes"
                  value="Yes"
                  checked={sampleRequest === "Yes"}
                  onChange={(e) => setSampleRequest(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  name="sampleRequest"
                  id="sampleRequestNo"
                  className="pe-3"
                  label="No"
                  value="No"
                  checked={sampleRequest === "No"}
                  onChange={(e) => setSampleRequest(e.target.value)}
                />
              </div>
              <Form.Label>
                Would you like to request a sample of our Print Copy ?
              </Form.Label>
              <div className="d-flex mb-3">
                <Form.Check
                  type="radio"
                  name="printRequest"
                  id="printRequestYes"
                  className="pe-3"
                  label="Yes"
                  value="Yes"
                  checked={printRequest === "Yes"}
                  onChange={(e) => {
                    setPrintRequest(e.target.value);
                    setShowAddress(e.target.value === "Yes");
                  }}
                />
                <Form.Check
                  type="radio"
                  name="printRequest"
                  id="printRequestNo"
                  className="pe-3"
                  label="No"
                  value="No"
                  checked={printRequest === "No"}
                  onChange={(e) => setPrintRequest(e.target.value)}
                />
              </div>

              {showAddress && (
                <>
                  <Form.Label>
                    Address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    className="mb-3"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleInputChange} />
                </>
              )}
              <Form.Label>
                Select the campaign options you would like more information on
              </Form.Label>

              <div className="d-flex">
                <Form.Check
                  type="checkbox"
                  label="Hotel Spread (print)"
                  id="campaignSponsorship"
                  className="pe-4"
                  name="campaignOptions"
                  value="Hotel Spread (print)"
                  checked={formData.campaignOptions.includes("Hotel Spread (print)")}
                  onChange={handleInputChange}
                />

                <Form.Check
                  type="checkbox"
                  label="Company (print)"
                  id="campaignSupplements"
                  className="pe-4"
                  name="campaignOptions"
                  value="Company (print)"
                  checked={formData.campaignOptions.includes("Company (print)")}
                  onChange={handleInputChange}
                />

                <Form.Check
                  type="checkbox"
                  label="Hotel Spread (Digital)"
                  id="campaignSupplementsDigital"
                  className="pe-4"
                  name="campaignOptions"
                  value="Hotel Spread (Digital)"
                  checked={formData.campaignOptions.includes("Hotel Spread (Digital)")}
                  onChange={handleInputChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Company (Digital)"
                  id="campaignSupplementsDigitalCompany"
                  className="pe-4"
                  name="campaignOptions"
                  value="Company (Digital)"
                  checked={formData.campaignOptions.includes("Company (Digital)")}
                  onChange={handleInputChange}
                />



              </div>
              <button className="mt-4 w-25" onClick={handleSubmit}>SUBMIT</button>
            </Form>

          </div>

        </Container>

      </section>
    </Parallax>


  );
}
export default HotelSubscribers;