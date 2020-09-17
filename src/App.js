import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import CharacterCard from './WordCard';
const word = "Hello";
import WordCard from './WordCard.js';


class App extends Component {
  render() {
    return (

      <div className="card">
        <WordCard value="hello"/>
    </div>
    );
  }
}
export default App;