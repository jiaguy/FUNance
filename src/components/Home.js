import React from 'react';
import logo from '../resources/logo.svg';
import lawn_mow from '../resources/lawn_mow.jpg';
import lemonade_stand from '../resources/lemonade_stand.jpg';
import walk_dog from '../resources/walk_dog.jpg';

// import bootstrap components here
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const home = () => {
    return (
        <div className="App">
            <h1>Home</h1>
            <p>Home page body content</p>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/components/Home.js</code> and save to reload.
                </p>
                <p>Elenka is the best</p>
                <div className="Card-deck"> 
                    <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={lawn_mow} width="50%" height="50%" object-fit="cover"/>
                        <Card.Body>
                        <Card.Title>Mow Lawns</Card.Title>
                        <Card.Text>
                            You mow your two neighbour's lawns every two weeks
                            at a rate of $30 per session.
                        </Card.Text>
                        <Button variant="primary">Select</Button>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={lemonade_stand} width="50%" height="50%" object-fit="cover"/>
                        <Card.Body>
                        <Card.Title>Lemonade Stall</Card.Title>
                        <Card.Text>
                            Run a lemonade stall with your friend every weekend,
                            making a $20 profit every time.
                        </Card.Text>
                        <Button variant="primary">Select</Button>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={walk_dog} width="50%" height="50%" object-fit="cover"/>
                        <Card.Body>
                        <Card.Title>Dog Walking</Card.Title>
                        <Card.Text>
                            Walk your elderly neighbour's dog three times a week,
                            earning $10 every walk.
                        </Card.Text>
                        <Button variant="primary">Select</Button>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </div>
            </header>
        </div>
    );
}
 
export default home;