import React from 'react';
import logo from '../logo.svg';

// import bootstrap components here
import Button from 'react-bootstrap/Button';


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
                <Button variant="dark">Elenka is the worst</Button>
            </header>
        </div>
    );
}
 
export default home;