import React, { Component } from 'react';
import CharacterCard from './CharacterCard.js';

import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
const prepareStateFromWord = (given_word) => {
export default class WordCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            attempt: '',
        }
        this.state = {}
    }

    componentWillMount(){
export default class WordCard extends Component {
        }
    }


    activationHandler = c => { 
        console.log(`${c} has been activated.`) 
    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(this.state.word.match(guess.join('').toString())){
                this.setState({
                    guess: [], 
                    completed: true})
            }else{
                this.setState({
                    guess: [], 
                    attempt: this.state.attempt + 1
                })
            }
        }
    }


    /*activationHandler = c => { 
        console.log(`${c} has been activated.`);
        console.log(this.state);
    }*/

   render(){
        console.log(this.state);
        return (
            <div >
                { Array.from(this.props.value).map((c, i) => 
                { this.state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} attempt={this.state.attempt}
                    activationHandler={this.activationHandler}>                    
                )
            </div>
        );
                }
