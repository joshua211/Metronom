import React, { Component } from 'react';
import Slider from './slider';
import { Observable, interval, Subject} from "rxjs";

class Metronom extends Component {
    constructor(props) {
        super(props);
        this.state = { shouldRun : false, interval : 6  }
    }
    render() { 
        return (  
        <div>
            {this.state.interval}
            {this.state.shouldRun ? "Running" : "Paused"}
            <Slider handleValueChange={this.handleValueChange}/>
            <input type="button" value="Start"/>
        </div>
        );
    }

    handleClick = () => {
        this.setState({shouldRun : !this.state.shouldRun})
    }

    handleValueChange = (event) => {
        this.setState({interval : event.target.value})
    }
}
 
export default Metronom;