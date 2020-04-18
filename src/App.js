import React, {Component} from 'react';
import { setTimeout } from 'timers';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        number: 0,
        start: 'start',
        intervalId: 0
      }
    }

    handleAdd = () => {
      if(this.state.start === 'stop') {
        this.setState({start: 'start'});
        this.stopTimer();
      }else {
        this.startTimer();
      }
    }

    stopTimer = () => {
      clearInterval(this.state.intervalId)
    }

    startTimer = () => {
      this.setState({start: 'stop'});
      let id = setInterval(()=>{
        this.setState({number: this.state.number+1})
      },1000);
      this.setState({intervalId: id});
    }

    resetTimer = () => {
      this.setState({number: 0});
    }
    
    render(){
        console.log(this.state.number, ',', this.state.flag);
        return(
          <div>
               <div>{this.state.number}</div>
               <div className = 'wrapper'>
                    <button onClick = {this.handleAdd}>{this.state.start}</button>
                    <button onClick = {this.resetTimer}>clear</button>
               </div>
          </div>
        )
      
    }
}


export default App;