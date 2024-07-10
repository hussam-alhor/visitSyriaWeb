import React from "react";
import { Card, Row , Col } from "react-bootstrap";
import "./Card.css";
import back from '/assets/img/chevron_back.png'
import cityicon from '/assets/img/Icon-Location.png'
import { Link  } from 'react-router-dom';

const MyCard = ({ img, title, description , city , id }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Row>
    <Card.Img variant="top" src={img} />
    <Col>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}
      </Card.Text>
      <Row>
      <button className="explore-button">
      <Link to={`/blog/${id}`}>{id}  اقرأ المزيد<img src={back} alt="" /></Link>
          
      </button>
      
      <button className="city-button">
           <img src={cityicon} alt="" /> {city}
      </button>
      
      </Row>
    </Card.Body>
    </Col>
    </Row>
  </Card>
  );
};

export default MyCard;
