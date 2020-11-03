import React from "react";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

function Features() {
  return (
    <div className="fea">
      <h1>Features</h1>

      <div classsName="card">
        <CardDeck>
          <Card>
            <div className="image-back">
              <Card.Img
                variant="center"
                src="images/lightingsvg.svg"
                style={{ justifycontent: "center", display: "flex" }}
              />
            </div>

            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>Robust Performance</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <div className="image-back">
              <Card.Img variant="center" src="images/security.svg" />
            </div>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>Compliance</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <div className="image-back">
              <Card.Img
                variant="center"
                src="images/speed.svg"
                style={{ justifycontent: "center", display: "flex" }}
              />
            </div>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>Consistency</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <div className="image-back">
              <Card.Img
                variant="center"
                src="images/optimised.svg"
                style={{ justifycontent: "center", display: "flex" }}
              />
            </div>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>Opitimality</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Features;
