import React, { Component } from 'react';
import Slider from './slider';
import './metronom.css';

class Metronom extends Component {
    constructor(props) {
        super(props);
        this.state = { shouldRun : false, interval : 1, value : 0, right : true  }
        this.animatedBox = React.createRef();
        this.VEL_X = 1;
    }
    render() { 
        return (  
        <div>
            {this.state.interval}
            {this.state.shouldRun ? "Running" : "Paused"}
            <Slider handleValueChange={this.handleValueChange}/>
            <input type="button" value={this.state.shouldRun ? "Stop" : "Start"} onClick={this.handleClick}/>
            <div className="animatedBox" ref={this.animatedBox}></div>
        </div>
        );
    }


    handleValueChange = (event) => {
        this.setState({interval : event.target.value})
    }

    handleClick = () => {
        var run = !this.state.shouldRun;
        this.setState({shouldRun : run}, this.moveBox);
    }

    moveBox = () => {
        var interval = (this.state.interval * 10 / this.VEL_X);
        var vel = this.state.right ? this.VEL_X : -this.VEL_X;
        this.animatedBox.current.style.transform = `translateX(${this.state.value + vel}px)`
        this.setState((prev, props) => ({value : prev.value + vel}));
        if(this.state.value >= 100 || this.state.value <= 0) {
            this.setState((prev, props) => ({right : !prev.right}))
        }

        if(this.state.shouldRun)
            setTimeout(this.moveBox, interval);

    }

    timerCallback = () => {
        if(this.state.shouldRun)
            this.startTimer();
    }
}
 
export default Metronom;