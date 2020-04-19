import React, {Component} from 'react';

class HomePage extends Component {
   constructor(props) {
       super(props);
       this.state = {

       }
   }

   handleGit = (e) => {
       this.props.history.push('/github');
   }

   render(){
       return(
           <div>
               <h1>Home</h1>

               <div>
                   Github:
                   <button className = 'btn btn-danger' onClick = {this.handleGit}>git</button>
               </div>
           </div>
       )
   }
}

export default HomePage;