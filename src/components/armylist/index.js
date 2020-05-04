import React, { useEffect } from 'react';
import * as actions from '../../redux/action';
import {connect} from 'react-redux';
import { render } from '@testing-library/react';

function ArmyList(props){
   useEffect(
      props.getData()
   , [])

   const {list} = this.props;
   console.log('list is, ', list);
   
   return(
       <div>
           <h3>List</h3>
           {
             
               list.list.map((user, index) => {
                   return(
                      <ul>   
                       <li>{user.name}</li>
                       <li>{user.name}</li>
                       <li>{user.name}</li>
                     </ul>
                   )
               })
           
           }
       </div>
   )
}

const mapStateToProps = state => {
    return{
       list: state.armys
    }
}

const mapDispatchToProps = dispatch => {
    return{
       getData: () => dispatch(actions.getCurrentPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmyList);