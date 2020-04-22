import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
           number: 0,
           arr:[]
        }
    }

    handleChange = (e) => {
        let {number, arr} = this.state;
        if(!arr.has(e.target.value)) {
            this.setState({
                ...this.state,
                number: this.state.number + 1,
                arr: [...arr, e.target.value]
            });
        }else {
            this.setState({
               ...this.state,
               number: this.state.number - 1,
               arr: arr.filter((ele) => {
                   ele !== e.target.value
               })
            })
        }
    }

    render(){
        return(
            <div>
                <div className = 'container'>
                    <div>{this.state.number}</div>
                    <div className = 'check'>
                        <input type = 'checkbox' onChange = {this.handleChange} value = '1'>Class1</input>
                        <input type = 'checkbox' onChange = {this.handleChange} value = '2'>Class2</input>
                        <input type = 'checkbox' onChange = {this.handleChange} value = '3'>Class3</input>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckBox;