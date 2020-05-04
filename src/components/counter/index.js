import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/action/index'

class Counter extends Component {
   constructor(props) {
       super(props);
       this.state = {

       }
   }

   handleAdd = () => {
      this.props.add();
   }

   handleSub = () => {
     this.props.sub();
   }

   render(){
       console.log(this.props.count.number);
       return(
           <div>
               <h1>{this.props.count.number}</h1>
               <div>
                <button onClick = {this.handleAdd}>加</button>
                <button onClick = {this.handleSub}>减</button>
                </div>
           </div>
       )
   }
}

const mapStateToProps = state => {
   return{
       count: state.counter
   }
}

const mapDispatchToProps = dispatch => {
    return{
     add: () => dispatch(actions.AddNumber()),
     sub: () => dispatch(actions.SubNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

