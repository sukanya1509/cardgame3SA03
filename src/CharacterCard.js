import React, { Component } from 'react';
import './App.css';


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
    <div>{this.props.value}
    className={className} onClick={this.activate}{props.value}
    </div>
    )
    }
   } 