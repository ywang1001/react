import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           time: 0
        }
    }

     helper = () =>{
        this.setState({
            ...this.state,
            time: this.state.time+1})
    }

    render(){
       let myInterval;
       return(
          <div>
           <h1>{this.state.time}</h1>
           {
              //  myInterval = setInterval(helper, 1000)
           }
           <button onClick = {()=> clearInterval(myInterval)}>clear</button>
        </div>
       )
    }
}

export default Timer;