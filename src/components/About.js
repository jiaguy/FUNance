import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const About = () => {
   return (

      <div>
         {

            <CardDeck className="Card-deck">

               <Card id="Card">
                  <Card.Body>
                     <Card.Title>About Us</Card.Title>
                     <Card.Text>

                        <p>We are a team of four young women who aim to teach young girls ages 10-15 the financial literacy skills they need to save early and spend wisely.</p>
                        <p>This program will introduce a series of informational content catered to each age group and activites that will test financial knowledge.</p>
                        <p>To start the journey, please head to "Home".</p>
                        <p>Happy learning!</p>

                     </Card.Text>
                  </Card.Body>
               </Card>

            </CardDeck>
         }
      </div >
   );
}

export default About;
