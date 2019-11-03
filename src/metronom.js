import React, { Component } from 'react';
import Slider from './slider';
import UIfx from 'uifx'
import metronomSound from './assets/metronom_sound.mp3'
import './metronom.css';

const sound = new UIfx(metronomSound);

class Metronom extends Component {
    constructor(props) {
        super(props);
        this.state = { shouldRun : false, interval : 1, value : 0, right : true  }
        this.animatedBox = React.createRef();
        this.VEL_X = 1;
    }
    render() { 
        return (  
        <div className="container metronom flex">
            <span className="badge badge-primary"> {this.state.interval} </span>
            <Slider handleValueChange={this.handleValueChange}/>
            <div className="boxContainer">
                <div className="animatedBox" ref={this.animatedBox}></div>
            </div>
            <input className="btn btn-primary" type="button" value={this.state.shouldRun ? "Stop" : "Start"} onClick={this.handleClick}/>            
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

        if(this.state.value > 100 || this.state.value < 0) {
            this.setState((prev, props) => ({right : !prev.right}))
            sound.play();
        }

        if(this.state.shouldRun)
            setTimeout(this.moveBox, interval);

    }
}
export default Metronom;

