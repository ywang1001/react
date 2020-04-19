import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from '../redux/action';
import User from './user';

class Github extends Component {

    componentDidMount(){
        this.props.getList();
    }

    handleBack = (e) => {
        this.props.history.push('/');
    }

    render(){
        const {list} = this.props;
        console.log('list in github component, ', list);
        return(
            <div>
                <h1>Github List</h1>
                <button className = 'btn btn-danger' onClick = {this.handleBack} >Home</button>
                <table className = 'table'>
                    <thead>
                         <tr>
                             <th scope = 'col'>ID</th>
                             <th scope = 'col'>username</th>
                             <th scope = 'col'>Img</th>
                             <th scope = 'col'>detail</th>
                         </tr>
                    </thead>
                    <tbody>
                           {
                            list && list.data.map((user, index) => {
                                return(
                                    <User user = {user} key = {index} history = {this.props.history}/>
                                )
                            })
                           }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
       getList: () => dispatch(actions.getList()),
       getUser: (login) => dispatch(actions.getUser(login))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);