import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard.js';
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="HELLO"/>
        <WordCard value="SUKANYA NUKAEW"/>
    </div>
    );
  }
}
export default App;