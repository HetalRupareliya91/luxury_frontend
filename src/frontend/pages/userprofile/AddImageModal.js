import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import API from '../../../utils';

const AddImageHotel = ({ show, handleClose,hotel_id ,editFunction }) => {
    // const [imageFile, setImageFile] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setImageFiles([...imageFiles, ...files]);
      };

    const handleAddImages = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const formDataObject = new FormData();

        // formDataObject.append('key', selectedImageIndex);
        formDataObject.append('hotel_id', hotel_id);
        imageFiles.forEach((file, index) => {
            formDataObject.append(`hotel_image[${index}]`, file);
        });
        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.addMultipleImage}`,
                formDataObject,  // Pass formDataObject directly as the data parameter
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            if (response.data.status === true) {
                handleClose()
                editFunction(hotel_id)
                // setHotelImages(response.data.data.hotel_images)
                const apiData = response.data.data;
            } else {
                console.error("Error:", response.data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label htmlFor="imageUpload">Upload Image:</label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="secondary" onClick={handleAddImages}>
                    Update Image
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddImageHotel;
