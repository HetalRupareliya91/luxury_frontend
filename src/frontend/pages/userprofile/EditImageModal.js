import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import API from '../../../utils';

const EditImageModal = ({ show, handleClose, selectedImageIndex,hotel_id}) => {
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleUpdateHotelImage = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const formDataObject = new FormData();

        formDataObject.append('key', selectedImageIndex);
        formDataObject.append('hotel_id', hotel_id);
        formDataObject.append('hotel_image', imageFile);

        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.updateSingleHotelImage}`,
                formDataObject,  // Pass formDataObject directly as the data parameter
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            if (response.data.status === true) {
                handleClose()
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
                        onChange={handleFileChange}
                    />
                </div>
                {/* Additional content can be added here */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="secondary" onClick={handleUpdateHotelImage}>
                    Update Image
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditImageModal;
