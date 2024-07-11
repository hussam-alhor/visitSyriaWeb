import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Container, Card, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import './BookingForm.css';
import { useParams, useNavigate } from 'react-router-dom';
const BookingForm = ({
  fullNamePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  checkInPlaceholder,
  checkOutPlaceholder,
  guestsPlaceholder,
  roomTypePlaceholder,
  descriptionPlaceholder,
  submitButtonText,


}) => {
  const [hotelName, setHotelName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [rating, setRating] = useState('');
const [hotelImage, setHotelImageUrl] = useState('');
const[price, setPrice] = useState('');

  const { hotelId } = useParams();
  
  //${restaurantId}
      const navigate = useNavigate();
      const [initialData, setInitialData] = useState(null);
      const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchInitialData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/show_hotel/${hotelId}`);
            setInitialData(response.data.hotel);
            setLoading(false);
            console.log(response.data.hotel);
            setHotelName(initialData.name);
            setRoomDescription(initialData.short_description);
            setRating(4.2);
            setPrice(initialData.price)
            setHotelImageUrl(initialData.exterior_photos);
        //   console.log(response.data.restaurant);
        } catch (error) {
            console.error('Error fetching the initial data:', error);
            setLoading(false);
        }
    };

    fetchInitialData();
}, [hotelId]);
const priceDetails = [
  `القيم الأساسي: ${price} دولارا`,
  "تخفيض: 0 دولار",
  "الضرائب: 20 دولارا",
  "رسوم الخدمة: 5 دولارات",
  `المجموع: ${Number(price) + 25} دولارا`
];

  return (
    <Container className="booking-form-container">
      <h2 className="form-title">التحقق من استمارة التوفر</h2>
      <Row>
        <Col md={6} className="form-col">
          <FormLabel className='info'>معلومات الاتصال</FormLabel>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Control type="text" placeholder={phonePlaceholder} className="form-control-custom" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="fullName">
                  <Form.Control type="text" placeholder={fullNamePlaceholder} className="form-control-custom" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="email">
                  <Form.Control type="email" placeholder={emailPlaceholder} className="form-control-custom" />
                </Form.Group>
                <Form.Text className="text-muted">
                  سوف تتصل بك أو ترسل لك رسالة نصية لتأكيد رقمك. تنطبق معدلات الرسائل والبيانات القياسية.
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <FormLabel className='info'>معلومات الزيارة</FormLabel>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="checkIn">
                  <Form.Control as="select" className="form-control-custom">
                    <option>{checkInPlaceholder}</option>
                    <option>2024-07-07</option>
                    <option>2024-07-08</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="checkOut">
                  <Form.Control as="select" className="form-control-custom">
                    <option className='place-holder'>{checkOutPlaceholder}</option>
                    <option>2024-07-08</option>
                    <option>2024-07-09</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="guests">
                  <Form.Control as="select" className="form-control-custom">
                    <option>{guestsPlaceholder}</option>
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="roomType">
                  <Form.Control as="select" className="form-control-custom">
                    <option>{roomTypePlaceholder}</option>
                    <option>غرفة سوبييريور</option>
                    <option>غرفة ديلوكس</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="description">
                  <Form.Control as="textarea" rows={1} placeholder={descriptionPlaceholder} className="form-control-custom" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button variant="primary" type="submit" className="submit-button">
                  {submitButtonText}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={6}>
          <Card className="hotel-card">
            <Row>
              <Col md={3}>
                <Card.Img variant="top" src={`http://localhost:8000/storage/${hotelImage}`} className="hotel-card-img"/>
              </Col>
              <Col md={9}>
                <Card.Title className="hotel-card-title">{hotelName}</Card.Title>
                <Card.Text className="hotel-card-text">{roomDescription}</Card.Text>
                <Card.Text className="hotel-card-rating">جيد جدا {rating}</Card.Text>
              </Col>
            </Row>
            <Card.Body>
              <img src='src/assets/row.svg' />
              <Card.Text className="hotel-card-text">حجزك محمي بواسطة Visitsyria</Card.Text>
              <img src='src/assets/row.svg' />
              <Card.Text className="hotel-card-price-details">تفاصيل الأسعار:</Card.Text>
              <ul className="price-details-list">
                {priceDetails.map((detail, index) => (
                  <li key={index} className='price'>{detail}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
