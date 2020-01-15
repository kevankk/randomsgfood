import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {asian, atas, cheap} from './food.js';
import Blank from './imgs/Blank.jpg';
import Image from 'react-image';
import { findAllByAltText } from '@testing-library/react';


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

class Tab extends React.Component {
    renderSwitch(param){
        switch(param) {
            case 'all':
                return <ul className = 'tab'>
                        <li id = 'active'>All</li>
                        <li className='middleList' onClick = {this.props.changeTab2}>Atas</li>
                        <li onClick = {this.props.changeTabCheap}>Not so Atas</li>
                     </ul>;
            case 'atas':
                return <ul className = 'tab'>
                <li onClick = {this.props.changeTab}>All</li>
                <li className='middleList' id = 'active'>Atas</li>
                <li onClick = {this.props.changeTabCheap}>Not so Atas</li>
                </ul>;
            case 'cheap':
                return <ul className = 'tab'>
                <li onClick = {this.props.changeTab}>All</li>
                <li onClick = {this.props.changeTab2} className='middleList'>Atas</li>
                <li id = 'active'>Not so Atas</li>
                </ul>;
            default: 
            return <ul className = 'tab'>
                        <li id = 'active'>All</li>
                        <li className='middleList' onClick = {this.props.changeTab2}>Atas</li>
                        <li onClick = {this.props.changeTabCheap}>Not so Atas</li>
                     </ul>;
        } 
    }

    render(){
        return (
            <div>
            {this.renderSwitch(this.props.tabState)
            }
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
            repeated: [],
            tab: 'all',
            table: asian
        }
    }

    generateFood(table, random){
        const words = ['Why not have some ', 'How about ', 'Try ', 'Maybe you can consider ', 'Could you be craving ', 'Maybe you would like ']
        const word = Math.floor(Math.random() * words.length);
        return this.setState({
            random: random,
            food: table[random].name, 
            img: table[random].img,
            word: words[word],
            question: '?'
            })
    }

    resetState() {
        const sentAll = ['Hungry hungry very very...', 'A hungry man is an angry man', 'I can eat a cow right now...', 'There is no love sincerer than the love of food.']
        const randSentAll = sentAll[Math.floor(Math.random() * sentAll.length)] 
        this.setState({
            random: '',
            food: '',
            img: Blank,
            word: randSentAll,
            question: '',
            end: false,
            repeated: [],
            tab: 'all',
            table: asian
        })
    }

    changeTab1(){
        const sentAll = ['Hungry hungry very very...', 'A hungry man is an angry man...', 'I can eat a cow right now...', 'There is no love sincerer than the love of food.']
        const randSentAll = sentAll[Math.floor(Math.random() * sentAll.length)] 
        this.setState({
            random: '',
            food: '',
            img: Blank,
            word: randSentAll,
            question: '',
            end: false,
            repeated: [],
            tab: 'all',
            table: asian
        })
    }

    changeTab2(){
        const fancyAll = ['Oooh.. Fancy Fancy', 'Earn Money Spend Money', 'A little splurge is alright once in a while..', 'Let food be thy medicine and medicine be thy food.', 'What is money if you don\'t spend it on food?', 'Good Food Incoming...']
        const randFancyAll = fancyAll[Math.floor(Math.random() * fancyAll.length)]
        this.setState({
            random: '',
            food: '',
            img: Blank,
            word: randFancyAll,
            question: '',
            end: false,
            repeated: [],
            tab: 'atas',
            table: atas
        })
    }

    changeTabCheap(){
        const sentAll = ['Hungry hungry very very...', 'A hungry man is an Angry Man...', 'I can eat a cow right now...', 'Food does not need to be expensive to be good!']
        const randSentAll = sentAll[Math.floor(Math.random() * sentAll.length)];
        this.setState({
            random: '',
            food: '',
            img: Blank,
            word: randSentAll,
            question: '',
            end: false,
            repeated: [],
            tab: 'cheap',
            table: cheap
        }) 
    }

    randomise(){
        let random = Math.floor(Math.random() * this.state.table.length)
        this.state.repeated.push(this.state.random);
        if (this.state.repeated.length === this.state.table.length){
            this.setState({end: true})
        }

        if(!this.state.end){
        while (this.state.repeated.includes(random)){
            random = Math.floor(Math.random() * this.state.table.length)
        }}
        return random;
    }

    render(){
        return (
            <div className = 'foodType'>
                <Food />
                <Tab changeTab = {() => this.changeTab1()} changeTab2= {()=> this.changeTab2()} changeTabCheap = {() => this.changeTabCheap()}tabState = {this.state.tab}/>
                <p className = 'foodName'>{this.state.word + this.state.food + this.state.question}</p>
                <div className = 'foodWrapper'>
                <Image src = {this.state.img} className ='foodWrapper' />
                </div>
                <Button onClick={() => {
                    this.generateFood(this.state.table, this.randomise())}} 
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