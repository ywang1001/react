import React, {Component} from 'react';
import {connect} from 'react-redux';

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
        console.log(e.target.value);
        if(!arr.includes(e.target.value)) {
            this.setState({
                ...this.state,
                number: this.state.number + 1,
                arr: [...arr, e.target.value]
            });
        }else {
            let newArr = arr.filter(ele => ele !== e.target.value)
            this.setState({
               ...this.state,
               number: this.state.number - 1,
               arr: newArr
            })
        }
    }

    handleHome = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                Hello
                <div className = 'container'>
                    <div>{this.state.number}</div>
                    <div className = 'check'>
                        <input type = 'checkbox' onChange = {this.handleChange} value = '1'/>Class1
                        <input type = 'checkbox' onChange = {this.handleChange} value = '2'/>Class2
                        <input type = 'checkbox' onChange = {this.handleChange} value = '3'/>Class3
                    </div>
                </div>

                <button className = 'btn btn-primary' onClick = {this.handleHome}>Home</button>
            </div>
        )
    }
}

const mapStateToProps = state =>  {
    return{
       list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);