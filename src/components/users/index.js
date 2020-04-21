import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/action';
import SSSList from './list';
import SSSUser from './user';

class UserList extends Component {
     constructor(props) {
         super(props);
         this.state = {

         }
     }

     componentDidMount(){
         this.props.getList();
     }

     handleBack = () => {
         this.props.history.push('/');
     }

     render(){
         const {list} = this.props;
         console.log('in sss, ', list);
         return(
             <div>
                 <h1>Social self service</h1>
                 <button onClick = {this.handleBack}>Home</button>
                 <div>

                 </div>
            </div>
         )
     }
}

const mapStateToProps = state => {
    return{
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getList: () => dispatch(actions.getList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);