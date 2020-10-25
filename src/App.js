import React from 'react';
import Main from './components/MainComponent.js';
import './App.css';
import {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
    
  render(){ 
    return (
      <BrowserRouter>
      <div>
        <Main/>
      </div>
      </BrowserRouter>
    );
  }
  
}
export default App;
