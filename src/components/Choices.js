import React, {} from 'react';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Choices(props) {   
        return (
            <div>
            
            {/* THIS IS HOW WE HIDE AN ENTIRE DIV:
                <div style={{visibility: props.hideDiv ? 'hidden' : 'visible' }}> */}
            {

                props.hideDiv ? null :
                <CardDeck className="Card-deck">
                
                    <Card id="Card">
                        <Card.Img variant="top" src={props.choiceImage1} width="40%" height="30%" object-fit="cover"/>
                        <Card.Body>
                        <Card.Title>{props.choiceTitle1}</Card.Title>
                        <Card.Text>
                            {props.choiceDesc1}
                        </Card.Text>
                        <Button variant="primary" onClick={props.buttonHandler}>Select</Button>
                        </Card.Body>
                    </Card>
                
                <Card id="Card">
                    <Card.Img variant="top" src={props.choiceImage2} width="40%" height="30%" object-fit="cover"/>
                    <Card.Body>
                    <Card.Title>{props.choiceTitle2}</Card.Title>
                    <Card.Text>
                        {props.choiceDesc2}
                    </Card.Text>
                    <Button variant="primary" onClick={props.buttonHandler}>Select</Button>
                    </Card.Body>
                </Card>
                <Card id="Card">
                    <Card.Img variant="top" src={props.choiceImage3} width="40%" height="30%" object-fit="cover"/>
                    <Card.Body>
                    <Card.Title>{props.choiceTitle3}</Card.Title>
                    <Card.Text>
                        {props.choiceDesc3}
                    </Card.Text>
                    <Button variant="primary" onClick={props.buttonHandler}>Select</Button>
                    </Card.Body>
                </Card>
                </CardDeck>
        }   
        </div>
        );
  }

export default Choices;