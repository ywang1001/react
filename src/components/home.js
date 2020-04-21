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

   handleSSS = (e) => {
       this.props.history.push('/SocialSelfService')
   }

   handleCCC = () => {
      this.props.history.push('/country');
   }

   render(){
       return(
           <div>
               <h1>Home</h1>
              
               <div>
                   Github:
                   <button className = 'btn btn-danger' onClick = {this.handleGit}>git</button>
                   Social Self Service:
                   <button className = 'btn btn-danger' onClick = {this.handleSSS}>social self service</button>
                   Lover
                   <button className = 'btn btn-danger' onClick = {this.handleCCC}>Lover</button>
               </div>
           </div>
       )
   }
}

export default HomePage;