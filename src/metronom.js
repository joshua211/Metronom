import React, { Component } from 'react';
import Slider from './slider';
import posed from 'react-pose';
import './metronom.css';

class Metronom extends Component {
    constructor(props) {
        super(props);
        this.state = { shouldRun : false, interval : 6, value : 0, right : false  }
    }
    render() { 
        return (  
        <div>
            {this.state.interval}
            {this.state.shouldRun ? "Running" : "Paused"}
            <Slider handleValueChange={this.handleValueChange}/>
            <input type="button" value={this.state.shouldRun ? "Stop" : "Start"} onClick={this.handleClick}/>
            <Box className="animatedBox" pose={this.state.right ? "right" : "left"} duration={this.state.interval}/>
        </div>
        );
    }


    handleValueChange = (event) => {
        this.setState({interval : event.target.value})
    }

    handleClick = () => {
        var shouldRun = !this.state.shouldRun;
        this.setState({shouldRun : shouldRun})
        if(shouldRun)
            this.startTimer();
    }

    startTimer = () => {
        console.log("timer started");
        var right = !this.state.right;
        this.setState({right : right});
        setTimeout(this.timerCallback, this.state.interval * 1000);
    }

    timerCallback = () => {
        if(this.state.shouldRun)
            this.startTimer();
    }
}
 
export default Metronom;

const Box = posed.div({
    left: { 
        x : 0,
        transition : ({duration}) => ({duration: duration*1000})
    },
    right: {
        x : 100,
        transition : ({duration}) => ({duration: duration*1000})
    }
})