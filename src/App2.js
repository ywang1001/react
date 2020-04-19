import React, {Component} from 'react';

class App2 extends Component {
    constructor(props){
       super(props);
       this.state = {
           value:[]
       }
    }

    handleChange = (e) => {
        let item = e.target.value;
        console.log('tosubmit, ', e.target.value);
        let arr = this.state.value;
        console.log(arr);
       if(arr.indexOf(item) === -1) {
           arr.push(item);
           this.setState({
               ...this.state,
               value: arr
           })
       }else {
           arr = arr.filter((ele) => {
               return ele !== item;
           });
           this.setState({
               ...this.state,
               value: arr
           })
       }
        console.log('state after, ',this.state, '1st ele, ', this.state.value, 'length, ', this.state.value.length);
    }

    render(){
       let {value} = this.state; 
       console.log('v in component, ',value);
       return(
           <div>
               <label>
                   <input type = 'checkbox' value = 'apple' onChange = {this.handleChange}/>
                    apple
               </label>
               <label>
                    <input type = 'checkbox' value = 'banana' onChange = {this.handleChange}/>
                    banana
               </label>
               <label>
                   <input type = 'checkbox' value = 'pear' onChange = {this.handleChange}/>
                    pear 
               </label>

               <div>Selected: {value.join()}</div>
           </div>
       )
    }
}

export default App2;