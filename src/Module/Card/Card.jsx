import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.css";

const MyCard = ({ img, title, description }) => {
  return (
    <Card className="about-card mx-4 my-4 d-flex flex-column">
      <div className="row no-gutters flex-grow-1">
        <div className="col-md-4">
          <Card.Img variant="top" src={img} alt={img} />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <Card.Body className="flex-grow-1">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <Button className="moreBtn">Read More &gt;</Button>
        </div>
      </div>
    </Card>
  );
};

export default MyCard;
