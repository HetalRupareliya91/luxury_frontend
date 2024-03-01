import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import API from '../../../utils';

const DeleteModalImage = ({ show, handleClose, selectedImageIndex,hotel_id,editFunction }) => {
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const DeleteImage = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const formDataObject = new FormData();

        formDataObject.append('key', selectedImageIndex);
        formDataObject.append('hotel_id', hotel_id);
        // formDataObject.append('hotel_image', imageFile);

        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.deleteSingleHotelImage}`,
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
                <Modal.Title>Delete Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div>
                <p> Are you sure you want to delete this image?</p>
               </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    NO, I'M GOOD !
                </Button>
                <Button variant="secondary" onClick={DeleteImage}>
                    YES DELETE !
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModalImage;
