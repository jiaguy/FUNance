import React from 'react';
import logo from '../resources/logo.svg';

// import bootstrap components here
import Button from 'react-bootstrap/Button';

const home = () => {
    return (
        <div className="App">
            <h1>Home</h1>
            <header className="App-header">
            <p>Welcome to FinanceLife. This interactive game will help children
                from the ages of 10-15 learn everything they need to know about
                personal finance:</p>
            <p>1. How to save for the future</p>
            <p>2. How to choose a bank account</p>

            <img src={logo} className="App-logo" alt="logo" />
       
            <p>Hit the button below to begin your advenure!</p>
            <div className="mb-2">
                <Button variant="primary" size="lg" href="/age10">
                START
                </Button>{' '}
            </div>    
            </header>
        </div>
    );
}
 
export default home;