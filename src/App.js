import React, { Component } from 'react';
import Home from './common/components/Home';
import Header from './common/components/Header';
import Login from './common/components/Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}

export default App;
