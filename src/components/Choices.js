import React, { Component } from 'react';

import lawn_mow from '../resources/lawn_mow.jpg';
import lemonade_stand from '../resources/lemonade_stand.jpg';
import walk_dog from '../resources/walk_dog.jpg';

// import bootstrap components here
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Choices(props) { 
        return (
            <CardDeck className="Card-deck">
            <Card id="Card">
                <Card.Img variant="top" src={lawn_mow} width="40%" height="30%" object-fit="cover"/>
                <Card.Body>
                <Card.Title>{props.choiceTitle1}</Card.Title>
                <Card.Text>
                    {props.choiceDesc1}
                </Card.Text>
                <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>
            <Card id="Card">
                <Card.Img variant="top" src={lemonade_stand} width="40%" height="30%" object-fit="cover"/>
                <Card.Body>
                <Card.Title>{props.choiceTitle2}</Card.Title>
                <Card.Text>
                    {props.choiceDesc2}
                </Card.Text>
                <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>
            <Card id="Card">
                <Card.Img variant="top" src={walk_dog} width="40%" height="30%" object-fit="cover"/>
                <Card.Body>
                <Card.Title>{props.choiceTitle3}</Card.Title>
                <Card.Text>
                    {props.choiceDesc3}
                </Card.Text>
                <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>
            </CardDeck>
        );
  }

export default Choices;