import React, {Component} from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        
    }

    handleBack = (e) => {
        this.props.history.push('/github');
    }

    render(){
        const user = this.props.location.state;
        console.log('user in detail, ', user);
        return(
            <div>
                 <h1>Candidate Detail</h1>
                 <button className = 'btn btn-primary' onClick = {this.handleBack}>back</button>
                 <div className = 'container'>
                     <img src = {user.avatar_url} width = '500px' height = '500px'/>
                     <h2>{user.id}</h2>
                     <h2>{user.login}</h2>
                 </div>
            </div>
        )
    }
}

export default Detail;