import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const About = () => {
   return (

      <div>
         {

            <CardDeck className="About-card-deck">

               <Card id="Card">
                  <Card.Body>
                     <Card.Title>About Us</Card.Title>
                     <Card.Text>

                        <p>We are a team of four young women who aim to create a fun, interactive game to teach young girls ages 10-15 the financial literacy skills they need to save early and spend wisely.</p>
                        <p>This program will introduce a series of informational content catered to each age group and activites that will test financial knowledge, such as:</p>
                        <b>1.</b> Saving for the future
                           <br />
                        <b>2.</b> Choosing a bank account
                           <br />
                        And more!
                        <br /><br />
                        <p>To start the journey, please head to "Home".</p>
                        <p>Happy learning!
                           <div style={{textAlign: 'right'}}>- The FUNance Team :)</div>
                        </p>

                     </Card.Text>
                  </Card.Body>
               </Card>

            </CardDeck>
         }
      </div >
   );
}

export default About;
