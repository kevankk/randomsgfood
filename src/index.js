import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Asian from './food.js'
import Blank from './imgs/Blank.jpg'


class Header extends React.Component {
    render() {
        return (
            <h1 className = 'heading'>Welcome to the Singapore Random Food Generator!</h1>
        )
    }
}

class Img extends React.Component{
    render(){
        return (
            <div className = 'background'>
            <div className = 'header'>
            <Header />
            </div>
            </div>
        )
    }
}

class Food extends React.Component{
    render(){
        return (
            <div className="wrapper">
            <Img />
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return ( 
            <div>
            {this.props.hasEnded === false ? <button className="button" onClick = {this.props.onClick}>Generate Food</button> :
            <button className="buttonEnded" onClick = {this.props.onClick2}>Click to Reset!</button>}
            </div>
        )
    }
}

class FoodType extends React.Component {
    constructor(props){
        super(props);
        this.generateFood = this.generateFood.bind(this);
        this.state = {
            random: '',
            food: '',
            img: Blank,
            word: 'Eat what?',
            question: '',
            end: false,
            repeated: []
        }
    }

    generateFood(Asian, random){
        const words = ['Why not have some ', 'How about ', 'Try ', 'Maybe you can consider ', 'Could you be craving ', 'Maybe you would like ']
        const word = Math.floor(Math.random() * words.length);
        return this.setState({
            random: random,
            food: Asian[random].name, 
            img: Asian[random].img,
            word: words[word],
            question: '?'
            })
    }

    resetState(){
        this.setState({
            random: '',
            food: '',
            img: Blank,
            word: 'Hungry hungry very very...',
            question: '',
            end: false,
            repeated: []
    })
}

    render(){
        let random = Math.floor(Math.random() * Asian.length)
        this.state.repeated.push(this.state.random);
        if (this.state.repeated.length === Asian.length){
            this.setState({end: true})
        }

        if(!this.state.end){
        while (this.state.repeated.includes(random)){
            random = Math.floor(Math.random() * Asian.length)
        }}

        return (
            <div className = 'foodType'>
                <Food />
                <p className = 'foodName'>{this.state.word + this.state.food + this.state.question}</p>
                <img src = {this.state.img} alt = 'food' className = 'foodWrapper'></img>
                <Button onClick={() => this.generateFood(Asian, random)} 
                    hasEnded={this.state.end} 
                    onClick2={() => this.resetState()
                    }/>
                
            </div>
        )
    }
}

ReactDOM.render(
    <FoodType />,
    document.getElementById('root')
);