import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import heartIcon from '../../assets/icons/heart.svg';
import locationIcon from '../../assets/icons/location.svg';
import starIcon from '../../assets/icons/star.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import StepIndicator from './StepIndicator'; // Make sure to import the StepIndicator component
import './ListOfComponents.css';

const ListOfComponents = ({ restaurants }) => {
    const [currentPage, setCurrentPage] = useState(0); // Use 0-based index for current page
    const itemsPerPage = 9; // Change this value to set items per page

    // Calculate the indices of the items to be displayed
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(restaurants.length / itemsPerPage);

    // Handler for step click
    const handleStepClick = (stepIndex) => {
        setCurrentPage(stepIndex);
    };

    return (
        <Container>
            <Row className="my-4">
                <Col>
                  
                </Col>
            </Row>
            <Row>
                {currentItems.map((restaurant, index) => (
           
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="h-100">
                            <div className="position-relative">
                                <Card.Img variant="top"  src={`http://localhost:8000/storage/${restaurant.interior_photos}`}/>
                              
                                <img src={heartIcon} alt="Favorite" className="position-absolute top-0 end-0 m-2" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                            </div>
                            <Card.Body className="d-flex flex-column card-style">
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <Card.Title className='title-card'>{restaurant.name}</Card.Title>
                                    <small className="rating"> 4.7<img src={starIcon} style={{"marginTop":"-5px","marginRight":"5px"}}/></small>
                                </div>
                                <div className="mb-2 text-muted d-flex align-items-center">
                                    <div className='location'>{restaurant.location}</div>
                                    <img src={locationIcon} alt="Location" className='location-icon' />
                                </div>
                                <Card.Text className="flex-grow-1 place-description">
                                    {restaurant.description}
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="price-tag">$$$</span>
                                    <Button className='btn-design d-flex justify-content-center align-items-center'>
                                        إحجز الآن<img src={arrowIcon} alt="arrow" style={{ marginRight: '8px' }} />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="my-4">
                <Col>
                    <StepIndicator steps={Array(totalPages).fill(0)} currentStep={currentPage} onStepClick={handleStepClick} />
                </Col>
            </Row>
        </Container>
    );
};

export default ListOfComponents;
