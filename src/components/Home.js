import React from 'react';
import logo from '../resources/logo.svg';

// import bootstrap components here
import Button from 'react-bootstrap/Button';

const home = () => {
    return (
        <div className="homescreen">
            <br /><br /><br />
            <img src={logo} width="400px" alt="logo" />
            <br /><br />
            Welcome to Funance. This interactive game will help children
                from the ages of 10-15 learn everything they need to know about
                personal finance:
                <br />
            <b>1.</b> How to save for the future
            <br />
            <b>2.</b> How to choose a bank account
            <br />
            And more!

            
       
            <p>Hit the button below to begin your adventure!</p>
            <div className="mb-2">
                <Button variant="primary" size="lg" href="/age10">
                start!
                </Button>{' '}
            </div>    

        </div>
    );
}
 
export default home;