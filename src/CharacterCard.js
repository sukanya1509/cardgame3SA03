import React, { Component } from 'react';
import './App.css';


export default class CharacterCard.js extends Component {
    constructor(props){
    super(props)
    this.state = {
    active: false,
export default class CharacterCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }
    }


    activate = () => {
    if(!this.state.active){
    this.setState({active: true, seq})
    }
        if (!this.state.active) {
            this.setState({ active: true})
        }else this.setState({ active: false})
    }
    render(){
    let className = `card ${this.state.active ? 'activeCard': ''}`
    return (
    <div className={className} onClick={this.activate}>
    {this.props.value}
    </div>
    )
    render() {
        let className = `card ${this.state.active ? 'activeCard' : ''}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
   } 
}