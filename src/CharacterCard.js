import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import CharacterCard from './WordCard.js';

export default class CharacterCard extends Component {
    constructor(props){
    super(props)
    this.state = {
    active: false,
    }
    }

    activate = () => {
    if(!this.state.active){
    this.setState({active: true, seq})
    }
    }
    render(){
    let className = `card ${this.state.active ? 'activeCard': ''}`
    return (
    <div className={className} onClick={activate}>{props.value} </div>
    )
    }
   }