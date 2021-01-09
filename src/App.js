import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Age10 from './components/Age10';
import Age11 from './components/Age11';
import Age12 from './components/Age12';
import Age13 from './components/Age13';
import Age14 from './components/Age14';
import Age15 from './components/Age15';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/age10" component={Age10}/>
             <Route path="/age11" component={Age11}/>
             <Route path="/age12" component={Age12}/>
             <Route path="/age13" component={Age13}/>
             <Route path="/age14" component={Age14}/>
             <Route path="/age15" component={Age15}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}


export default App;
