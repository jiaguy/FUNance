import React from 'react';
import logo from '../resources/logo.svg';

// import bootstrap components here
import Button from 'react-bootstrap/Button';

const home = () => {
    return (
        <div className="homescreen">
            <br /><br />
            <img src={logo} width="350px" alt="logo" />
            <br /><br />
            Welcome! <br /> Here you will learn everything you need about personal finance.
       
            <p>Click start begin your adventure!</p>
            <div className="mb-2">
                <Button variant="primary" size="lg" href="/age10">
                start
                </Button>{' '}
            </div>    

        </div>
    );
}
 
export default home;