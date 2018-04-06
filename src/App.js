import React, { Component } from 'react';
import Home from './common/components/Home'
import Header from './common/components/Header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
