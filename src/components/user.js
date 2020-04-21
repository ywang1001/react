import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleDetail = (e) => {
        console.log('hahah,',this.props.user);
        this.props.history.push('/github/detail', this.props.user);
       // this.props.history.push('/github')
    }

    render(){
        const {user, index, history} = this.props;
        //console.log('user is, ', user);
        return(
           
                <tr scope = "row" key = {index}>
                    <td>{user.id}</td>
                    <td>{user.login}</td>
                    <td><img src = {user.avatar_url} height = '30px' width = '30px'/></td>
                    <td><button className = 'btn btn-primary' onClick = {this.handleDetail}>detail</button></td>
                </tr>
          
        )
    }
}

export default User;